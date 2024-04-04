import Link from "next/link";

export default function BlogPage()
{
    return (
        <main>
            <ul>
                <li>
                    <Link href="/blog/post-1">Post 1</Link>
                </li>
                <li>
                    <Link href="/blog/post-2">Post 2</Link>
                </li>
                <li>
                    <Link href="/blog/post-3">Post 3</Link>
                </li>
            </ul>
        </main>
    )
}