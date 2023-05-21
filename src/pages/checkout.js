import BreadCrumb from '@/components/layout/BreadCrumb'
import { getCartItems, setCartItems } from '@/utils/cardItems'
import { Button } from 'bootstrap'
import Cookies from 'js-cookie'
import { cookies } from 'next/dist/client/components/headers'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { BiRupee } from 'react-icons/bi'

function Checkout() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const [cart, setCart] = useState(getCartItems());
    const [cartItems, setCartItems] = useState(0);
    const [yourCart, setYourCart] = useState({});
    const router = useRouter();

    useEffect(() => {
        const tempYourCart = Cookies.get('yourCart')
        if (!tempYourCart) {
            router.push("/")
        }
        setYourCart(tempYourCart && JSON.parse(Cookies.get('yourCart')))
        setCartItems(cart?.length)

    }, [cart])

    const checkOutHandler = (data) => {
        // console.log(data)
        router.push({
            pathname: '/thank-you',
            query: {
                cart: JSON.stringify(cart),
                yourCart: JSON.stringify(yourCart),
                shipping: JSON.stringify(data)
            }
        })
        Cookies.remove('yourCart');
        Cookies.remove('cartItems');
    }
    return (
        <>
            <Head>
                <title>Checkout</title>
            </Head>
            <BreadCrumb title={"CheckOut"} />
            <form onSubmit={handleSubmit(checkOutHandler)} className='border shadow-lg p-4 mt-2 mb-4'>
                <div class="row g-5">
                    <div class="col-md-5 col-lg-4 order-md-last ">
                        <h4 class="d-flex justify-content-between align-items-center mb-3">
                            <span class="text-muted">Your cart</span>
                            <span class="badge badge-secondary badge-pill">{cartItems}</span>
                        </h4>
                        <ul class="list-group mb-3">

                            <li class="list-group-item d-flex justify-content-between">
                                <div class="my-0">Sub Total (<BiRupee size={21} />)</div>
                                <strong>{yourCart?.subTotal?.toFixed(2)}</strong>
                            </li>

                            <li class="list-group-item d-flex justify-content-between ">
                                <div class="my-0">GST 18% (<BiRupee size={21} />)</div>
                                <strong >{yourCart?.gstAmount?.toFixed(2)}</strong>
                            </li>
                            <li class="list-group-item d-flex justify-content-between">
                                <div class="my-0">Total (<BiRupee size={21} />)</div>
                                <strong >{yourCart?.grandTotal?.toFixed(2)}</strong>
                            </li>

                        </ul>

                        <div class="card p-2 text-center ">
                            <div class="input-group text-center ">
                                <button type="submit" className='w-100 btn btn-sm btn-primary p-2'>Order Place</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7 col-lg-8">
                        <h4 class="mb-3">Billing address</h4>
                        <div class="row g-3">
                            <div class="col-sm-6">
                                <label for="firstName">First name</label>
                                <input type="text" class="form-control" id="firstName"  {...register('firstName', { required: true })} required />
                                {errors.firstName && <div class="text-danger">
                                    Valid first name is required.
                                </div>}
                            </div>

                            <div class="col-sm-6">
                                <label for="lastName">Last name</label>
                                <input type="text" class="form-control" id="lastName"  {...register('lastName', { required: true })} required />
                                {errors.lastName && <div class="text-danger">
                                    Valid Last Name is required.
                                </div>}
                            </div>
                            <div class="col-12">
                                <label for="mobile">Mobile</label>
                                <input type="text" class="form-control" id="mobile" placeholder="+91" {...register('mobile', { required: true })} required />
                                {errors.mobile && <div class="text-danger">
                                    Valid 10 Digit Mobile required.
                                </div>}
                            </div>
                            <div class="col-12">
                                <label for="email">Email </label>
                                <input type="email" class="form-control" id="email" {...register('email', { required: true })} placeholder="you@example.com" />
                                {errors.email && <div class="text-danger">
                                    Valid Email is required.
                                </div>}
                            </div>
                            <div class="col-12">
                                <label for="address">Address</label>
                                <input type="text" class="form-control" id="address" {...register('address', { required: true })} placeholder="1234 Main St" required />
                                {errors.address && <div class="text-danger">
                                    Valid address is required.
                                </div>}
                            </div>
                            <div class="col-12">
                                <label for="landmark">Landmark</label>
                                <input type="text" class="form-control" id="landmark" placeholder="Apartment or suite" {...register('landmark', { required: true })} />
                                {errors.landmark && <div class="text-danger">
                                    Valid landmark is required.
                                </div>}
                            </div>
                            <div class="col-md-5 ">
                                <label for="country">Country</label>
                                <select class="form-select " value="india" id="country" {...register('country', { required: true })} required>
                                    <option value="india">India</option>
                                </select>
                                {errors.country && <div class="text-danger">
                                    Valid country is required.
                                </div>}
                            </div>
                            <div class="col-md-4">
                                <label for="state">State</label>
                                <select class="form-select " id="state" {...register('state', { required: true })} required>
                                    <option >Choose...</option>
                                    <option value="Uttarakhand">Uttarakhand</option>
                                    <option value="Uttar-Pardesh">UttarPardesh</option>
                                </select>
                                {errors.state && <div class="text-danger">
                                    Valid state is required.
                                </div>}
                            </div>
                            <div class="col-md-3">
                                <label for="zip">Zip</label>
                                <input type="text" class="form-control" id="zip"  {...register('zip', { required: true })} placeholder="" required />
                                {errors.zip && <div class="text-danger">
                                    Valid state is required.
                                </div>}
                            </div>
                        </div>

                        <hr class="mb-4" />

                        <h4 class="mb-3">Payment</h4>

                        <div class=" my-3">
                            <div class="form-check">
                                <input id="cod" name="paymentMethod" type="radio" {...register('paymentMethod', { required: true })} class="form-check-input" checked="true" required />
                                <label class="form-check-label" for="cod">Cash on delivery</label>
                            </div>

                        </div>

                        <hr class="mb-4" />

                    </div >
                </div >

            </form >

        </>
    )
}

export default Checkout