import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground">
            <div className="text-center">
                <h1 className="text-9xl font-bold bg-gradient-to-r from-indigo-400 via-violet-400 to-rose-400 bg-clip-text text-transparent">
                    404
                </h1>
                <h2 className="mt-4 text-3xl font-semibold">Page Not Found</h2>
                <p className="mt-2 text-muted-foreground">
                    Sorry, we couldn't find the page you're looking for.
                </p>
                <Link
                    href="/"
                    className="mt-8 inline-block rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-3 text-white font-semibold hover:from-indigo-500 hover:to-violet-500 transition-all"
                >
                    Go back home
                </Link>
            </div>
        </div>
    )
}
