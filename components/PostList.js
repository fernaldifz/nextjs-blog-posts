import Link from "next/link"

const PostList = ({ posts }) => {
    return (
        <div>
            {posts.map((post) => (
                <Link key={post.id} href="/post/[id]" as={`/post/${post.id}`}>
                    <div className="rounded border p-6 m-6 sm:m-12 hover:text-blue-700 hover:border-blue-700 hover:cursor-pointer">
                        <h3 className="text-base sm:text-xl lg:text-2xl font-semibold pb-2 text-justify">
                            {post.title.length > 100 ? post.body.substr(0, 100) + '...' : post.title}
                        </h3>
                        <p className="text-xs sm:text-base lg:text-lg text-justify">
                            {post.body.length > 300 ? post.body.substr(0, 300) + '...' : post.body}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default PostList