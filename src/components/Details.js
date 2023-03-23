import * as React from 'react';

export default function Details() {
    return (
        <>
            <div className='container mt-2'>
                <div className="card mb-3" style={{ width: "640px", height: "300px" }} >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="..." className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title">Manish Yadav</h4>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                <div className='row g-0 mt-5 align-content-center justify-content-center'>
                    <div className='col-3'>
                        <button className='btn btn-sm btn-info'>Share</button>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}
