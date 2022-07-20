import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import { IoReturnDownBackOutline } from 'react-icons/io5'

import store from '../../store'
import { fetchUniquePost, selectPosts } from './postSlice'

function BlogDetail() {
    const { id } = useParams()

    useEffect(() => {
        store.dispatch(fetchUniquePost(id))
    }, [])

    let post = useSelector(selectPosts)

    post = post[0]
    //TODO : clean this up to not have to select out of an array

    const placeHolderPost = { "_id": "62d2afcc7515204b5e5a6bd6", "title": "Post loading...", "content": "", "hidden": true, "pinned": false, "tags": [""], "postTime": "", "author": "" }

    const { image, tags, title, content, postTime, author } = post === undefined ? placeHolderPost : post

    if ([tags, title, content, postTime, author].map((item) => typeof item === undefined).includes(true)) {
        return (
            <>
            </>
        )
    }

    const renderedImage = image !== undefined ? <img className="rounded-lg flex w-full bg-auto justify-start mr-7 pb-7" src={image} /> : <></>

    return (
        <>
            <div className="mt-3 mb-3 pb-7 flex flex-col justify-start w-full">
                <div className="flex flex-row justify-center items-start pb-2 pt-7">
                    <Link to="/" ><span className="transition-colors hover:text-cyan-700 dark:hover:text-cyan-300 rounded-full px-3 sm:px-4 pb-1 mb-10 mr-1 bg-gray-200 dark:bg-gray-700 dark:text-white font-bold text-xl sm:text-3xl ">&#8249;</span></Link>
                    <p className="dark:text-white pr-[35px] sm:pr-[46px] flex-1 text-center font-bold text-xl sm:text-3xl">{title}</p>
                </div>
                <p className="font-normal text-center text-sm pb-6 dark:text-white"><span className="font-medium">{tags}</span> &#8226; {postTime}</p>
                {renderedImage}
                <div className="flex flex-1 items-center flex-col justify-center">
                    <ReactMarkdown className="font-normal dark:text-gray-200 text-gray-700 text-base sm:text-lg pb-3  max-w-4xl items-center">{content}</ReactMarkdown>
                </div>
                <p className="font-medium dark:text-white flex justify-end flex-1 items-end text-sm">{author}</p>
            </div >
        </>
    )
}

export default BlogDetail