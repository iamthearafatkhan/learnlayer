'use client';
import Link from 'next/link';
import { motion } from 'motion/react';
import type { Roadmap } from '@/lib/types';

export default function HomePageContent({ roadmaps }: { roadmaps: Roadmap[] }) {
    return (
        <div className="max-w-5xl mx-auto pt-8">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-extrabold mb-3 tracking-tight"
            >
                Choose Your <span className="text-[#22C55E]">Path</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 mb-12 text-lg"
            >
                Follow a structured roadmap, or jump straight into a module. Progress saved locally.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {roadmaps.map((r, i) => (
                    <motion.div
                        key={`${r.slug}-${i}`} // <-- Changed this line
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.4 }}
                    >
                        <Link
                            href={`/roadmap/${r.slug}`}
                            className="group block h-full border border-gray-800 rounded-2xl p-6 bg-[#111827]/80 backdrop-blur-sm hover:border-[#22C55E]/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-[#22C55E]">↗</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-3 group-hover:text-[#22C55E] transition-colors">
                                {r.title}
                            </h2>
                            <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">{r.description}</p>
                            <div className="mt-6 flex items-center justify-between">
                                <span className="text-xs font-semibold text-[#38BDF8] bg-[#38BDF8]/10 px-3 py-1 rounded-full">
                                    {r.steps.length} modules
                                </span>
                                <span className="text-gray-500 text-sm group-hover:text-white transition">Start →</span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}