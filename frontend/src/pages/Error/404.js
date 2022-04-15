import Navbar from '../../components/Navbar'

function Error404(props)
{
    return <>
        <div className="sticky top-0">
            <Navbar {...props} className="border-b border-gray-500" />
        </div>
        <div className="text-center mt-4">
            <h1 className="text-6xl font-medium mb-2">404</h1>
            <p className="text-xl">Halaman Tidak Ditemukan!</p>
        </div>
    </>
}

export default Error404