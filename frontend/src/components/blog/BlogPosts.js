import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import SinglePost from './SinglePost'
import PinnedPost from './PinnedPost'

import store from '../../store'
import { fetchPosts, selectBlog } from './blogSlice'

function BlogPosts() {
    useEffect(() => {
        store.dispatch(fetchPosts())
    }, [])

    const posts = useSelector(selectBlog)

    let renderedPosts = [], renderPinnedPost = []

    //TODO : Fix the fact that the posts sw up in a grid rather than in two columns with separate scales
    if (posts[0] !== undefined) {
        posts[0].forEach((post) => {
            renderedPosts.push(
                <div className="flex flex-col justify-start col-span-1 " key={post._id}>
                    <SinglePost title={post.title} tags={post.tags} content={post.description} date={post.postTime} author={post.author} key={post._id} id={post._id} />
                </div>
            )

            if (post.pinned) {
                renderPinnedPost[0] = (
                    <PinnedPost title={post.title} tags={post.tags} content={post.description} date={post.postTime} author={post.author} key={post._id} id={post._id} />
                )
            }
        })
    }

    return (
        <div>
            <div className="flex flex-col-reverse">
                {/* Pinned post */}
                {renderPinnedPost}

                {/* Welcome banner */}
                <div className="w-full bg-[url('./plus.svg')] dark:bg-[url('./plus_dark.svg')] flex items-start flex-col bg-top mt-3 mb-1 sm:mb-5 pt-1 pb-3 sm:pt-3 sm:pb-7">
                    <p className="ml-2 mr-2 text-black dark:text-white font-sans text-xl text-left font-bold sm:text-3xl sm:ml-7 sm:mr-7">Bienvenue sur mon <span className="text-cyan-500">blog</span> !</p>
                    <p className="ml-2 mr-2 text-black dark:text-white text-sm sm:text-base sm:ml-7 sm:mr-7">Mon blog personnel, centré sur le développement web.</p>
                </div>
            </div>

            {/* Recent posts */}
            <div className="">
                {renderedPosts}
            </div>
        </div>
    )
}

export default BlogPosts