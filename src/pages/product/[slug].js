import BreadCrumb from "@/components/layout/BreadCrumb";
import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import { BiRupee } from "react-icons/bi";
import { toast } from "react-hot-toast";
import { addToCart, getCartItems } from "@/utils/cardItems";
import Link from "next/link";

function SingleProduct({ product }) {
  const [qty, setQty] = useState(1);
  return (
    <>
      <Head>
        <title>Product Name</title>
      </Head>
      <main>
        <BreadCrumb title={"Product"} />
        <div className="row mt-3  rounded bg-light align-items-start shadow ">
          <div className="col-lg-5">
            <div className="p-2 pt-3">
              <Link href="/cart">
                <Image
                  className="border"
                  src={product?.thumbnail}
                  alt={product?.title}
                  width={490}
                  height={450}
                />
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-light mt-3">
              <h2>{product?.title}</h2>
              <h4 className="card-title d-flex align-items-center">
                <BiRupee size={21} />
                {product?.price}
              </h4>
              <h5 className="mt-2">Description</h5>
              <p> {product?.description}</p>
              <h5 className="mt-2">discountPercentage</h5>
              <p> {product?.discountPercentage}</p>
              <h5 className="mt-2">Rating</h5>
              <p> {product?.rating}</p>
              <h5 className="mt-2">Stock</h5>
              <p> {product?.stock}</p>
              <h5 className="mt-2">Brand</h5>
              <p> {product?.brand}</p>
              <h5 className="mt-2">Category</h5>
              <p> {product?.category}</p>

              <div className="d-flex justify-content-between align-items-center gap-4 mb-5">

                <div className="w-auto bg-light  d-flex gap-2">
                  <b>Qty:</b>
                  <div class="input-group input-group-sm  w-50 ">
                    <button class="input-group-text btn btn-sm  btn-outline-dark" onClick={() => setQty((qty > 1) ? qty - 1 : 1)}>
                      -
                    </button>
                    <input type="tel" value={qty} class="form-control bg-light border-dark" />
                    <button
                      class="input-group-text btn btn-sm btn-outline-dark" onClick={() => setQty(qty + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="d-flex  w-75 h-50 gap-3">
                  <button
                    type="button"
                    className="btn h-25 btn-warning pt-2 pb-2 px-3 fw-semibold "
                    onClick={(e) => {
                      addToCart(product, 1),
                        toast.success("Successfully item add");
                    }}
                  >
                    ADD To Cart
                  </button>
                  <Link href="/cart">

                    <button type="button" className="btn btn-success pt-2 pb-2 px-3 fw-semibold">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default SingleProduct;

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
