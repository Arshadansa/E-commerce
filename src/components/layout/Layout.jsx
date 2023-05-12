import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

import CarouselBanner from "./CarouselBanner";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="container-md mt-4">
        <div className="mb-5">
          <CarouselBanner />
        </div>
        <div className="row g-4">
          <div className="col-12 col-md-9 ">{children}</div>
          <div className="col-md-3 d-none d-md-block h-100 ">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
