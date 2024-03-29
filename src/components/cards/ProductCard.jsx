import React from "react";
import Link from "next/link";
import { BiRupee } from "react-icons/bi";
import Image from "next/image";
import { BsCart4 } from "react-icons/bs";
import { addToCart, getCartItems } from "@/utils/cardItems";

import { toast } from "react-hot-toast";

function ProductCard({ product }) {
  console.log({ product });
  return (
    <div className="card">
      <Link href={`product/${product?.id}`}>
        <div className="object-fit-cover">
          <Image
            src={product?.thumbnail}
            width={200}
            height={200}
            alt={product?.title}
            className="card-img-top"
          />
        </div>
      </Link>
      <div className="card-body">
        <Link href={`product/${product?.id}`} className="text-decoration-none">
          <h5 className="card-title text-black">{product?.title}</h5>
        </Link>
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="card-title d-flex align-tems-center">
            <BiRupee size={21} />
            {product?.price}
          </h6>
          <div className="d-flex">
            <button
              className="btn btn-warning btn-sm mx-2"
              onClick={(e) => {
                addToCart(product, 1),
                  toast.success("Successfully item add");
              }}
            >
              <BsCart4 size={22} />
            </button>
            < Link href="/cart">
              <button className="btn btn-success btn-sm">Buy</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
