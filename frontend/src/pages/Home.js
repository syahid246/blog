import Card from "../components/Card"
import posts from '../data/posts.json'

function Home()
{
    return <>
        <div className="dark:text-white text-center mt-4">
            <h1 className="text-4xl font-medium mb-2">Blog Saya</h1>
            <p className="text-xl">Selamat Datang di Blog Saya!</p>
        </div>
        <div className="container py-4">
            <div className="flex flex-wrap">
                { posts.map(({ id, title, description }) => (
                    <Card img={require(`../assets/img/blog/posts/${id}.jpg`)} key={`blog-posts-${id}`} title={title} description={description} link={`/posts/${id}`} />
                )) }
            </div>
        </div>
    </>
}

export default Home