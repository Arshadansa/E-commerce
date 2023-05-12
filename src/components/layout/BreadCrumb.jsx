import React from "react";
import { BiLeftArrowCircle } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import { BiRightArrow } from "react-icons/bi";
import Link from "next/link";
import { useRouter } from "next/router";

function BreadCrumb({ title }) {
  const router = useRouter();

  return (
    <div className=" rounded shadow-lg w-auto m-2  bg-light d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center gap-1">
        <div className="mx-3 d-flex align-items-center">
          <Link href="/" className="text-decoration-none text-black mb-1">
            <AiOutlineHome size={35} />
          </Link>
          <BiRightArrow size={35} />
        </div>
        <h4 className="text-center py-2 mt-1  text-uppercase">{title}</h4>
      </div>

      <div className="px-2 mt-2">
        <Link
          href="#"
          className="text-decoration-none p-3 text-black" onClick={()=> router.back()}
        >
          <BiLeftArrowCircle size={35} />
        </Link>
      </div>
    </div>
  );
}

export default BreadCrumb;
