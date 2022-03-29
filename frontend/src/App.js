import Navbar from "./components/Navbar";

function App() {
    return <>
        <Navbar className="border-b border-gray-500" />
        <div className="text-center mt-4">
            <h1 className="text-4xl font-medium mb-2">Blog Saya</h1>
            <p className="text-xl">Selamat Datang di Blog Saya!</p>
        </div>
    </>
}

export default App;