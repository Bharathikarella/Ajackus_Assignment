import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AddUserForm } from '../components/AddUserForm';
import { useDispatch, useSelector } from 'react-redux';
import { editUserThunk } from '../redux/thunk/UserDataThunk';
import { toast } from 'react-toastify';
import { Backdrop, CircularProgress } from '@mui/material';

export const EditUser = () => {
  const { id } = useParams();
  const { users } = useSelector((state) => state.UsersDetails);
  const user = users.find((u) => String(u.id) === id);
const dispatch=useDispatch()
const navigate=useNavigate()
const [loading, setLoading] = useState(false);
 

  const [firstName = "", lastName = ""] = (user.name || "").split(" ");
  const initialValues = {
    firstName,
    lastName,
    email: user.email,
    department: user.company?.name || "",
  };

  const handleSubmit = async (values) => {
     setLoading(true); 
    try {
         let res= await dispatch(editUserThunk({id,values})).unwrap()
     toast.success(`User ${res.firstName} ${res.lastName} updated successfully!`);
    navigate("/");
    } catch (error) {
          toast.error(`Failed to add user: ${error}`, {
          position: "top-right",
        });
      }finally {
          setLoading(false);
        }
  };


 if (!user) return <p>User not found</p>;

  return (
    <>
     <Backdrop open={loading} sx={{ zIndex: 9999, color: "#fff" }}>
        <CircularProgress color="inherit" />
      </Backdrop>

        <AddUserForm
      onSubmit={handleSubmit}
      initialValues={initialValues}
      buttonText="Update User"
    />
    </>
  )
}