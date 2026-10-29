import { notFound } from 'next/navigation';
import { getAllModules, getAllRoadmapSlugs, getRoadmap } from '@/lib/content';
import RoadmapView from './RoadmapView';
import type { EnrichedRoadmap } from '@/lib/types'; // <-- Fixed import here

export function generateStaticParams() {
    return getAllRoadmapSlugs().map(slug => ({ slug }));
}

export default async function RoadmapPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const roadmap = getRoadmap(slug);
    if (!roadmap) notFound();

    const modules = getAllModules();

    // Create the enriched roadmap object
    const enriched: EnrichedRoadmap = {
        ...roadmap,
        steps: roadmap.steps.map(step => {
            const mod = modules.find(m => m.slug === step.moduleSlug);
            return {
                ...step,
                totalLessons: mod?.lessons.length ?? 0,
                moduleExists: !!mod,
            };
        }),
    };

    return <RoadmapView roadmap={enriched} />;
}