import React from "react";
import { Outlet } from "react-router-dom";


const Orders = (props) => {
  
  const SearchData = () => {
    // var d = document.getElementById("idStatus").value,
    //   s = document.getElementById("idPayment").value,
    //   i = document.getElementById("demo-datepicker").value,
    //   r = i.split(" to ")[0],
    //   o = i.split(" to ")[1];
  }
  
  return (
    <>
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Orders</h4>

                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="#">Store</a>
                    </li>
                    <li className="breadcrumb-item active">Orders</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card" id="orderList">
                <div className="card-header  border-0">
                  <div className="d-flex align-items-center">
                    <h5 className="card-title mb-0 flex-grow-1">
                      Order History
                    </h5>
                    <div className="flex-shrink-0">
                      <button
                        type="button"
                        className="btn btn-success add-btn"
                        data-bs-toggle="modal"
                        id="create-btn"
                        data-bs-target="#showModal"
                      >
                        <i className="ri-add-line align-bottom me-1"></i> Create
                        Order
                      </button>
                      <button type="button" className="btn btn-info">
                        <i className="ri-file-download-line align-bottom me-1"></i>
                        Import
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card-body border border-dashed border-end-0 border-start-0">
                  <form>
                    <div className="row g-3">
                      <div className="col-xxl-5 col-sm-6">
                        <div className="search-box">
                          <input
                            type="text"
                            className="form-control search"
                            placeholder="Search for order ID, customer, order status or something..."
                          />
                          <i className="ri-search-line search-icon"></i>
                        </div>
                      </div>

                      <div className="col-xxl-2 col-sm-6">
                        <div>
                          <input
                            type="text"
                            className="form-control"
                            data-provider="flatpickr"
                            data-date-format="d M, Y"
                            data-range-date="true"
                            id="demo-datepicker"
                            placeholder="Select date"
                          />
                        </div>
                      </div>

                      <div className="col-xxl-2 col-sm-4">
                        <div>
                          <select
                            className="form-control"
                            data-choices
                            data-choices-search-false
                            name="choices-single-default"
                            id="idStatus"
                          >
                            <option defaultValue="">Status</option>
                            <option defaultValue="all" defaultChecked={true}>
                              All
                            </option>
                            <option defaultValue="Pending">Pending</option>
                            <option defaultValue="Inprogress">Inprogress</option>
                            <option defaultValue="Cancelled">Cancelled</option>
                            <option defaultValue="Pickups">Pickups</option>
                            <option defaultValue="Returns">Returns</option>
                            <option defaultValue="Delivered">Delivered</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-xxl-2 col-sm-4">
                        <div>
                          <select
                            className="form-control"
                            data-choices
                            data-choices-search-false
                            name="choices-single-default"
                            id="idPayment"
                          >
                            <option defaultValue="">Select Payment</option>
                            <option defaultValue="all" defaultChecked={true}>
                              All
                            </option>
                            <option defaultValue="Mastercard">Mastercard</option>
                            <option defaultValue="Paypal">Paypal</option>
                            <option defaultValue="Visa">Visa</option>
                            <option defaultValue="COD">COD</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-xxl-1 col-sm-4">
                        <div>
                          <button
                            type="button"
                            className="btn btn-primary w-100"
                            onClick={SearchData}
                          >
                            <i className="ri-equalizer-fill me-1 align-bottom"></i>
                            Filters
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="card-body pt-0">
                  <div>
                    <ul
                      className="nav nav-tabs nav-tabs-custom nav-success mb-3"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active All py-3"
                          data-bs-toggle="tab"
                          id="All"
                          href="#home1"
                          role="tab"
                          aria-selected="true"
                        >
                          <i className="ri-store-2-fill me-1 align-bottom"></i>
                          All Orders
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link py-3 Delivered"
                          data-bs-toggle="tab"
                          id="Delivered"
                          href="#delivered"
                          role="tab"
                          aria-selected="false"
                        >
                          <i className="ri-checkbox-circle-line me-1 align-bottom"></i>
                          Delivered
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link py-3 Pickups"
                          data-bs-toggle="tab"
                          id="Pickups"
                          href="#pickups"
                          role="tab"
                          aria-selected="false"
                        >
                          <i className="ri-truck-line me-1 align-bottom"></i>
                          Pickups
                          <span className="badge bg-danger align-middle ms-1">
                            2
                          </span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link py-3 Returns"
                          data-bs-toggle="tab"
                          id="Returns"
                          href="#returns"
                          role="tab"
                          aria-selected="false"
                        >
                          <i className="ri-arrow-left-right-fill me-1 align-bottom"></i>
                          Returns
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link py-3 Cancelled"
                          data-bs-toggle="tab"
                          id="Cancelled"
                          href="#cancelled"
                          role="tab"
                          aria-selected="false"
                        >
                          <i className="ri-close-circle-line me-1 align-bottom"></i>
                          Cancelled
                        </a>
                      </li>
                    </ul>

                    <div className="table-responsive table-card mb-1">
                      <table
                        className="table table-nowrap align-middle"
                        id="orderTable"
                      >
                        <thead className="text-muted table-light">
                          <tr className="text-uppercase">
                            <th scope="col" style={{ width: "25px" }}>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkAll"
                                  value="option"
                                />
                              </div>
                            </th>
                            <th className="sort" data-sort="id">
                              Order ID
                            </th>
                            <th className="sort" data-sort="customer_name">
                              Customer
                            </th>
                            <th className="sort" data-sort="product_name">
                              Product
                            </th>
                            <th className="sort" data-sort="date">
                              Order Date
                            </th>
                            <th className="sort" data-sort="amount">
                              Amount
                            </th>
                            <th className="sort" data-sort="payment">
                              Payment Method
                            </th>
                            <th className="sort" data-sort="status">
                              Delivery Status
                            </th>
                            <th className="sort" data-sort="city">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="list form-check-all">
                          <tr>
                            <th scope="row">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="checkAll"
                                  value="option1"
                                />
                              </div>
                            </th>
                            <td className="id">
                              <a
                                href="apps-ecommerce-order-details.html"
                                className="fw-medium link-primary"
                              >
                                #VZ2101
                              </a>
                            </td>
                            <td className="customer_name">Frank Hook</td>
                            <td className="product_name">Puma Tshirt</td>
                            <td className="date">
                              20 Dec, 2021,
                              <small className="text-muted">02:21 AM</small>
                            </td>
                            <td className="amount">$654</td>
                            <td className="payment">Mastercard</td>
                            <td className="status">
                              <span className="badge badge-soft-warning text-uppercase">
                                Pending
                              </span>
                            </td>
                            <td>
                              <ul className="list-inline hstack gap-2 mb-0">
                                <li
                                  className="list-inline-item"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  title="View"
                                >
                                  <a
                                    href="apps-ecommerce-order-details.html"
                                    className="text-primary d-inline-block"
                                  >
                                    <i className="ri-eye-fill fs-16"></i>
                                  </a>
                                </li>
                                <li
                                  className="list-inline-item edit"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  title="Edit"
                                >
                                  <a
                                    href="#showModal"
                                    data-bs-toggle="modal"
                                    className="text-primary d-inline-block edit-item-btn"
                                  >
                                    <i className="ri-pencil-fill fs-16"></i>
                                  </a>
                                </li>
                                <li
                                  className="list-inline-item"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  title="Remove"
                                >
                                  <a
                                    className="text-danger d-inline-block remove-item-btn"
                                    data-bs-toggle="modal"
                                    href="#deleteOrder"
                                  >
                                    <i className="ri-delete-bin-5-fill fs-16"></i>
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="checkAll"
                                  value="option2"
                                />
                              </div>
                            </th>
                            <td className="id">
                              <a
                                href="apps-ecommerce-order-details.html"
                                className="fw-medium link-primary"
                              >
                                #VZ2102
                              </a>
                            </td>
                            <td className="customer_name">Rickey Teran</td>
                            <td className="product_name">Adidas Sneakers</td>
                            <td className="date">
                              16 Dec, 2021,
                              <small className="text-muted">03:41 PM</small>
                            </td>
                            <td className="amount">$354</td>
                            <td className="payment">Paypal</td>
                            <td className="status">
                              <span className="badge badge-soft-danger text-uppercase">
                                Cancelled
                              </span>
                            </td>
                            <td>
                              <ul className="list-inline hstack gap-2 mb-0">
                                <li
                                  className="list-inline-item"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  title="View"
                                >
                                  <a
                                    href="apps-ecommerce-order-details.html"
                                    className="text-primary d-inline-block"
                                  >
                                    <i className="ri-eye-fill fs-16"></i>
                                  </a>
                                </li>
                                <li
                                  className="list-inline-item edit"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  title="Edit"
                                >
                                  <a
                                    href="#showModal"
                                    data-bs-toggle="modal"
                                    className="text-primary d-inline-block edit-item-btn"
                                  >
                                    <i className="ri-pencil-fill fs-16"></i>
                                  </a>
                                </li>
                                <li
                                  className="list-inline-item remove"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  title="Remove"
                                >
                                  <a
                                    data-bs-toggle="modal"
                                    href="#deleteOrder"
                                    className="text-danger d-inline-block remove-item-btn"
                                  >
                                    <i className="ri-delete-bin-5-fill fs-16"></i>
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="checkAll"
                                  value="option3"
                                />
                              </div>
                            </th>
                            <td className="id">
                              <a
                                href="apps-ecommerce-order-details.html"
                                className="fw-medium link-primary"
                              >
                                #VZ2103
                              </a>
                            </td>
                            <td className="customer_name">James Price</td>
                            <td className="product_name">
                              350 ml Glass Grocery Container
                            </td>
                            <td className="date">
                              28 Nov, 2021,
                              <small className="text-muted">11:33 AM</small>
                            </td>
                            <td className="amount">$829</td>
                            <td className="payment">Visa</td>
                            <td className="status">
                              <span className="badge badge-soft-secondary text-uppercase">
                                Inprogress
                              </span>
                            </td>
                            <td>
                              <ul className="list-inline hstack gap-2 mb-0">
                                <li
                                  className="list-inline-item"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  title="View"
                                >
                                  <a
                                    href="apps-ecommerce-order-details.html"
                                    className="text-primary d-inline-block"
                                  >
                                    <i className="ri-eye-fill fs-16"></i>
                                  </a>
                                </li>
                                <li
                                  className="list-inline-item edit"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  title="Edit"
                                >
                                  <a
                                    href="#showModal"
                                    data-bs-toggle="modal"
                                    className="text-primary d-inline-block edit-item-btn"
                                  >
                                    <i className=" ri-pencil-fill fs-16"></i>
                                  </a>
                                </li>
                                <li
                                  className="list-inline-item remove"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  title="Remove"
                                >
                                  <a
                                    data-bs-toggle="modal"
                                    href="#deleteOrder"
                                    className="text-danger d-inline-block remove-item-btn"
                                  >
                                    <i className="ri-delete-bin-5-fill fs-16"></i>
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="checkAll"
                                  value="option4"
                                />
                              </div>
                            </th>
                            <td className="id">
                              <a
                                href="apps-ecommerce-order-details.html"
                                className="fw-medium link-primary"
                              >
                                #VZ2104
                              </a>
                            </td>
                            <td className="customer_name">Nettie Deloatch</td>
                            <td className="product_name">
                              American egale outfitters Shirt
                            </td>
                            <td className="date">
                              22 Nov, 2021,
                              <small className="text-muted">07:45 PM</small>
                            </td>
                            <td className="amount">$142</td>
                            <td className="payment">COD</td>
                            <td className="status">
                              <span className="badge badge-soft-warning text-uppercase">
                                Pending
                              </span>
                            </td>
                            <td>
                              <ul className="list-inline hstack gap-2 mb-0">
                                <li
                                  className="list-inline-item"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  title="View"
                                >
                                  <a
                                    href="apps-ecommerce-order-details.html"
                                    className="text-primary d-inline-block"
                                  >
                                    <i className="ri-eye-fill fs-16"></i>
                                  </a>
                                </li>
                                <li
                                  className="list-inline-item edit"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  title="Edit"
                                >
                                  <a
                                    href="#showModal"
                                    data-bs-toggle="modal"
                                    className="text-primary d-inline-block edit-item-btn"
                                  >
                                    <i className="ri-pencil-fill fs-16"></i>
                                  </a>
                                </li>
                                <li
                                  className="list-inline-item remove"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  title="Remove"
                                >
                                  <a
                                    data-bs-toggle="modal"
                                    href="#deleteOrder"
                                    className="text-danger d-inline-block remove-item-btn"
                                  >
                                    <i className="ri-delete-bin-5-fill fs-16"></i>
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="checkAll"
                                  value="option5"
                                />
                              </div>
                            </th>
                            <td className="id">
                              <a
                                href="apps-ecommerce-order-details.html"
                                className="fw-medium link-primary"
                              >
                                #VZ2105
                              </a>
                            </td>
                            <td className="customer_name">Thomas Taylor</td>
                            <td className="product_name">Galaxy Watch4</td>
                            <td className="date">
                              12 Nov, 2021,
                              <small className="text-muted">10:19 PM</small>
                            </td>
                            <td className="amount">$408</td>
                            <td className="payment">Mastercard</td>
                            <td className="status">
                              <span className="badge badge-soft-info text-uppercase">
                                Pickups
                              </span>
                            </td>
                            <td>
                              <ul className="list-inline hstack gap-2 mb-0">
                                <li
                                  className="list-inline-item"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  title="View"
                                >
                                  <a
                                    href="apps-ecommerce-order-details.html"
                                    className="text-primary d-inline-block"
                                  >
                                    <i className="ri-eye-fill fs-16"></i>
                                  </a>
                                </li>
                                <li
                                  className="list-inline-item edit"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  title="Edit"
                                >
                                  <a
                                    href="#showModal"
                                    data-bs-toggle="modal"
                                    className="text-primary d-inline-block edit-item-btn"
                                  >
                                    <i className="ri-pencil-fill fs-16"></i>
                                  </a>
                                </li>
                                <li
                                  className="list-inline-item remove"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  title="Remove"
                                >
                                  <a
                                    data-bs-toggle="modal"
                                    href="#deleteOrder"
                                    className="text-danger d-inline-block remove-item-btn"
                                  >
                                    <i className="ri-delete-bin-5-fill fs-16"></i>
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="checkAll"
                                  value="option6"
                                />
                              </div>
                            </th>
                            <td className="id">
                              <a
                                href="apps-ecommerce-order-details.html"
                                className="fw-medium link-primary"
                              >
                                #VZ2106
                              </a>
                            </td>
                            <td className="customer_name">James Price</td>
                            <td className="product_name">Apple iPhone 12</td>
                            <td className="date">
                              05 Nov, 2021,
                              <small className="text-muted">11:47 AM</small>
                            </td>
                            <td className="amount">$1240</td>
                            <td className="payment">Visa</td>
                            <td className="status">
                              <span className="badge badge-soft-secondary text-uppercase">
                                Inprogress
                              </span>
                            </td>
                            <td>
                              <ul className="list-inline hstack gap-2 mb-0">
                                <li
                                  className="list-inline-item"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  title="View"
                                >
                                  <a
                                    href="apps-ecommerce-order-details.html"
                                    data-bs-toggle="modal"
                                    className="text-primary d-inline-block"
                                  >
                                    <i className="ri-eye-fill fs-16"></i>
                                  </a>
                                </li>
                                <li
                                  className="list-inline-item edit"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  title="Edit"
                                >
                                  <a
                                    href="#showModal"
                                    data-bs-toggle="modal"
                                    className="text-primary d-inline-block edit-item-btn"
                                  >
                                    <i className="ri-pencil-fill fs-16"></i>
                                  </a>
                                </li>
                                <li
                                  className="list-inline-item remove"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  title="Remove"
                                >
                                  <a
                                    data-bs-toggle="modal"
                                    href="#deleteOrder"
                                    className="text-danger d-inline-block remove-item-btn"
                                  >
                                    <i className="ri-delete-bin-5-fill fs-16"></i>
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="checkAll"
                                  value="option7"
                                />
                              </div>
                            </th>
                            <td className="id">
                              <a
                                href="apps-ecommerce-order-details.html"
                                className="fw-medium link-primary"
                              >
                                #VZ2107
                              </a>
                            </td>
                            <td className="customer_name">Nancy Martino</td>
                            <td className="product_name">
                              Funky Prints T-shirt
                            </td>
                            <td className="date">
                              31 Oct, 2021,
                              <small className="text-muted">08:55 PM</small>
                            </td>
                            <td className="amount">$180</td>
                            <td className="payment">COD</td>
                            <td className="status">
                              <span className="badge badge-soft-primary text-uppercase">
                                Returns
                              </span>
                            </td>
                            <td>
                              <ul className="list-inline hstack gap-2 mb-0">
                                <li
                                  className="list-inline-item"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  title="View"
                                >
                                  <a
                                    href="apps-ecommerce-order-details.html"
                                    className="text-primary d-inline-block"
                                  >
                                    <i className="ri-eye-fill fs-16"></i>
                                  </a>
                                </li>
                                <li
                                  className="list-inline-item edit"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  title="Edit"
                                >
                                  <a
                                    href="#showModal"
                                    data-bs-toggle="modal"
                                    className="text-primary d-inline-block edit-item-btn"
                                  >
                                    <i className="ri-pencil-fill fs-16"></i>
                                  </a>
                                </li>
                                <li
                                  className="list-inline-item remove"
                                  data-bs-toggle="tooltip"
                                  data-bs-trigger="hover"
                                  data-bs-placement="top"
                                  title="Remove"
                                >
                                  <a
                                    data-bs-toggle="modal"
                                    href="#deleteOrder"
                                    className="text-danger d-inline-block remove-item-btn"
                                  >
                                    <i className="ri-delete-bin-5-fill fs-16"></i>
                                  </a>
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="noresult" style={{ display: "none" }}>
                        <div className="text-center">
                          <lord-icon
                            src="https://cdn.lordicon.com/msoeawqm.json"
                            trigger="loop"
                            colors="primary:#405189,secondary:#0ab39c"
                            style={{ width: "75px", height: "75px" }}
                          ></lord-icon>
                          <h5 className="mt-2">Sorry! No Result Found</h5>
                          <p className="text-muted">
                            We've searched more than 150+ Orders We did not find
                            any orders for you search.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <div className="pagination-wrap hstack gap-2">
                        <a
                          className="page-item pagination-prev disabled"
                          href="#"
                        >
                          Previous
                        </a>
                        <ul className="pagination listjs-pagination mb-0"></ul>
                        <a className="page-item pagination-next" href="#">
                          Next
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="modal fade"
                    id="showModal"
                    tabIndex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header bg-light p-3">
                          <h5 className="modal-title" id="exampleModalLabel">
                            &nbsp;
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            id="close-modal"
                          ></button>
                        </div>
                        <form action="#">
                          <div className="modal-body">
                            <input type="hidden" id="id-field" />

                            <div className="mb-3" id="modal-id">
                              <label htmlFor="orderId" className="form-label">
                                ID
                              </label>
                              <input
                                type="text"
                                id="orderId"
                                className="form-control"
                                placeholder="ID"
                                readOnly
                              />
                            </div>

                            <div className="mb-3">
                              <label
                                htmlFor="customername-field"
                                className="form-label"
                              >
                                Customer Name
                              </label>
                              <input
                                type="text"
                                id="customername-field"
                                className="form-control"
                                placeholder="Enter Name"
                                required
                              />
                            </div>

                            <div className="mb-3">
                              <label
                                htmlFor="productname-field"
                                className="form-label"
                              >
                                Product
                              </label>
                              <select
                                className="form-control"
                                data-trigger
                                name="productname-field"
                                id="productname-field"
                              >
                                <option defaultValue="">Product</option>
                                <option defaultValue="Puma Tshirt">Puma Tshirt</option>
                                <option defaultValue="Adidas Sneakers">
                                  Adidas Sneakers
                                </option>
                                <option defaultValue="350 ml Glass Grocery Container">
                                  350 ml Glass Grocery Container
                                </option>
                                <option defaultValue="American egale outfitters Shirt">
                                  American egale outfitters Shirt
                                </option>
                                <option defaultValue="Galaxy Watch4">
                                  Galaxy Watch4
                                </option>
                                <option defaultValue="Apple iPhone 12">
                                  Apple iPhone 12
                                </option>
                                <option defaultValue="Funky Prints T-shirt">
                                  Funky Prints T-shirt
                                </option>
                                <option defaultValue="USB Flash Drive Personalized with 3D Print">
                                  USB Flash Drive Personalized with 3D Print
                                </option>
                                <option defaultValue="Oxford Button-Down Shirt">
                                  Oxford Button-Down Shirt
                                </option>
                                <option defaultValue="Classic Short Sleeve Shirt">
                                  Classic Short Sleeve Shirt
                                </option>
                                <option defaultValue="Half Sleeve T-Shirts (Blue)">
                                  Half Sleeve T-Shirts (Blue)
                                </option>
                                <option defaultValue="Noise Evolve Smartwatch">
                                  Noise Evolve Smartwatch
                                </option>
                              </select>
                            </div>

                            <div className="mb-3">
                              <label
                                htmlFor="date-field"
                                className="form-label"
                              >
                                Order Date
                              </label>
                              <input
                                type="date"
                                id="date-field"
                                className="form-control"
                                data-provider="flatpickr"
                                data-date-format="d M, Y"
                                data-enable-time
                                required
                                placeholder="Select date"
                              />
                            </div>

                            <div className="row gy-4 mb-3">
                              <div className="col-md-6">
                                <div>
                                  <label
                                    htmlFor="amount-field"
                                    className="form-label"
                                  >
                                    Amount
                                  </label>
                                  <input
                                    type="text"
                                    id="amount-field"
                                    className="form-control"
                                    placeholder="Total amount"
                                    required
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div>
                                  <label
                                    htmlFor="payment-field"
                                    className="form-label"
                                  >
                                    Payment Method
                                  </label>
                                  <select
                                    className="form-control"
                                    data-trigger
                                    name="payment-method"
                                    id="payment-field"
                                  >
                                    <option defaultValue="">Payment Method</option>
                                    <option defaultValue="Mastercard">
                                      Mastercard
                                    </option>
                                    <option defaultValue="Visa">Visa</option>
                                    <option defaultValue="COD">COD</option>
                                    <option defaultValue="Paypal">Paypal</option>
                                  </select>
                                </div>
                              </div>
                            </div>

                            <div>
                              <label
                                htmlFor="delivered-status"
                                className="form-label"
                              >
                                Delivery Status
                              </label>
                              <select
                                className="form-control"
                                data-trigger
                                name="delivered-status"
                                id="delivered-status"
                              >
                                <option defaultValue="">Delivery Status</option>
                                <option defaultValue="Pending">Pending</option>
                                <option defaultValue="Inprogress">Inprogress</option>
                                <option defaultValue="Cancelled">Cancelled</option>
                                <option defaultValue="Pickups">Pickups</option>
                                <option defaultValue="Delivered">Delivered</option>
                                <option defaultValue="Returns">Returns</option>
                              </select>
                            </div>
                          </div>
                          <div className="modal-footer">
                            <div className="hstack gap-2 justify-content-end">
                              <button
                                type="button"
                                className="btn btn-light"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                              <button
                                type="submit"
                                className="btn btn-success"
                                id="add-btn"
                              >
                                Add Order
                              </button>
                              <button
                                type="button"
                                className="btn btn-success"
                                id="edit-btn"
                              >
                                Update
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade flip"
                    id="deleteOrder"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-body p-5 text-center">
                          <lord-icon
                            src="https://cdn.lordicon.com/gsqxdxog.json"
                            trigger="loop"
                            colors="primary:#405189,secondary:#f06548"
                            style={{ width: "90px", height: "90px" }}
                          ></lord-icon>
                          <div className="mt-4 text-center">
                            <h4>You are about to delete a order ?</h4>
                            <p className="text-muted fs-15 mb-4">
                              Deleting your order will remove all of your
                              information from our database.
                            </p>
                            <div className="hstack gap-2 justify-content-center remove">
                              <button
                                className="btn btn-link link-success fw-medium text-decoration-none"
                                data-bs-dismiss="modal"
                              >
                                <i className="ri-close-line me-1 align-middle"></i>
                                Close
                              </button>
                              <button
                                className="btn btn-danger"
                                id="delete-record"
                              >
                                Yes, Delete It
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
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


export default  Orders;
