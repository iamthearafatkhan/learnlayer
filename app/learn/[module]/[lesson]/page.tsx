import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllModules, getLessonSource, getLessonMeta } from '@/lib/content';
import { QandA } from '@/components/QandA';
import { Quiz } from '@/components/Quiz';
import { CodeBlock } from '@/components/CodeBlock';
import MarkCompleteButton from '@/components/MarkCompleteButton';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function generateStaticParams() {
    const all: { module: string; lesson: string }[] = [];
    for (const m of getAllModules()) {
        for (const l of m.lessons) all.push({ module: m.slug, lesson: l.slug });
    }
    return all;
}

export default async function LessonPage({
    params,
}: {
    params: Promise<{ module: string; lesson: string }>;
}) {
    const { module: moduleSlug, lesson: lessonSlug } = await params;
    const source = getLessonSource(moduleSlug, lessonSlug);
    const meta = getLessonMeta(moduleSlug, lessonSlug);
    if (!source) notFound();

    const currentModule = getAllModules().find(m => m.slug === moduleSlug);
    const currentIndex = currentModule?.lessons.findIndex(l => l.slug === lessonSlug) ?? -1;

    const prevLesson = currentIndex > 0 ? currentModule?.lessons[currentIndex - 1] : null;
    const nextLesson = currentIndex < (currentModule?.lessons.length ?? 0) - 1 ? currentModule?.lessons[currentIndex + 1] : null;

    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            <Link href={`/learn/${moduleSlug}`} className="text-sm text-gray-500 hover:text-white mb-6 inline-flex items-center gap-2">
                <ArrowLeft size={16} /> Back to {currentModule?.title}
            </Link>

            <h1 className="text-4xl font-extrabold mb-8">{meta?.title ?? lessonSlug}</h1>

            {/* FIXED PROSE CLASSES: Removed the green text bleed */}
            <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-white prose-a:text-[#38BDF8]">
                <MDXRemote
                    source={source}
                    components={{ QandA, Quiz, pre: CodeBlock }}
                />
            </article>

            <div className="mt-12 pt-8 border-t border-gray-800 flex items-center justify-between">
                {prevLesson ? (
                    <Link href={`/learn/${moduleSlug}/${prevLesson.slug}`} className="flex flex-col items-start hover:text-[#38BDF8] transition">
                        <span className="text-xs text-gray-500 mb-1">Previous</span>
                        <span className="font-semibold flex items-center gap-2"><ArrowLeft size={16} /> {prevLesson.title}</span>
                    </Link>
                ) : <div />}

                <MarkCompleteButton moduleSlug={moduleSlug} lessonSlug={lessonSlug} />

                {nextLesson ? (
                    <Link href={`/learn/${moduleSlug}/${nextLesson.slug}`} className="flex flex-col items-end hover:text-[#38BDF8] transition">
                        <span className="text-xs text-gray-500 mb-1">Next</span>
                        <span className="font-semibold flex items-center gap-2">{nextLesson.title} <ArrowRight size={16} /></span>
                    </Link>
                ) : <div />}
            </div>
        </div>
    );
}