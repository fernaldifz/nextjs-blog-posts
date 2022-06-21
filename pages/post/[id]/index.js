import React from "react";
import Image from 'next/image'

export default function postDetail({ post, user, comments }) {
    return (
        <div className="mx-6 sm:mx-12">
            <div className="flex items-center justify-start space-x-4 mb-8">
                <Image src="/default_profile.jpg" className="rounded-full" alt="" height="43" width="39" />
                {user.length !== 0 && <h3 className="sm:text-lg">{user[0].name}</h3>}
                {user.length === 0 && <h3 className="sm:text-lg">This account was deleted</h3>}
            </div>
            <h1 className="text-2xl sm:text-4xl font-semibold text-center mb-12">{post.title}</h1>
            <p className="sm:text-lg text-justify mb-8">{post.body}</p>
            <h4 className="sm:text-lg font-semibold mb-2">Comments ({comments.length})</h4>
            {comments.length !== 0 && comments.map((comment) => (
                <div key={comment.id} className="rounded border p-3 mb-4">
                    <p className="sm:text-lg font-semibold mb-2">{comment.name}</p>
                    <p className="text-sm sm:text-base">{comment.body}</p>
                </div>
            ))}
            {comments.length === 0 && <div>There are currently no comments</div>}
        </div>
    )
}

export async function getServerSideProps(context) {
    const postRes = await fetch(`https://gorest.co.in/public/v2/posts/${context.params.id}`);
    const post = await postRes.json()

    const userRes = await fetch(`https://gorest.co.in/public/v2/users?id=${post.user_id}`)
    const user = await userRes.json()

    const commentsRes = await fetch(`https://gorest.co.in/public/v2/comments?post_id=${post.id}`)
    const comments = await commentsRes.json()

    return {
        props: {
            post, user, comments
        }
    }
}