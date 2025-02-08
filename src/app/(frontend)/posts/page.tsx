import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";

// const options = { next: { revalidate: 60 } };

export default async function Page() {
    const { data: posts } = await sanityFetch({ query: POSTS_QUERY });

    return (
        <main className='container mx-auto grid grid-cols-1 gap-6 p-12'>
            <h1 className='text-4xl font-bold'>Post index</h1>
            <ul className='grid grid-cols-2 divide-y divide-green-100'>
                {posts.map((post) => (
                    <li key={post._id}>
                        <Link
                            className='block py-8 hover:text-green-500'
                            href={`/posts/${post?.slug?.current}`}
                        >
                            {post?.title}
                        </Link>
                    </li>
                ))}
            </ul>
            <hr />
            <Link className='hover:text-green-500' href='/'>
                &larr; Return home
            </Link>
        </main>
    );
}
