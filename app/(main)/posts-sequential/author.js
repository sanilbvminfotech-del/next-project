export default async function Author({ userId }) {

    await new Promise((resolve) => setTimeout(resolve, 4000));

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!res.ok) <span>Unknown Author</span>;


    const author = await res.json();


    return <span>{author.name} || {author.username} || {author.email}</span>;
}