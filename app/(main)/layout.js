import Navbar from "@/components/Navbar";

export default function MainLayout({ children }) {
    return (
        <>
            <header className="text-center p-5 bg-gray-600 text-white">
                Header
            </header>
            <Navbar />
            <main className="flex-1">{children}</main>
            <footer className="text-center p-5 bg-gray-600 text-white">
                Footer
            </footer>
        </>
    );
}