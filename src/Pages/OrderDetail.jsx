import React from "react";
import { Outlet, useParams } from "react-router-dom";

const OrderDetail = (props) => {
  const { order_id } = useParams();

  return (
    <>
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Order Details</h4>

                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="#">Store</a>
                    </li>
                    <li className="breadcrumb-item active">Order Details</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-9">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex align-items-center">
                    <h5 className="card-title flex-grow-1 mb-0">
                      Order #VL2667
                    </h5>
                    <div className="flex-shrink-0">
                      <a
                        href="apps-invoices-details.html"
                        className="btn btn-info btn-sm"
                      >
                        <i className="ri-download-2-fill align-middle me-1"></i>
                        Invoice
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive table-card">
                    <table className="table table-nowrap align-middle table-borderless mb-0">
                      <thead className="table-light text-muted">
                        <tr>
                          <th scope="col">Product Details</th>
                          <th scope="col">Item Price</th>
                          <th scope="col">Quantity</th>
                          <th scope="col" className="text-end">
                            Total Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <div className="flex-shrink-0 avatar-md bg-light rounded p-1">
                                <img
                                  src="assets/images/products/img-8.png"
                                  alt=""
                                  className="img-fluid d-block"
                                />
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h5 className="fs-15">
                                  <a
                                    href="apps-ecommerce-product-details.html"
                                    className="link-primary"
                                  >
                                    Sweatshirt for Men (Pink)
                                  </a>
                                </h5>
                                <p className="text-muted mb-0">
                                  Color: <span className="fw-medium">Pink</span>
                                </p>
                                <p className="text-muted mb-0">
                                  Size: <span className="fw-medium">M</span>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>$119.99</td>
                          <td>02</td>
                          <td className="fw-medium text-end">$239.98</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <div className="flex-shrink-0 avatar-md bg-light rounded p-1">
                                <img
                                  src="assets/images/products/img-7.png"
                                  alt=""
                                  className="img-fluid d-block"
                                />
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h5 className="fs-15">
                                  <a
                                    href="apps-ecommerce-product-details.html"
                                    className="link-primary"
                                  >
                                    Noise NoiseFit Endure Smart Watch
                                  </a>
                                </h5>
                                <p className="text-muted mb-0">
                                  Color:
                                  <span className="fw-medium">Black</span>
                                </p>
                                <p className="text-muted mb-0">
                                  Size:
                                  <span className="fw-medium">32.5mm</span>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>$94.99</td>
                          <td>01</td>
                          <td className="fw-medium text-end">$94.99</td>
                        </tr>
                        <tr>
                          <td>
                            <div className="d-flex">
                              <div className="flex-shrink-0 avatar-md bg-light rounded p-1">
                                <img
                                  src="assets/images/products/img-3.png"
                                  alt=""
                                  className="img-fluid d-block"
                                />
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h5 className="fs-15">
                                  <a
                                    href="apps-ecommerce-product-details.html"
                                    className="link-primary"
                                  >
                                    350 ml Glass Grocery Container
                                  </a>
                                </h5>
                                <p className="text-muted mb-0">
                                  Color:
                                  <span className="fw-medium">White</span>
                                </p>
                                <p className="text-muted mb-0">
                                  Size:
                                  <span className="fw-medium">350 ml</span>
                                </p>
                              </div>
                            </div>
                          </td>
                          <td>$24.99</td>
                          <td>01</td>
                          <td className="fw-medium text-end">$24.99</td>
                        </tr>
                        <tr className="border-top border-top-dashed">
                          <td colSpan="2"></td>
                          <td colSpan="2" className="fw-medium p-0">
                            <table className="table table-borderless mb-0">
                              <tbody>
                                <tr>
                                  <td>Sub Total :</td>
                                  <td className="text-end">$359.96</td>
                                </tr>
                                <tr>
                                  <td>
                                    <p className="m-0 p-0">Discount :</p>
                                    <span className="text-muted">
                                      (VELZON15)
                                    </span>
                                  </td>
                                  <td className="text-end">-$53.99</td>
                                </tr>
                                <tr>
                                  <td>Shipping Charge :</td>
                                  <td className="text-end">$65.00</td>
                                </tr>
                                <tr>
                                  <td>Estimated Tax :</td>
                                  <td className="text-end">$44.99</td>
                                </tr>
                                <tr className="border-top border-top-dashed">
                                  <th scope="row">Total (USD) :</th>
                                  <th className="text-end">$415.96</th>
                                </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <div className="d-sm-flex align-items-center">
                    <h5 className="card-title flex-grow-1 mb-0">
                      Order Status
                    </h5>
                    <div className="flex-shrink-0 mt-2 mt-sm-0">
                      <a
                        href="javasccript:void(0;)"
                        className="btn btn-soft-info btn-sm mt-2 mt-sm-0"
                      >
                        <i className="ri-map-pin-line align-bottom me-1"></i>
                        Change Address
                      </a>
                      <a
                        href="javasccript:void(0;)"
                        className="btn btn-soft-danger btn-sm mt-2 mt-sm-0"
                      >
                        <i className="mdi mdi-archive-remove-outline align-bottom me-1"></i>
                        Cancel Order
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="profile-timeline">
                    <div
                      className="accordion accordion-flush"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item border-0">
                        <div className="accordion-header" id="headingOne">
                          <a
                            className="accordion-button p-2 shadow-none"
                            data-bs-toggle="collapse"
                            href="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 avatar-xs">
                                <div className="avatar-title bg-primary rounded-circle">
                                  <i className="ri-shopping-bag-line"></i>
                                </div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h6 className="fs-15 mb-0 fw-semibold">
                                  Order Placed -
                                  <span className="fw-normal">
                                    Wed, 15 Dec 2021
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body ms-2 ps-5 pt-0">
                            <h6 className="mb-1">An order has been placed.</h6>
                            <p className="text-muted">
                              Wed, 15 Dec 2021 - 05:34PM
                            </p>

                            <h6 className="mb-1">
                              Seller has proccessed your order.
                            </h6>
                            <p className="text-muted mb-0">
                              Thu, 16 Dec 2021 - 5:48AM
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item border-0">
                        <div className="accordion-header" id="headingTwo">
                          <a
                            className="accordion-button p-2 shadow-none"
                            data-bs-toggle="collapse"
                            href="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 avatar-xs">
                                <div className="avatar-title bg-primary rounded-circle">
                                  <i className="mdi mdi-gift-outline"></i>
                                </div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h6 className="fs-15 mb-1 fw-semibold">
                                  Packed -
                                  <span className="fw-normal">
                                    Thu, 16 Dec 2021
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body ms-2 ps-5 pt-0">
                            <h6 className="mb-1">
                              Your Item has been picked up by courier patner
                            </h6>
                            <p className="text-muted mb-0">
                              Fri, 17 Dec 2021 - 9:45AM
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item border-0">
                        <div className="accordion-header" id="headingThree">
                          <a
                            className="accordion-button p-2 shadow-none"
                            data-bs-toggle="collapse"
                            href="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 avatar-xs">
                                <div className="avatar-title bg-primary rounded-circle">
                                  <i className="ri-truck-line"></i>
                                </div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h6 className="fs-15 mb-1 fw-semibold">
                                  Shipping -
                                  <span className="fw-normal">
                                    Thu, 16 Dec 2021
                                  </span>
                                </h6>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body ms-2 ps-5 pt-0">
                            <h6 className="fs-14">
                              RQK Logistics - MFDS1400457854
                            </h6>
                            <h6 className="mb-1">
                              Your item has been shipped.
                            </h6>
                            <p className="text-muted mb-0">
                              Sat, 18 Dec 2021 - 4.54PM
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item border-0">
                        <div className="accordion-header" id="headingFour">
                          <a
                            className="accordion-button p-2 shadow-none"
                            data-bs-toggle="collapse"
                            href="#collapseFour"
                            aria-expanded="false"
                          >
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 avatar-xs">
                                <div className="avatar-title bg-light text-primary rounded-circle">
                                  <i className="ri-takeaway-fill"></i>
                                </div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h6 className="fs-14 mb-0 fw-semibold">
                                  Out For Delivery
                                </h6>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="accordion-item border-0">
                        <div className="accordion-header" id="headingFive">
                          <a
                            className="accordion-button p-2 shadow-none"
                            data-bs-toggle="collapse"
                            href="#collapseFile"
                            aria-expanded="false"
                          >
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 avatar-xs">
                                <div className="avatar-title bg-light text-primary rounded-circle">
                                  <i className="mdi mdi-package-variant"></i>
                                </div>
                              </div>
                              <div className="flex-grow-1 ms-3">
                                <h6 className="fs-14 mb-0 fw-semibold">
                                  Delivered
                                </h6>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex">
                    <h5 className="card-title flex-grow-1 mb-0">
                      <i className="mdi mdi-truck-fast-outline align-middle me-1 text-muted"></i>
                      Logistics Details
                    </h5>
                    <div className="flex-shrink-0">
                      <a href="#" className="badge badge-soft-primary fs-11">
                        Track Order
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="text-center">
                    <lord-icon
                      src="https://cdn.lordicon.com/uetqnvvg.json"
                      trigger="loop"
                      colors="primary:#405189,secondary:#0ab39c"
                      style={{width: '80px',height:'80px'}}
                    ></lord-icon>
                    <h5 className="fs-16 mt-2">RQK Logistics</h5>
                    <p className="text-muted mb-0">ID: MFDS1400457854</p>
                    <p className="text-muted mb-0">Payment Mode : Debit Card</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <div className="d-flex">
                    <h5 className="card-title flex-grow-1 mb-0">
                      Customer Details
                    </h5>
                    <div className="flex-shrink-0">
                      <a href="#" className="link-secondary">
                        View Profile
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mb-0 vstack gap-3">
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            src="assets/images/users/avatar-3.jpg"
                            alt=""
                            className="avatar-sm rounded"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="fs-14 mb-1">Joseph Parkers</h6>
                          <p className="text-muted mb-0">Customer</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <i className="ri-mail-line me-2 align-middle text-muted fs-16"></i>
                      josephparker@gmail.com
                    </li>
                    <li>
                      <i className="ri-phone-line me-2 align-middle text-muted fs-16"></i>
                      +(256) 245451 441
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">
                    <i className="ri-map-pin-line align-middle me-1 text-muted"></i>
                    Billing Address
                  </h5>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled vstack gap-2 fs-13 mb-0">
                    <li className="fw-medium fs-14">Joseph Parker</li>
                    <li>+(256) 245451 451</li>
                    <li>2186 Joyce Street Rocky Mount</li>
                    <li>New York - 25645</li>
                    <li>United States</li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">
                    <i className="ri-map-pin-line align-middle me-1 text-muted"></i>
                    Shipping Address
                  </h5>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled vstack gap-2 fs-13 mb-0">
                    <li className="fw-medium fs-14">Joseph Parker</li>
                    <li>+(256) 245451 451</li>
                    <li>2186 Joyce Street Rocky Mount</li>
                    <li>California - 24567</li>
                    <li>United States</li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <div className="card-header">
                  <h5 className="card-title mb-0">
                    <i className="ri-secure-payment-line align-bottom me-1 text-muted"></i>
                    Payment Details
                  </h5>
                </div>
                <div className="card-body">
                  <div className="d-flex align-items-center mb-2">
                    <div className="flex-shrink-0">
                      <p className="text-muted mb-0">Transactions:</p>
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <h6 className="mb-0">#VLZ124561278124</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="flex-shrink-0">
                      <p className="text-muted mb-0">Payment Method:</p>
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <h6 className="mb-0">Debit Card</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="flex-shrink-0">
                      <p className="text-muted mb-0">Card Holder Name:</p>
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <h6 className="mb-0">Joseph Parker</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-2">
                    <div className="flex-shrink-0">
                      <p className="text-muted mb-0">Card Number:</p>
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <h6 className="mb-0">xxxx xxxx xxxx 2456</h6>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <p className="text-muted mb-0">Total Amount:</p>
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <h6 className="mb-0">$415.96</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet/>
    </>
  );
};
export default OrderDetail;
