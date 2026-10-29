'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export function QandA({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="my-6 border border-gray-700 rounded-2xl overflow-hidden bg-[#111827] not-prose shadow-md">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between p-5 text-left transition hover:bg-gray-800/50"
            >
                <div className="flex items-center gap-3">
                    <HelpCircle className="text-[#38BDF8]" size={20} />
                    <span className="text-white font-medium text-lg">{question}</span>
                </div>
                <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="text-gray-400" size={20} />
                </motion.span>
            </button>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-5 pb-5 pt-2 border-t border-gray-800"
                    >
                        <div className="bg-[#0B1120] p-4 rounded-xl border border-gray-800">
                            <span className="text-sm font-bold text-[#22C55E] block mb-2">Answer:</span>
                            <p className="text-gray-300 leading-relaxed">{answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}