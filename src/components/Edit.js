import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Edit = () => {

    const [inpVal, setinpVal] = useState({
        name: "",
        email: "",
        mobile: "",
        age: "",
        work: "",
        address: "",
        description: "",
    })

    const setData = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value);
        setinpVal((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }

    return (
        <>
            <div className='container'>
                <h3>Edit Form</h3>
                <form className='mt-4'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='row'>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" onChange={setData} value={inpVal.name } id="name" name="name" placeholder="Enter your name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" onChange={setData} value={inpVal.email } id="email" name="email" placeholder="name@example.com" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="mobile" className="form-label">Mobile</label>
                                    <input type="tel" className="form-control" onChange={setData} value={inpVal.mobile } id="mobile" name="mobile" placeholder="Mobile" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="age" className="form-label">Age</label>
                                    <input type="text" className="form-control" onChange={setData} value={ inpVal.age} id="age" name="age" placeholder="age in years" />
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='row'>
                                <div className="mb-3">
                                    <label htmlFor="work" className="form-label">Work</label>
                                    <input type="text" className="form-control" onChange={setData} value={inpVal.work } id="work" name="work" placeholder="Work" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="email" className="form-control" onChange={setData} value={inpVal.address } id="address" name="address" placeholder="Address" />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea className="form-control" onChange={setData} value={inpVal.description } id="description" name="description" ></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Edit
