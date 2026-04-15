import Link from "next/link";

export default async function ArticlePage({ params, searchParams }) {
    const { articleId } = await params;
    const { lang } = await searchParams;

    const displayLang = lang === 'en' ? 'English' : lang === 'es' ? 'Spanish' : lang === 'fr' ? 'French' : lang === 'pl' ? 'Polish' : 'default'

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">News Article: {articleId}</h1>
            <h2 className="text-xl">Current Language: <span className="text-orange-500"> {displayLang}</span></h2>

            <div className="mt-6 flex flex-col gap-2">
                <p className="font-semibold">Switch Language:</p>
                <Link href={`/articles/${articleId}?lang=en`} className="text-blue-600">English</Link>
                <Link href={`/articles/${articleId}?lang=es`} className="text-blue-600">Spanish</Link>
                <Link href={`/articles/${articleId}?lang=fr`} className="text-blue-600">French</Link>
                <Link href={`/articles/${articleId}?lang=pl`} className="text-blue-600">Polish</Link>
            </div>

            <div className="mt-10">
                <Link href="/" className="text-gray-500 hover:underline">← Back to Home</Link>
            </div>
        </div>
    );
}