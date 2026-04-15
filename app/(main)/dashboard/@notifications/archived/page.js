import Link from "next/link";

export default function ArchivedNotification() {
    return (
        <div className="rounded-lg border p-4">
            <h2 className="font-bold">Archived Notifications</h2>
            <Link href='/dashboard' className="text-blue-600 underline">
                Back to Default
            </Link>
        </div>
    );
}