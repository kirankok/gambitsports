import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchPayments } from '../../redux/actions/paymentsActions'
import { Container, Row, Col } from 'react-bootstrap';
import './Payments.scss';


const Payments = (props) => {
  useEffect(() => {
    props.fetchPayments()
  }, []);

  return (
    <Container className="payments-container">
      <Row className="payments-header">
        <p className="balance">{`Total Balance ${props.payments.wallet_balance}`}</p>
        <p className="payments-subtext">0 withdrawl in progress</p>
      </Row>
      <Row className="payment-card-container">

        {props.payments.transactions && props.payments.transactions.map(item => {
          if (item.status === 'failed') {
            return (

              <Col xs={3} className="payment-card">
                <Row>
                  <Col><img src={'/assets/ruppe-min.png'} width="10px" height="10px" /><span>{item.amount}</span></Col>
                  <Col><img src={'/assets/add money-min.png'} width="10px" height="10px" /></Col>
                </Row>
                <Row>
                  <Col><p className="payment-status">Transaction Unsuccessfull</p></Col>
                </Row>
              </Col>

            )
          }
        })}
      </Row>

    </Container>
  )
}

const s2p = state => {
  return {
    payments: state.paymentsReducer.data
  }
}

export default connect(s2p, { fetchPayments })(Payments);