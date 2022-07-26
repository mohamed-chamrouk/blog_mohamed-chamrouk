import { Link } from "react-router-dom";
import React, { useEffect } from 'react';
import { Fragment, useState } from 'react'
import { Popover, Transition, Switch } from '@headlessui/react'
import { useCookies } from 'react-cookie'

import {
  BriefcaseIcon,
  HomeIcon,
  MenuIcon,
  XIcon,
  MoonIcon,
  SunIcon
} from '@heroicons/react/outline'

import logo from '../ressources/logo.svg'

const tabs = [
  {
    name: 'Accueil',
    href: '/',
    icon: HomeIcon
  },
  {
    name: 'A propos de moi',
    href: '/about',
    icon: BriefcaseIcon
  }
]

function Layout(props) {
  const [cookies, setCookie, removeCookie] = useCookies(['dark'])
  const [darkMode, setDarkMode] = useState(cookies.dark === 'true')

  useEffect(() => {
    if (darkMode === true) {
      document.getElementsByTagName("html")[0].classList.add('dark')
    } else {
      document.getElementsByTagName('html')[0].classList.remove('dark')
    }
    setCookie("dark", darkMode, { sameSite: 'none', secure: true })
  }, [darkMode])

  useEffect(() => {
    if (darkMode === true) {
      document.getElementsByTagName("html")[0].classList.add('dark')
    }
  }, [])

  return (
    <>
      <Popover className="relative min-h-full bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="sticky top-0 mx-4 sm:mx-6 bg-white dark:bg-gray-900 flex justify-between items-center border-b-2 border-gray-100 dark:border-gray-800 py-3 sm:py-6 lg:justify-start lg:space-x-10">
            <Link className="flex justify-start items-center" to="/">
              <span className="sr-only">Mohamed Chamrouk.</span>
              <img
                className="h-8 w-auto sm:h-10"
                src={logo}
                alt=""
              />
              <p className="ml-3 text-black dark:text-white font-bold leading-5 text-sm sm:text-base" >Mohamed<br />Chamrouk.</p>
            </Link>
            <div className="my-2 lg:hidden">
              <Popover.Button className="bg-white dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-100 dark:focus:ring-cyan-900">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden lg:flex space-x-10">
              {tabs.map((item) => (
                <Link to={item.href} className="transition-colors text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-white" key={item.name}>
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 items-center justify-end w-0">
              {!darkMode ? <MoonIcon className="h-5 mr-2 text-gray-700" /> : <SunIcon className="h-5 mr-2 text-gray-200" />}
              <Switch
                checked={darkMode}
                onChange={
                  setDarkMode
                }
                className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'
                  } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Dark mode</span>
                <span
                  className={`transform transition ease-in-out duration-200 
                ${darkMode ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white`}
                />
              </Switch>
            </div>
            <div className="hidden items-center justify-end lg:flex-1 lg:w-0">
              <a href="/login" className="flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-lg text-cyan-500 bg-cyan-100 hover:bg-cyan-200 focus:ring focus:ring-cyan-50">
                S'identifier
              </a>
            </div>
          </div>
          <div className="px-4 sm:px-6">
            {props.children}
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute top-0 z-500 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-gray-800 divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <Link className="flex justify-start items-center" to="/">
                    <span className="sr-only">Mohamed Chamrouk.</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src={logo}
                      alt=""
                    />
                    <p className="ml-3 font-bold leading-5 text-sm sm:text-base dark:text-white" >Mohamed<br />Chamrouk.</p>
                  </Link>
                  <div className="-mr-2">
                    <Popover.Button className="transition-all bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-100 dark:focus:ring-cyan-900">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {tabs.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <item.icon className="flex-shrink-0 h-6 w-6 text-cyan-500" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium dark:text-gray-100 text-gray-900">{item.name}</span>
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="hidden py-6 px-5 space-y-6">
                <div>
                  <a href="/login" className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-lg text-cyan-500 bg-cyan-100 hover:bg-cyan-200 focus:ring focus:ring-cyan-100">
                    S'identifier
                  </a>
                </div>
              </div>
              <div className="w-full flex border-none py-6 px-5 items-center justify-center">
                {!darkMode ? <MoonIcon className="h-5 mr-2 text-gray-700" /> : <SunIcon className="h-5 mr-2 text-gray-200" />}
                <Switch
                  checked={darkMode}
                  onChange={
                    setDarkMode
                  }
                  className={`${darkMode ? 'bg-gray-700' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                >
                  <span className="sr-only">Dark mode</span>
                  <span
                    className={`transform transition ease-in-out duration-200 
                ${darkMode ? 'translate-x-6' : 'translate-x-1'
                      } inline-block h-4 w-4 transform rounded-full bg-white`}
                  />
                </Switch>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>)
}

export default Layout