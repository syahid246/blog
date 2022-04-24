import { Link } from 'react-router-dom'

function Card({ img, title, description, link }) {
    return (
        <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
            <div className="mb-10 overflow-hidden rounded-xl bg-white shadow-lg dark:bg-slate-600">
              <img src={img} alt="Programming" className="w-full" />
              <div className="pb-8 pt-5 px-6">
                <h2>
                  <Link to={link} className="mb-3 block truncate text-xl font-semibold hover:!text-blue-500 text-black dark:text-white">{title}</Link>
                </h2>
                <p className="mb-6 text-base font-medium text-secondary">{ description }</p>
                <Link to={link} className="rounded-lg bg-slate-700 py-2 px-4 text-sm font-medium text-white hover:bg-blue-500">Baca Selengkapnya</Link>
              </div>
            </div>
        </div>
    )
}

export default Card
