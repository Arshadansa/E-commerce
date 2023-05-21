import React from "react";
import { BiCategory } from "react-icons/bi";
import Link from "next/link";
import { BsDashCircle } from "react-icons/bs";

import useSwr from "swr";
import { fetcher } from "@/utils/swrFetcher";
import Image from "next/image";




function Sidebar() {
  // const categories = [1, 2, 3, 4, 5, 6, 7];


  const { data, error, isLoading } = useSwr(
    "https://dummyjson.com/products/categories",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  console.log(data);
  if (isLoading) return <div>Loading</div>;

  return (
    <>
      <div className="bg-light">
        <h4 className="text-center p-2 mb-3 text-uppercase">Categories</h4>
      </div>
      <div className="flex-wrap d-flex flex-row text-start px-6  gap-4">
        {/* <ul className="list-group ">
        <li className="list-group-item   d-flex align-items-center navbar-top-bg">
          <h5 className="d-flex align-items-center mt-3 text-white text-uppercase">
            <BiCategory className="m-1 " />
            Categories
          </h5>
        </li>
      </ul> */}
        {/* <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link
              href="/"
              className="nav-item nav-link active fs-6  text-md-start"
            >
              Store
            </Link>
            <Link
              href="/about"
              className="nav-item fs-6  text-md-start nav-link active"
            >
              About Us
            </Link>
            <Link
              href="/support"
              className="nav-item fs-6  text-md-start nav-link active"
            >
              Support
            </Link>
          </div>
        </div> */}

        {
          data.map((category, item) => {
            return (
              <Link
                key={item}
                href={`/category/${category}`}
                className="text-decoration-none"
              >
                <i
                  data-mdb-toggle="animation"
                  data-mdb-animation-start="onHover"
                  data-mdb-animation-reset="true"
                  data-mdb-animation="zoom-out"

                >
                  <div className="text-capitalize flex-fill text-black Small shadow px-2"
                  >

                    {/* <Image
                  className="border"
                  src={product?.thumbnail}
                  alt={product?.title}
                  width={30}
                  height={30}
                /> */}
                    {/* <p className='pt-2'> {item?.title}</p> */}

                    {category}
                    <hr></hr>
                  </div>
                </i>
              </Link>
            );
          })
        }

      </div >
    </>
  );
}

export default Sidebar;
export async function getServerSideProps(context) {
  const productId = context.params.slug;
  let product = [];
  try {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    product = await response.json();
  } catch (error) {
    return { notFound: true };
  }
  return {
    props: {
      product,
    },
  };
}
