'use client';
import { useState } from "react";

export default function DashboardLayout({
    children,
    notifications,
    revenue,
    users,
    login
}) {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return isLoggedIn ? (
        <div className="flex min-h-screen flex-col bg-zinc-50 p-6 dark:bg-zinc-950">
            <header className="flex justify-between mb-4">
                <h1 className="font-bold">Dashboard</h1>
                <button
                    onClick={() => setIsLoggedIn(false)}
                    className="text-red-500 text-sm border border-red-500 px-2 py-1 rounded hover:bg-red-50"
                >
                    Logout
                </button>
            </header>

            <div className="mb-6 rounded-xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                {children}
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                    <h3 className="mb-2 text-sm font-medium text-zinc-500">User Statistics</h3>
                    <div className="text-zinc-900 dark:text-zinc-100">{users}</div>
                </div>

                <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                    <h3 className="mb-2 text-sm font-medium text-zinc-500">Total Revenue</h3>
                    <div className="text-zinc-900 dark:text-zinc-100">{revenue}</div>
                </div>

                <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 md:col-span-2 lg:col-span-1">
                    <h3 className="mb-2 text-sm font-medium text-zinc-500">Notifications</h3>
                    <div className="text-zinc-900 dark:text-zinc-100">{notifications}</div>
                </div>
            </div>
        </div>
    ) : (
        <div className="flex min-h-screen items-center justify-center">
            <div className="text-center">
                {login}
                <button
                    onClick={() => setIsLoggedIn(true)}
                    className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
                >
                    Log In
                </button>
            </div>
        </div>
    );
}
