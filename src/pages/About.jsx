import Link from 'next/link'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { BsCamera, BsFillHandThumbsUpFill, BsPeopleFill, BsStarFill } from 'react-icons/bs'
import { FaRocket, FaStore } from 'react-icons/fa'

function About() {
    return (
        <>
            <div class="bg-primary text-white py-5">
                <div class="container px-5 ">
                    <h1>
                        Best products & <br />
                        brands in our store
                    </h1>
                    <p>
                        Trendy Products, Factory Prices, Excellent Service
                    </p>
                    <button type="button" class="btn btn-outline-light mx-2">
                        Learn more
                    </button>
                    <button type="button" class="btn btn-light shadow-0 text-primary pt-2 border border-white">
                        <span class="">Purchase now</span>
                    </button>
                </div>
            </div>
            <section>
                <div class="container my-5">
                    <header class="mb-4">
                        <h3>New products</h3>
                    </header>

                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
                            <div class="card w-100 my-2 border-lg Small shadow">
                                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/1.webp" class="card-img-top" />
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">GoPro HERO6 4K Action Camera - Black</h5>
                                    <p class="card-text">$790.50</p>
                                    <div class="card-footer bg-white d-flex align-items-end pt-3 px-2 pb-2  bg-white mt-auto">
                                        <a href="#!" class="btn btn-primary shadow-0 py-2 me-1" >Add to cart</a>
                                        <a href="#!" class="btn btn-light border  icon-hover"><AiFillHeart size={25} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
                            <div class="card w-100 my-2 border-lg Small shadow">
                                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/2.webp" class="card-img-top" />
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Canon camera 20x zoom, Black color EOS 2000</h5>
                                    <p class="card-text">$320.00</p>
                                    <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 bg-white mt-auto">
                                        <a href="#!" class="btn btn-primary shadow-0 py-2 me-1">Add to cart</a>
                                        <a href="#!" class="btn btn-light border icon-hover"><AiFillHeart size={25} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
                            <div class="card w-100 my-2 border-lg Small shadow">
                                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/3.webp" class="card-img-top" />
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Xiaomi Redmi 8 Original Global Version 4GB</h5>
                                    <p class="card-text">$120.00</p>
                                    <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 bg-white mt-auto">
                                        <a href="#!" class="btn btn-primary shadow-0 py-2 me-1">Add to cart</a>
                                        <a href="#!" class="btn btn-light border icon-hover"><AiFillHeart size={25} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
                            <div class="card w-100 my-2 border-lg Small shadow">
                                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/4.webp" class="card-img-top" />
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Apple iPhone 12 Pro 6.1" RAM 6GB 512GB Unlocked</h5>
                                    <p class="card-text">$120.00</p>
                                    <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 bg-white mt-auto">
                                        <a href="#!" class="btn btn-primary shadow-0 py-2 me-1">Add to cart</a>
                                        <a href="#!" class="btn btn-light border icon-hover"><AiFillHeart size={25} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
                            <div class="card w-100 my-2 border-lg Small shadow">
                                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/5.webp" class="card-img-top" />
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Apple Watch Series 1 Sport Case 38mm Black</h5>
                                    <p class="card-text">$790.50</p>
                                    <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 bg-white mt-auto">
                                        <a href="#!" class="btn btn-primary shadow-0 py-2 me-1">Add to cart</a>
                                        <a href="#!" class="btn btn-light border icon-hover"><AiFillHeart size={25} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
                            <div class="card w-100 my-2 border-lg Small shadow">
                                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/6.webp" class="card-img-top" />
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">T-shirts with multiple colors, for men and lady</h5>
                                    <p class="card-text">$120.00</p>
                                    <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 bg-white mt-auto">
                                        <a href="#!" class="btn btn-primary shadow-0 py-2 me-1">Add to cart</a>
                                        <a href="#!" class="btn btn-light border icon-hover"><AiFillHeart size={25} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
                            <div class="card w-100 my-2 border-lg Small shadow">
                                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.webp" class="card-img-top" />
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Gaming Headset 32db Blackbuilt in mic</h5>
                                    <p class="card-text">$99.50</p>
                                    <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 bg-white mt-auto">
                                        <a href="#!" class="btn btn-primary shadow-0 py-2 me-1">Add to cart</a>
                                        <a href="#!" class="btn btn-light border icon-hover "><AiFillHeart size={25} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-6 d-flex">
                            <div class="card w-100 my-2 border-lg Small shadow">
                                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp" class="card-img-top" />
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">T-shirts with multiple colors, for men and lady</h5>
                                    <p class="card-text">$120.00</p>
                                    <div class="card-footer d-flex align-items-end pt-3 px-0 pb-0 bg-white mt-auto">
                                        <a href="#!" class="btn btn-primary shadow-0 py-2 me-1">Add to cart</a>
                                        <a href="#!" class="btn btn-light border icon-hover"><AiFillHeart size={25} /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Products-- >
      
      < !--Feature --> */}
            <section class="mt-5">
                <div class="container text-dark bg-light pt-3 px-3">
                    <header class="pt-4 pb-3 px-3">
                        <h3>Why choose us</h3>
                    </header>

                    <div class="row mb-4 bg-light">
                        <div class="col-lg-4 col-md-6">
                            <figure class="d-flex align-items-center mb-4">
                                <span class="rounded-circle border bg-white p-3 d-flex me-2 mb-2">
                                    <BsCamera size={30} />
                                </span>
                                <figcaption class="info">
                                    <h6 class="title">Reasonable prices</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
                                </figcaption>
                            </figure>
                            {/* <!-- itemside // --> */}
                        </div>
                        {/* <!-- col // --> */}
                        <div class="col-lg-4 col-md-6">
                            <figure class="d-flex align-items-center mb-4">
                                <span class="rounded-circle bg-white p-3 d-flex me-2 mb-2">
                                    <BsStarFill size={30} />
                                </span>
                                <figcaption class="info">
                                    <h6 class="title">Best quality</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
                                </figcaption>
                            </figure>
                            {/* <!-- itemside // --> */}
                        </div>
                        {/* <!-- col // --> */}
                        <div class="col-lg-4 col-md-6">
                            <figure class="d-flex align-items-center mb-4">
                                <span class="rounded-circle bg-white p-3 d-flex me-2 mb-2">
                                    <FaRocket size={30} />
                                </span>
                                <figcaption class="info">
                                    <h6 class="title">Worldwide shipping</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
                                </figcaption>
                            </figure>
                            {/* <!-- itemside // --> */}
                        </div>
                        {/* <!-- col // --> */}
                        <div class="col-lg-4 col-md-6">
                            <figure class="d-flex align-items-center mb-4">
                                <span class="rounded-circle bg-white p-3 d-flex me-2 mb-2">
                                    <BsPeopleFill size={30} />
                                </span>
                                <figcaption class="info">
                                    <h6 class="title">Customer satisfaction</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
                                </figcaption>
                            </figure>
                            {/* <!-- itemside // --> */}
                        </div>
                        {/* <!-- col // --> */}
                        <div class="col-lg-4 col-md-6">
                            <figure class="d-flex align-items-center mb-4">
                                <span class="rounded-circle bg-white p-3 d-flex me-2 mb-2">
                                    <BsFillHandThumbsUpFill size={30} />
                                </span>
                                <figcaption class="info">
                                    <h6 class="title">Happy customers</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
                                </figcaption>
                            </figure>
                            {/* <!-- itemside // --> */}
                        </div>
                        {/* <!-- col // --> */}
                        <div class="col-lg-4 col-md-6">
                            <figure class="d-flex align-items-center mb-4">
                                <span class="rounded-circle bg-white p-3 d-flex me-2 mb-2">
                                    <FaStore size={30} />
                                </span>
                                <figcaption class="info">
                                    <h6 class="title">Thousand items</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor</p>
                                </figcaption>
                            </figure>
                            {/* <!-- itemside // --> */}
                        </div>
                        {/* <!-- col // --> */}
                    </div>
                </div>
                {/* <!-- container end.// --> */}
            </section >
            {/* <!-- Blog --> */}
            <section class="mt-5 mb-4">
                <div class="container text-dark">
                    <header class="mb-4">
                        <h3>Blog posts</h3>
                    </header>

                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <article>
                                <a href="#" class="img-fluid">
                                    <img class="rounded w-100" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/1.webp" height="160" />
                                </a>
                                <div class="mt-2 text-muted small d-block mb-1">
                                    <span>
                                        <i class="fa fa-calendar-alt fa-sm"></i>
                                        23.12.2022
                                    </span>
                                    <a href="#" className=' text-decoration-none'><h6 class="text-dark text-decoration-none">How to promote brands</h6></a>
                                    <p>When you enter into any new area of science, you almost reach</p>
                                </div>
                            </article>
                        </div>
                        {/* <!-- col.// --> */}
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <article>
                                <a href="#" class="img-fluid">
                                    <img class="rounded w-100" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/2.webp" height="160" />
                                </a>
                                <div class="mt-2 text-muted small d-block mb-1">
                                    <span>
                                        <i class="fa fa-calendar-alt fa-sm"></i>
                                        13.12.2022
                                    </span>
                                    <a href="#" className=' text-decoration-none'><h6 class="text-dark text-decoration-none">How we handle shipping</h6></a>
                                    <p>When you enter into any new area of science, you almost reach</p>
                                </div>
                            </article>
                        </div>
                        {/* <!-- col.// --> */}
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <article>
                                <a href="#" class="img-fluid">
                                    <img class="rounded w-100" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/3.webp" height="160" />
                                </a>
                                <div class="mt-2 text-muted small d-block mb-1">
                                    <span>
                                        <i class="fa fa-calendar-alt fa-sm"></i>
                                        25.11.2022
                                    </span>
                                    <a href="#" className=' text-decoration-none'><h6 class="text-dark text-decoration-none">How to promote brands</h6></a>
                                    <p>When you enter into any new area of science, you almost reach</p>
                                </div>
                            </article>
                        </div>
                        {/* <!-- col.// --> */}
                        <div class="col-lg-3 col-md-6 col-sm-6 col-12">
                            <article>
                                <a href="#" class="img-fluid">
                                    <img class="rounded w-100" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/posts/4.webp" height="160" />
                                </a>
                                <div class="mt-2 text-muted small d-block mb-1">
                                    <span>
                                        <i class="fa fa-calendar-alt fa-sm"></i>
                                        03.09.2022
                                    </span>
                                    <a href="#" className=' text-decoration-none'><h6 class="text-dark ">Success story of sellers</h6></a>
                                    <p>When you enter into any new area of science, you almost reach</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Blog --> */}
            <footer class="text-center  text-lg-start text-muted mt-3 bg-light px-5">
                {/* <!-- Section: Links  --> */}
                <section class="px-3">
                    <div class="container text-center text-md-start pt-4 pb-4">
                        {/* <!-- Grid row --> */}
                        <div class="row mt-3">
                            {/* <!-- Grid column --> */}
                            <div class="col-12 col-lg-3 col-sm-12 mb-2">
                                {/* <!-- Content --> */}
                                <Link href="/" >
                                    <img src="/image/nwg_logo.png" width="150" height="70" />
                                </Link>
                                <p class="mt-2 text-dark">
                                    © 2023 Copyright: Nextwebguru.com
                                </p>
                            </div>
                            {/* <!-- Grid column -->

                            <!-- Grid column --> */}
                            <div class="col-6 col-sm-4 col-lg-2">
                                {/* <!-- Links --> */}
                                <h6 class="text-uppercase text-dark fw-bold mb-2">
                                    Store
                                </h6>
                                <ul class="list-unstyled mb-4">
                                    <li><a class="text-muted" href="#">About us</a></li>
                                    <li><a class="text-muted" href="#">Find store</a></li>
                                    <li><a class="text-muted" href="#">Categories</a></li>
                                    <li><a class="text-muted" href="#">Blogs</a></li>
                                </ul>
                            </div>
                            {/* <!-- Grid column -->

                            <!-- Grid column --> */}
                            <div class="col-6 col-sm-4 col-lg-2">
                                {/* <!-- Links --> */}
                                <h6 class="text-uppercase text-dark fw-bold mb-2">
                                    Information
                                </h6>
                                <ul class="list-unstyled mb-4">
                                    <li><a class="text-muted" href="#">Help center</a></li>
                                    <li><a class="text-muted" href="#">Money refund</a></li>
                                    <li><a class="text-muted" href="#">Shipping info</a></li>
                                    <li><a class="text-muted" href="#">Refunds</a></li>
                                </ul>
                            </div>
                            {/* <!-- Grid column -->

                            <!-- Grid column --> */}
                            <div class="col-6 col-sm-4 col-lg-2">
                                {/* <!-- Links --> */}
                                <h6 class="text-uppercase text-dark fw-bold mb-2">
                                    Support
                                </h6>
                                <ul class="list-unstyled mb-4">
                                    <li><a class="text-muted" href="#">Help center</a></li>
                                    <li><a class="text-muted" href="#">Documents</a></li>
                                    <li><a class="text-muted" href="#">Account restore</a></li>
                                    <li><a class="text-muted" href="#">My orders</a></li>
                                </ul>
                            </div>
                            {/* <!-- Grid column -->

                            <!-- Grid column --> */}
                            <div class="col-12 col-sm-12 col-lg-3">
                                {/* <!-- Links --> */}
                                <h6 class="text-uppercase text-dark fw-bold mb-2">Newsletter</h6>
                                <p class="text-muted">Stay in touch with latest updates about our products and offers</p>
                                <div class="input-group mb-3">
                                    <input type="email" class="form-control border" placeholder="Email" aria-label="Email" aria-describedby="button-addon2" />
                                    <button class="btn btn-light border shadow-0" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                                        Join
                                    </button>
                                </div>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}


            </footer>
        </>
    )
}

export default About