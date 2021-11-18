import React, { useEffect, useState } from 'react';
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
import Select from 'react-select'

const Demandechequier = () => {

    const [list, setlist] = useState([])
    const [selectedOptionfrom, setselectedOptionfrom] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:3003/compte/list').then((Response) => {
            setlist(Response.data.content.map(e => ({
                value: e.id, label: "Cin :" + e.cin + "  Nom complete : " + e.firstname + " " + e.lastname
            })))

        }).catch(e => {
            alert(e)
        })

    }, [])

    return (
        <Row>
            <Col xs="12" md="12">
                <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0">
                        <i className="mdi mdi-toggle-switch mr-2"> </i>
                        Demande de chequier
                    </CardTitle>
                    <CardBody className="">
                        <Formik
                            initialValues={{ nb_cheque: '', }}
                            onSubmit={(values, { setSubmitting, resetForm }) => {

                                    if (!selectedOptionfrom) {
                                        alert("choisir un compte")
                                    } else {
                                        axios.post('http://localhost:3003/demandecheque/ajout', {"compte_cheque":selectedOptionfrom.value ,"nb_cheque":values.nb_cheque}).then((Response) => {
                                            console.log(Response)
                                            alert("add succeful")
                                            resetForm();

                                        }).catch(e => {
                                            alert(e)
                                        })
                                    }
                            }}
                            validationSchema={Yup.object({
                                nb_cheque: Yup.string()
                                    .max(15, 'Must be 15 characters or less')
                                    .required('nb_cheque is required'),

                            })}
                        >
                            {(formik, isSubmitting) => (
                                <Form>

                                    <div className="form-group">
                                        <label htmlFor="compte">compte</label>
                                        <Select options={list} defaultValue={selectedOptionfrom}
                                            onChange={setselectedOptionfrom} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="nb_cheque">nb_cheque</label>
                                        <Field name="nb_cheque" className={(formik.touched.nb_cheque && formik.errors.nb_cheque) ? 'form-control is-invalid' : 'form-control'} type="text" />
                                        {formik.touched.nb_cheque && formik.errors.nb_cheque ? (
                                            <div className="invalid-feedback">{formik.errors.nb_cheque}</div>
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

export default Demandechequier;