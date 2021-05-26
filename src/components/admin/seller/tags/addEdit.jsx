import React, { useState } from "react";
import { withRouter } from "react-router";
import {useParams} from 'react-router-dom'
import { Formik } from "formik";
import {Form,Input,FormItem,SubmitButton} from 'formik-antd'
import {validationImage} from '../../../common/validationImage'
import ImageUploader from "react-images-upload";
import {Create,Update} from '../../../common/actions'
import { useRouteMatch } from "react-router-dom";

import * as Yup from "yup";

const AddEdit = (props) => {
  
  const [loading, isLoading] = useState(false);
  const [picture, setPicture] = useState([]);
  
  const Router = useRouteMatch();

  const ROUTER_VIEW = Router.path !== "/dashboard/tag/:slug" ? true : false;

  const validationSchema = () =>
    Yup.object({
      title: Yup.string().max(60).required()
    });

  const onDrop = (initial, pictureDataURLs) => {

    setPicture(initial); // or pictureDataURLs
  };

  const params = useParams();

  const submitForm = (values, { setSubmitting,resetForm }) => {

    setSubmitting(false);

    if(validationImage(picture,props.edit)){

      isLoading(true);
      
      const formData = new FormData();

      formData.append('title',values.title);

      formData.append('image',picture[0]);

      if (props.edit) {
        
        const id = params.slug;

        if (Update("tag", formData, id)) {

          resetForm({});

          isLoading(false);
        }
      } else {

        if (Create("tag", formData)) {
          
          resetForm({});

          isLoading(false);
        }

      }
    }
  };

  return (
    <div className="add">
      <div className="container">
        <Formik
          initialValues={props.initialValues}
          validationSchema={validationSchema}
          onSubmit={submitForm}
        >
          {(formik) => (
            <Form>
              <div className="information-details">
                <div className="row">
                  <div className="col-md-3 col-12">
                    <div className="information">
                      <h3>Information English</h3>
                      <ul>
                        <li>
                          Add basic information about the invoice and comany
                          name.
                        </li>
                        <li>Change information about your invoice.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-9 col-12">
                    <div className="form-content">
                    <div className="form-group">
                        <label htmlFor="title">Title *</label>
                        <FormItem
                          name="title"
                          hasFeedback={true}
                          showValidateSuccess={true}
                        >
                          <Input
                          type="text"
                          name="title"
                          className="form-control"
                          onKeyDown={(e)=> e.keyCode === 13 ? e.preventDefault(): ''}
                          id="title"
                          placeholder="e.g. 'Jeem Company'"
                          />
                        </FormItem>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <div className="information-branding">
                <div className="row border-0">
                  <div className="col-md-3 col-12">
                    <div className="information">
                      <h3>Branding</h3>
                      <ul>
                        <li>
                          Brand your product by setting a custom thumbnail image.
                          You can set different images to use on the iOS app (as
                          different dimensions are recommended).
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-9 col-12">
                    <div className="branding-right">
                      <div className="branding-image">
                        <div className="row border-0">
                          <div className="col-md-8 col-lg-9">
                            <div className="image-container">
                            {ROUTER_VIEW ? (
                                <ImageUploader
                                  withIcon={true}
                                  withPreview={true}
                                  buttonText="Choose images"
                                  onChange={onDrop}
                                  singleImage={true}
                                  imgExtension={[".jpg", ".png"]}
                                  maxFileSize={5242880}
                                />
                              ) : (
                                <img
                                  src={props.data.image}
                                  className="uploadPicture"
                                  alt="preview"
                                />
                              )}
                            </div>
                          </div>

                          <div className="col-md-4 col-lg-3">
                            <div className="image-details">
                              <div className="half_opaque">
                                <span className="text-center">
                                  Recommended
                                  <br />
                                  format
                                </span>

                                <ul>
                                  <li>JPG, PNG</li>
                                  <li>960x540px</li>
                                </ul>
                              </div>

                              {ROUTER_VIEW ? (
                                props.data ? (
                                  <div className="uploadPictureContainer">
                                    <img
                                      src={props.data.image}
                                      className="uploadPicture"
                                      alt="preview"
                                    />
                                  </div>
                                ) : null
                              ) : null}

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {ROUTER_VIEW ? (
                <div className="text-center">
                  <SubmitButton
                    name="push"
                    className="btn"
                    loading={loading}
                    disabled={false}
                  >
                    {props.edit ? "Edit Tag" : "Add Tag"}
                  </SubmitButton>
                </div>
              ) : null}

            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default withRouter(AddEdit);
