import React from "react";
import { LiaPenSolid } from "react-icons/lia";
import "../removeData/RemoveData.css";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { UpdateUser } from "../../Redux/slices/UserSlice";
import { Input } from "@mui/material";

function PopupModel() {
  const dispatch = useDispatch();
  const validateSchema = Yup.object().shape({
    productName: Yup.string().required("Please Enter Product Name"),
    productPrice: Yup.string().required("Price Is Required"),
    productImage: Yup.mixed().required("Image Is Required"),
  });

  const formik = useFormik({
    initialValues: {
      productName: "",
      productPrice: "",
      productImage: null,
    },
    validationSchema: validateSchema,
    onSubmit: (values, { resetForm }) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Image = event.target.result;
        dispatch(UpdateUser({ ...values, productImage: base64Image }));
      };
      reader.readAsDataURL(values.productImage);
      resetForm();
    },
  });
  return (
    <>
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <LiaPenSolid className="icon border-0 bg-transparent" />
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Update My Product
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form className="form" onSubmit={formik.handleSubmit}>
                <input
                  placeholder="Enter Product Name"
                  type="text"
                  className="m-2 form-control"
                  name="productName"
                  onChange={formik.handleChange}
                  value={formik.values.productName}
                />
                <p style={{ color: "red" }}>
                  {formik.touched.productName ? formik.errors.productName : ""}
                </p>
                <input
                  placeholder="Enter Product Price"
                  className="m-2 form-control"
                  type="number"
                  name="productPrice"
                  onChange={formik.handleChange}
                  value={formik.values.productPrice}
                />
                <p style={{ color: "red" }}>
                  {formik.touched.productPrice
                    ? formik.errors.productPrice
                    : ""}
                </p>
                <Input
                  className="form-switch m-2"
                  placeholder="Choose Product Image"
                  type="file"
                  name="productImage"
                  onChange={(event) => {
                    formik.setFieldValue(
                      "productImage",
                      event.currentTarget.files[0]
                    );
                  }}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.productImage &&
                    Boolean(formik.errors.productImage)
                  }
                />
                <p style={{ color: "red" }}>
                  {formik.touched.productImage
                    ? formik.errors.productImage
                    : ""}
                </p>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-dark">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PopupModel;
