import { Link, useLocation } from "react-router-dom";
import { format } from "date-fns";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { useWpContent } from "@/context/WpContentContext";
import { htmlToText, normalizePath, truncateText, WpCategory, WpItem, wpLinkToPath } from "@/lib/wp";
import heroMedical from "@/assets/hero-medical.jpg";
import NotFound from "./NotFound";

const LoadingState = () => (
  <section className="section-container py-24">
    <div className="surface-card p-10 text-center">
      <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Loading</div>
      <div className="mt-4 text-2xl font-display font-semibold text-foreground">
        Loading demo content...
      </div>
    </div>
  </section>
);

const PageHero = ({
  title,
  subtitle,
  image,
  imageAlt,
  label,
  meta,
}: {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
  label?: string;
  meta?: string;
}) => (
  <section className="section-container pt-12 pb-10">
    <div className="surface-card p-8 md:p-12 lg:p-14 relative overflow-hidden">
      <div className="absolute -top-24 -right-16 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center relative z-10">
        <div>
          {label && <span className="pill">{label}</span>}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mt-6 mb-5"
          >
            {title}
          </motion.h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
          {meta && (
            <div className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {meta}
            </div>
          )}
        </div>
        <div className="rounded-[1.6rem] border border-border bg-white/70 p-4">
          <div className="aspect-[4/3] rounded-[1.25rem] overflow-hidden bg-secondary relative">
            {image ? (
              <img src={image} alt={imageAlt || title} className="w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 pattern-grid" />
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="flex flex-col gap-3 mb-8">
    <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground">{title}</h2>
    {subtitle && <p className="text-muted-foreground max-w-2xl">{subtitle}</p>}
  </div>
);

const MetricsStrip = ({
  items,
}: {
  items: Array<{ label: string; value: string }>;
}) => (
  <section className="section-container pb-10">
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <div key={item.label} className="surface-card p-5">
          <div className="text-2xl font-semibold text-foreground">{item.value}</div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-2">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  </section>
);

const ContentSection = ({ html }: { html: string }) => (
  <div className="surface-card p-7 md:p-10 lg:p-12">
    <div
      className="prose prose-lg max-w-none prose-headings:font-display prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-blockquote:border-primary/30 prose-img:rounded-2xl"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </div>
);

const SidebarCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="surface-card p-6">
    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">{title}</div>
    {children}
  </div>
);

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&[^;]+;/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const injectHeadingIds = (html: string) => {
  const headings: Array<{ id: string; text: string }> = [];
  let index = 0;
  const updated = html.replace(/<h([2-3])([^>]*)>([\s\S]*?)<\/h\1>/gi, (match, level, attrs, inner) => {
    const text = htmlToText(inner);
    if (!text) return match;
    const id = `${slugify(text)}-${index++}`;
    headings.push({ id, text });
    if (/id=/.test(attrs)) {
      return match;
    }
    return `<h${level} id="${id}"${attrs}>${inner}</h${level}>`;
  });
  return { html: updated, headings };
};

const ArchiveGrid = ({ title, items }: { title?: string; items: WpItem[] }) => (
  <section className="section-container pb-16">
    {title ? <SectionHeader title={title} /> : null}
    {items.length === 0 ? (
      <div className="surface-card p-8 text-muted-foreground">
        Content will appear here once available.
      </div>
    ) : (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link key={item.id} to={item.path} className="surface-card p-5">
            <div className="aspect-[4/3] rounded-[1.2rem] overflow-hidden bg-secondary mb-5">
              {item.featuredImage ? (
                <img src={item.featuredImage} alt={item.featuredAlt || item.titleText} className="w-full h-full object-cover" />
              ) : (
                <img src={heroMedical} alt="IPMA placeholder" className="w-full h-full object-cover" />
              )}
            </div>
            {item.date && (
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                {format(new Date(item.date), "MMMM d, yyyy")}
              </div>
            )}
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              {item.titleText}
            </h3>
            <p className="text-sm text-muted-foreground">
              {truncateText(item.excerptText || "Explore the full details.")}
            </p>
          </Link>
        ))}
      </div>
    )}
  </section>
);

