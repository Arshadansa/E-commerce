import Link from 'next/link'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../pages/firebase'
import { doc, setDoc } from "firebase/firestore";



function Registration() {

    const [err, setErr] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;

        try {

            const res = await createUserWithEmailAndPassword(auth, email, password)
            await setDoc(doc(db, "users", "res.user.uid"), {
                name,
                email,
            });
        } catch (error) {

        }

    }
    return (

        <>

            <div className="modal fade modal-xl" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="text-end">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <section className="vh-90 " >
                                <div className="container py-3 h-100">
                                    <div className="row d-flex justify-content-center align-items-center h-100">
                                        <div className="col-lg-12 col-xl-11">
                                            <div className="card text-black rounded-3" >
                                                <div className="card-body ">
                                                    <div className="row justify-content-center">
                                                        <div className="col-md-10  col-lg-6 col-xl-5 order-2 order-lg-1">

                                                            <p className="text-center h1 fw-bold mb-3 mx-1 mx-md-4 mt-4">Sign up</p>

                                                            <form className="mx-1 mx-md-4 " onSubmit={handleSubmit}>

                                                                <div className="d-flex flex-row align-items-center mb-4">
                                                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                                    <div className="form-outline flex-fill mb-0">
                                                                        <input type="text" id="form3Example1c" className="form-control" />
                                                                        <label className="form-label" for="form3Example1c">Your Name</label>
                                                                    </div>
                                                                </div>

                                                                <div className="d-flex flex-row align-items-center mb-4">
                                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                                    <div className="form-outline flex-fill mb-0">
                                                                        <input type="email" id="form3Example3c" className="form-control" />
                                                                        <label className="form-label" for="form3Example3c">Your Email</label>
                                                                    </div>
                                                                </div>

                                                                <div className="d-flex flex-row align-items-center mb-4">
                                                                    <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                                    <div className="form-outline flex-fill mb-0">
                                                                        <input type="password" id="form3Example4c" className="form-control" />
                                                                        <label className="form-label" for="form3Example4c">Password</label>
                                                                    </div>
                                                                </div>

                                                                {/* <div className="d-flex flex-row align-items-center mb-4">
                                                                    <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                                    <div className="form-outline flex-fill mb-0">
                                                                        <input type="password" id="form3Example4cd" className="form-control" />
                                                                        <label className="form-label" for="form3Example4cd">Repeat your password</label>
                                                                    </div>
                                                                </div> */}

                                                                <div className="form-check d-flex justify-content-center mb-3">
                                                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                                                    <label className="form-check-label" for="form2Example3">
                                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                                    </label>
                                                                </div>

                                                                <div className="d-flex justify-content-start mx-2 ">
                                                                    <button type="submit" className="btn btn-dark px-5 btn-md">Register</button>
                                                                </div>
                                                                {err && <spane>Somthing went wrong</spane>
                                                                }

                                                            </form>
                                                            <div className='text-center mt-4'>
                                                                <spane className="text-center text-muted  mb-0">Have already an account?
                                                                    <button className="btn btn-dark mx-2 px-5 btn-md" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Login</button>
                                                                </spane>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                                className="img-fluid" alt="Sample image" />

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>
                </div>
            </div>
            <div className="modal fade modal-xl" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="text-end">

                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <section className="vh-90">
                                <div className="container py-3 h-100">
                                    <div className="row d-flex justify-content-center align-items-center h-100">
                                        <div className="col col-xl-10">
                                            <div className="card" >
                                                <div className="row g-0">
                                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                                            alt="login form" className="img-fluid" />
                                                    </div>
                                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                                        <div className="card-body p-4 p-lg-5 text-black">

                                                            <form>

                                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                                    <i className="fas fa-cubes fa-2x me-3" ></i>
                                                                    <span className="h1 fw-bold mb-0">Logo</span>
                                                                </div>

                                                                <h5 className="fw-normal mb-3 pb-3" >Sign into your account</h5>

                                                                <div className="form-outline mb-4">
                                                                    <input type="email" id="form2Example17" className="form-control form-control-lg" />
                                                                    <label className="form-label" for="form2Example17">Email address</label>
                                                                </div>

                                                                <div className="form-outline mb-4">
                                                                    <input type="password" id="form2Example27" className="form-control form-control-lg" />
                                                                    <label className="form-label" for="form2Example27">Password</label>
                                                                </div>

                                                                <div className="pt-1 mb-4 ">
                                                                    <button className="btn btn-dark btn-md px-5 btn-block mx-3 " type="button">Login</button>
                                                                    <a className="small text-muted" href="#!">Forgot password?</a>
                                                                </div>

                                                            </form>
                                                            <div className="">
                                                                <spane className="mb-5 pb-lg-2" >Don't have an account? </spane>
                                                                <button className="btn btn-dark" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Register here</button>
                                                            </div>

                                                            <a href="#!" className="small text-muted">Terms of use.</a>
                                                            <a href="#!" className="small text-muted">Privacy policy</a>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Registration
{/* <section className="vh-100 " >
<div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-11">
            <div className="card text-black rounded-3" >
                <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                            <form className="mx-1 mx-md-4">

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <input type="text" id="form3Example1c" className="form-control" />
                                        <label className="form-label" for="form3Example1c">Your Name</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div className="form-outline flex-fill mb-0">
                                        <input type="email" id="form3Example3c" className="form-control" />
                                        <label className="form-label" for="form3Example3c">Your Email</label>
                                    </div>
                                </div>

                                <div className="d-flex flex-row align-items-center mb-4">
                                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                    <div class="form-outline flex-fill mb-0">
                                        <input type="password" id="form3Example4c" class="form-control" />
                                        <label class="form-label" for="form3Example4c">Password</label>
                                    </div>
                                </div>

                                <div class="d-flex flex-row align-items-center mb-4">
                                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                    <div class="form-outline flex-fill mb-0">
                                        <input type="password" id="form3Example4cd" class="form-control" />
                                        <label class="form-label" for="form3Example4cd">Repeat your password</label>
                                    </div>
                                </div>

                                <div class="form-check d-flex justify-content-center mb-5">
                                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                                    <label class="form-check-label" for="form2Example3">
                                        I agree all statements in <a href="#!">Terms of service</a>
                                    </label>
                                </div>

                                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <button type="button" class="btn btn-primary btn-lg">Register</button>
                                </div>

                            </form>

                        </div>
                        <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                class="img-fluid" alt="Sample image" />

                        </div>
                    </div>
                    <p class="text-center text-muted mt-5 mb-0">Have already an account? <Link href="/Login"
                        class="fw-bold text-body"><u>Login here</u></Link></p>
                </div>
            </div>
        </div>
    </div>
</div>
</section> */}