const InputText = ({ id, value, onChange, placeholder }) => {
    return (
        <div className="mb-4">
            <label className="block mb-2" htmlFor={id}>
                {placeholder}
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={id}
                value={value}
                type="text"
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}

export default InputText