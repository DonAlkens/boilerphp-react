import axios from "axios";
import React, { useState, useEffect } from "react";
import { FiTrash2 } from "react-icons/fi";
import { removeVariation } from "../libs/app";
import CreatableSingle from "./CreateAbleSelect";
import CreatableInputOnly from "./CreatableInputOnly";

const VariationField = ({ id, extractVariants, extractOptions }) => {
  const [variationTypes, setVariationTypes] = useState([]);
  
  const getVariationTypes = () => {
    axios
      .get("/a/get-variations")
      .then((response) => {
        setVariationTypes(response.data.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getVariationTypes();

    init();
  }, []);

  function init() {
    removeVariation();
  }

  return (
    <div className="variation mb-2">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-3 p-1">
            <div className="form-group">
              {/* <select className="form-control variations" name="variations[]">
                {variationTypes?.map((type, index) => {
                  return (
                    <option value={type.id} key={index}>{type.name}</option>
                  );
                })}
              </select> */}
              <CreatableSingle extractVariants={extractVariants} id={id} />
            </div>
          </div>
          <div className="col-md-8 p-1">
            <div className="form-group">
              <CreatableInputOnly extractOptions={extractOptions} id={id} />
              {/* <textarea
                style={{ maxHeight: 40 }}
                name="variation_options[]"
                className="form-control var_name"
                api-variation-creator=""
                placeholder="options"
              ></textarea> */}
            </div>
          </div>
          <div className="col-md-1 rmVar p-1">
            <span style={{ cursor: "pointer" }} className="p-1">
              <FiTrash2 size={18} color={"red"} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VariationField;
