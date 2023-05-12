import React from "react";
import { BiCategory } from "react-icons/bi";
import Link from "next/link";
import { BsDashCircle } from "react-icons/bs";
import useSwr from "swr";
import { fetcher } from "@/utils/swrFetcher";

function Sidebar() {
  // const categories = [1, 2, 3, 4, 5, 6, 7];
  const { data, error, isLoading } = useSwr(
    "https://dummyjson.com/products/categories",
    fetcher
  );
  console.log(data);
  if (error) return <div>Failed to load</div>;
  console.log(data);
  if (isLoading) return <div>Loading</div>;

  return (
    <div className="w-100 shadow-lg  rounded ">
      <ul className="list-group ">
        <li className="list-group-item   d-flex align-items-center navbar-top-bg">
          <h5 className="d-flex align-items-center mt-3 text-white text-uppercase">
            <BiCategory className="m-1 " />
            Categories
          </h5>
        </li>
        {data.map((category, item) => {
          return (
            <Link
              key={item}
              href={`/category/${category}`}
              className="text-decoration-none"
            >
              <li className="list-group-item bg-pri list-group-item-action  text-capitalize d-flex align-items-center">
                <BsDashCircle size={26} className="m-2" />
                {category}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
