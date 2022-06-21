import React, { useState } from "react"
import InputText from "../../../components/InputText";
import Link from "next/link"

export default function Delete_user({ user }) {
    const [accessToken, setAccessToken] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState("")

    const handleAccessTokenChange = (event) => {
        setAccessToken(event.target.value)
    }

    const handleDeleteUser = () => {
        fetch("https://gorest.co.in/public/v2/users/" + user.id + "?access-token=" + accessToken, {
            method: "DELETE",

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((res) => {
            if (!res.ok) {
                throw new Error("Something went wrong, update user failed")
            }
        }
        ).then(() => {
            setSubmitted(true)
        }
        ).catch(
            (error) => {
                setError(error)
            })
    }

    if (error) {
        return (
            <div className="mx-4">
                <p className="text-2xl font-semibold mb-2">{error.message}</p>
                <p>Please check browser console!</p>
                <Link href="/users">
                    <button
                        className="bg-blue-500 text-white font-bold rounded py-2 px-3 text-xs cursor-pointer hover:bg-blue-700 mt-4"
                        type="button">
                        Back
                    </button>
                </Link>
            </div>)
    } else if (submitted) {
        return (
            <div className="mx-4">
                <p className="text-2xl font-semibold mb-2">User deleted!</p>
                <div>Check your API Requests Logs {" "}
                    <a
                        href="https://gorest.co.in/my-account/logs"
                        className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
                        here
                    </a>
                </div>
                <Link href="/users">
                    <button
                        className="bg-blue-500 text-white font-bold rounded py-2 px-3 text-xs cursor-pointer hover:bg-blue-700 mt-4"
                        type="button">
                        Back
                    </button>
                </Link>
            </div>)
    } else {
        return (
            <div className="mx-4">
                <h1 className="text-2xl font-semibold mb-8">Delete User</h1>
                <form className="w-full max-w-lg">
                    <InputText
                        id="accessToken"
                        value={accessToken}
                        onChange={handleAccessTokenChange}
                        placeholder="Access Token"
                    />
                    <div className="mb-4">
                        <p>Name:</p>
                        <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            {user.name || "user was deleted"}
                        </div>
                    </div>
                    <div className="mb-4">
                        <p>Email:</p>
                        <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            {user.email || "user was deleted"}
                        </div>
                    </div>
                    <div className="mb-4">
                        <p>Gender:</p>
                        <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            {user.gender || "user was deleted"}
                        </div>
                    </div>
                    <div className="mb-4">
                        <p>Status:</p>
                        <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                            {user.status || "user was deleted"}
                        </div>
                    </div>
                    <button
                        className="bg-red-500 text-white font-bold rounded py-2 px-3 text-xs sm:px-4 sm:text-base cursor-pointer hover:bg-red-700 mt-4"
                        type="button"
                        onClick={handleDeleteUser}>
                        Delete
                    </button>
                </form>
            </div>)
    }
}

export async function getServerSideProps(context) {
    const userRes = await fetch(`https://gorest.co.in/public/v2/users/${context.params.id}`)
    const user = await userRes.json()

    return {
        props: {
            user
        }
    }
}