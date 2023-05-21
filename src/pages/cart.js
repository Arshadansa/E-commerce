import BreadCrumb from '@/components/layout/BreadCrumb'
import { getCartItems, removeFromCart, updateCartItems } from '@/utils/cardItems'
import Cookies from 'js-cookie';
import Head from 'next/head'
import Image from 'next/image';
import { router } from 'next/router';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';
import { BiRupee } from 'react-icons/bi';

function Cart() {
    const [cart, setCart] = useState(getCartItems());

    const [yourCart, setYourCart] = useState({
        subTotal: 0,
        gstAmount: 0,
        grandTotal: 0,
    });


    const incrementQty = (product) => {
        const newQty = product?.qty + 1;
        // const newStock = product?.stock;

        // condition for limited qty product/limited stock
        if (newQty <= 100) {
            const productId = product?.id;
            updateCartItems(productId, newQty);
            setCart(getCartItems())
        }

    }
    const decrementQty = (product) => {
        const newQty = product?.qty - 1;

        // condition for zero qty/stock
        if (newQty > 0) {
            const productId = product?.id;
            updateCartItems(productId, newQty);
            setCart(getCartItems())
        }

    }
    const removeHandler = (productId) => {
        removeFromCart(productId);
        setCart(getCartItems());//show lastest cart items 
    }

    useEffect(() => {
        let total = 0;
        let gstAmount = 0;
        cart.map((item) => {
            total += item.price * item.qty
        })
        gstAmount = total * 18 / 100;
        setYourCart({ ...yourCart, subTotal: total, gstAmount: gstAmount, grandTotal: total + gstAmount })
    }, [Cart])

    const checkoutHandler = () => {
        Cookies.set('yourCart', JSON.stringify(yourCart))//here we use cookies to sote data and use it anywhere
        router.push('/checkout')
    }
    return (
        <>
            <Head>
                <title>Your Cart</title>
            </Head>
            <BreadCrumb title={'Your Cart'} />
            <div className='table-responsive mt-2 border rounded shadow-lg p-4 mb-4' >
                <table className='table table-borderless '>
                    <thead>
                        <tr className='border-bottom '>
                            <th scope='col'>Item </th>
                            <th scope='col'>Price</th>
                            <th className='float-end' scope='col'>Quantity</th>
                            <th scope='col'>Total </th>
                        </tr>
                    </thead>
                    <tbody>
                        {(cart?.length > 0) ? cart?.map((item) => {
                            return (
                                < tr className='border-bottom' key={item?.id} >
                                    <td >
                                        <div className='d-flex gap-3 '>
                                            <Image src={item?.image} className="rounded-circle" width={40} height={40} alt={item?.title} />
                                            <p className='pt-2'> {item?.title}</p>
                                        </div>
                                    </td>
                                    <td className='text-center'>
                                        <span className='d-flex align-items-center'>
                                            <p className='pt-2'>  <BiRupee size={21} />  {item?.price}</p>
                                        </span>
                                    </td>
                                    <td className='text-center'>
                                        <div class="input-group input-group-sm float-end w-25 ">
                                            <button class="input-group-text btn btn-sm  btn-outline-dark" onClick={() => decrementQty(item)}>
                                                -
                                            </button>
                                            <input type="tel" value={item?.qty} class="form-control bg-light border-dark" />
                                            <button class="input-group-text btn btn-sm btn-outline-dark" onClick={() => incrementQty(item)} >
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className='d-flex text-center justify-content-between'>
                                        <div className='d-flex align-items-center text-center'>
                                            <BiRupee size={21} />
                                            {(item?.price * item?.qty).toFixed(2)}
                                        </div>
                                        <button className='btn btn-sm btn-danger ' onClick={() => removeHandler(item?.id)}>Remove</button>
                                    </td>
                                </tr>
                            )
                        }) : <tr>
                            <td className='text-center text-danger fw-bold fs-5' colSpan={4}>Empty Cart</td>
                        </tr>}
                        {(cart?.length > 0) &&
                            <>
                                <tr>
                                    <td></td>
                                    <th className='border-bottom ' colSpan={2}>Subtotal</th>
                                    <th className='border-bottom '>
                                        <div className='d-flex align-items-center text-center'>
                                            <BiRupee size={18} />{yourCart?.subTotal?.toFixed(2)}
                                        </div>
                                    </th>

                                </tr>

                                <tr>
                                    <td></td>
                                    <th className='border-bottom ' colSpan={2}>18% GST</th>
                                    <th className='border-bottom '>
                                        <div className='d-flex align-items-center text-center'>
                                            <BiRupee size={18} />{yourCart?.gstAmount?.toFixed(2)}
                                        </div>
                                    </th>
                                </tr>

                                <tr>
                                    <td></td>
                                    <th className='border-bottom ' colSpan={2}>Shipping Charge</th>
                                    <th className='border-bottom '>
                                        Free
                                    </th>
                                </tr>

                                <tr>
                                    <td></td>
                                    <th className='border-bottom ' colSpan={2}>GrandTotal</th>
                                    <th className='border-bottom '>
                                        <div className='d-flex align-items-center text-center'>
                                            <BiRupee size={18} />{yourCart?.grandTotal?.toFixed(2)}
                                        </div>
                                    </th>
                                </tr>

                                <tr>
                                    <td></td>
                                    <th className='border-bottom ' colSpan={3}>
                                        <button className='btn btn-sm btn-primary float-end' onClick={() => checkoutHandler()}>
                                            CheckOut
                                        </button>
                                    </th>
                                </tr>
                            </>}
                    </tbody>
                </table>

            </div >
        </>
    )
}

export default Cart