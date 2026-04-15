async function getUserPosts(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    if (!res.ok) throw new Error("Failed to fetch posts");
    return res.json();
};

async function getUserAlbum(userId) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
    await new Promise((resolve) => setTimeout(resolve, 5000));
    if (!res.ok) throw new Error("Failed to fetch albums");
    return res.json();
}


export default async function usersParallel({ params }) {

    const { id } = await params;
    // console.log(id, 'idddd');
    const postData = getUserPosts(id);
    const albumnData = getUserAlbum(id);

    const [sanil, jamadar] = await Promise.all([postData, albumnData]);


    return (
        <div className="p-8 max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-zinc-900 dark:text-white">
                User Profile #{id}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <section>
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                        Recent Posts ({sanil.length})
                    </h2>
                    <div className="space-y-4">
                        {sanil?.map(post => (
                            <div key={post.id} className="p-4 bg-white dark:bg-zinc-900 rounded-lg border shadow-sm">
                                <h3 className="font-bold capitalize">{post.title}</h3>
                                <p className="text-sm text-zinc-500 mt-1 line-clamp-2">
                                    {post.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                        User Albums ({jamadar.length})
                    </h2>
                    <div className="grid grid-cols-1 gap-3">
                        {jamadar?.map(album => (
                            <div key={album.id} className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded border-l-4 border-blue-500">
                                <p className="text-sm font-medium capitalize">{album.title}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
}