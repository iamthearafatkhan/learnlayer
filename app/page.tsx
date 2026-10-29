import { getAllRoadmapSlugs, getRoadmap } from '@/lib/content';
import HomePageContent from '@/components/HomePageContent';
import type { Roadmap } from '@/lib/types';

export default function Home() {
    const slugs = getAllRoadmapSlugs();

    // Fetch data on the server safely
    const roadmaps = slugs
        .map(slug => getRoadmap(slug))
        .filter((r): r is Roadmap => r !== null);

    // Pass data to the animated client component
    return <HomePageContent roadmaps={roadmaps} />;
}