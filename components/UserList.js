import Link from "next/link"

const UserList = ({ users }) => {
    return (
        <div className="flex justify-center m-6 sm:m-12">
            <table className="table-auto border border-slate-400 w-full">
                <thead>
                    <tr>
                        <th className="border border-slate-300 text-xs sm:text-base sm:p-1">No.</th>
                        <th className="border border-slate-300 text-xs sm:text-base sm:p-1">Name</th>
                        <th className="border border-slate-300 text-xs sm:text-base sm:p-1">Email</th>
                        <th className="border border-slate-300 text-xs sm:text-base sm:p-1">Gender</th>
                        <th className="border border-slate-300 text-xs sm:text-base sm:p-1">Status</th>
                        <th className="border border-slate-300 text-xs sm:text-base sm:p-1">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return (
                            <tr key={user.id}>
                                <td className="border border-slate-300 text-center text-xs sm:text-base sm:p-1">{index + 1}</td>
                                <td className="border border-slate-300 text-xs sm:text-base sm:p-1">{user.name}</td>
                                <td className="border border-slate-300 text-xs sm:text-base sm:p-1">{user.email}</td>
                                <td className="border border-slate-300 text-xs sm:text-base sm:p-1">{user.gender}</td>
                                <td className="border border-slate-300 text-xs sm:text-base sm:p-1">{user.status}</td>
                                <td className="border border-slate-300 text-xs sm:text-base sm:p-1">
                                    <div className="flex flex-row justify-around">
                                        <Link href="/edit_user/[id]" as={`/edit_user/${user.id}`}>
                                            <img src="/edit.png" alt="edit" className="h-4 w-4 sm:h-5 sm:w-5 hover:cursor-pointer" />
                                        </Link>
                                        <Link href="/delete_user/[id]" as={`/delete_user/${user.id}`}>
                                            <img src="/delete.png" alt="delete" className="h-4 w-4 sm:h-5 sm:w-5 hover:cursor-pointer" />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default UserList