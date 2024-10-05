'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

const Sidebar = () => {
    const router = useRouter();
  return (
    <>
     <section className="text-white body-font bg-black min-h-screen">
        <div className="container mx-auto flex flex-col p-5">
          <span className="title-font font-bold text-center text-white mb-4 md:mb-0" onClick={()=> router.push('/admin/dash') }>
          iBlogs
          </span>
          <nav className=" mt-10 md:ml-auto md:mr-auto flex flex-col items-center text-base justify-center">
            <span className="cursor-pointer mb-5" onClick={() => router.push('/admin/posts/create')} >Add Posts</span>
            <span className="cursor-pointer mb-5" onClick={()=> router.push('/admin/posts')} >All Posts</span>
          </nav>
        </div>
      </section>
    </>
  )
}

export default Sidebar
