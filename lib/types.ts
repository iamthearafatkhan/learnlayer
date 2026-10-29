export interface LessonMeta {
    slug: string;
    title: string;
    module: string;
    order: number;
    description?: string;
}

export interface ModuleMeta {
    slug: string;
    title: string;
    description: string;
    lessons: LessonMeta[];
}

export interface RoadmapStep {
    moduleSlug: string;
    label: string;
    sublabel?: string;
    optional?: boolean;
}

export interface RoadmapProject {
    title: string;
    description: string;
    requirements: string[];
    starterCode?: string;
}

export interface Roadmap {
    slug: string;
    title: string;
    description: string;
    steps: RoadmapStep[];
    project?: RoadmapProject;
}

// --- NEW ENRICHED TYPES ---
export interface EnrichedRoadmapStep extends RoadmapStep {
    totalLessons: number;
    moduleExists: boolean;
}

export interface EnrichedRoadmap extends Omit<Roadmap, 'steps'> {
    steps: EnrichedRoadmapStep[];
}