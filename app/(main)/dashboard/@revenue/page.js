


export default async function RevenueSlot() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'no-store'
    });

    if (!response.ok) throw new Error("Failed to fetch revenue");
    const posts = await response.json();
    console.log(posts.length, 'posts');


    const totalRevenue = (posts.length * 125.50).toLocaleString('en-IN', {
        style: 'currency', currency: 'USD'
    })
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return (
        <div className="space-y-2">
            <p className="text-3xl font-bold text-green-600">{totalRevenue}</p>
            <p className="text-sm text-zinc-500">Based on {posts.length} latest posts</p>
        </div>
    );
}
