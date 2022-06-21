import Link from "next/link"

const Navbar = () => {
    return (
        <div className="bg-black text-slate-300 p-4 px-6 w-full">
            <ul className="flex">
                <li className="mr-8 hover:text-white">
                    <Link href="/">Posts</Link>
                </li>
                <li className="mr-8 hover:text-white">
                    <Link href="/users">Users</Link>
                </li>
                <li className="mr-8 hover:text-white">
                    <Link href="/create_user">Create User</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar