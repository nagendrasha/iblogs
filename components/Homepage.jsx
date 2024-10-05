'use client'
import Header from "./Header";
import Posts from "./Posts";
import Image from "next/image";
import blogs from "../assets/images/blogs.png";
import { useState, useEffect } from "react";
import { useTheme } from '../app/context/ThemeContext';


const Homepage = () => {

  const { theme } = useTheme();

  return (
    <>
      <Header />
      <section className={` ${theme === 'light' ? 'bg-white text-gray-600' : 'bg-black text-white'} body-font`}>
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-mediu">
              Welcome to iBlogs
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              Your go-to destination for insightful, engaging, and diverse
              blogs. Whether you are here to learn, get inspired, or stay updated
              on the latest trends, iBlogs brings you expert opinions and fresh
              perspectives on topics that matter. Start exploring today and
              unlock a world of knowledge!
              <br />
              Discover, Learn, Grow <br />
              Join our community of readers and explore articles on technology, lifestyle, business, and more.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none rounded text-lg">
              Get Started
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image src={blogs}  className="w-auto" />
          </div>
        </div>
      </section>
      <Posts />
    </>
  );
};

export default Homepage;
