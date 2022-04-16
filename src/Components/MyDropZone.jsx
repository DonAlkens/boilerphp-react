import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

const MyDropzone = ({ message, product, setProductImages, smallsize }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks

    images.forEach((file) => {
      return URL.revokeObjectURL(file.preview);
    });
  }, [images]);

  const onDrop = useCallback((acceptedFiles) => {
    // setImages(
    //   acceptedFiles.map((file) =>
    //     Object.assign(file, {
    //       preview: URL.createObjectURL(file),
    //     })
    //   )
    // );
    var data = new FormData();

    if (product) {
      data.append("product_id", product);
    }

    acceptedFiles.forEach((file) => {
      data.append("images[]", file);
    });

    $.ajax({
      xhr: function () {
        var xhr = new window.XMLHttpRequest();
        xhr.upload.addEventListener(
          "progress",
          function (evt) {
            if (evt.lengthComputable) {
              var percentComplete = (evt.loaded / evt.total) * 100;
              $(".progress-bar").width(percentComplete + "%");
              $(".progress-bar").html(percentComplete + "%");
            }
          },
          false
        );
        return xhr;
      },
      type: "POST",
      url: "http://wearslot.now/api/a/upload-product-images",
      data,
      contentType: false,
      cache: false,
      processData: false,
      beforeSend: function () {
        $("#uploadStatus").html("");

        $(".progress").removeClass("hide");
        $(".progress-bar").width("0%");
      },
      error: function () {
        $("#uploadStatus").html(
          '<p style="color:#EA4335;">File upload failed, please try again.</p>'
        );

        $(".progress").addClass("hide");
        $(".progress-bar").width("0%");
      },
      success: function (resp) {
        if (resp.success == true) {
          if (resp.direct == true) {
            var $images = {
              main: resp.images.main,
              gallery: resp.images.gallery.split(","),
            };
          } else if (resp.direct == false) {
            var images = localStorage.getItem("images");
            if (images != null) {
              images = JSON.parse(images);
              var newimagelist = images.concat(resp.images);
            } else {
              var newimagelist = resp.images;
            }

            localStorage.setItem("images", JSON.stringify(newimagelist));

            var $images = {
              main: newimagelist[0],
              gallery: newimagelist.splice(0),
            };
          }

          setProductImages($images);

          $("#uploadStatus").html(
            '<p style="color:#28A74B;">File has uploaded successfully!</p>'
          );
        } else if (resp.success == false) {
          $("#uploadStatus").html(
            '<p style="color:#EA4335;">Please select a valid file to upload.</p>'
          );
        }

        $(".progress").addClass("hide");
        $(".progress-bar").width("0%");
      },
    });
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop,
  });

  return (
    <div
      className={"dropzone " + (smallsize ? "dropzone-small" : null)}
      {...getRootProps()}
    >
      <div className="fallback">
        <input
          // name="file"
          type="file"
          multiple="multiple"
          {...getInputProps()}
        />
      </div>
      <div className="dz-message needsclick">
        {smallsize == true ? (
          <>
            <div className="mb-0">
              <i className="display-6 text-muted ri-upload-cloud-2-fill"></i>
            </div>
            <span className="text-muted" style={{ fontSize: 14 }}>
              {message}
            </span>
          </>
        ) : (
          <>
            <div className="mb-3">
              <i className="display-4 text-muted ri-upload-cloud-2-fill"></i>
            </div>
            <h6>{message}</h6>
          </>
        )}
      </div>
    </div>
  );
};

export default MyDropzone;
