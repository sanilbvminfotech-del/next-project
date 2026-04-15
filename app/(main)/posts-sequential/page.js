import { Suspense } from "react";
import Author from "./author";

export default async function postsSequential() {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) throw new Error("Failed to fetch posts");
    const posts = await res.json();
    // console.log(posts, 'posts');

    const filteredPosts = posts.filter(post => post.id % 10 === 1);

    return (
        <div className="p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-white">
                Filtered Posts (Sequential)
            </h1>

            <div className="grid gap-6">
                {filteredPosts?.map(post => (
                    <article
                        key={post.id}
                        className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2.5 py-0.5 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
                                ID: {post.id}
                            </span>
                            <span className="text-xs text-zinc-400 font-mono">
                                User: {post.userId}
                            </span>
                        </div>

                        <h2 className="text-xl font-semibold mb-2 text-zinc-800 dark:text-zinc-100 capitalize">
                            {post.title}
                        </h2>

                        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                            {post.body}
                        </p>

                        <Suspense fallback={<span className="inline-block w-20 h-4 bg-zinc-200 animate-pulse rounded ml-2"></span>}>
                            <span>
                                <Author userId={post.userId} />
                            </span>
                        </Suspense>
                    </article>
                ))}
            </div>

            {filteredPosts.length === 0 && (
                <p className="text-center text-zinc-500 py-10">No posts found matching the filter.</p>
            )}
        </div>
    );
}