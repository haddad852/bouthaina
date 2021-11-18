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
        <strong style={{ color: 'red' }}>$ {cell} NTD(Sales!!)</strong>
      </span>
    );
  }

  return (
    <span> {cell} TND</span>
  );
}
function Datecreation(cell, row) {


  return (
    <span>{moment(row.date).format('MM/DD/YYYY [at] HH:mm')} </span>
  )
}
function Dateprete(cell, row) {

  if (row.cheque_for) {
    return (
      <span>{moment(row.date).format('MM/DD/YYYY [at] HH:mm')} </span>
    )
  } else {
    return ""
  }

}






function traiterchaquier(cell, row) {

  if (row.traite ==0) {
    return (
      <Button className="btn" color="warning" size="lg" disabled>
        non traité
      </Button>
    )
  } else {

    return (
      <Button className="btn" color="success" size="lg" disabled>
        chequier prete
      </Button>
    )
  }
}


const Listdemandechequier = () => {
  function Traitelademande(cell, row) {


    return (
      <Button className="btn" color="primary" size="lg" onClick={() => traiterdema(row.id)} >
        <i className="mdi mdi-send mr-2"> </i>
        demande traiter
      </Button>
    )
  }


  function compteclient(cell, row) {

    if (row.compte_cheque) {
      return (
        <span>  <Button className="btn" outline color="success">
          {list[row.compte_cheque].firstname} {" "}  {list[row.compte_cheque].lastname}
        </Button> <br />  {"CIN"}   <Button className="btn" outline color="primary">
            {list[row.compte_cheque].cin}
          </Button> <br />  {"numero compte :"}   <Button className="btn" outline color="primary">
            {list[row.compte_cheque].id}
          </Button>  </span>
      )
    } else {

      return " "
    }
  }
  const columns = [{
    dataField: 'id',
    text: 'Product ID',
  }, {
    dataField: 'compte_cheque',
    text: 'deamnde par',
    filter: textFilter(),
    formatter: compteclient


  }, {
    dataField: 'nb_cheque',
    text: 'nb_cheque',
    filter: textFilter(),

  },
  {
    dataField: 'traite',
    text: 'montant',
    filter: textFilter(),
    formatter: traiterchaquier
  },
  {
    dataField: 'crated_at',
    text: 'Date creation compte',
    filter: textFilter(),
    formatter: Datecreation
  },
  {
    dataField: 'cheque_for',
    text: 'pret at',
    filter: textFilter(),
    formatter: Dateprete
  },
  {
    dataField: 'traites',
    text: 'Traiter la demande',
    filter: textFilter(),
    formatter: Traitelademande
  }



  ];
  const [list, setlist] = useState([])
  const [chequier, setchequier] = useState([])
  useEffect(() => {
    getdata()

  }, [])

  const getdata = () => {
    setlist([])
    setchequier([])

    axios.get('http://localhost:3003/compte/list').then((Response) => {
      setlist(Object.assign({}, ...Response.data.content.map((x) => ({ [x.id]: x }))))

    }).catch(e => {
      alert(e)
    })
    axios.get('http://localhost:3003/chequier/list').then((Response) => {
      setchequier(Response.data.content)

    }).catch(e => {
      alert(e)
    })
  }

  const traiterdema = (id) => {

    console.log(id)
    axios.put('http://localhost:3003/chequier/put/' + id).then((Response) => {
      getdata()
    }).catch(e => {
      alert(e)
    })

  }



  return (
    <Row>
      <Col xs="12" md="12">
        <Card>
          <CardTitle className="bg-light border-bottom p-3 mb-0">
            <i className="mdi mdi-toggle-switch mr-2"> </i>
            Liste all transaction

          </CardTitle>
          <CardBody className="">
            <BootstrapTable keyField='id' data={chequier} columns={columns} filter={filterFactory()} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Listdemandechequier;