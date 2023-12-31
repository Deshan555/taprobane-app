import React from "react";

function Products(){
    return(
        <div className="col-md-7 grid-margin stretch-card">
            <div className="card">
                <div className="card-body">
                    <p className="card-title mb-0">Top Products</p>
                    <div className="table-responsive">
                        <table className="table table-striped table-borderless">
                            <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Search Engine Marketing</td>
                                <td className="font-weight-bold">$362</td>
                                <td>21 Sep 2018</td>
                                <td className="font-weight-medium">
                                    <div className="badge badge-success">Completed</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Search Engine Optimization</td>
                                <td className="font-weight-bold">$116</td>
                                <td>13 Jun 2018</td>
                                <td className="font-weight-medium">
                                    <div className="badge badge-success">Completed</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Display Advertising</td>
                                <td className="font-weight-bold">$551</td>
                                <td>28 Sep 2018</td>
                                <td className="font-weight-medium">
                                    <div className="badge badge-warning">Pending</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Pay Per Click Advertising</td>
                                <td className="font-weight-bold">$523</td>
                                <td>30 Jun 2018</td>
                                <td className="font-weight-medium">
                                    <div className="badge badge-warning">Pending</div>
                                </td>
                            </tr>
                            <tr>
                                <td>E-Mail Marketing</td>
                                <td className="font-weight-bold">$781</td>
                                <td>01 Nov 2018</td>
                                <td className="font-weight-medium">
                                    <div className="badge badge-danger">Cancelled</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Referral Marketing</td>
                                <td className="font-weight-bold">$283</td>
                                <td>20 Mar 2018</td>
                                <td className="font-weight-medium">
                                    <div className="badge badge-warning">Pending</div>
                                </td>
                            </tr>
                            <tr>
                                <td>Social media marketing</td>
                                <td className="font-weight-bold">$897</td>
                                <td>26 Oct 2018</td>
                                <td className="font-weight-medium">
                                    <div className="badge badge-success">Completed</div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;