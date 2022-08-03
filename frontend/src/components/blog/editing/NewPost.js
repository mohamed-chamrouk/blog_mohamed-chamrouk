import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import store from '../../../store'

var tagList = []
const filters = [{
    name: 'hidden',
    label: 'Cacher',
    checked: false
}, {
    name: 'pinned',
    label: 'Epingler',
    checked: false
}]

function NewPost() {
    const [tags, setTags] = useState('')
    const [tagL, setTagL] = useState('')
    var renderedTags = []

    if (tags.includes(' ')) {
        if (tags !== ' ') {
            tagList.push(tags.slice(0, -1))
        }
        setTags('')
    }

    const handleTagsChange = (event) => {
        setTags(event.target.value)
    }

    const handleTagsRemove = (event) => {
        for (var i = 0; i < tagList.length; i++) {
            if (tagList[i] === event.currentTarget.textContent.slice(2)) {
                tagList.splice(i, 1);
                i--;
            }
        }
        setTagL(event.currentTarget.textContent)
    }

    tagList.forEach((item) => {
        renderedTags.push(<div key={item + new Date()} onClick={handleTagsRemove} className="flex items-start justify-start cursor-pointer hover:bg-red-400 bg-gray-100  dark:bg-gray-800 dark:hover:bg-red-600 rounded-lg p-1 py-0 text-light">
            <p className="mr-1">&#x2715;</p> {item}
        </div>)
    })

    return (
        <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="http://localhost:4000/api/db/addPost" method="POST">
                <div className="sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 space-y-6 sm:p-6 dark:text-white">
                        <div className="grid grid-cols-3 gap-6">
                            <div className="col-span-3 sm:col-span-2">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Titre
                                </label>
                                <div className="mt-1 flex rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="focus:border focus:ring-indigo-500 focus:border-cyan-500 p-1 flex-1 block w-full rounded-md sm:text-sm border border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                Corps du post
                            </label>
                            <div className="mt-1">
                                <textarea
                                    id="content"
                                    name="content"
                                    rows={3}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 p-1 block w-full sm:text-sm border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md"
                                    defaultValue={''}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                Tags
                            </label>
                            <div className="flex flex-row gap-2 my-1">
                                {renderedTags}
                            </div>
                            <div className="mt-1">
                                <input
                                    id="tags"
                                    name="tags"
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 p-1 block w-full sm:text-sm border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md"
                                    value={tags}
                                    onChange={handleTagsChange}
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                Description
                            </label>
                            <div className="flex flex-row gap-2 my-1">
                            </div>
                            <div className="mt-1">
                                <textarea
                                    id="description"
                                    name="description"
                                    rows={2}
                                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 p-1 block w-full sm:text-sm border border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md"
                                    defaultValue={''}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-start gap-2">
                            {filters.map((item) =>
                                <div key={item.name} className="flex items-center">
                                    <input
                                        id={`${item.name}`}
                                        name={`${item.name}`}
                                        defaultValue={item.checked}
                                        type="checkbox"
                                        defaultChecked={item.checked}
                                        className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                        className="ml-3 min-w-0 flex-1 text-sm font-medium text-gray-700 dark:text-gray-200"
                                    >
                                        {item.label}
                                    </label>
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Image de couverture</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div className="flex text-sm text-gray-600 dark:text-gray-300">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer font-medium text-cyan-500 hover:text-cyan-600 "
                                        >
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 50GB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 text-right sm:px-6">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-500 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewPost