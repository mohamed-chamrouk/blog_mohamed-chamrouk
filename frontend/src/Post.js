/* This example requires Tailwind CSS v2.0+ */
import { AiFillPushpin } from 'react-icons/ai'

import logo from './logo.svg'

export default function Example() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-7">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start items-center">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src={logo}
                alt=""
              />
            </a>
            <p className="ml-3 font-bold leading-5" >Mohamed<br />Chamrouk.</p>
          </div>
          <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Accueil
          </a>
          <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Projets
          </a>
          <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
            Portofolio
          </a>
          <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
            A propos de moi
          </a>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a href="#" className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-lg text-cyan-500 bg-cyan-100 hover:bg-cyan-200 focus:ring focus:ring-cyan-50">
              S'identifier
            </a>
          </div>
        </div>

        {/* Pinned post */}
        <div className="mb-7 pb-[100px]">
          <div className="flex justify-center">
            <div className="mt-3 mb-3 flex flex-col">
              <a className="font-bold text-3xl pb-2 pt-7" href="#">Création de mon nouveau blog !</a>
              <p className="font-normal text-sm pb-6"><span className="font-medium">DEVELOPEMENT</span> &#8226; 14 juil. 2022</p>
              <img className="rounded-lg flex w-full bg-auto justify-start mr-7 pb-7" />
              <p className="font-normal text-gray-700 text-lg pb-3">Bienvenue sur mon tout nouveau blog. Ce nouveau site web fait suite à mon ancien site web statique et apporte une nouvelle stack complète sous JavaScript.</p>
              <p className="font-medium flex justify-end flex-1 items-end text-sm">Mohamed Chamrouk</p>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
