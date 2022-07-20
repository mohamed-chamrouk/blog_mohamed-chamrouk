import React from "react"

import {Link} from 'react-router-dom'

function SinglePost(props) {
    const {image, tags, title, content, date, author, id} = props

    if ([tags, title, content, date, author].map((item) => typeof item === undefined).includes(true)) {
        return(
            <>
            </>
        )
    }

    /**tags.forEach((element) => {
        tag.concat(`${element}, `)
    });*/

    const renderedImage = image !== undefined ? <img className="rounded-lg flex w-full bg-auto justify-start mr-7" src={image} /> : <></>
    
    const returnLink = `/post/${id}`

    return (
        <div className="pb-7">
            { renderedImage }
            <div className="mt-3 mb-3 flex flex-col p-2 border-b-[4px] border-gray-50 dark:border-gray-800">
                <p className="font-normal text-sm pb-2 dark:text-white"><span className="font-medium">{tags}</span> &#8226; {date}</p>
                <Link to={returnLink} className="dark:text-white transition-colors hover:text-cyan-700 dark:hover:text-cyan-500 font-bold text-xl sm:text-3xl pb-2 sm:pb-3" href="#">{title}</Link>
                <p className="italic font-normal text-gray-700 dark:text-gray-400 text-base sm:text-lg pb-3">{content}</p>
                <p className="dark:text-white font-medium flex justify-end flex-1 items-end text-sm">{author}</p>
            </div>
        </div>
    )
}

export default SinglePost