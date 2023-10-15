import React,{useState} from "react";
import { Button, Card, Form, Spinner } from "react-bootstrap";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
    const [loading, setloading] = useState(false)
    const navigate=useNavigate();

const initialValues={
    ssn:"",
    password:"",
}

const validationSchema= Yup.object({
    ssn:Yup.string().required("Lutfen ssn giriniz"),
    password:Yup.string().required("Lutfen password giriniz")

})

const onSubmit=(values)=>{
    setloading(true)
    setTimeout(() => {
        setloading(false)
        alert("giris basarili")
        navigate("/")
    }, 3000);


}

const formik=useFormik({
    initialValues,
    validationSchema,
    onSubmit
})


  return (
    <Card style={{ width: "24rem", margin: "2rem auto" }}>
      <Card.Body>
        <form noValidate onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" >
            <Form.Label>SSN</Form.Label>
            <Form.Control type="text"    
            {...formik.getFieldProps("ssn")}
            isInvalid={formik.errors.ssn&&formik.touched.ssn}
            isValid={!formik.errors.ssn&&formik.touched.ssn}  />
            <Form.Control.Feedback type="invalid" >{formik.errors.ssn}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" 
            {...formik.getFieldProps("password")}
            isInvalid={formik.errors.password&&formik.touched.password}
            isValid={!formik.errors.password&&formik.touched.password} />
            <Form.Control.Feedback type="invalid">{formik.errors.password}</Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" disabled={loading}>{loading && <Spinner animation="border"/>}{" "}Login</Button>

        </form>
      </Card.Body>
    </Card>
  );
};

export default Login;