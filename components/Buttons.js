const Buttons = ({ page, prevPageIsAvailable, nextPageIsAvailable, goToPrevPage, goToNextPage }) => {
    return (
        <div className="flex justify-between m-6 sm:m-12">
            <button
                className={"bg-blue-500 text-white font-bold rounded py-2 px-3 text-xs sm:px-4 sm:text-base " +
                    (prevPageIsAvailable ? 'cursor-pointer hover:bg-blue-700' : 'cursor-not-allowed')}
                onClick={goToPrevPage}
                disabled={!prevPageIsAvailable}>
                Prev
            </button>
            <button
                className={"bg-blue-500 text-white font-bold rounded py-2 px-3 text-xs sm:px-4 sm:text-base " +
                    (nextPageIsAvailable ? 'cursor-pointer hover:bg-blue-700' : 'cursor-not-allowed')}
                onClick={goToNextPage}
                disabled={!nextPageIsAvailable}>
                Next
            </button>
        </div>
    )
}

export default Buttons