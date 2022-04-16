function Penulis()
{
    return (
        <div className="px-4 mt-4">
            <h2 className="text-4xl font-medium mb-3">Penulis</h2>
            <div className="flex flex-wrap md:flex-row flex-col rounded w-full content-center md:items-stretch items-center">
                <div className="md:w-auto h-full flex-grow-0 flex-shrink-0 basis-auto">
                    <img src="https://github.com/syahid246.png" alt="" className="rounded-full h-[150px]" />
                </div>
                <div className="p-2 h-full flex-grow flex-shrink-0 basis-0">
                    <h1 className="md:text-4xl text-xl font-medium mb-1">Kafaa Billahi Syahida</h1>
                    <p>I am a web developer since 2020 I focused on web development especially on PHP, Python, HTML and friends, MySQL and others to provide solution to my clients.</p>
                </div>
            </div>
        </div>
    )
}

export default Penulis
