import requests from "../utils/request"
import Router, { useRouter } from 'next/router'

const Nav = () => {
    const router = useRouter()
    return (
        <nav>
            <div className="flex px-10 sm:px20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2
                        onClick={() => router.push(`/?genre=${key}`)}
                        key={key}
                        className="last:pr-24cursor-pointer transition duration-1000 transform hover:scale-125 hover:text-white active:text-red-500">{title}</h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
        </nav>
    )
}

export default Nav
