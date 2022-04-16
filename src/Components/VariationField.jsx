import axios from "axios";
import React, { useState, useEffect } from "react";
import { FiTrash2 } from "react-icons/fi";
import TextField from "@material-ui/core/TextField";
import Chip from "@material-ui/core/Chip";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import { removeVariation } from "../libs/app";

const filter = createFilterOptions();

const VariationField = (props) => {
  const [variationTypes, setVariationTypes] = useState([]);
  const options = ["One", "Two", "Three", "Four", "Five"];

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
              <select className="form-control variations" name="variations[]">
                {/* <option defaultValue>**select**</option> */}
                {variationTypes?.map((type, index) => {
                  return (
                    <option value={type.id} key={index}>
                      {type.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="col-md-8 p-1">
            <div className="form-group">
              {/* <Autocomplete
                multiple
                freeSolo
                style={{ height: 40, maxHeight: 40 }}
                filterOptions={(options, params) => {
                  const filtered = filter(options, params);
                  // Suggest the creation of a new value
                  if (params.inputValue !== "") {
                    filtered.push(`Add "${params.inputValue}"`);
                  }
                  return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                options={options}
                // defaultValue={[options[2]]}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      variant="outlined"
                      label={option}
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    className="form-control"
                    variant="outlined"
                    label="Options"
                    placeholder="Enter options"
                    name="variation_options[]"
                  />
                )}
              /> */}
              <textarea
                style={{ maxHeight: 40 }}
                name="variation_options[]"
                className="form-control var_name"
                api-variation-creator=""
                placeholder="options"
              ></textarea>
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
