import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

import CarouselBanner from "./CarouselBanner";

function Layout({ children }) {
  return (
    <>
      <Header />

      <div className="">
        <CarouselBanner />
      </div>
      <div className="container-md mt-4">

        <div className="row g-4">

          <div className="col-md-12 d-none d-md-block  ">
            <Sidebar />
          </div>

        </div>
        <div className="">{children}</div>
      </div>
    </>
  );
}

export default Layout;
