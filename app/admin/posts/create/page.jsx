import React from "react";
import Header from "../../layout/Header";
import Sidebar from "../../layout/Sidebar";

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
                
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
