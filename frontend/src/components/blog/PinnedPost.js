import React from 'react'

import blog_default from '../../ressources/blog_default.png'
import { AiFillPushpin } from 'react-icons/ai'

import { Link } from 'react-router-dom'

function PinnedPost(props) {
    const { image, tags, title, content, date, author, id } = props

    if ([tags, title, content, date, author].map((item) => typeof item === undefined).includes(true)) {
        return (
            <>
            </>
        )
    }

    const contentSummary = content.slice(0, 350)

    const renderedImage = image !== undefined ? <img className="rounded-lg flex w-full sm:w-1/2 bg-contain justify-start mr-7" src={image} /> : <><img className="rounded-lg flex w-full sm:w-1/2 h-full justify-start mr-7" src={blog_default} /></>

    const returnLink = `/post/${id}`

    return (
        <>
            <div className="mb-7 pt-4 pb-4">
                <div className="flex flex-row items-center mb-3"><AiFillPushpin className="mr-1 dark:text-white" /> <p className="text-base text-black dark:text-white font-bold">POSTS EPINGLE</p></div>
                <div className="flex sm:flex-row flex-col justify-start">
                    {renderedImage}
                    <div className="mt-3 mb-3 flex flex-col w-full sm:w-1/2">
                        <p className="font-normal dark:text-white text-sm pb-2"><span className="font-medium">{tags}</span> &#8226; {date}</p>
                        <Link to={returnLink} className="dark:text-white transition-colors font-bold hover:text-cyan-700 dark:hover:text-cyan-500 text-xl sm:text-3xl pb-2 sm:pb-3">{title}</Link>
                        <p className="italic font-normal text-gray-700 dark:text-gray-400 text-base sm:text-lg pb-3">{contentSummary}</p>
                        <p className="dark:text-white font-medium flex justify-end flex-1 items-end text-sm">{author}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PinnedPost