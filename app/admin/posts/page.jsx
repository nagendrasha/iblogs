"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../layout/Sidebar";
import Header from "../layout/Header";

const Page = () => {
  const [allPosts, setAllPosts] = useState([]);

  const getAllPosts = async () => {
    try {
      const response = await axios.get("/api/posts");
      setAllPosts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  };

  const deletePost = async (id) => {
    try {
      const response = await axios.delete(`/api/posts/${id}`);
      if (response.status === 200) {
        // Post deleted successfully
        getAllPosts(); // Refresh the list of posts after deletion
      } else {
        console.error("Failed to delete post:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="w-full flex">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="w-4/5">
        <Header />
        <div className="p-4">
          <section>
            <div className="p-6">
              <h1 className="text-3xl text-white mb-4">All Posts</h1>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white text-left rounded shadow">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="py-2 px-4 border-b text-black">Title</th>
                      <th className="py-2 px-4 border-b text-black">
                        Category
                      </th>
                      <th className="py-2 px-4 border-b text-black">Author</th>
                      <th className="py-2 px-4 border-b text-black">Date</th>
                      <th className="py-2 px-4 border-b text-black">Content</th>
                      <th className="py-2 px-4 border-b text-black">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {allPosts.length > 0 ? (
                      allPosts.map((post, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                          <td className="py-2 px-4 border-b text-black">
                            {post.title}
                          </td>
                          <td className="py-2 px-4 border-b text-black">
                            {post.category}
                          </td>
                          <td className="py-2 px-4 border-b text-black">
                            {post.author}
                          </td>
                          <td className="py-2 px-4 border-b text-black">
                            {new Date(post.date).toLocaleDateString()}
                          </td>
                          <td className="py-2 px-4 border-b text-black">
                            {post.content}
                          </td>
                          <td>
                            <button
                              className="text-blue-500 hover:text-blue-700"
                              onClick={() => alert("Edit functionality not implemented yet")}
                            >
                              Edit
                            </button>
                            <button
                              className="text-red-500 hover:text-red-700 ml-4"
                              onClick={() => deletePost(post._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" className="text-center py-4">
                          No posts found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
