'use client';
import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'learning_progress_v1';
type ProgressState = Record<string, string[]>;

function load(): ProgressState {
    if (typeof window === 'undefined') return {};
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch {
        return {};
    }
}

export function useProgress() {
    const [progress, setProgress] = useState<ProgressState>({});

    useEffect(() => {
        setProgress(load());
    }, []);

    const markComplete = useCallback((moduleSlug: string, lessonSlug: string) => {
        setProgress(prev => {
            const existing = prev[moduleSlug] ?? [];
            if (existing.includes(lessonSlug)) return prev;
            const next = { ...prev, [moduleSlug]: [...existing, lessonSlug] };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
            return next;
        });
    }, []);

    const isComplete = useCallback(
        (moduleSlug: string, lessonSlug: string) =>
            (progress[moduleSlug] ?? []).includes(lessonSlug),
        [progress]
    );

    const moduleProgress = useCallback(
        (moduleSlug: string, total: number) => {
            const done = (progress[moduleSlug] ?? []).length;
            return total > 0 ? Math.round((done / total) * 100) : 0;
        },
        [progress]
    );

    return { progress, markComplete, isComplete, moduleProgress };
}