'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";


const navlinks = [
    { name: 'Home', href: '/' },
    { name: 'Register', href: '/register' },
    { name: 'Login', href: '/login' },
    { name: 'ForgotPassword', href: '/forgot-password' },
    { name: 'PostsSequential', href: '/posts-sequential' }
]
export default function Navbar() {

    const pathname = usePathname();
    console.log(pathname, 'pathname');


    return (
        <div className="flex flex-row gap-3 p-4">
            {navlinks.map(link => {

                const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/')

                return (
                    <Link key={link.name} href={link.href} className={`${isActive ? "text-orange-500 font-bold" : "text-zinc-600"}  hover:text-orange-400 transition-colors`}>
                        {link.name}
                    </Link>
                )
            })}
        </div>
    );
}