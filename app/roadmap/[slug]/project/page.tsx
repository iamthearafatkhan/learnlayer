import { notFound } from 'next/navigation';
import { getRoadmap, getAllRoadmapSlugs } from '@/lib/content';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
    return getAllRoadmapSlugs()
        .filter(slug => getRoadmap(slug)?.project)
        .map(slug => ({ slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const roadmap = getRoadmap(slug);

    if (!roadmap || !roadmap.project) notFound();

    const project = roadmap.project;

    return (
        <div className="max-w-3xl mx-auto py-12 px-6">
            <Link href={`/roadmap/${slug}`} className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition">
                <ArrowLeft size={16} /> Back to Roadmap
            </Link>

            <div className="bg-[#111827] border-2 border-[#38BDF8]/30 rounded-3xl p-8 shadow-2xl">
                <div className="text-5xl mb-4">🏆</div>
                <h1 className="text-3xl font-bold text-white mb-2">{project.title}</h1>
                <p className="text-[#38BDF8] mb-6">Capstone Project</p>

                <p className="text-gray-300 leading-relaxed mb-8">{project.description}</p>

                <h2 className="text-xl font-bold text-white mb-4">Requirements</h2>
                <ul className="space-y-3 mb-8">
                    {project.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300">
                            <span className="text-[#22C55E] font-bold mt-0.5">✓</span>
                            {req}
                        </li>
                    ))}
                </ul>

                {project.starterCode && (
                    <div>
                        <h2 className="text-xl font-bold text-white mb-4">Starter Code</h2>
                        <div className="bg-[#0B1120] border border-gray-800 rounded-xl p-4 overflow-x-auto">
                            <pre className="text-sm text-[#22C55E]"><code>{project.starterCode}</code></pre>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}