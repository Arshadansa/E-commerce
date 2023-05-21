import ProductCard from "@/components/cards/ProductCard";
import BreadCrumb from "@/components/layout/BreadCrumb";
import { useRouter } from "next/router";
import React from "react";

function CategoryProducts({ products }) {
  const router = useRouter();
  const categoryName = router?.query?.slug;

  return (
    <>
      <head>
        <title>{categoryName}</title>
      </head>
      <main className="mb-4">
        <BreadCrumb title={`${categoryName?.toLocaleUpperCase()}-Products`} />
        <div className="row">
          {products &&
            products.map((elements) => {
              return (
                <div key={elements.id} className="col-md-4">
                  <div className="mt-3">
                    <ProductCard product={elements} />
                  </div>
                </div>
              );
            })}
        </div>
      </main>
    </>
  );
}

export default CategoryProducts;

export async function getServerSideProps(context) {
  const category = context.params.slug;
  let products = [];
  try {
    const response = await fetch(
      `https://dummyjson.com/products/category/${category}`
    );
    const result = await response.json();
    products = result.products;
  } catch (error) {
    return { notFound: true };
  }
  return {
    props: {
      products,
    },
  };
}
