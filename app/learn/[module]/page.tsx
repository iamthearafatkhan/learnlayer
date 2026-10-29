import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllModules } from '@/lib/content';

export function generateStaticParams() {
    return getAllModules().map(m => ({ module: m.slug }));
}

export default async function ModulePage({
    params,
}: {
    params: Promise<{ module: string }>;
}) {
    const { module: moduleSlug } = await params;
    const mod = getAllModules().find(m => m.slug === moduleSlug);
    if (!mod) notFound();

    return (
        <div className="max-w-3xl mx-auto py-12">
            <h1 className="text-3xl font-bold mb-2">{mod.title}</h1>
            <p className="text-gray-400 mb-8">{mod.description}</p>

            <div className="space-y-3">
                {mod.lessons.map((l, i) => (
                    <Link
                        key={l.slug}
                        href={`/learn/${mod.slug}/${l.slug}`}
                        className="flex items-center justify-between p-4 rounded-xl border border-gray-800 bg-[#111827] hover:border-[#38BDF8]/50 transition group"
                    >
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-gray-500 w-6">{i + 1}.</span>
                            <span className="font-medium group-hover:text-[#38BDF8] transition">{l.title}</span>
                        </div>
                        <span className="text-gray-600 group-hover:text-[#38BDF8]">→</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}