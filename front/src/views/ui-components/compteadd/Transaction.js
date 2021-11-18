import React, { useEffect, useState } from 'react';
import {
    Pagination,
    PaginationItem,
    PaginationLink,
    Card,
    CardBody,
    CardTitle,
    Row,
    Col, Button, Input
} from 'reactstrap';
import Select from 'react-select'
import axios from 'axios';


const Transaction = () => {
    const [list, setlist] = useState([])
    const [selectedOptionfrom, setselectedOptionfrom] = useState(null);
    const [selectedOptionto, setselectedOptionto] = useState(null);
    const [montant, setmontant] = useState(null);
    useEffect(() => {
        getdata()

    }, [])

    const getdata = () => {
        setselectedOptionto([])
        setselectedOptionfrom([])
        axios.get('http://localhost:3003/compte/list').then((Response) => {
            setlist(Response.data.content.map(e => ({
                value: e.id, label: "Cin :" + e.cin + "  Nom complete : " + e.firstname + " " + e.lastname
            })))

        }).catch(e => {
            alert(e)
        })

    }
    const SendData = () => {

        if (!montant) {
            alert("donner monatnt")
        } else if (!(selectedOptionfrom.value) || !(selectedOptionto.value)) {
            alert("choisir destinateur et from ")

        } else {
            axios.post('http://localhost:3003/transaction/ajout', { "from": selectedOptionfrom.value, "to": selectedOptionto.value, "montant": montant }).then((Response) => {
                console.log(Response.dat)
                alert('transaction sucess')
                setmontant(null)
                getdata()
            }).catch((e) => {
                console.log(e)
            })

        }



    }


    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Start Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <Card>
                <CardTitle className="bg-light border-bottom p-3 mb-0">
                    <i className="mdi mdi-blur mr-2"> </i>
                    Transaction
                </CardTitle>
                <Row>
                    <Col xs="12" md="6">
                        <Card>
                            <CardTitle className="bg-light border-bottom p-3 mb-0">
                                <i className="mdi mdi-priority-high mr-2"> </i>
                                <Button className="btn" color="success" onClick={() => SendData()}  >
                                    from
                                </Button>
                            </CardTitle>

                            <CardBody className="">
                                <Select options={list} defaultValue={selectedOptionfrom}
                                    onChange={setselectedOptionfrom} />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" md="6">
                        <Card>
                            <CardTitle className="bg-light border-bottom p-3 mb-0">
                                <i className="mdi mdi-priority-low mr-2"> </i>
                                <Button className="btn" color="success">
                                    to
                                </Button>
                            </CardTitle>

                            <CardBody className="">
                                <Select options={list} defaultValue={selectedOptionto}
                                    onChange={setselectedOptionto} />                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="12" md={{
                        'offset': 2,
                        'size': 8
                    }}>
                        <Card>
                            <CardTitle className="bg-light border-bottom p-3 mb-0">

                            </CardTitle>

                            <CardBody className="">

                                <div className="form-group">
                                    <label htmlFor="email">Montant Transaction</label>
                                    <Input name="email" className='form-control' onChange={e => setmontant(e.target.value)} type="text" />

                                </div>
                                <Button className="btn" color="primary" onClick={() => SendData()} size="lg" block>
                                    Ajouter Transaction
                                </Button>
                            </CardBody>
                        </Card>

                    </Col>

                </Row>
            </Card>


        </div>
    );
}

export default Transaction;
