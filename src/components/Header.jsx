function Header({ generateColor }) {
    return (
        <header className="bg-white shadow p-5 flex justify-between items-center bg-{color}"
        >
            <h1 className="text-xl font-bold hover:text-gray-900">Color Generator</h1>

            <button
                onClick={generateColor}
                className="bg-black hover:bg-gray-900 text-white px-4 py-2 cursor-pointer  rounded-lg"
            >
                Generate Color
            </button>
        </header>
    );
}

export default Header;
