import React from "react";
import { Formik, Form } from "formik";
import { Button, TextField, Box, Paper, Typography } from "@mui/material";
import { validationSchema } from "../services/FetchUserService";

export const AddUserForm = ({initialValues, onSubmit,buttonText = "Submit" }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 4,
        maxWidth: 500,
        mx: "auto",
        mt: 6,
        borderRadius: 3,
        backgroundColor: "#fafafa",
      }}
    >
      <Typography
        variant="h5"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        Add New User
      </Typography>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
        }}
        enableReinitialize
      >
        {({ errors, touched, handleChange, values }) => (
          <Form>
            <Box display="flex" flexDirection="column" gap={2}>
              {/* First Name */}
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                error={touched.firstName && Boolean(errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />

              {/* Last Name */}
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                error={touched.lastName && Boolean(errors.lastName)}
                helperText={touched.lastName && errors.lastName}
              />

              {/* Email */}
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              {/* Department */}
              <TextField
                fullWidth
                label="Department"
                name="department"
                value={values.department}
                onChange={handleChange}
                error={touched.department && Boolean(errors.department)}
                helperText={touched.department && errors.department}
              />

              {/* Submit Button */}
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                sx={{ py: 1.3, mt: 1, fontWeight: "bold" }}
              >
                {buttonText}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Paper>
  );
};