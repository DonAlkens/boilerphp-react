import axios from "axios";
import React, { useEffect, useState } from "react";
import CreatableSelect from "react-select/creatable";

const CreatableSingle = ({ id, extractVariants }) => {
  const [options, setOptions] = useState([]);

  const variantOptions = async () => {
    try {
      var response = axios.get("/a/get-variations");
      var variants = (await response).data;

      if (variants) {
        setOptions(
          variants.map((variant) =>
            Object.assign({ value: variant.id, label: variant.name })
          )
        );
      }
      return options;
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    variantOptions();
  }, []);

  const handleChange = (newValue, actionMeta) => {
    if (newValue != "") {
      extractVariants(id, newValue);
    }
  };

  const handleInputChange = (inputValue, actionMeta) => {
    if (inputValue != "") {
      extractVariants(id, inputValue);
    }
  };

  return (
    <CreatableSelect
      isClearable
      onChange={handleChange}
      onInputChange={handleInputChange}
      options={options}
    />
  );
};

export default CreatableSingle;
