import React from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';


function Home() {
    return (
        <>
            <div className="container-fluid justify-content-md-end ml-5 pl-5 pt-3 mt-3">
                <form className="row g-3">
                    <div className="col-auto">
                    </div>
                    <div className="col-auto">
                        <label htmlFor="inputPassword2" className="visually-hidden">Type here</label>
                        <input type="password" className="form-control" id="inputPassword2" placeholder="Tyep Here" />
                    </div>
                    <div className="col-auto">
                        <button type="submit" className="btn btn-primary mb-3">Add New</button>
                    </div>
                </form>
            </div>

            <div className="container-fluid justify-content-md-end ml-5 pl-5 pt-3 mt-3">
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Email</th>
                            <th scope="col">Job</th>
                            <th scope="col">Number</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Manish</td>
                            <td>manish@gmail.com</td>
                            <td>Software Developer</td>
                            <td>11111111111</td>
                            <td>
                                <div className="d-grid gap-2 d-md-flex">
                                    <button type="button" className='btn btn-sm btn-success'>< RemoveRedEyeIcon /></button>
                                    <button type="button" className='btn btn-sm btn-primary'>< ModeEditIcon /></button>
                                    <button type="button" className='btn btn-sm btn-danger'><RestoreFromTrashIcon /></button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

          
        </>
    )
}

export default Home
