import Link from "next/link";

export default function notifications() {
    return (
        <div className="rounded-lg border p-4">
            <h2 className="font-bold">Notifications Page</h2>
            <Link href='/dashboard/archived' className="text-blue-600 underline">
                View Archived
            </Link>
        </div>
    );
}
