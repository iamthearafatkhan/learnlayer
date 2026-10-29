import Link from 'next/link';
import { getAllModules } from '@/lib/content';

export default function LearnIndex() {
    const modules = getAllModules();

    return (
        <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">All Modules</h1>
            <p className="text-gray-400 mb-10">Pick any topic — no roadmap required.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {modules.map(m => (
                    <Link
                        key={m.slug}
                        href={`/learn/${m.slug}`}
                        className="border border-gray-800 rounded-2xl p-6 bg-[#111827] hover:border-[#38BDF8]/50 transition"
                    >
                        <h2 className="text-lg font-semibold mb-1">{m.title}</h2>
                        <p className="text-sm text-gray-400">{m.description}</p>
                        <span className="inline-block mt-3 text-xs text-[#38BDF8]">
                            {m.lessons.length} lessons →
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}