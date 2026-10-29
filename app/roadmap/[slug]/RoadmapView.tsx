'use client';
import Link from 'next/link';
import { motion } from 'motion/react';
import { CheckCircle2, Lock, Circle } from 'lucide-react';
import { useProgress } from '@/lib/progress';
import type { EnrichedRoadmap } from '@/lib/types';

export default function RoadmapView({ roadmap }: { roadmap: EnrichedRoadmap }) {
    const { moduleProgress } = useProgress();

    const isComplete = (slug: string, total: number) =>
        total > 0 && moduleProgress(slug, total) === 100;

    const allStepsComplete = roadmap.steps.every(
        step => step.moduleExists && isComplete(step.moduleSlug, step.totalLessons)
    );

    return (
        <div className="max-w-3xl mx-auto py-12 px-4">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-12"
            >
                <Link href="/" className="text-sm text-gray-500 hover:text-white mb-4 block">← Back to Home</Link>
                <h1 className="text-4xl font-extrabold mb-2">{roadmap.title}</h1>
                <p className="text-gray-400">{roadmap.description}</p>
            </motion.div>

            <div className="flex flex-col items-center">
                {roadmap.steps.map((step, index) => {
                    const progress = step.moduleExists ? moduleProgress(step.moduleSlug, step.totalLessons) : 0;
                    const completed = isComplete(step.moduleSlug, step.totalLessons);
                    const isActive = !completed && (index === 0 || isComplete(roadmap.steps[index - 1].moduleSlug, roadmap.steps[index - 1].totalLessons));

                    return (
                        <div key={step.moduleSlug} className="flex flex-col items-center w-full">
                            {index > 0 && (
                                <div className="w-1 h-16 bg-gray-800 relative">
                                    <motion.div
                                        className="absolute top-0 left-0 w-full bg-[#22C55E]"
                                        initial={{ height: 0 }}
                                        animate={{ height: completed ? '100%' : '0%' }}
                                        transition={{ duration: 0.8, ease: "easeInOut" }}
                                    />
                                </div>
                            )}

                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="w-full"
                            >
                                {step.moduleExists ? (
                                    <Link
                                        href={`/learn/${step.moduleSlug}`}
                                        className={`relative flex items-center gap-5 p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-[1.02] ${completed
                                                ? 'border-[#22C55E]/60 bg-[#22C55E]/5 shadow-[0_0_20px_rgba(34,197,94,0.1)]'
                                                : isActive
                                                    ? 'border-[#38BDF8] bg-[#38BDF8]/5 shadow-[0_0_20px_rgba(56,189,248,0.2)] animate-pulse'
                                                    : 'border-gray-800 bg-[#111827]/50 hover:border-gray-600'
                                            }`}
                                    >
                                        <div className={`flex items-center justify-center w-12 h-12 rounded-full font-bold text-lg ${completed ? 'bg-[#22C55E] text-black' : isActive ? 'bg-[#38BDF8] text-black' : 'bg-gray-800 text-gray-400'
                                            }`}>
                                            {index + 1}
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-lg font-bold flex items-center gap-2">
                                                {step.label}
                                                {step.optional && (
                                                    <span className="text-xs text-gray-500 font-medium px-2 py-0.5 bg-gray-800 rounded-full">Optional</span>
                                                )}
                                            </h3>
                                            <div className="mt-3 h-2 w-full bg-gray-800/50 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-[#22C55E]"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${progress}%` }}
                                                    transition={{ duration: 0.8, delay: 0.2 }}
                                                />
                                            </div>
                                        </div>

                                        {completed ? (
                                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                                                <CheckCircle2 className="text-[#22C55E]" size={32} />
                                            </motion.div>
                                        ) : isActive ? (
                                            <Circle className="text-[#38BDF8] fill-[#38BDF8]" size={24} />
                                        ) : (
                                            <Circle className="text-gray-700" size={24} />
                                        )}
                                    </Link>
                                ) : (
                                    <div className="flex items-center gap-5 p-6 rounded-2xl border border-gray-800 bg-[#111827]/30 opacity-60">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 text-gray-500 font-bold text-lg">
                                            {index + 1}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-400">{step.label}</h3>
                                            <span className="text-xs text-gray-500">Module coming soon</span>
                                        </div>
                                        <Lock className="text-gray-700" size={24} />
                                    </div>
                                )}
                            </motion.div>
                        </div>
                    );
                })}

                {/* CAPSTONE PROJECT UNLOCK */}
                {roadmap.project && (
                    <div className="flex flex-col items-center w-full">
                        <div className="w-1 h-16 bg-gray-800 relative">
                            <motion.div
                                className="absolute top-0 left-0 w-full bg-[#38BDF8]"
                                initial={{ height: 0 }}
                                animate={{ height: allStepsComplete ? '100%' : '0%' }}
                                transition={{ duration: 0.8 }}
                            />
                        </div>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: roadmap.steps.length * 0.1 }}
                            className="w-full"
                        >
                            <Link
                                href={allStepsComplete ? `/roadmap/${roadmap.slug}/project` : '#'}
                                className={`relative flex items-center gap-5 p-6 rounded-2xl border-2 transition-all duration-300 ${allStepsComplete
                                        ? 'border-[#38BDF8] bg-gradient-to-r from-[#38BDF8]/10 to-[#22C55E]/10 hover:shadow-[0_0_30px_rgba(56,189,248,0.3)] hover:scale-[1.02]'
                                        : 'border-gray-800 bg-[#111827]/30 opacity-50 cursor-not-allowed'
                                    }`}
                            >
                                <div className="text-4xl">🏆</div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-xl text-white">
                                        Capstone Project: {roadmap.project.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 mt-1">{roadmap.project.description}</p>
                                </div>
                                {allStepsComplete ? (
                                    <span className="text-[#38BDF8] font-bold px-4 py-2 bg-[#38BDF8]/10 rounded-lg hover:bg-[#38BDF8]/20 transition">Start →</span>
                                ) : (
                                    <Lock className="text-gray-600" size={24} />
                                )}
                            </Link>
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
}