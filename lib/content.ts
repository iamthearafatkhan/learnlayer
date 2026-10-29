import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react'; // <-- Import React cache
import type { ModuleMeta, LessonMeta, Roadmap } from './types';

const MODULES_DIR = path.join(process.cwd(), 'content/modules');
const ROADMAPS_DIR = path.join(process.cwd(), 'content/roadmaps');

// 1. Cache the modules
export const getAllModules = cache((): ModuleMeta[] => {
    if (!fs.existsSync(MODULES_DIR)) return [];
    const folders = fs
        .readdirSync(MODULES_DIR)
        .filter(f => fs.statSync(path.join(MODULES_DIR, f)).isDirectory());

    return folders.map(slug => {
        const dir = path.join(MODULES_DIR, slug);
        const files = fs.readdirSync(dir).filter(f => f.endsWith('.mdx'));

        const lessons: LessonMeta[] = files
            .map(file => {
                const { data } = matter(fs.readFileSync(path.join(dir, file), 'utf8'));
                return {
                    slug: file.replace(/\.mdx$/, ''),
                    title: data.title ?? file,
                    module: slug,
                    order: typeof data.order === 'number' ? data.order : 0,
                    description: data.description,
                };
            })
            .sort((a, b) => a.order - b.order);

        const firstMeta = lessons[0]
            ? matter(fs.readFileSync(path.join(dir, `${lessons[0].slug}.mdx`), 'utf8')).data
            : {};

        return {
            slug,
            title: firstMeta.moduleTitle ?? slug,
            description: firstMeta.moduleDescription ?? '',
            lessons,
        };
    });
});

// 2. Cache the roadmaps
export const getRoadmap = cache((slug: string): Roadmap | null => {
    const file = path.join(ROADMAPS_DIR, `${slug}.json`);
    if (!fs.existsSync(file)) return null;

    try {
        const raw = fs.readFileSync(file, 'utf8').trim();
        if (!raw) return null;
        return JSON.parse(raw);
    } catch (error) {
        console.warn(`Skipping broken JSON: ${slug}.json`);
        return null;
    }
});

export const getAllRoadmapSlugs = cache((): string[] => {
    if (!fs.existsSync(ROADMAPS_DIR)) return [];
    return fs
        .readdirSync(ROADMAPS_DIR)
        .filter(f => f.endsWith('.json'))
        .map(f => f.replace(/\.json$/, ''));
});

export function getLessonSource(moduleSlug: string, lessonSlug: string): string | null {
    const file = path.join(MODULES_DIR, moduleSlug, `${lessonSlug}.mdx`);
    if (!fs.existsSync(file)) return null;
    const { content } = matter(fs.readFileSync(file, 'utf8'));
    return content;
}

export function getLessonMeta(moduleSlug: string, lessonSlug: string) {
    const file = path.join(MODULES_DIR, moduleSlug, `${lessonSlug}.mdx`);
    if (!fs.existsSync(file)) return null;
    return matter(fs.readFileSync(file, 'utf8')).data;
}

export const getAllRoadmapMeta = cache(() => {
    const slugs = getAllRoadmapSlugs();
    return slugs.map(slug => {
        const roadmap = getRoadmap(slug);
        return { slug, title: roadmap?.title ?? slug };
    }).filter(r => r.title !== r.slug); // Only show valid roadmaps
});