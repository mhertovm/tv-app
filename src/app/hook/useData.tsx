import data from '@/app/data/data.json';

export function useDataFeatured() {
    const sectionData = data.Featured;
    return sectionData ?? null;
};

export function useDataTrendingNow() {
    const sectionData = data.TrendingNow;
    return sectionData ?? null;
};