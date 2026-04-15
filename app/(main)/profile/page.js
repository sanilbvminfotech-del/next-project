import Comments from "@/components/comments";
import Likes from "@/components/likes";
import Views from "@/components/views";
import { Suspense } from "react";

export default function ProfilePage() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black p-6">
            <h1 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-white">
                User Profile
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
                <Suspense fallback={<StatSkeleton label='Views' />}>
                    <Views />
                </Suspense>

                <Suspense fallback={<StatSkeleton label='Likes' />}>
                    <Likes />
                </Suspense>

                <Suspense fallback={<StatSkeleton label='Comments' />}>
                    <Comments />
                </Suspense>
            </div>
        </div>
    );
}

function StatSkeleton({ label }) {
    return (
        <div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm animate-pulse dark:bg-zinc-900 dark:border-zinc-800">
            <p className="text-sm text-zinc-500 mb-2">{label}</p>
            <div className="h-8 w-20 bg-zinc-200 rounded dark:bg-zinc-800"></div>
        </div>
    )
}