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
      <span>{ moment(row.date).format('MM/DD/YYYY [at] HH:mm') } </span>
      )
      }

   


const Listdemandechequier = () => {
    function compteclient(cell, row) {
   
  
        return (
          <span>  <Button className="btn" outline color="success">
{ list[row.from].firstname } {" "}  {list[row.from].lastname }
      </Button> <br />  {"CIN"}   <Button className="btn" outline color="primary">
          {list[row.from].cin }
      </Button> <br />  {"numero compte :"}   <Button className="btn" outline color="primary">
          {list[row.from].id }
      </Button>  </span>
          )
          }
    const columns = [{
        dataField: 'id',
        text: 'Product ID',
      }, {
        dataField: 'from',
        text: 'expidteur',
        filter: textFilter(),
        formatter: compteclient

      }, {
        dataField: 'to',
        text: 'pour',
        filter: textFilter(),
        formatter: compteclient

      },
      {
        dataField: 'montant',
        text: 'montant',
        filter: textFilter(),
        formatter: priceFormatter
      },
      {
        dataField: 'crated_at',
        text: 'Date creation compte',
        filter: textFilter(),
        formatter:Datecreation
      }
    

      
    ];
    const [list,setlist]=useState([])
    const [transactions,settransactions]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3003/compte/list').then((Response) => {
            setlist(  Object.assign({}, ...Response.data.content.map((x) => ({[x.id]: x}))))

        }).catch(e => {
            alert(e)
        })
        axios.get('http://localhost:3003/transaction/list').then((Response) => {
            settransactions(Response.data.content)

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
                        Liste all transaction
                        
                    </CardTitle>
                    <CardBody className="">
                    <BootstrapTable keyField='id' data={ transactions } columns={ columns } filter={ filterFactory() } />
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default Listdemandechequier;