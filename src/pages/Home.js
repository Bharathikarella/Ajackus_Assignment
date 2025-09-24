import React, { useState } from "react";
import UserTable from "../components/UserTable";
import { useNavigate } from "react-router-dom";
import { Routs } from "../routes/Routs";
import { useDispatch } from "react-redux";
import { deleteUserThunk } from "../redux/thunk/UserDataThunk";
import { toast } from "react-toastify";
import { Backdrop, CircularProgress } from "@mui/material";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const handleEdit = (id) => {
    navigate(Routs.EDITFORM_URL(id));
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await dispatch(deleteUserThunk(id)).unwrap();
      toast.success(`User with id ; ${id} deleted successfully!`);
      navigate("/");
    } catch (error) {
      toast.error(`Failed to add user: ${error}`, {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = () => {
    navigate(Routs.ADDFORM);
  };

  return (
    <>
      <Backdrop open={loading} sx={{ zIndex: 9999, color: "#fff" }}>
        <CircularProgress color="inherit" />
      </Backdrop>

      <UserTable
        onEdit={handleEdit}
        onDelete={handleDelete}
        onAdd={handleAdd}
      />
    </>
  );
};
