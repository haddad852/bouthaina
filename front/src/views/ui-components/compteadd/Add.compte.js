import React from 'react';
import { Formik, Field, Form } from 'formik';
import {
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import * as Yup from 'yup';

const Ajoutcompte = () => {

    return (
        <Row>
            <Col xs="12" md="12">
                <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0">
                        <i className="mdi mdi-toggle-switch mr-2"> </i>
                        Ajouter compte
                    </CardTitle>
                    <CardBody className="">
                        <Formik
                            initialValues={{ firstname: '', lastname: '', email: '', compte: '', id_transaction: '', solde: '', cin: '', }}
                            onSubmit={(values, { setSubmitting, resetForm }) => {

                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    axios.post('http://localhost:3003/compte/ajout', values).then((Response) => {
                                        console.log(Response)
                                        alert("add succeful")
                                        resetForm();

                                    }).catch(e => {
                                        alert(e)
                                    })
                                }, 1000);
                            }}
                            validationSchema={Yup.object({
                                firstname: Yup.string()
                                    .max(15, 'Must be 15 characters or less')
                                    .required('firstname is required'),
                                lastname: Yup.string()
                                    .max(15, 'Must be 15 characters or less')
                                    .required('lastname is required'),
                                compte: Yup.string()
                                    .max(15, 'Must be 15 characters or less')
                                    .required('compte is required'),
                                solde: Yup.string()
                                    .required('solde is required'),
                                email: Yup.string()
                                    .email('Invalid email address')
                                    .required('Email is required'),
                                cin: Yup.string()
                                    .required('Invalid email address')
                            })}
                        >
                            {(formik, isSubmitting) => (
                                <Form>
                                    <div className="form-group">
                                        <label htmlFor="firstname">firstname</label>
                                        <Field name="firstname" className={(formik.touched.firstname && formik.errors.firstname) ? 'form-control is-invalid' : 'form-control'} type="text" />
                                        {formik.touched.firstname && formik.errors.firstname ? (
                                            <div className="invalid-feedback">{formik.errors.firstname}</div>
                                        ) : null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="firstname">lastname</label>
                                        <Field name="lastname" className={(formik.touched.lastname && formik.errors.lastname) ? 'form-control is-invalid' : 'form-control'} type="text" />
                                        {formik.touched.lastname && formik.errors.lastname ? (
                                            <div className="invalid-feedback">{formik.errors.lastname}</div>
                                        ) : null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="cin">cin</label>
                                        <Field name="cin" className={(formik.touched.cin && formik.errors.cin) ? 'form-control is-invalid' : 'form-control'} type="text" />
                                        {formik.touched.cin && formik.errors.cin ? (
                                            <div className="invalid-feedback">{formik.errors.cin}</div>
                                        ) : null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <Field name="email" className={(formik.touched.email && formik.errors.email) ? 'form-control is-invalid' : 'form-control'} type="email" />
                                        {formik.touched.email && formik.errors.email ? (
                                            <div className="invalid-feedback">{formik.errors.email}</div>
                                        ) : null}
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="solde">solde</label>
                                        <Field name="solde" className={(formik.touched.solde && formik.errors.solde) ? 'form-control is-invalid' : 'form-control'} type="text" />
                                        {formik.touched.solde && formik.errors.solde ? (
                                            <div className="invalid-feedback">{formik.errors.solde}</div>
                                        ) : null}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="compte">compte desciription</label>
                                        <Field as="textarea" rows={3} cols={10} name="compte" className={(formik.touched.compte && formik.errors.compte) ? 'form-control is-invalid' : 'form-control'} type="text" />
                                        {formik.touched.compte && formik.errors.compte ? (
                                            <div className="invalid-feedback">{formik.errors.compte}</div>
                                        ) : null}
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>{isSubmitting ? "Please wait..." : "Submit"}</button>
                                    </div>

                                </Form>
                            )
                            }
                        </Formik >
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Ajoutcompte;