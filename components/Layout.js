import Navbar from "./Navbar"

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className="p-6">
                {children}
            </div>
        </div>
    )
}
export default Layout