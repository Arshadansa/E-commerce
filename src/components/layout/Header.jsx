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
      <nav className="navbar navbar-top-bg  text-white d-none d-md-block">
        <div className="container-md ">
          <i className="nav-item navbar-nav flex-row gap-2  ">
            Get Up to 70% Discount Hurry Up
            <div className="">
              <Image
                src="/image/announcement.jpg"
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
              {/* <li  >
                <Link class=" active" href="/Registration">
                  <button class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Create Account</button>
                </Link>
              </li> */}

              <li >
                <Link class=" active" href="/Registration">
                  <button class="btn btn-primary btn-md mx-2" data-bs-toggle="modal" href="#exampleModalToggle" role="button"> Create Account</button>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav >

      <nav class="navbar navbar-bg text-white d-none d-md-block">
        <div class="container-md">
          <Link href="/" className="navbar-brand">
            <Image
              src="/image/nwg-logo.png"
              width={150}
              height={60}
              alt="nwg logo"
            />
          </Link>

          <Link
            className="navbar-item nav-link d-flex gap-1 align-items-center text-white"
            href="/cart"
          >
            <span className="p-1 rounded-circle navbar-bg">
              <BsCart4 size={30} className="pb-1" />
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
        <div className="collapse navbar-collapse p" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              href="/"
              className="nav-item nav-link active fs-6  text-md-start"
            >
              Store
            </Link>
            <Link
              href="/About"
              className="nav-item fs-6  text-md-start nav-link active"
            >
              About Us
            </Link>
            <Link
              href="/Contact"
              className="nav-item fs-6  text-md-start nav-link active"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
