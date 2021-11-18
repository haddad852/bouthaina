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
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import * as Yup from 'yup';
import moment from "moment"
function priceFormatter(cell, row) {
    if (row.solde < 0) {
      return (
        <span>
          <strong style={ { color: 'red' } }>$ { cell } NTD(Sales!!)</strong>
        </span>
      );
    }
  
    return (
      <span> { cell } TND</span>
    );
  }
  function Datecreation(cell, row) {
   
  
    return (
      <span>{ moment(row.created_at).format('MM/DD/YYYY [at] HH:mm') } </span>
      )
      }
const Listecompte = () => {
    const columns = [{
        dataField: 'id',
        text: 'Product ID',
      }, {
        dataField: 'firstname',
        text: 'firstname',
        filter: textFilter()
      }, {
        dataField: 'lastname',
        text: 'lastname',
        filter: textFilter()
      },
      {
        dataField: 'cin',
        text: 'cin',
        filter: textFilter()
      },
      {
        dataField: 'solde',
        text: 'solde',
        filter: textFilter(),
        formatter: priceFormatter
      },
      {
        dataField: 'compte',
        text: 'description',
        filter: textFilter()
      },
      {
        dataField: 'crated_at',
        text: 'Date creation compte',
        filter: textFilter(),
        formatter:Datecreation
      }
    

      
    ];
    const [list,setlist]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3003/compte/list').then((Response) => {
            setlist(Response.data.content)

        }).catch(e => {
            alert(e)
        })

    },[])

    

    return (
        <Row>
            <Col xs="12" md="12">
                <Card>
                    <CardTitle className="bg-light border-bottom p-3 mb-0">
                        <i className="mdi mdi-toggle-switch mr-2"> </i>
                        Liste compte
                    </CardTitle>
                    <CardBody className="">
                    <BootstrapTable keyField='id' data={ list } columns={ columns } filter={ filterFactory() } />
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Listecompte;