import React, { useState } from "react";
import { AddUserForm } from "../components/AddUserForm";
import { useDispatch } from "react-redux";
import { addUserThunk } from "../redux/thunk/UserDataThunk";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import { initialValues } from "../services/FetchUserService";

export const AddDataForm = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(values) {
    setLoading(true);
    try {
      const res = await dispatch(addUserThunk(values)).unwrap();
      toast.success(
        `User ${res.firstName} ${res.lastName} added successfully!`
      );
      navigate("/");
    } catch (error) {
      toast.error(`Failed to add user: ${error}`, {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Backdrop open={loading} sx={{ zIndex: 9999, color: "#fff" }}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <AddUserForm
        onSubmit={handleSubmit}
        initialValues={initialValues}
        buttonText="Add User"
      />
    </>
  );
};
