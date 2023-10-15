import {useFormik } from "formik";
import React, { useState } from "react";
import { Card, Form,Button, Spinner } from "react-bootstrap";
import * as Yup from "yup";

const Register = () => {
  const [loading, setloading] = useState(false);

  const initialValues={
    ssn:"",
    firstName:"",
    lastName: "",
    email: "",
    password: "",
    address:"",
    phoneNumber:""

  }

const validationSchema=Yup.object({

    ssn:Yup.string().required("Lütfen ssn giriniz.")
    ,firstName :  Yup.string().required("Lütfen adınızı giriniz"),
    lastName: Yup.string().required("Lütfen soyadınızı giriniz."),
    email: Yup.string().required("Lütfen email giriniz."),
    password: Yup.string().required("Lütfen sifrenizi giriniz.")
    .min(8,"Sifreniz en az 8 karakter icermli")
    .matches(/[a-z]+/, "En az bir kucuk harf icermeli")
    .matches(/[A-Z]+/, "En az bir kucuk harf icermeli")
    .matches(/[0-9]+/, "En az bir rakam icermeli")
    .matches(/[!@#$%^&*]+/, "En az bir ozel karakter icermeli"),
    address:Yup.string().required("Lütfen adres giriniz"),
    phoneNumber:Yup.string().required("Lütfen telefon numarasını giriniz.")

})

const onSubmit = (values) => {

 setloading(true)
setTimeout(()=>{
    setloading(false)
    alert("Kayit Basarili")
},2000)

 }

const formik=useFormik({
  initialValues,
  validationSchema,
  onSubmit
})



  return (
    <Card style={{width:"30rem",margin:"3rem auto"}}>
      <Card.Body>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" >
            <Form.Label>SSN</Form.Label>
            <Form.Control type="text"
            {...formik.getFieldProps("ssn")}
            isInvalid={formik.touched.ssn && formik.errors.ssn}
            isValid={formik.touched.ssn && !formik.errors.ssn} />
            <Form.Control.Feedback type="invalid">
              {formik.errors.ssn}
            </Form.Control.Feedback>
          </Form.Group>


          <Form.Group className="mb-3" >
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text"
            {...formik.getFieldProps("firstName")}
            isInvalid={formik.touched.firstName && formik.errors.firstName}
            isValid={formik.touched.firstName && !formik.errors.firstName} />
            <Form.Control.Feedback type="invalid">
              {formik.errors.firstName}
            </Form.Control.Feedback>
          </Form.Group>


          
          <Form.Group className="mb-3" >
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text"
            {...formik.getFieldProps("lastName")}
            isInvalid={formik.touched.lastName && formik.errors.lastName}
            isValid={formik.touched.lastName && !formik.errors.lastName} />
            <Form.Control.Feedback type="invalid">
              {formik.errors.lastName}
            </Form.Control.Feedback>
          </Form.Group>

            
          <Form.Group className="mb-3" >
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"
            {...formik.getFieldProps("email")}
            isInvalid={formik.touched.email && formik.errors.email}
            isValid={formik.touched.email && !formik.errors.email} />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>


          <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
            {...formik.getFieldProps("password")}
            isInvalid={formik.touched.password && formik.errors.password}
            isValid={formik.touched.password && !formik.errors.password} />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Address</Form.Label>
            <Form.Control type="text"
            {...formik.getFieldProps("address")}
            isInvalid={formik.touched.address && formik.errors.address}
            isValid={formik.touched.address && !formik.errors.address} />
            <Form.Control.Feedback type="invalid">
              {formik.errors.address}
            </Form.Control.Feedback>
          </Form.Group>


          <Form.Group className="mb-3" >
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="number"
            {...formik.getFieldProps("phoneNumber")}
            isInvalid={formik.touched.phoneNumber && formik.errors.phoneNumber}
            isValid={formik.touched.phoneNumber && !formik.errors.phoneNumber} />
            <Form.Control.Feedback type="invalid">
              {formik.errors.phoneNumber}
            </Form.Control.Feedback>
          </Form.Group>
         <Button  type="submit" variant="success" disabled={!formik.dirty ||!formik.isValid || loading}>{loading && <Spinner animation="border"/>}   Register</Button>

        </Form>
      </Card.Body>
    </Card>
  );
};

export default Register;
