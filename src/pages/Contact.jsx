import React from 'react'
import { toast } from 'react-hot-toast'
import { BsCart2 } from 'react-icons/bs'

function Contact() {
    const handleDetails = (e) => {
        e.preventDefault();
        toast.success("Your query are resolve ")
    }
    return (
        <div class="container ">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col ">
                    <div class="card my-4 shadow-3">
                        <div class="row g-0">
                            <div class="col-xl-6 d-xl-block bg-image">
                                <img class=" img-fluid" src="https://mdbcdn.b-cdn.net/img/Others/extended-example/delivery.webp" alt="Sample photo"
                                />
                                <div class="carousel-caption mb-5 text-start">
                                    <p class="text-white text-start mx-5 fs-5">     <BsCart2 size={40} className='mb-2' />   Your delivery</p>
                                    <p class="lead text-start my-2 mx-2 mb-5 fs-5">"Everything at your doorstep."</p>
                                </div>
                            </div>
                            <form class="col-xl-6" onSubmit={handleDetails}>

                                <div class="card-body p-md-5 text-black">
                                    <h3 class="mb-4 text-uppercase">Delivery Info</h3>

                                    <div class="row">


                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <input type="text" id="form3Example1m" placeholder='First name' class="form-control form-control-lg" />

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                                <input type="text" id="form3Example1n" placeholder='Last name' class="form-control form-control-lg" />

                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="text" id="form3Example8" placeholder='Address' class="form-control form-control-lg" />

                                    </div>



                                    <div class="row">
                                        <div class="col-md-4 mb-3 ">

                                            <select class="select px-2 py-2 rounded border">
                                                <option value="1">State</option>
                                                <option value="2">Uttarakhand</option>
                                                <option value="3">Uttar Pradesh</option>
                                            </select>

                                        </div>
                                        <div class="col-md-4 mb-3">

                                            <select class="select px-2 py-2 rounded border">
                                                <option value="1">City</option>
                                                <option value="2">Sitarganj</option>
                                                <option value="3">Bareilly</option>
                                            </select>

                                        </div>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="text" id="form3Example3" placeholder='Zip' class="form-control form-control-lg" />

                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="text" id="form3Example2" placeholder='Email' class="form-control form-control-lg" />

                                    </div>

                                    <div class="d-flex justify-content-end pt-3">
                                        <button type="submit" class="btn btn-success btn-lg ms-2">Submit</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Contact