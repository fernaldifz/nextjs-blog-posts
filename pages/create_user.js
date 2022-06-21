import React, { useState } from "react"
import InputText from "../components/InputText";
import Link from "next/link"

export default function create_user() {
    const [accessToken, setAccessToken] = useState("")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")
    const [status, setStatus] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState("")

    const handleAccessTokenChange = (event) => {
        setAccessToken(event.target.value)
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handleGenderChange = (event) => {
        setGender(event.target.value)
    }

    const handleStatusChange = (event) => {
        setStatus(event.target.value)
    }

    const handleCreateUser = () => {
        fetch("https://gorest.co.in/public/v2/users?access-token=" + accessToken, {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                gender: gender,
                status: status,
            }),

            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }).then((res) => {
            if (res.ok) {
                console.log(res.json())
            } else {
                throw new Error("Something went wrong, create user failed")
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
                <p className="text-2xl font-semibold mb-2">User created!</p>
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
                <h1 className="text-2xl font-semibold mb-8">Create User</h1>
                <form className="w-full max-w-lg">
                    <InputText
                        id="accessToken"
                        value={accessToken}
                        onChange={handleAccessTokenChange}
                        placeholder="Access Token"
                    />
                    <InputText
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Name"
                    />
                    <InputText
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Email"
                    />
                    <InputText
                        id="gender"
                        value={gender}
                        onChange={handleGenderChange}
                        placeholder="Gender"
                    />
                    <InputText
                        id="status"
                        value={status}
                        onChange={handleStatusChange}
                        placeholder="Status"
                    />
                    <button
                        className="bg-blue-500 text-white font-bold rounded py-2 px-3 text-xs sm:px-4 sm:text-base cursor-pointer hover:bg-blue-700 mt-4"
                        type="button"
                        onClick={handleCreateUser}>
                        Create
                    </button>
                </form>
            </div>)
    }

}