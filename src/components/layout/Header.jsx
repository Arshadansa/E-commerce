import { getCartItems } from "@/utils/cardItems";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";

function Header() {
  const [cart, setCart] = useState(0);

  useEffect(() => {
    setInterval(() => {
      const cartItems = getCartItems();
      setCart(cartItems.length)
    }, 1000)
  }, [])
  return (
    <>
      <nav class="navbar navbar-top-bg  text-white d-none d-md-block">
        <div class="container-md ">
          <i className="nav-item navbar-nav flex-row gap-2  ">
            Get Up to 70% Discount Hurry Up
            <div className="">
              <Image
                src="data:image/png;base64,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"
                className=""
                width={20}
                height={20}
                alt="nwg logo"
              />
            </div>
          </i>
          <div className="dropdown p-0">
            <span
              className="dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              My Account
            </span>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" href="#">
                  Register
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav class="navbar navbar-bg text-white d-none d-md-block">
        <div class="container-md">
          <Link href="/" className="navbar-brand">
            <Image
              src="/image/logo.png"
              width={90}
              height={50}
              alt="nwg logo"
            />
          </Link>

          <Link
            className="navbar-item nav-link d-flex gap-1 align-items-center text-white"
            href="/cart"
          >
            <span className="p-1 rounded-circle navbar-bg">
              <BsCart4 size={21} className="pb-1" />
            </span>
            {cart} items
          </Link>
        </div>
      </nav>

      <nav class="navbar  navbar-expand-lg shadow-sm rounded container px-2 mb-2 ">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
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
        </div>
      </nav>
    </>
  );
}

export default Header;
