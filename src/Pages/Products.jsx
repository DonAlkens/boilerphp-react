import React from "react";
import { Link } from "react-router-dom";
// import { loadAnimation } from "lottie-web";
// import { defineLordIconElement } from "lord-icon-element";

import AppLayout from "../Shared/Layouts/AppLayout";
import { jQuery } from "../loader";

// register lottie and define custom element
// defineLordIconElement(loadAnimation);

export default function Products(props) {

  jQuery(function() {

    require('../../public/assets/js/pages/plugins/lord-icon-2.1.0');

  });

  return (
    <AppLayout>
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Products</h4>

                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="javascript: void(0);">Store</Link>
                    </li>
                    <li className="breadcrumb-item active">Products</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-12 col-lg-12">
              <div>
                <div className="card">
                  <div className="card-header border-0">
                    <div className="row g-4">
                      <div className="col-sm-auto">
                        <div>
                          <Link to="/add-product" className="btn btn-info">
                            <i className="ri-add-line align-bottom me-1"></i>
                            Add Product
                          </Link>
                        </div>
                      </div>
                      <div className="col-sm">
                        <div className="d-flex justify-content-sm-end">
                          <div className="search-box ms-2">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search Products..."
                            />
                            <i className="ri-search-line search-icon"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-header">
                    <div className="row align-items-center">
                      <div className="col">
                        <ul
                          className="nav nav-tabs-custom card-header-tabs border-bottom-0"
                          role="tablist"
                        >
                          <li className="nav-item">
                            <Link
                              className="nav-link text-body active fw-semibold"
                              data-bs-toggle="tab"
                              to="#productnav-all"
                              role="tab"
                            >
                              All
                              <span className="badge badge-soft-danger align-middle rounded-pill ms-1">
                                12
                              </span>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link text-body fw-semibold"
                              data-bs-toggle="tab"
                              to="#productnav-published"
                              role="tab"
                            >
                              Published
                              <span className="badge badge-soft-danger align-middle rounded-pill ms-1">
                                5
                              </span>
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              className="nav-link text-body fw-semibold"
                              data-bs-toggle="tab"
                              to="#productnav-draft"
                              role="tab"
                            >
                              Draft
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-auto">
                        <div id="selection-element">
                          <div className="my-n1 d-flex align-items-center text-muted">
                            Select
                            <div
                              id="select-content"
                              className="text-body fw-semibold px-1"
                            ></div>
                            Result
                            <button
                              type="button"
                              className="btn btn-link link-danger p-0 ms-3"
                              data-bs-toggle="modal"
                              data-bs-target="#removeItemModal"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="tab-content text-muted">
                      <div
                        className="tab-pane active"
                        id="productnav-all"
                        role="tabpanel"
                      >
                        <div
                          id="table-product-list-all"
                          className="table-card gridjs-border-none"
                        ></div>
                      </div>

                      <div
                        className="tab-pane"
                        id="productnav-published"
                        role="tabpanel"
                      >
                        <div
                          id="table-product-list-published"
                          className="table-card gridjs-border-none"
                        ></div>
                      </div>

                      <div
                        className="tab-pane"
                        id="productnav-draft"
                        role="tabpanel"
                      >
                        <div className="py-4 text-center">
                          <div>
                            <lord-icon
                              src="https://cdn.lordicon.com/msoeawqm.json"
                              trigger="loop"
                              colors="primary:#405189,secondary:#0ab39c"
                              style={{ width: "72px", height: "72px" }}
                            ></lord-icon>
                          </div>

                          <div className="mt-4">
                            <h5>Sorry! No Result Found</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ProductFilter />
          </div>
        </div>
      </div>
      {removeItem(props)}
    </AppLayout>
  );
}

function removeItem(props) {
  return (
    <div
      id="removeItemModal"
      className="modal fade zoomIn"
      tabIndex="-1"
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
                style={{ width: "100px", height: "100px" }}
              ></lord-icon>
              <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                <h4>Are you Sure ?</h4>
                <p className="text-muted mx-4 mb-0">
                  Are you Sure You want to Remove this Product ?
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
                id="delete-product"
              >
                Yes, Delete It!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
