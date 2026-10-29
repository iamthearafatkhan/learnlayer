'use client';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { useProgress } from '@/lib/progress';

export default function MarkCompleteButton({
    moduleSlug,
    lessonSlug,
}: {
    moduleSlug: string;
    lessonSlug: string;
}) {
    const { markComplete, isComplete } = useProgress();
    const done = isComplete(moduleSlug, lessonSlug);

    return (
        <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => markComplete(moduleSlug, lessonSlug)}
            disabled={done}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition ${done
                    ? 'bg-[#22C55E]/20 text-[#22C55E] cursor-default'
                    : 'bg-[#22C55E] text-black hover:bg-[#22C55E]/90'
                }`}
        >
            <CheckCircle2 size={20} />
            {done ? 'Completed' : 'Mark as Complete'}
        </motion.button>
    );
}