import Card from "../components/Card"

function Home()
{
    return <>
        <div className="dark:text-white text-center mt-4">
            <h1 className="text-4xl font-medium mb-2">Blog Saya</h1>
            <p className="text-xl">Selamat Datang di Blog Saya!</p>
        </div>
        <div className="container py-4">
            <div className="flex flex-wrap">
                <Card img="https://source.unsplash.com/360x200?programming" title="Tips Belajar Programming" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat officia beatae quisquam?" link="/" />
                <Card img="https://source.unsplash.com/360x200?programming" title="Tips Belajar Programming" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat officia beatae quisquam?" link="/" />
                <Card img="https://source.unsplash.com/360x200?programming" title="Tips Belajar Programming" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat officia beatae quisquam?" link="/" />
                <Card img="https://source.unsplash.com/360x200?programming" title="Tips Belajar Programming" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat officia beatae quisquam?" link="/" />
                <Card img="https://source.unsplash.com/360x200?programming" title="Tips Belajar Programming" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat officia beatae quisquam?" link="/" />
                <Card img="https://source.unsplash.com/360x200?programming" title="Tips Belajar Programming" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat officia beatae quisquam?" link="/" />
            </div>
        </div>
    </>
}

export default Home