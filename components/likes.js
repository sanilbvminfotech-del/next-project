export default async function Likes() {
    // Simulate a 2-second delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return (
        <div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Total Likes</p>
            <p className="text-3xl font-bold text-red-500">2,450</p>
        </div>
    );
}