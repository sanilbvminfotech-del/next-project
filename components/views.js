export default async function Views() {
    await new Promise((resolve) => setTimeout(resolve, 6000));
    const viewCount = 1240;

    return (
        <div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
            <p className="text-sm text-zinc-500 font-medium">Total Views</p>
            <p className="text-3xl font-bold text-zinc-900 dark:text-white">{viewCount.toLocaleString()}</p>
        </div>
    );
}
