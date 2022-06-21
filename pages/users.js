import React, { useState, useEffect } from "react"
import UserList from "../components/UserList"
import Buttons from "../components/Buttons"

export default function sers() {
    const [users, setUsers] = useState([])
    const [page, setPage] = useState(1)
    const [nextPageIsAvailable, setNextPageIsAvailable] = useState(true)
    const [prevPageIsAvailable, setPrevPageIsAvailable] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [searchCategory, setSearchCategory] = useState("name");
    const [searchKeyword, setSearchKeyword] = useState("")
    const [keywordSearched, setKeywordSearched] = useState("")

    async function fetchUsers() {
        if (keywordSearched) {
            const usersRes = await fetch("https://gorest.co.in/public/v2/users?page=" + page + "&" + searchCategory + "=" + searchKeyword)
            const users = await usersRes.json()
            setUsers(users)

            const usersNextPageRes = await fetch("https://gorest.co.in/public/v2/users?page=" + (page + 1) + "&" + searchCategory + "=" + searchKeyword)
            const usersNextPage = await usersNextPageRes.json()
            if (usersNextPage.length === 0) {
                setNextPageIsAvailable(false)
            }
            else {
                setNextPageIsAvailable(true)
            }
        } else {
            const usersRes = await fetch("https://gorest.co.in/public/v2/users?page=" + page)
            const users = await usersRes.json()
            setUsers(users)

            const usersNextPageRes = await fetch("https://gorest.co.in/public/v2/users?page=" + (page + 1))
            const usersNextPage = await usersNextPageRes.json()
            if (usersNextPage.length === 0) {
                setNextPageIsAvailable(false)
            }
            else {
                setNextPageIsAvailable(true)
            }
        }
        setIsLoaded(true)
    }

    useEffect(() => {
        fetchUsers()
    }, [page, keywordSearched])

    const searchCategories = ["name", "email", "gender", "status"]

    const goToPrevPage = () => {
        setPage(page - 1)
    }

    const goToNextPage = () => {
        setPage(page + 1)
    }

    const onChangeSearchCategory = (e) => {
        setSearchCategory(e.target.value);
    };

    const onChangeSearchKeyword = (e) => {
        setSearchKeyword(e.target.value)
    }

    const filterBySearchKeyword = () => {
        setPage(1)
        if (searchKeyword === "") {
            setKeywordSearched("")
        } else {
            setKeywordSearched(searchKeyword)
        }
        console.log(keywordSearched)
    }

    if (!isLoaded) {
        return (
            <div className="text-lg">is Loading...</div>
        )
    } else {
        return (
            <div>
                <h1 className="text-4xl text-center font-semibold mb-12">Users Page</h1>
                <form className="flex justify-start mx-6 sm:mx-12">
                    <label htmlFor="simple-search" className="sr-only">Search users</label>
                    <div>
                        <input type="text" id="simple-search" value={searchKeyword} onChange={onChangeSearchKeyword} className="bg-gray-50 border text-sm rounded-lg block pl-4 p-2 w-60 mr-2" placeholder="Search users" required />
                    </div>
                    <div>
                        <select onChange={onChangeSearchCategory} className="bg-gray-50 border text-sm rounded-lg block pl-4 p-2">
                            {searchCategories.map((searchCategory, index) => {
                                return (
                                    <option key={index} value={searchCategory}>{searchCategory.charAt(0).toUpperCase() + searchCategory.slice(1)}</option>
                                );
                            })}
                        </select>
                    </div>
                    <button type="button" onClick={filterBySearchKeyword} className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                </form >
                <UserList users={users} />
                <Buttons
                    page={page}
                    prevPageIsAvailable={prevPageIsAvailable}
                    nextPageIsAvailable={nextPageIsAvailable}
                    goToPrevPage={goToPrevPage}
                    goToNextPage={goToNextPage} />
                <p className="text-center">{page}</p>
            </div >
        )
    }
}