const TaxonomyGrid = ({
  title,
  items,
}: {
  title: string;
  items: WpCategory[];
}) => (
  <section className="section-container pb-16">
    <SectionHeader title={title} />
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Link key={item.id} to={wpLinkToPath(item.link)} className="surface-card p-6">
          <div className="aspect-[4/3] rounded-[1.2rem] overflow-hidden bg-secondary mb-5">
            <img src={heroMedical} alt="IPMA placeholder" className="w-full h-full object-cover" />
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
            {item.taxonomy === "product_cat" ? "Product Category" : "Category"}
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground mb-3">{item.name}</h3>
          <p className="text-sm text-muted-foreground">
            {truncateText(item.description || "View related resources and updates.")}
          </p>
        </Link>
      ))}
    </div>
  </section>
);

const ChildPagesGrid = ({ title, pages }: { title: string; pages: WpItem[] }) => {
  if (pages.length === 0) return null;
  return (
    <section className="section-container pb-16">
      <SectionHeader title={title} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page) => (
          <Link key={page.id} to={page.path} className="surface-card p-6">
            <div className="aspect-[4/3] rounded-[1.2rem] overflow-hidden bg-secondary mb-5">
              {page.featuredImage ? (
                <img src={page.featuredImage} alt={page.featuredAlt || page.titleText} className="w-full h-full object-cover" />
              ) : (
                <img src={heroMedical} alt="IPMA placeholder" className="w-full h-full object-cover" />
              )}
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Page</div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">{page.titleText}</h3>
            <p className="text-sm text-muted-foreground">
              {truncateText(page.excerptText || "Explore details on this topic.")}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

const ResourceExplorer = ({
  search,
  onSearchChange,
  sort,
  onSortChange,
  categories,
  activeCategoryId,
  onCategoryChange,
  resultCount,
  categoryCounts,
  items,
}: {
  search: string;
  onSearchChange: (value: string) => void;
  sort: string;
  onSortChange: (value: string) => void;
  categories: WpCategory[];
  activeCategoryId?: number;
  onCategoryChange: (id?: number) => void;
  resultCount: number;
  categoryCounts: Record<number, number>;
  items: WpItem[];
}) => (
  <section className="section-container pb-16">
    <div className="grid lg:grid-cols-[280px_1fr] gap-8">
      <aside className="surface-card p-6 lg:sticky lg:top-24 h-fit">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
          Filters
        </div>
        <div className="space-y-4">
          <input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search research papers"
            className="w-full rounded-full border border-border bg-white px-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
          <button
            type="button"
            onClick={() => {
              onSearchChange("");
              onCategoryChange(undefined);
            }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
          >
            Reset filters
          </button>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Sort</div>
          <select
            value={sort}
            onChange={(event) => onSortChange(event.target.value)}
            className="w-full rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-foreground"
          >
            <option value="latest">Latest</option>
            <option value="oldest">Oldest</option>
            <option value="az">A-Z</option>
          </select>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground pt-4">
            Topics
          </div>
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => onCategoryChange(undefined)}
              className={`filter-chip w-full justify-between ${activeCategoryId ? "" : "active"}`}
            >
              <span>All topics</span>
              <span className="text-xs text-muted-foreground">{resultCount}</span>
            </button>
            {categories.map((category) => (
              <button
                type="button"
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`filter-chip w-full justify-between ${activeCategoryId === category.id ? "active" : ""
                  }`}
              >
                <span>{category.name}</span>
                <span className="text-xs text-muted-foreground">{categoryCounts[category.id] || 0}</span>
              </button>
            ))}
          </div>
        </div>
      </aside>
      <div>
        <SectionHeader title="Latest research" subtitle={`${resultCount} results`} />
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link key={item.id} to={item.path} className="surface-card p-5">
              <div className="aspect-[4/3] rounded-[1.2rem] overflow-hidden bg-secondary mb-5">
                {item.featuredImage ? (
                  <img src={item.featuredImage} alt={item.featuredAlt || item.titleText} className="w-full h-full object-cover" />
                ) : (
                  <img src={heroMedical} alt="IPMA placeholder" className="w-full h-full object-cover" />
                )}
              </div>
              {item.date && (
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  {format(new Date(item.date), "MMMM d, yyyy")}
                </div>
              )}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {item.titleText}
              </h3>
              <p className="text-sm text-muted-foreground">
                {truncateText(item.excerptText || "Explore the full details.")}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CTASection = ({
  title,
  subtitle,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  subtitle: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) => (
  <section className="section-container pb-16">
    <div className="surface-card p-8 md:p-12 lg:p-14 relative overflow-hidden">
      <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
            {title}
          </h3>
          <p className="text-muted-foreground max-w-2xl">{subtitle}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to={primaryHref} className="btn-primary">
            {primaryLabel}
          </Link>
          <Link to={secondaryHref} className="btn-outline">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </div>
  </section>
);

const WpContentPage = () => {
  const location = useLocation();
  const path = normalizePath(location.pathname);
  const {
    pages,
    posts,
    products,
    categories,
    productCategories,
    pagesByPath,
    postsByPath,
    productsByPath,
    categoriesByPath,
    productCategoriesByPath,
    categoriesById,
    productCategoriesById,
    isLoading,
    error,
  } = useWpContent();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("latest");
  const [activeCategoryId, setActiveCategoryId] = useState<number | undefined>(undefined);

  const page = pagesByPath[path];
  const post = postsByPath[path];
  const product = productsByPath[path];
  const category = categoriesByPath[path];
  const productCategory = productCategoriesByPath[path];

  const isResearchHub =
    page?.slug === "resources" || page?.slug === "research-papers-and-articles";

  const relatedPosts = isResearchHub ? posts : [];
  const relatedProducts = page?.slug === "products" || page?.slug === "shop" ? products : [];

  const filteredPosts = useMemo(() => {
    let result = relatedPosts;
    if (activeCategoryId) {
      result = result.filter((item) => item.categories?.includes(activeCategoryId));
    }
    if (search.trim()) {
      const query = search.trim().toLowerCase();
      result = result.filter(
        (item) =>
          item.titleText.toLowerCase().includes(query) ||
          item.excerptText.toLowerCase().includes(query)
      );
    }
    if (sort === "latest") {
      result = [...result].sort((a, b) => (b.date || "").localeCompare(a.date || ""));
    } else if (sort === "oldest") {
      result = [...result].sort((a, b) => (a.date || "").localeCompare(b.date || ""));
    } else {
      result = [...result].sort((a, b) => a.titleText.localeCompare(b.titleText));
    }
    return result;
  }, [activeCategoryId, relatedPosts, search, sort]);

  const categoryCounts = useMemo(() => {
    const counts: Record<number, number> = {};
    relatedPosts.forEach((item) => {
      item.categories?.forEach((id) => {
        counts[id] = (counts[id] || 0) + 1;
      });
    });
    return counts;
  }, [relatedPosts]);

  const resourceLinks = useMemo(() => {
    if (!page) return [];
    return pages
      .filter((item) => item.path.startsWith("/resources/") && item.path !== "/resources")
      .slice(0, 4);
  }, [page, pages]);

  if (isLoading) return <LoadingState />;
  if (error) {
    return (
      <section className="section-container py-24">
        <div className="surface-card p-10 text-center">
          <div className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Error</div>
          <div className="mt-4 text-2xl font-display font-semibold text-foreground">
            {error}
          </div>
        </div>
      </section>
    );
  }

  if (page) {
    const childPages = pages.filter(
      (item) => item.path !== page.path && item.path.startsWith(`${page.path}/`)
    );
    const childPageTitle = page.slug === "treatments" ? "Related treatments" : "Explore related pages";
    const preferExcerptOnly =
      page.slug === "resources" || page.slug === "research-papers-and-articles";
    const pageHtml = preferExcerptOnly
      ? page.excerptText
        ? `<p>${page.excerptText}</p>`
        : ""
      : page.contentHtml || (page.excerptText ? `<p>${page.excerptText}</p>` : "");
    const enrichedContent = injectHeadingIds(pageHtml);
    const pageHeadings = enrichedContent.headings;
    const metrics =
      page.slug === "resources"
        ? [
          { label: "Research papers", value: `${posts.length}` },
          { label: "Resource categories", value: `${categories.length}` },
          { label: "Videos + FAQs", value: `${childPages.length}` },
        ]
        : page.slug === "treatments"
          ? [
            { label: "Treatments", value: `${childPages.length}` },
            { label: "Techniques", value: "Evidence-based" },
            { label: "Clinician focus", value: "Australia-wide" },
          ]
          : page.slug === "products" || page.slug === "shop"
            ? [
              { label: "Products", value: `${products.length}` },
              { label: "Categories", value: `${productCategories.length}` },
              { label: "Clinical grade", value: "Verified" },
            ]
            : [
              { label: "Updated", value: page.date ? format(new Date(page.date), "MMM yyyy") : "Recently" },
              { label: "Related pages", value: `${childPages.length}` },
              { label: "IPMA", value: "Australia" },
            ];

    return (
      <>
        <PageHero
          title={page.titleText}
          subtitle={truncateText(page.excerptText || "Explore the latest information from IPMA Australia.")}
          image={page.featuredImage || heroMedical}
          imageAlt={page.featuredAlt}
          label="IPMA Australia"
        />
        <MetricsStrip items={metrics} />
        {isResearchHub ? (
          <>
            {pageHtml ? (
              <section className="section-container pb-10">
                <div className="grid lg:grid-cols-[1fr_320px] gap-8">
                  <ContentSection html={pageHtml} />
                  <aside className="space-y-6 lg:sticky lg:top-24">
                    <SidebarCard title="Resource quick links">
                      <div className="space-y-3">
                        {resourceLinks.map((item) => (
                          <Link
                            key={item.id}
                            to={item.path}
                            className="block text-sm font-semibold text-foreground hover:text-primary"
                          >
                            {item.titleText}
                          </Link>
                        ))}
                      </div>
                    </SidebarCard>
                    <SidebarCard title="Need help?">
                      <p className="text-sm text-muted-foreground mb-4">
                        Reach out to the IPMA team for support, access, or guidance.
                      </p>
                      <Link to="/contact" className="btn-primary w-full justify-center">
                        Contact IPMA
                      </Link>
                    </SidebarCard>
                  </aside>
                </div>
              </section>
            ) : null}
            <ResourceExplorer
              search={search}
              onSearchChange={setSearch}
              sort={sort}
              onSortChange={setSort}
              categories={categories}
              activeCategoryId={activeCategoryId}
              onCategoryChange={setActiveCategoryId}
              resultCount={filteredPosts.length}
              categoryCounts={categoryCounts}
              items={filteredPosts}
            />
          </>
        ) : (
          <>
            {pageHtml ? (
              <section className="section-container pb-16">
                <div className="grid lg:grid-cols-[1fr_320px] gap-8">
                  <ContentSection html={enrichedContent.html} />
                  <aside className="space-y-6 lg:sticky lg:top-24">
                    {pageHeadings.length > 0 && (
                      <SidebarCard title="On this page">
                        <div className="space-y-2">
                          {pageHeadings.slice(0, 8).map((heading) => (
                            <a
                              key={heading.id}
                              href={`#${heading.id}`}
                              className="block text-sm text-muted-foreground hover:text-primary"
                            >
                              {heading.text}
                            </a>
                          ))}
                        </div>
                      </SidebarCard>
                    )}
                    {childPages.length > 0 && (
                      <SidebarCard title="Related pages">
                        <div className="space-y-2">
                          {childPages.slice(0, 6).map((item) => (
                            <Link
                              key={item.id}
                              to={item.path}
                              className="block text-sm font-semibold text-foreground hover:text-primary"
                            >
                              {item.titleText}
                            </Link>
                          ))}
                        </div>
                      </SidebarCard>
                    )}
                    <SidebarCard title="Contact">
                      <p className="text-sm text-muted-foreground mb-4">
                        Questions about this topic? Our team can help.
                      </p>
                      <Link to="/contact" className="btn-primary w-full justify-center">
                        Contact IPMA
                      </Link>
                    </SidebarCard>
                  </aside>
                </div>
              </section>
            ) : null}
            <ChildPagesGrid title={childPageTitle} pages={childPages} />
          </>
        )}
        {page.slug === "resources" && <TaxonomyGrid title="Resource categories" items={categories} />}
        {(page.slug === "products" || page.slug === "shop") && (
          <TaxonomyGrid title="Product categories" items={productCategories} />
        )}
        {relatedPosts.length > 0 && (
          <ArchiveGrid title="Latest research and articles" items={filteredPosts} />
        )}
        {relatedProducts.length > 0 && (
          <ArchiveGrid title="Featured products" items={relatedProducts} />
        )}
        <CTASection
          title="Need more information?"
          subtitle="Talk with our team about workshops, products, or clinical training opportunities."
          primaryHref="/contact"
          primaryLabel="Contact IPMA"
          secondaryHref="/registration"
          secondaryLabel="Register interest"
        />
      </>
    );
  }

  if (post) {
    const postCategories =
      post.categories?.map((id) => categoriesById[id]).filter(Boolean) || [];
    const relatedPosts = posts
      .filter((item) => item.id !== post.id && item.categories?.some((id) => post.categories?.includes(id)))
      .slice(0, 3);
    const postContent = injectHeadingIds(
      post.contentHtml || `<p>${post.excerptText || "Content will be available soon."}</p>`
    );
    return (
      <>
        <PageHero
          title={post.titleText}
          subtitle={truncateText(post.excerptText || "Research and clinical updates from IPMA.")}
          image={post.featuredImage || heroMedical}
          imageAlt={post.featuredAlt}
          label="Research"
          meta={post.date ? `Published ${format(new Date(post.date), "MMMM d, yyyy")}` : undefined}
        />
        <MetricsStrip
          items={[
            { label: "Category", value: postCategories[0]?.name || "Research" },
            { label: "Reading time", value: "5 min" },
            { label: "Evidence", value: "Peer reviewed" },
          ]}
        />
        <section className="section-container pb-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-8">
            <ContentSection html={postContent.html} />
            <aside className="space-y-6 lg:sticky lg:top-24">
              {postContent.headings.length > 0 && (
                <SidebarCard title="On this page">
                  <div className="space-y-2">
                    {postContent.headings.slice(0, 10).map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className="block text-sm text-muted-foreground hover:text-primary"
                      >
                        {heading.text}
                      </a>
                    ))}
                  </div>
                </SidebarCard>
              )}
              {postCategories.length > 0 && (
                <SidebarCard title="Topics">
                  <div className="flex flex-wrap gap-2">
                    {postCategories.map((category) => (
                      <Link key={category.id} to={wpLinkToPath(category.link)} className="pill">
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </SidebarCard>
              )}
              <SidebarCard title="Need help?">
                <p className="text-sm text-muted-foreground mb-4">
                  Reach out to the IPMA team for clinical resources or technical guidance.
                </p>
                <Link to="/contact" className="btn-primary w-full justify-center">
                  Contact IPMA
                </Link>
              </SidebarCard>
            </aside>
          </div>
        </section>
        {relatedPosts.length > 0 && (
          <ArchiveGrid title="Related research" items={relatedPosts} />
        )}
        <CTASection
          title="Explore more research"
          subtitle="Browse the full library of IPMA clinical studies, articles, and presentations."
          primaryHref="/resources/research-papers-and-articles"
          primaryLabel="View all research"
          secondaryHref="/contact"
          secondaryLabel="Ask a question"
        />
      </>
    );
  }

  if (product) {
    const productCats =
      product.product_cat?.map((id) => productCategoriesById[id]).filter(Boolean) || [];
    const relatedProducts = products
      .filter((item) => item.id !== product.id && item.product_cat?.some((id) => product.product_cat?.includes(id)))
      .slice(0, 3);
    const productContent = injectHeadingIds(
      product.contentHtml || `<p>${product.excerptText || "Product details coming soon."}</p>`
    );
    return (
      <>
        <PageHero
          title={product.titleText}
          subtitle={truncateText(product.excerptText || "Professional equipment for interventional care.")}
          image={product.featuredImage || heroMedical}
          imageAlt={product.featuredAlt}
          label="Product"
        />
        <MetricsStrip
          items={[
            { label: "Category", value: productCats[0]?.name || "Clinical product" },
            { label: "Availability", value: "In stock" },
            { label: "Support", value: "IPMA team" },
          ]}
        />
        <section className="section-container pb-16">
          <div className="grid lg:grid-cols-[1fr_320px] gap-8">
            <ContentSection html={productContent.html} />
            <aside className="space-y-6 lg:sticky lg:top-24">
              {productContent.headings.length > 0 && (
                <SidebarCard title="On this page">
                  <div className="space-y-2">
                    {productContent.headings.slice(0, 10).map((heading) => (
                      <a
                        key={heading.id}
                        href={`#${heading.id}`}
                        className="block text-sm text-muted-foreground hover:text-primary"
                      >
                        {heading.text}
                      </a>
                    ))}
                  </div>
                </SidebarCard>
              )}
              {productCats.length > 0 && (
                <SidebarCard title="Categories">
                  <div className="flex flex-wrap gap-2">
                    {productCats.map((category) => (
                      <Link key={category.id} to={wpLinkToPath(category.link)} className="pill">
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </SidebarCard>
              )}
              <SidebarCard title="Request details">
                <p className="text-sm text-muted-foreground mb-4">
                  Need pricing, specifications, or a demo? We can help.
                </p>
                <Link to="/contact" className="btn-primary w-full justify-center">
                  Request a quote
                </Link>
              </SidebarCard>
            </aside>
          </div>
        </section>
        {relatedProducts.length > 0 && (
          <ArchiveGrid title="Related products" items={relatedProducts} />
        )}
        <CTASection
          title="Need pricing or technical details?"
          subtitle="Our team can help you select the right equipment for your practice."
          primaryHref="/contact"
          primaryLabel="Contact sales"
          secondaryHref="/technologies"
          secondaryLabel="Browse products"
        />
      </>
    );
  }

  if (category) {
    const categoryPosts = posts.filter((item) => item.categories?.includes(category.id));
    return (
      <>
        <PageHero
          title={category.name}
          subtitle={truncateText(category.description || "Research and updates from this category.")}
          label="Research category"
        />
        <MetricsStrip
          items={[
            { label: "Total papers", value: `${categoryPosts.length}` },
            { label: "Focus", value: "Clinical research" },
            { label: "Updated", value: "Regularly" },
          ]}
        />
        <ArchiveGrid title="Research in this category" items={categoryPosts} />
        <CTASection
          title="Want the full research library?"
          subtitle="Explore the entire IPMA database or get in touch with our team."
          primaryHref="/resources"
          primaryLabel="Back to resources"
          secondaryHref="/contact"
          secondaryLabel="Contact us"
        />
      </>
    );
  }

  if (productCategory) {
    const categoryProducts = products.filter((item) => item.product_cat?.includes(productCategory.id));
    return (
      <>
        <PageHero
          title={productCategory.name}
          subtitle={truncateText(productCategory.description || "Products curated for this specialty.")}
          label="Product category"
        />
        <MetricsStrip
          items={[
            { label: "Total products", value: `${categoryProducts.length}` },
            { label: "Support", value: "IPMA team" },
            { label: "Clinical use", value: "Verified" },
          ]}
        />
        <ArchiveGrid title="Products in this category" items={categoryProducts} />
        <CTASection
          title="Need a custom recommendation?"
          subtitle="Tell us about your practice and we will match the right tools."
          primaryHref="/contact"
          primaryLabel="Get recommendations"
          secondaryHref="/technologies"
          secondaryLabel="Browse all products"
        />
      </>
    );
  }

  return <NotFound />;
};

export default WpContentPage;
