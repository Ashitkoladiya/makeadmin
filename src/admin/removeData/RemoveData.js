import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";
import "./RemoveData.css";
import { RemoveUser } from "../../Redux/slices/UserSlice";
import { LiaPenSolid } from "react-icons/lia";
import PopupModel from "../Model/PopupModel";
import MiniDrawer from "../mui/Mui";

function RemoveData() {
  const UsersData = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const deleteUser = (id) => {
    dispatch(RemoveUser(id));
  };
  return (
    <>
      <MiniDrawer>
        <h1 className="mt-5">Remove Data</h1>

        <div className="container">
          <div className="row">
            {UsersData.map((data, id) => {
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
                      <div className="d-flex justify-content-between align-items-center">
                        <PopupModel />
                        <MdDelete
                          className="icon"
                          onClick={() => deleteUser(id)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MiniDrawer>
    </>
  );
}

export default RemoveData;
