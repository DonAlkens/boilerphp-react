import React from "react";
import { Outlet } from "react-router-dom";

const Customer = (props) => {
  return (
    <>
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Customers</h4>

                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="#">Store</a>
                    </li>
                    <li className="breadcrumb-item active">Customers</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="card" id="customerList">
                <div className="card-header border-bottom-dashed">
                  <div className="row g-4 align-items-center">
                    <div className="col-sm">
                      <div>
                        <h5 className="card-title mb-0">Customer List</h5>
                      </div>
                    </div>
                    <div className="col-sm-auto">
                      <div>
                        <button
                          type="button"
                          className="btn btn-success add-btn"
                          data-bs-toggle="modal"
                          id="create-btn"
                          data-bs-target="#showModal"
                        >
                          <i className="ri-add-line align-bottom me-1"></i> Add
                          Customer
                        </button>
                        <button type="button" className="btn btn-info">
                          <i className="ri-file-download-line align-bottom me-1"></i>
                          Import
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body border-bottom-dashed border-bottom">
                  <form>
                    <div className="row g-3">
                      <div className="col-xl-6">
                        <div className="search-box">
                          <input
                            type="text"
                            className="form-control search"
                            placeholder="Search for customer, email, phone, status or something..."
                          />
                          <i className="ri-search-line search-icon"></i>
                        </div>
                      </div>

                      <div className="col-xl-6">
                        <div className="row g-3">
                          <div className="col-sm-4">
                            <div className="">
                              <input
                                type="text"
                                className="form-control"
                                id="datepicker-range"
                                data-provider="flatpickr"
                                data-date-format="d M, Y"
                                data-range-date="true"
                                placeholder="Select date"
                              />
                            </div>
                          </div>

                          <div className="col-sm-4">
                            <div>
                              <select
                                className="form-control"
                                data-plugin="choices"
                                data-choices
                                data-choices-search-false
                                name="choices-single-default"
                                id="idStatus"
                              >
                                <option defaultValue="">Status</option>
                                <option defaultValue="all" selected>
                                  All
                                </option>
                                <option defaultValue="Active">Active</option>
                                <option defaultValue="Block">Block</option>
                              </select>
                            </div>
                          </div>

                          <div className="col-sm-4">
                            <div>
                              <button
                                type="button"
                                className="btn btn-primary w-100"
                                onclick="SearchData();"
                              >
                                {" "}
                                <i className="ri-equalizer-fill me-2 align-bottom"></i>
                                Filters
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="card-body">
                  <div>
                    <div className="table-responsive table-card mb-1">
                      <table className="table align-middle" id="customerTable">
                        <thead className="table-light text-muted">
                          <tr>
                            <th scope="col" style={{ width: "50" }}>
                              <div className="form-check">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="checkAll"
                                  value="option"
                                />
                              </div>
                            </th>

                            <th className="sort" data-sort="customer_name">
                              Customer
                            </th>
                            <th className="sort" data-sort="email">
                              Email
                            </th>
                            <th className="sort" data-sort="phone">
                              Phone
                            </th>
                            <th className="sort" data-sort="date">
                              Joining Date
                            </th>
                            <th className="sort" data-sort="status">
                              Delivery Status
                            </th>
                            <th className="sort" data-sort="action">
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
                            <td className="id" style={{ display: "none" }}>
                              <a href="#" className="fw-medium link-primary">
                                #VZ2101
                              </a>
                            </td>
                            <td className="customer_name">Mary Cousar</td>
                            <td className="email">marycousar@velzon.com</td>
                            <td className="phone">580-464-4694</td>
                            <td className="date">06 Apr, 2021</td>
                            <td className="status">
                              <span className="badge badge-soft-success text-uppercase">
                                Active
                              </span>
                            </td>
                            <td>
                              <ul className="list-inline hstack gap-2 mb-0">
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
                                    href="#deleteRecordModal"
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
                            <td className="id" style={{ display: "none" }}>
                              <a href="#" className="fw-medium link-primary">
                                #VZ2102
                              </a>
                            </td>
                            <td className="customer_name">Jeff Taylor</td>
                            <td className="email">jefftaylor@velzon.com</td>
                            <td className="phone">863-577-5537</td>
                            <td className="date">15 Feb, 2021</td>
                            <td className="status">
                              <span className="badge badge-soft-success text-uppercase">
                                Active
                              </span>
                            </td>
                            <td>
                              <ul className="list-inline hstack gap-2 mb-0">
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
                                    href="#deleteRecordModal"
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
                            <td className="id" style={{ display: "none" }}>
                              <a href="#" className="fw-medium link-primary">
                                #VZ2103
                              </a>
                            </td>
                            <td className="customer_name">Robert McMahon</td>
                            <td className="email">robertmcmahon@velzon.com</td>
                            <td className="phone">786-253-9927</td>
                            <td className="date">12 Jan, 2021</td>
                            <td className="status">
                              <span className="badge badge-soft-success text-uppercase">
                                Active
                              </span>
                            </td>
                            <td>
                              <ul className="list-inline hstack gap-2 mb-0">
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
                                    href="#deleteRecordModal"
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
                            <td className="id" style={{ display: "none" }}>
                              <a href="#" className="fw-medium link-primary">
                                #VZ2104
                              </a>
                            </td>
                            <td className="customer_name">Michael Morris</td>
                            <td className="email">michaelmorris@velzon.com</td>
                            <td className="phone">805-447-8398</td>
                            <td className="date">19 May, 2021</td>
                            <td className="status">
                              <span className="badge badge-soft-danger text-uppercase">
                                Block
                              </span>
                            </td>
                            <td>
                              <ul className="list-inline hstack gap-2 mb-0">
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
                                    href="#deleteRecordModal"
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
                            <td className="id" style={{ display: "none" }}>
                              <a href="#" className="fw-medium link-primary">
                                #VZ2105
                              </a>
                            </td>
                            <td className="customer_name">Kevin Dawson</td>
                            <td className="email">kevindawson@velzon.com</td>
                            <td className="phone">213-741-4294</td>
                            <td className="date">14 Apr, 2021</td>
                            <td className="status">
                              <span className="badge badge-soft-success text-uppercase">
                                Active
                              </span>
                            </td>
                            <td>
                              <ul className="list-inline hstack gap-2 mb-0">
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
                                    href="#deleteRecordModal"
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
                            <td className="id" style={{ display: "none" }}>
                              <a href="#" className="fw-medium link-primary">
                                #VZ2106
                              </a>
                            </td>
                            <td className="customer_name">Carolyn Jones</td>
                            <td className="email">carolynjones@velzon.com</td>
                            <td className="phone">414-453-5725</td>
                            <td className="date">07 Jun, 2021</td>
                            <td className="status">
                              <span className="badge badge-soft-success text-uppercase">
                                Active
                              </span>
                            </td>
                            <td>
                              <ul className="list-inline hstack gap-2 mb-0">
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
                                    href="#deleteRecordModal"
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
                            <td className="id" style={{ display: "none" }}>
                              <a href="#" className="fw-medium link-primary">
                                #VZ2107
                              </a>
                            </td>
                            <td className="customer_name">Glen Matney</td>
                            <td className="email">glenmatney@velzon.com</td>
                            <td className="phone">515-395-1069</td>
                            <td className="date">02 Nov, 2021</td>
                            <td className="status">
                              <span className="badge badge-soft-success text-uppercase">
                                Active
                              </span>
                            </td>
                            <td>
                              <ul className="list-inline hstack gap-2 mb-0">
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
                                    href="#deleteRecordModal"
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
                                  value="option8"
                                />
                              </div>
                            </th>
                            <td className="id" style={{ display: "none" }}>
                              <a href="#" className="fw-medium link-primary">
                                #VZ2108
                              </a>
                            </td>
                            <td className="customer_name">Charles Kubik</td>
                            <td className="email">charleskubik@velzon.com</td>
                            <td className="phone">231-480-8536</td>
                            <td className="date">25 Sep, 2021</td>
                            <td className="status">
                              <span className="badge badge-soft-danger text-uppercase">
                                Block
                              </span>
                            </td>
                            <td>
                              <ul className="list-inline hstack gap-2 mb-0">
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
                                    href="#deleteRecordModal"
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
                                  value="option9"
                                />
                              </div>
                            </th>
                            <td className="id" style={{ display: "none" }}>
                              <a href="#" className="fw-medium link-primary">
                                #VZ2109
                              </a>
                            </td>
                            <td className="customer_name">Herbert Stokes</td>
                            <td className="email">herbertstokes@velzon.com</td>
                            <td className="phone">312-944-1448</td>
                            <td className="date">20 Jul, 2021</td>
                            <td className="status">
                              <span className="badge badge-soft-danger text-uppercase">
                                Block
                              </span>
                            </td>
                            <td>
                              <ul className="list-inline hstack gap-2 mb-0">
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
                                    href="#deleteRecordModal"
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
                                  value="option10"
                                />
                              </div>
                            </th>
                            <td className="id" style={{ display: "none" }}>
                              <a href="#" className="fw-medium link-primary">
                                #VZ2110
                              </a>
                            </td>
                            <td className="customer_name">Timothy Smith</td>
                            <td className="email">timothysmith@velzon.com</td>
                            <td className="phone">973-277-6950</td>
                            <td className="date">13 Dec, 2021</td>
                            <td className="status">
                              <span className="badge badge-soft-success text-uppercase">
                                Active
                              </span>
                            </td>
                            <td>
                              <ul className="list-inline hstack gap-2 mb-0">
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
                                    href="#deleteRecordModal"
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
                                  value="option11"
                                />
                              </div>
                            </th>
                            <td className="id" style={{ display: "none" }}>
                              <a href="#" className="fw-medium link-primary">
                                #VZ2111
                              </a>
                            </td>
                            <td className="customer_name">Johnny Evans</td>
                            <td className="email">johnnyevans@velzon.com</td>
                            <td className="phone">407-645-1767</td>
                            <td className="date">01 Oct, 2021</td>
                            <td className="status">
                              <span className="badge badge-soft-danger text-uppercase">
                                Block
                              </span>
                            </td>
                            <td>
                              <ul className="list-inline hstack gap-2 mb-0">
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
                                    href="#deleteRecordModal"
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
                                  value="option12"
                                />
                              </div>
                            </th>
                            <td className="id" style={{ display: "none" }}>
                              <a href="#" className="fw-medium link-primary">
                                #VZ2112
                              </a>
                            </td>
                            <td className="customer_name">Kevin Dawson</td>
                            <td className="email">kevindawson@velzon.com</td>
                            <td className="phone">213-741-4294</td>
                            <td className="date">14 Apr, 2021</td>
                            <td className="status">
                              <span className="badge badge-soft-success text-uppercase">
                                Active
                              </span>
                            </td>
                            <td>
                              <ul className="list-inline hstack gap-2 mb-0">
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
                                    href="#deleteRecordModal"
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
                            colors="primary:#121331,secondary:#08a88a"
                            style={{ width: "75px", height: "75px" }}
                          ></lord-icon>
                          <h5 className="mt-2">Sorry! No Result Found</h5>
                          <p className="text-muted mb-0">
                            We've searched more than 150+ customers We did not
                            find any customers for you search.
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
                    tabindex="-1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header bg-light p-3">
                          <h5
                            className="modal-title"
                            id="exampleModalLabel"
                          ></h5>
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

                            <div
                              className="mb-3"
                              id="modal-id"
                              style={{ display: "none" }}
                            >
                              <label for="id-field1" className="form-label">
                                ID
                              </label>
                              <input
                                type="text"
                                id="id-field1"
                                className="form-control"
                                placeholder="ID"
                                readonly
                              />
                            </div>

                            <div className="mb-3">
                              <label
                                for="customername-field"
                                className="form-label"
                              >
                                Customer Name
                              </label>
                              <input
                                type="text"
                                id="customername-field"
                                className="form-control"
                                placeholder="Enter name"
                                required
                              />
                            </div>

                            <div className="mb-3">
                              <label for="email-field" className="form-label">
                                Email
                              </label>
                              <input
                                type="email"
                                id="email-field"
                                className="form-control"
                                placeholder="Enter Email"
                                required
                              />
                            </div>

                            <div className="mb-3">
                              <label for="phone-field" className="form-label">
                                Phone
                              </label>
                              <input
                                type="text"
                                id="phone-field"
                                className="form-control"
                                placeholder="Enter Phone no."
                                required
                              />
                            </div>

                            <div className="mb-3">
                              <label for="date-field" className="form-label">
                                Joining Date
                              </label>
                              <input
                                type="date"
                                id="date-field"
                                className="form-control"
                                data-provider="flatpickr"
                                data-date-format="d M, Y"
                                required
                                placeholder="Select date"
                              />
                            </div>

                            <div>
                              <label for="status-field" className="form-label">
                                Status
                              </label>
                              <select
                                className="form-control"
                                data-choices
                                data-choices-search-false
                                name="status-field"
                                id="status-field"
                              >
                                <option defaultValue="">Status</option>
                                <option defaultValue="Active">Active</option>
                                <option defaultValue="Block">Block</option>
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
                                Add Customer
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
                    className="modal fade zoomIn"
                    id="deleteRecordModal"
                    tabindex="-1"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            id="btn-close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="mt-2 text-center">
                            <lord-icon
                              src="https://cdn.lordicon.com/gsqxdxog.json"
                              trigger="loop"
                              colors="primary:#f7b84b,secondary:#f06548"
                              style={{ width: "100", height: "100" }}
                            ></lord-icon>
                            <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                              <h4>Are you sure ?</h4>
                              <p className="text-muted mx-4 mb-0">
                                Are you sure you want to remove this record ?
                              </p>
                            </div>
                          </div>
                          <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                            <button
                              type="button"
                              className="btn w-sm btn-light"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn w-sm btn-danger "
                              id="delete-record"
                            >
                              Yes, Delete It!
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
      <Outlet/>
    </>
  );
};


export default Customer;