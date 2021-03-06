import axios from "axios";
import flatpickr from "flatpickr";
import React, { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import MyDropzone from "../Components/MyDropZone";
import TextEditor from "../Components/TextEditor";
import ValidateSubmit, {
  ClearAppMessage,
  AppMessage,
  toggleLoader,
  removeVariation,
} from "../libs/app";
import VariationField from "../Components/VariationField";
import { event } from "jquery";

const ProductUpload = (props) => {
  const { product_id } = useParams();

  const [product, setProduct] = useState({});
  const [images, setProductImages] = useState({});
  const [description, setDescription] = useState("");
  const [productVariations, setProductVariations] = useState([]);

  const [collections, setCollections] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubCategories] = useState([]);
  const [variants, setVariants] = useState([]);
  const [variations, setVariations] = useState([]);
  const [variation_count, setVariationCount] = useState(0);

  const [formatted, setFormatted] = useState([]);

  const [publish, setPublish] = useState(true);

  flatpickr("#datepicker-publish-input", {});

  const getCollections = () => {
    axios
      .get("/a/get-collections")
      .then((response) => {
        var data = response.data;
        setCollections(data.collection);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getProductDetails = () => {
    if (product_id && props.mode == "edit") {
      axios
        .get(`/a/product/details/${product_id}`)
        .then((response) => {
          var data = response.data;
          setProduct(data);
          setProductImages(data.images);
          if (data?.inventory?.description) {
            setDescription(data?.inventory?.description);
          }
        })
        .catch((error) => {});
    }
  };

  const checkImagesInLocalStorage = () => {
    var localImages = JSON.parse(localStorage.getItem("images"));
    if (localImages != null) {
      var $images = {
        main: localImages[0],
        gallery: localImages.splice(1),
      };

      setProductImages($images);
    }
  };

  useEffect(() => {
    getCollections();
    getProductDetails();

    if (props.mode == "new") {
      checkImagesInLocalStorage();
    }

    formatVariations();
  }, [variations]);

  const addVariation = () => {
    var count = variation_count + 1;
    setVariationCount(count);
  };

  const extractOptions = (index, value) => {
    let vari = [...variations];
    vari[index] = value;
    setVariations(vari);
  };

  const extractVariants = (index, value) => {
    let variant = [...variants];
    variant[index] = value;
    setVariants(variant);
  };

  const formatVariations = () => {
    var formats = [];

    variations?.map((options, index) => {
      let group = variants[index];
      let value = options;

      if (group && options.length > 0) {
        let variation_holder = [],
          counter = 0;

        if (index == 0) {
          value?.map((details, index) => {
            if (!(formats.indexOf(details) > -1)) {
              formats[index] = details;
            }
          });
        } else {
          formats.map((format, i) => {
            // console.log("Format", format);

            value?.map((details, j) => {
              var mapped = {
                value: format.value + "/" + details.value,
                label: format.label + "/" + details.label,
              };

              // console.log(mapped);

              if (!(variation_holder.indexOf(mapped) > -1)) {
                variation_holder[counter] = mapped;

                counter++;
              }
            });
          });

          formats = variation_holder;
          // console.log("Holder", variation_holder);
        }
      }
    });
    setFormatted(formats);
  };

  const handlePublishChange = (e) => {
    if ($(e.target).prop("checked") == true) {
      setPublish(true);
    } else {
      setPublish(false);
    }
  };

  const handleCollectionChange = async (e) => {
    // Check Categories
    try {
      var id = e.target.value;
      var response = axios.get(`/a/get-categories/${id}`);
      var categories = (await response).data;
      if (categories.length > 0) {
        setCategories(categories);
        setSubCategories([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoriesChange = async (e) => {
    // Check Categories
    try {
      var id = e.target.value;
      var response = axios.get(`/a/get-subcategories/${id}`);
      var categories = (await response).data;
      setSubCategories(categories);
    } catch (error) {
      console.log(error);
    }
  };

  const saveAsDraft = () => {
    handleProductSubmit(event, true);
  };

  const handleProductSubmit = (e, draft = false) => {
    e.preventDefault();

    if (ValidateSubmit(false, true)) {
      ClearAppMessage($("#message-box"));

      toggleLoader(true);

      var formdata = new FormData(document.getElementById("ProductUploadForm"));
      formdata.append("description", description);
      formdata.append("publish", publish);

      var data = formdata;
      console.log(formdata);

      if (props.mode == "new") {
        var _url = `/product/create`;
      } else if (props.mode == "edit") {
        var _url = `/product/update`;
      }

      axios
        .post(_url, data)
        .then((response) => {
          if (response.data.success) {
            // setApplicationMode("success");
          } else {
            AppMessage("error", response.data.error.message, $("#message-box"));
          }

          toggleLoader(false);
        })
        .catch((error) => {
          AppMessage(
            "error",
            "Unable to create account. Please try again later.",
            $("#message-box")
          );
          toggleLoader(false);
        });
    }
  };

  return (
    <>
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                {props.mode == "new" ? (
                  <h4 className="mb-sm-0">Create Product</h4>
                ) : (
                  <h4 className="mb-sm-0">Edit Product</h4>
                )}

                <div className="page-title-right">
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <a href="#">Store</a>
                    </li>
                    {props.mode == "new" ? (
                      <li className="breadcrumb-item active">Create Product</li>
                    ) : (
                      <li className="breadcrumb-item active">Edit Product</li>
                    )}
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <form id="ProductUploadForm" onSubmit={(e) => handleProductSubmit(e)}>
            <div className="row">
              <div className="col-lg-8">
                {product?.id !== null ? (
                  <input type={"hidden"} name="id" defaultValue={product?.id} />
                ) : null}
                <div className="card">
                  <div className="card-body">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        htmlFor="product-title-input"
                      >
                        Product Title
                      </label>
                      <input
                        type="text"
                        name="name"
                        validatefield="true"
                        validationoutput="#titleError"
                        validationmessage="Product title cannot be empty!*"
                        defaultValue={product?.name}
                        onChange={(e) => {
                          handleDetailsChange(e);
                        }}
                        className="form-control"
                        id="product-title-input"
                        placeholder="Enter product title"
                      />
                      <span id="titleError"></span>
                    </div>
                    <div>
                      <label>Product Description </label>
                      <TextEditor
                        description={description}
                        setDescription={setDescription}
                      />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Product Gallery</h5>
                    <p className="text-muted m-0 p-0">Add Product Images.</p>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      {images?.main ? (
                        <div className="col-md-5">
                          <div className="bg-light rounded">
                            <img
                              data-dz-thumbnail
                              className="img-fluid rounded d-block"
                              src={window.isource + images?.main}
                              alt="Product-Image"
                            />
                          </div>
                        </div>
                      ) : (
                        <div className="col-md-5">
                          <MyDropzone
                            message="Select product images"
                            smallsize={false}
                            product={product_id}
                            setProductImages={setProductImages}
                          />
                        </div>
                      )}

                      <div className="col-md-7">
                        <div className="row pe-3">
                          {images?.gallery?.length > 0 ? (
                            <>
                              {images?.gallery?.map((image, index) => (
                                <div
                                  className="col-md-4 p-0 ps-1 pe-1"
                                  key={index}
                                >
                                  <div className="img-thumb">
                                    <div className="bg-light rounded">
                                      <img
                                        data-dz-thumbnail
                                        className="img-fluid rounded d-block"
                                        src={window.isource + image}
                                        alt="Product-Image"
                                      />
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </>
                          ) : null}

                          {images?.main && images.gallery?.length < 5 ? (
                            <div className="col-md-4 p-1">
                              <MyDropzone
                                message="Add images"
                                smallsize={true}
                                product={product_id}
                                setProductImages={setProductImages}
                              />
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="progress mt-2 hide">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: 0 }}
                        aria-valuenow="0"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        25%
                      </div>
                    </div>
                    <div id="uploadStatus" className="mt-2 text-center"></div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <ul
                      className="nav nav-tabs-custom card-header-tabs border-bottom-0"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-bs-toggle="tab"
                          href="#addproduct-general-info"
                          role="tab"
                        >
                          General Info
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-bs-toggle="tab"
                          href="#addproduct-metadata"
                          role="tab"
                        >
                          Meta Data
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="card-body">
                    <div className="tab-content">
                      <div
                        className="tab-pane active"
                        id="addproduct-general-info"
                        role="tabpanel"
                      >
                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="manufacturer-name-input"
                          >
                            Manufacturer Name
                          </label>
                          <input
                            type="text"
                            name="manufacturer"
                            defaultValue={product?.inventory?.manufacturer}
                            className="form-control"
                            id="manufacturer-name-input"
                            placeholder="Enter manufacturer name"
                          />
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-price-input"
                              >
                                Brand Name
                              </label>
                              <input
                                type="text"
                                name="brand"
                                defaultValue={product?.brand}
                                className="form-control"
                                id="product-brand-input"
                                placeholder="Enter brand"
                                aria-label="Brand"
                                aria-describedby="product-brand-addon"
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="product-model-input"
                              >
                                Model ID
                              </label>
                              <input
                                type="text"
                                name="model"
                                defaultValue={product?.inventory?.model}
                                className="form-control"
                                id="product-model-input"
                                placeholder="Model ID"
                                aria-label="Model"
                                aria-describedby="product-model-addon"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="manufacturer-number-input"
                              >
                                Manufacturer Number
                              </label>
                              <input
                                type="text"
                                name="manufacturer_part_number"
                                defaultValue={
                                  product?.inventory?.manufacturer_part_number
                                }
                                className="form-control"
                                id="manufacturer-number-input"
                                placeholder="Enter manufacturer number"
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-price-input"
                                  >
                                    Price
                                  </label>
                                  <div className="input-group mb-3">
                                    <span
                                      className="input-group-text"
                                      id="product-price-addon"
                                    >
                                      $
                                    </span>
                                    <input
                                      type="text"
                                      name="price"
                                      defaultValue={product?.price}
                                      className="form-control"
                                      id="product-price-input"
                                      placeholder="Enter price"
                                      aria-label="Price"
                                      aria-describedby="product-price-addon"
                                      validatefield="true"
                                      validationoutput="#priceError"
                                      validationmessage="required*"
                                    />
                                    <span id="priceError"></span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-discount-input"
                                  >
                                    Discount
                                  </label>
                                  <div className="input-group mb-3">
                                    <span
                                      className="input-group-text"
                                      id="product-discount-addon"
                                    >
                                      %
                                    </span>
                                    <input
                                      type="text"
                                      name="discount"
                                      defaultValue={product?.discount}
                                      className="form-control"
                                      id="product-discount-input"
                                      placeholder="Enter discount"
                                      aria-label="discount"
                                      aria-describedby="product-discount-addon"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="sku-brand-input"
                              >
                                Store keeping unit (SKU)
                              </label>
                              <input
                                type="text"
                                name="sku"
                                defaultValue={product?.inventory?.sku}
                                className="form-control"
                                id="sku-brand-input"
                                placeholder="Enter SKU"
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="row">
                              <div className="col-sm-6">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-quantity-input"
                                  >
                                    Quantity
                                  </label>
                                  <input
                                    type="number"
                                    name="quantity"
                                    defaultValue={product?.quantity}
                                    className="form-control"
                                    id="product-quantity-input"
                                    placeholder=""
                                    aria-label="quantity"
                                    aria-describedby="product-quantity-addon"
                                  />
                                </div>
                              </div>
                              <div className="col-sm-6">
                                <div className="mb-3">
                                  <label
                                    className="form-label"
                                    htmlFor="product-cost-input"
                                  >
                                    Cost/Unit
                                  </label>
                                  <div className="input-group mb-3">
                                    <span
                                      className="input-group-text"
                                      id="product-cost-addon"
                                    >
                                      $
                                    </span>
                                    <input
                                      type="text"
                                      name="cost_price"
                                      defaultValue={product?.cost_price}
                                      className="form-control"
                                      id="product-cost-input"
                                      placeholder="Enter cost"
                                      aria-label="Cost"
                                      aria-describedby="product-cost-addon"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="tab-pane"
                        id="addproduct-metadata"
                        role="tabpanel"
                      >
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="meta-title-input"
                              >
                                Meta title
                              </label>
                              <input
                                type="text"
                                defaultValue={product?.seo?.meta_title}
                                className="form-control"
                                placeholder="Enter meta title"
                                id="meta-title-input"
                              />
                            </div>
                          </div>

                          <div className="col-lg-6">
                            <div className="mb-3">
                              <label
                                className="form-label"
                                htmlFor="meta-keywords-input"
                              >
                                Meta Keywords
                              </label>
                              <input
                                type="text"
                                defaultValue={product?.seo?.meta_keywords}
                                name="meta_keywords"
                                className="form-control"
                                placeholder="Enter meta keywords"
                                id="meta-keywords-input"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <label
                            className="form-label"
                            htmlFor="meta-description-input"
                          >
                            Meta Description
                          </label>
                          <textarea
                            name="meta_description"
                            defaultValue={product?.seo?.meta_description}
                            className="form-control"
                            id="meta-description-input"
                            placeholder="Enter meta description"
                            rows="3"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Variations</h5>
                  </div>

                  <div className="card-body">
                    <div className="VariationsBox p-2 ">
                      {[...Array(variation_count)].map((count, index) => {
                        return (
                          <VariationField
                            extractVariants={extractVariants}
                            extractOptions={extractOptions}
                            id={index}
                            key={index}
                          />
                        );
                      })}
                    </div>
                    <div className="mb-2">
                      <button
                        type="button"
                        onClick={addVariation}
                        className="btn btn-secondary w-sm "
                      >
                        Add Variations
                      </button>
                    </div>

                    {/* Variation List Section */}
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Publish Settings</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-3">
                      <label htmlFor="availability" className="form-label">
                        Availability
                      </label>

                      <select
                        className="form-select"
                        name="availability"
                        id="availability"
                        data-choices
                        data-choices-search-false
                      >
                        <option value={1}>Available In Store</option>
                        <option value={2}>Made on Request</option>
                        <option value={3}>Not Available</option>
                      </select>
                    </div>

                    {/* <div className="mb-3">
                    <label
                      htmlFor="choices-publish-status-input"
                      className="form-label"
                    >
                      Status
                    </label>

                    <select
                      className="form-select"
                      id="choices-publish-status-input"
                      data-choices
                      data-choices-search-false
                    >
                      <option defaultValue="Published">Published</option>
                      <option value="Scheduled">Scheduled</option>
                      <option value="Draft">Draft</option>
                    </select>
                  </div> */}

                    <div>
                      <label htmlFor="visibility" className="form-label">
                        Visibility
                      </label>
                      <select
                        className="form-select"
                        name="visibility"
                        id="visibility"
                        data-choices
                        data-choices-search-false
                      >
                        {product?.hide == 0 ? (
                          <option value={0} defaultValue>
                            Public
                          </option>
                        ) : (
                          <option value={0}>Public</option>
                        )}

                        {product?.hide == 1 ? (
                          <option value={1} defaultValue>
                            Hidden
                          </option>
                        ) : (
                          <option value={1}>Hidden</option>
                        )}
                      </select>
                    </div>

                    <div className="mt-3">
                      <div className="form-check">
                        <input
                          onChange={(e) => handlePublishChange(e)}
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck2"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="formCheck2"
                        >
                          Publish to Marketplace
                        </label>
                      </div>
                    </div>

                    {/* <div className="mt-3">
                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary w-sm">
                        Publish
                      </button>
                    </div>
                  </div> */}
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Publish Schedule</h5>
                  </div>

                  <div className="card-body">
                    <div>
                      <label
                        htmlFor="datepicker-publish-input"
                        className="form-label"
                      >
                        Publish Date & Time
                      </label>
                      <input
                        type="text"
                        name="publish_schedule"
                        id="datepicker-publish-input"
                        className="form-control"
                        placeholder="Enter publish date"
                        data-provider="flatpickr"
                        data-date-format="d.m.y"
                        data-enable-time
                      />
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Product Categories</h5>
                  </div>
                  <div className="card-body">
                    <div className="mb-2">
                      <p className="text-muted mb-2">
                        <a
                          href="#"
                          className="float-end text-decoration-underline"
                        >
                          Add New
                        </a>
                        Select collection
                      </p>
                      <select
                        className="form-select"
                        name="collection"
                        id="collection"
                        onChange={(e) => {
                          handleCollectionChange(e);
                        }}
                        data-choices
                        data-choices-search-false
                        data-choices-sorting="true"
                      >
                        <option defaultValue="">Select..</option>
                        {collections?.map((collection, index) => (
                          <option value={collection.id} key={index}>
                            {collection.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div
                      className={
                        "mb-2 " + (categories.length > 0 ? "show" : "hide")
                      }
                    >
                      <p className="text-muted mb-2">
                        <a
                          href="#"
                          className="float-end text-decoration-underline"
                        >
                          Add New
                        </a>
                        Select category
                      </p>
                      <select
                        className="form-select"
                        name="category"
                        id="category"
                        onChange={(e) => {
                          handleCategoriesChange(e);
                        }}
                        data-choices
                        data-choices-search-false
                        data-choices-sorting="true"
                      >
                        <option defaultValue="">Select..</option>
                        {categories?.map((category, index) => (
                          <option value={category.id} key={index}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div
                      className={
                        "mb-2 " + (subcategories.length > 0 ? "show" : "hide")
                      }
                    >
                      <p className="text-muted mb-2">
                        <a
                          href="#"
                          className="float-end text-decoration-underline"
                        >
                          Add New
                        </a>
                        Select sub-category
                      </p>
                      <select
                        className="form-select"
                        name="sub_category"
                        id="sub_category"
                        data-choices
                        data-choices-search-false
                        data-choices-sorting="true"
                      >
                        <option defaultValue="">Select..</option>
                        {subcategories?.map((category, index) => (
                          <option value={category.id} key={index}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Product Tags</h5>
                  </div>
                  <div className="card-body">
                    <div className="hstack gap-3 align-items-start">
                      <div className="flex-grow-1">
                        <input
                          name="tags"
                          className="form-control"
                          data-choices
                          data-choices-multiple-remove="true"
                          placeholder="Enter tags"
                          type="text"
                          defaultValue=""
                          onChange={(e) => {}}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">
                      Product Short Description
                    </h5>
                  </div>
                  <div className="card-body">
                    <p className="text-muted mb-2">
                      Add short description for product
                    </p>
                    <textarea
                      className="form-control"
                      placeholder="Must enter minimum of a 100 characters"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="text-end mb-3">
                  <button type="submit" className="btn btn-success w-sm">
                    {props.mode == "new" ? "Create Product" : "Save Changes"}
                  </button>
                  {props.mode == "new" ? (
                    <button
                      type="button"
                      onClick={saveAsDraft}
                      className="btn ms-1 btn-primary w-sm"
                    >
                      Save Draft
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default ProductUpload;
