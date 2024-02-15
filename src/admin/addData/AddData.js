import { Input } from "@mui/material";
import React, { useState } from "react";
import "./AddData.css";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AddUser } from "../../Redux/slices/UserSlice";
import MiniDrawer from "../mui/Mui";
function AddData() {
  // const [AllData, setAllData] = useState([]);
  const UsersData = useSelector((state) => state.users);
  console.log(UsersData);
  // console.log("AllData", AllData);
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
      console.log("values from formik", values);
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Image = event.target.result;
        // Dispatch action with the serialized data
        dispatch(AddUser({ ...values, productImage: base64Image }));
      };
      reader.readAsDataURL(values.productImage);
      // setAllData([...AllData, values]);
      // dispatch(AddUser(values));
      resetForm();
    },
  });

  return (
    <>
      <MiniDrawer>
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
                {formik.touched.productImage ? formik.errors.productImage : ""}
              </p>
              <button className="btn btn-dark" type="submit">
                Add Product
              </button>
            </form>
          </div>
        </div>

        {/* <div className="container">
        <div className="row">
          {UsersData.map((data) => {
            return (
              <div className="col-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={data.productImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{data.productName}</h5>
                    <p className="card-text">{data.productPrice}</p>
                    <a href="#" className="btn btn-primary">
                      Show More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
      </MiniDrawer>
    </>
  );
}

export default AddData;
