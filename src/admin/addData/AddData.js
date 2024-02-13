import { Input } from "@mui/material";
import React from "react";
import "./AddData.css";
import * as Yup from "yup";
import { useFormik } from "formik";

function AddData() {
  const validateSchema = Yup.object().shape({
    productName: Yup.string().required("Please Enter Product Name"),
    productPrice: Yup.string().required("Price Is Require"),
    productImage: Yup.mixed().required("Image Is Required"),
  });
  const formik = useFormik({
    initialValues: {
      productName: "",
      productPrice: "",
      productImage: "",
    },
    validationSchema: validateSchema,
    onSubmit: (values, { resetForm }) => {
      console.log("values form formik", values);
      resetForm();
    },
  });
  return (
    <>
      <div className="main_container">
        <div className="inner_container">
          <h1>Add Data</h1>
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
              {formik.touched.productPrice ? formik.errors.productPrice : ""}
            </p>
            <input
              className="form-switch m-2"
              placeholder="Chose Product Image"
              type="file"
              name="ProductImage"
              onChange={formik.handleChange}
              value={formik.values.productImage}
            />
            {/* <p> */}
            {/* {formik.touched.productImage ? 
                <p style={{ color: "red" }}>{formik.errors.productImage}</p>
                :
                ""
              } */}
            {/* </p> */}
            <p style={{ color: "red" }}>
              {formik.touched.productName ? formik.errors.productImage : ""}
            </p>
            <button className="btn btn-dark" type="submit">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddData;
