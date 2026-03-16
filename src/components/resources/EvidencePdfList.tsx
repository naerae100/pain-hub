import React, { useState } from 'react';
import { FileText, Download, Filter } from 'lucide-react';
import { evidenceData } from '@/data/evidence';

interface PdfItem {
    title: string;
    filename: string;
    category: string;
}

const EvidencePdfList = ({ data, categories, defaultCategory = 'All' }: { data: PdfItem[], categories: string[], defaultCategory?: string }) => {
    const [activeFilter, setActiveFilter] = useState<string>(defaultCategory);

    const filteredData = activeFilter === 'All' 
        ? data 
        : data.filter(item => item.category === activeFilter);

    // Get unique categories from data if categories array is empty
    const availableCategories = categories.length > 0 
        ? categories 
        : Array.from(new Set(data.map(item => item.category))).sort();

    return (
        <div className="mt-12 bg-card border border-border rounded-3xl p-6 lg:p-10 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h3 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <FileText className="w-6 h-6 text-primary" />
                        Clinical Evidence Library
                    </h3>
                    <p className="text-muted-foreground mt-2">Filter and download peer-reviewed publications and studies.</p>
                </div>
                
                {availableCategories.length > 0 && (
                    <div className="relative">
                        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <Filter className="w-4 h-4 text-muted-foreground" />
                        </div>
                        <select 
                            value={activeFilter}
                            onChange={(e) => setActiveFilter(e.target.value)}
                            className="h-10 pl-10 pr-10 rounded-xl border border-input bg-background text-sm focus:ring-2 focus:ring-primary focus:border-primary appearance-none w-full md:w-auto min-w-[200px]"
                        >
                            <option value="All">All Categories</option>
                            {availableCategories.map(cat => (
                                <option key={cat} value={cat}>{cat.replace(/_/g, '/')}</option>
                            ))}
                        </select>
                    </div>
                )}
            </div>

            <div className="grid gap-3">
                {filteredData.length > 0 ? (
                    filteredData.map((item, idx) => (
                        <a 
                            key={idx}
                            href={`/src/assets/${item.filename}`} // In production, this would be a proper static asset path
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-4 p-4 rounded-xl border border-border bg-background hover:border-primary/50 hover:shadow-md transition-all"
                        >
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                                <FileText className="w-5 h-5" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h4>
                                <span className="inline-block mt-2 text-xs font-medium px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground">
                                    {item.category.replace(/_/g, '/')}
                                </span>
                            </div>
                            <div className="shrink-0 p-2 text-muted-foreground group-hover:text-primary transition-colors">
                                <Download className="w-5 h-5" />
                            </div>
                        </a>
                    ))
                ) : (
                    <div className="text-center py-12 text-muted-foreground">
                        No publications found for the selected category.
                    </div>
                )}
            </div>
            {filteredData.length > 0 && (
                <p className="text-xs text-muted-foreground text-center mt-6">
                    Showing {filteredData.length} document{filteredData.length !== 1 ? 's' : ''}
                </p>
            )}
        </div>
    );
};

export default EvidencePdfList;
