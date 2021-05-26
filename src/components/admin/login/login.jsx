import React from "react";
import { Formik } from "formik";
import { Input, Form, FormItem, SubmitButton } from "formik-antd";
import {LoginForm} from "../../../services/login";
import { withRouter } from "react-router";
import * as Yup from "yup";
// import {useHistory } from 'react-router-dom'
import {useDispatch} from 'react-redux'
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const Login = (props) => {
  const initialValue = { email: "admin@gmail.com", password: "12345678" };

  const dispatch = useDispatch();

  const validateSchema = () =>
    Yup.object({
      email: Yup.string().email().min(5).required(),
      password: Yup.string().required(),
    });

  const submitForm = (values, { setSubmitting }) => {
    setSubmitting(false);

    LoginForm(values).then((res) => {
      if (res.status) {
        dispatch({
          type : 'LOGIN',
          payload: {
            token : res.data.token,
            role: res.data.role,
            status: true
          }
        });
        localStorage.setItem("token", res.data.token);
        props.history.push('dashboard');
      }
    });
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={submitForm}
      validationSchema={validateSchema}
    >
      {(formik) => (
        <div className="login-container">
          <div className="forms-container">
            <div className="signin">
              <Form {...layout}>

                <div className="col-md-9 col-12">
                  <div className="form-content">
                    <div className="form-group">
                      <FormItem
                        name="email"
                        hasFeedback={true}
                        showValidateSuccess={true}
                      >
                        <i className="mdi mdi-account"></i>
                        <Input name="email" placeholder="admin@gmail.com" />
                      </FormItem>
                    </div>

                    <div className="form-group">
                      <FormItem
                        name="password"
                        hasFeedback={true}
                        showValidateSuccess={true}
                      >
                        <i className="mdi mdi-lock"></i>
                        <Input.Password
                          name="password"
                          placeholder="12345678"
                        />
                      </FormItem>
                    </div>
                  </div>

                  <SubmitButton name="push" className="btn" disabled={false}>
                    Login
                  </SubmitButton>
                </div>
              </Form>
            </div>
          </div>

          <div className="panels-container">
            <div className="panel">
              <div className="content">
                <h3>New here ? </h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est
                  fuga neque exercitationem debitis aperiam dignissimos totam
                  accusamus, culpa provident hic nam eveniet minima incidunt, in
                  quasi. Sunt dolore repudiandae aut.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default withRouter(Login);
