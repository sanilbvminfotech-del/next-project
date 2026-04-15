import Navbar from "@/components/Navbar";

export default function AuthLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="flex-1">{children}</main>
            {/* <footer className="text-center p-5 bg-gray-600 text-white">
                Footer
            </footer> */}
        </>
    );
}