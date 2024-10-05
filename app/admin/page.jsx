import React from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";

const page = () => {
  return (
    <>
      <div className="w-full flex">
        <div className="w-1/5">
          <Sidebar />
        </div>
        <div className="w-4/5">
          <Header />
          <div className="p-4">
            <section>
              <div className="container w-full flex content-center">
                <div className="p-4 md:w-1/4">
                  <div className="bg-black rounded-lg shadow-md p-4">
                    <h2 className="text-lg text-center text-white font-bold mb-4">
                      {" "}
                      All Posts
                    </h2>
                  </div>
                </div>
                <div className="p-4 md:w-1/4">
                  <div className="bg-black rounded-lg shadow-md p-4">
                    <h2 className="text-lg text-center text-white font-bold mb-4">
                      Users
                    </h2>
                  </div>
                </div>
                <div className="p-4 md:w-1/4">
                  <div className="bg-black rounded-lg shadow-md p-4">
                    <h2 className="text-lg text-center text-white font-bold mb-4">
                      Category
                    </h2>
                  </div>
                </div>
                <div className="p-4 md:w-1/4">
                  <div className="bg-black rounded-lg shadow-md p-4">
                    <h2 className="text-lg text-center text-white font-bold mb-4">
                      Comment
                    </h2>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
