import { createContext, useContext, useMemo } from "react";
import { WpCategory, WpItem, WpBaseItem, toWpItem, wpLinkToPath } from "@/lib/wp";
import pagesData from "@/data/wp-pages.json";
import postsData from "@/data/wp-posts.json";
import productsData from "@/data/wp-products.json";
import categoriesData from "@/data/wp-categories.json";
import productCategoriesData from "@/data/wp-product-categories.json";

type WpContentState = {
  pages: WpItem[];
  posts: WpItem[];
  products: WpItem[];
  categories: WpCategory[];
  productCategories: WpCategory[];
  pagesByPath: Record<string, WpItem>;
  postsByPath: Record<string, WpItem>;
  productsByPath: Record<string, WpItem>;
  categoriesByPath: Record<string, WpCategory>;
  productCategoriesByPath: Record<string, WpCategory>;
  categoriesById: Record<number, WpCategory>;
  productCategoriesById: Record<number, WpCategory>;
  isLoading: boolean;
  error?: string;
};

const WpContentContext = createContext<WpContentState | null>(null);

const toPathMap = <T extends { link: string }>(items: T[]) =>
  items.reduce<Record<string, T>>((acc, item) => {
    acc[wpLinkToPath(item.link)] = item;
    return acc;
  }, {});

export const WpContentProvider = ({ children }: { children: React.ReactNode }) => {
  const pages = useMemo(
    () => (pagesData as WpBaseItem[]).map(toWpItem),
    []
  );
  const posts = useMemo(
    () => (postsData as WpBaseItem[]).map(toWpItem),
    []
  );
  const products = useMemo(
    () => (productsData as WpBaseItem[]).map(toWpItem),
    []
  );
  const categories = useMemo(() => categoriesData as WpCategory[], []);
  const productCategories = useMemo(
    () => productCategoriesData as WpCategory[],
    []
  );

  const value = useMemo<WpContentState>(() => {
    const categoriesById = categories.reduce<Record<number, WpCategory>>((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});

    const productCategoriesById = productCategories.reduce<Record<number, WpCategory>>((acc, item) => {
      acc[item.id] = item;
      return acc;
    }, {});

    return {
      pages,
      posts,
      products,
      categories,
      productCategories,
      pagesByPath: toPathMap(pages),
      postsByPath: toPathMap(posts),
      productsByPath: toPathMap(products),
      categoriesByPath: toPathMap(categories),
      productCategoriesByPath: toPathMap(productCategories),
      categoriesById,
      productCategoriesById,
      isLoading: false,
      error: undefined,
    };
  }, [categories, pages, posts, products, productCategories]);

  return <WpContentContext.Provider value={value}>{children}</WpContentContext.Provider>;
};

export const useWpContent = () => {
  const context = useContext(WpContentContext);
  if (!context) {
    throw new Error("useWpContent must be used within a WpContentProvider.");
  }
  return context;
};
