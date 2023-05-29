import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../actions/cartActions";
import payment from "../images/payment.svg";

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress.address) {
    history.push("/shipping");
  }

  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 />

      <div className="split left">
        <FormContainer>
          <h1>Payment Method</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group>
              {/* <Form.Label as="legend">Select Method</Form.Label> */}
              <Col className="Col">
                <Form.Check
                  type="radio"
                  label="PayPal"
                  id="PayPal"
                  style={{
                    marginBottom: "10px",
                    marginLeft: "20px",
                    fontSize: "20px",
                  }}
                  name="paymentMethod"
                  value="PayPal"
                  checked
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></Form.Check>

                <Form.Check
                  type="radio"
                  label="PayTM"
                  id="PayTM"
                  style={{
                    marginBottom: "10px",
                    marginLeft: "20px",
                    fontSize: "20px",
                  }}
                  name="paymentMethod"
                  value="PayTM"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></Form.Check>

                <Form.Check
                  type="radio"
                  label="PhonePe"
                  id="PhonePe"
                  style={{
                    marginBottom: "10px",
                    marginLeft: "20px",
                    fontSize: "20px",
                  }}
                  name="paymentMethod"
                  value="PhonePe"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></Form.Check>

                <Form.Check
                  type="radio"
                  label="GooglePay"
                  id="GooglePay"
                  style={{
                    marginBottom: "10px",
                    marginLeft: "20px",
                    fontSize: "20px",
                  }}
                  name="paymentMethod"
                  value="GooglePay"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></Form.Check>

                <Form.Check
                  type="radio"
                  label="CREDIT/DEBIT/ATM CARD"
                  id="CREDIT/DEBIT/ATM CARD"
                  style={{
                    marginBottom: "10px",
                    marginLeft: "20px",
                    fontSize: "20px",
                  }}
                  name="paymentMethod"
                  value="CREDIT/DEBIT/ATM CARD"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></Form.Check>

                <Form.Check
                  type="radio"
                  label="NET BANKING"
                  id="NET BANKING"
                  style={{
                    marginBottom: "10px",
                    marginLeft: "20px",
                    fontSize: "20px",
                  }}
                  name="paymentMethod"
                  value="NET BANKING"
                  onChange={(e) => setPaymentMethod(e.target.value)}
                ></Form.Check>
              </Col>
            </Form.Group>

            <Button type="submit" variant="primary">
              Continue
            </Button>
          </Form>
        </FormContainer>
      </div>

      <div className="split right">
        <figure>
          <img className="payment" src={payment} alt="Payment Method" />
        </figure>
      </div>
    </div>
  );
};

export default PaymentScreen;
