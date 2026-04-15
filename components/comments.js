export default async function Comments() {
    // Simulate a 4-second delay
    await new Promise((resolve) => setTimeout(resolve, 4000));

    return (
        <div className="p-6 rounded-2xl border border-zinc-200 bg-white shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Total Comments</p>
            <p className="text-3xl font-bold text-blue-500">1,000</p>
        </div>
    );
}