import React, { useEffect } from "react";
import { Grid as GridReact, _ } from "gridjs-react";
import { Link, Outlet } from "react-router-dom";


const Products = (props) => {
  
  const Product = ({ product }) => {
    return (
      <span>
        <div className="d-flex align-items-center">
          <div className="flex-shrink-0 me-3">
            <div className="avatar-sm bg-light rounded p-1">
              <img
                src={`/public/assets/images/products/${product.img}`}
                alt=""
                className="img-fluid d-block"
              />
            </div>
          </div>
          <div className="flex-grow-1">
            <h5 className="fs-14 mb-1">
              <a href={"/product-details/" + (product.id)} className="text-dark">
                {product.name}
              </a>
            </h5>
            <p className="text-muted mb-0">
              Category : <span className="fw-medium">{product.category}</span>
            </p>
          </div>
        </div>
      </span>
    );
  }
  
  const Rating = ({ product }) => {
    return (
      <span>
        <span className="badge bg-light text-body fs-12 fw-medium">
          <i className="mdi mdi-star text-warning me-1"></i>
          {product.rating}
        </span>
      </span>
    );
  }
  
  const Published = ({ product }) => {
    return (
      <span>
        {product.published.date}
        <small className="text-muted ms-1">{product.published.time}</small>
      </span>
    );
  }
  
  const Action = ({ product }) => {
    return (
      <span>
        <div className="dropdown">
          <button
            className="btn btn-soft-secondary btn-sm dropdown"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="ri-more-fill"></i>
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a
                className="dropdown-item"
                href={"/product-details/" + (product.id)}
              >
                <i className="ri-eye-fill align-bottom me-2 text-muted"></i> View
              </a>
            </li>
            <li>
              <a className="dropdown-item" href={"/product-edit/" + (product.id)}>
                <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>
                Edit
              </a>
            </li>
            <li className="dropdown-divider"></li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#removeItemModal"
              >
                <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>
                Delete
              </a>
            </li>
          </ul>
        </div>
      </span>
    );
  }
  
  const Data = (props) => {
  
    const columns = [
      {
        name: "#",
      },
      {
        name: "Product",
        sort: true,
      },
      {
        name: "Stock",
        sort: true,
      },
      {
        name: "Price",
        sort: true,
      },
      {
        name: "Orders",
        sort: true,
      },
      {
        name: "Rating",
        sort: true,
      },
      {
        name: "Published",
        sort: true,
      },
      {
        name: "Actions",
        sort: true,
      },
    ];
  
    useEffect(() => {
      
    });
  
    return (
      <GridReact
        columns={columns}
        search={{
        server: {
        url: (prev, keyword) => `${prev}?search=${keyword}`,
        },
      }
      }
        server={{
          url: "http://wearslot.now/test-products.json",
          then: (data) =>
            data.products.map((product) => [
              _(<input type="checkbox" className="gridjs-checkbox" />),
              _(<Product product={product} />),
              product.quantity,
              product.price,
              product.orders,
              _(<Rating product={product} />),
              _(<Published product={product} />),
              _(<Action product={product} />),
            ]),
        }}
        pagination={{
          enabled: true,
          limit: 10,
        }}
      />
    );
  }
  
  const removeItem = (props) => {
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

  return (
    <>
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                <h4 className="mb-sm-0">Products</h4>

                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="/">Store</Link>
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
                      <div className="col-sm">
                        <div className="d-flex justify-content-sm-end">
                          {/* <div className="search-box ms-2">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search Products..."
                            />
                            <i className="ri-search-line search-icon"></i>
                          </div> */}
                        </div>
                      </div>
                      <div className="col-sm-auto">
                        <div>
                          <a href="/add-product" className="btn btn-info">
                            <i className="ri-add-line align-bottom me-1"></i>
                            Add Product
                          </a>
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
                            <a
                              className="nav-link text-body active fw-semibold"
                              data-bs-toggle="tab"
                              href="#productnav-all"
                              role="tab"
                            >
                              All
                              <span className="badge badge-soft-danger align-middle rounded-pill ms-1">
                                12
                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link text-body fw-semibold"
                              data-bs-toggle="tab"
                              href="#productnav-published"
                              role="tab"
                            >
                              Published
                              <span className="badge badge-soft-danger align-middle rounded-pill ms-1">
                                5
                              </span>
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link text-body fw-semibold"
                              data-bs-toggle="tab"
                              href="#productnav-draft"
                              role="tab"
                            >
                              Draft
                            </a>
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
                        >
                          <Data />
                        </div>
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
          </div>
        </div>
      </div>
      {removeItem(props)}
      <Outlet/>
    </>
  );
}

export default Products;
