import { getUsers } from "@/lib/data";


export default async function UsersSlot() {
    const data = await getUsers();

    return (
        <div className="space-y-2">
            <p className="text-xl font-bold">{data.length} Total Users</p>
            <ul className="text-sm text-zinc-600">
                {data.slice(0, 3).map((user) => (
                    <li key={user.id}>• {user.name} - {user.username} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
}
