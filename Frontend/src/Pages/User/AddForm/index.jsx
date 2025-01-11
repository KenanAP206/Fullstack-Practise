import React from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddForm.css';
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet';

function AddForm() {
  const navigate = useNavigate();

  const initialValues = {
    name: '',
    country: '',
    description: '',
    image: ''
  };

  const handleSubmit = (values) => {
    axios.post('http://localhost:3000/products', values)
      .then(() => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
      
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "Added successfully!"
        });
        navigate('/');
      })
   
  };

  return (
    <>
      <Helmet>
        <title>Add New Product | Immigration Services</title>
        <meta name="description" content="Add a new immigration requirement or service to our platform. Share detailed information about immigration opportunities." />
        <meta name="keywords" content="add product, immigration, new service, immigration requirements" />
      </Helmet>
      <div className="form-container">
        <h2>Add New Product</h2>
        
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          <Form className="form">
            <div>
              <label>Name:</label>
              <Field type="text" name="name" />
            </div>

            <div>
              <label>Country:</label>
              <Field type="text" name="country" />
            </div>

            <div>
              <label>Description:</label>
              <Field as="textarea" name="description" />
            </div>

            <div>
              <label>Image URL:</label>
              <Field type="text" name="image" />
            </div>

            <div className="buttons">
              <button type="submit">Add Product</button>
              <button type="button" onClick={() => navigate('/')}>Cancel</button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default AddForm;
