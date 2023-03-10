import Link from 'next/link'
import React from 'react'

type Props = {}

const SearchJobHome = (props: Props) => {
  return (
    <section className="bg-black  border">
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-xs  rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-1.5 mr-3">New</span> <span className="text-sm font-medium">Jawbs is out! See whats new</span> 
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
        <p className="mb-8 text-lg font-normal bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent lg:text-xl sm:px-16 xl:px-48 ">Here at Jawbs we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-black ">
                Learn more
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
            <Link href="/jobs" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-300 rounded-lg border border-gray-300 hover:bg-red-300 focus:ring-4 focus:ring-gray-100  ">
                <svg className='mr-2 -ml-1 w-5 h-5' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,6H16V5a2,2,0,0,0-2-2H10A2,2,0,0,0,8,5V6H5A3,3,0,0,0,2,9v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM10,5h4V6H10ZM20,18a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13H8v1a1,1,0,0,0,2,0V13h4v1a1,1,0,0,0,2,0V13h4Zm0-7H4V9A1,1,0,0,1,5,8H19a1,1,0,0,1,1,1Z"/></svg>
                Check Jawbs
            </Link>  
        </div>
       
    </div>
</section>
  )
}

export default SearchJobHome