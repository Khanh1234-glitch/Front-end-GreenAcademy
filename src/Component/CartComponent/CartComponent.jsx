import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from "mdb-react-ui-kit";
import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext/AppContext";
import { useNavigate } from "react-router-dom";

function CartComponent() {
  const navigate = useNavigate();
  const { cartItem, cartCount, cartSubTotal, handleUpdateQuantity } =
    useContext(AppContext);
  const handleBackToShop = () => {
    navigate("/");
  };
  console.log(cartItem);
  return (
    <>
      <section className="h-100 gradient-custom">
        <MDBContainer className="h-100 py-5">
          <MDBRow className="justify-content-center my-4">
            <MDBCol md="8">
              <MDBCard className="mb-4">
                <MDBCardHeader className="py-3">
                  <MDBTypography tag="h5" className="mb-0">
                    Cart - {cartCount} items
                  </MDBTypography>
                </MDBCardHeader>
                <MDBCardBody>
                  {cartItem.map((item, key) => (
                    <>
                      <MDBRow key={key}>
                        <MDBCol lg="3" md="12" className="mb-lg-0 mb-4">
                          <MDBRipple
                            rippleTag="div"
                            rippleColor="light"
                            className="bg-image hover-zoom hover-overlay rounded"
                          >
                            <img
                              src={item && item.linkImg && item.linkImg.black}
                              className="w-100"
                            />
                            <a href="#!">
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.2)",
                                }}
                              ></div>
                            </a>
                          </MDBRipple>
                        </MDBCol>

                        <MDBCol lg="5" md="6" className=" mb-lg-0 mb-4">
                          <p>
                            <strong>{item.name}</strong>
                          </p>
                        </MDBCol>
                        <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
                          <div
                            className="d-flex mb-4"
                            style={{ maxWidth: "300px" }}
                          >
                            <MDBBtn
                              onClick={() =>
                                handleUpdateQuantity("minus", item)
                              }
                              className="me-2 px-3"
                            >
                              <MDBIcon fas icon="minus" />-
                            </MDBBtn>

                            <MDBInput
                              defaultValue={item.quantity}
                              min={0}
                              type="number"
                              label="Quantity"
                              onChange={(e) => {
                                // Đảm bảo rằng giá trị nhập là một số không âm
                                const newQuantity = Math.max(
                                  parseInt(e.target.value, 10),
                                  0,
                                );
                                handleUpdateQuantity(newQuantity, item);
                              }}
                            />

                            <MDBBtn
                              onClick={() => handleUpdateQuantity("plus", item)}
                              className="ms-2 px-3"
                            >
                              <MDBIcon fas icon="plus" />+
                            </MDBBtn>
                          </div>

                          <p className="text-md-center text-start">
                            <strong>
                              {parseFloat(item.priceSale) *
                                parseFloat(item.quantity)}
                              <span> </span>VND
                            </strong>
                          </p>
                        </MDBCol>
                      </MDBRow>
                      <hr className="my-4" />
                    </>
                  ))}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4">
              <MDBCard className="mb-4">
                <MDBCardHeader>
                  <MDBTypography tag="h5" className="mb-0">
                    Summary
                  </MDBTypography>
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBListGroup flush>
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>{cartSubTotal} VND</span>
                    </MDBListGroupItem>

                    <MDBListGroupItem className="d-flex justify-content-between align-items-center mb-3 border-0 px-0">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>{cartSubTotal} VND</strong>
                      </span>
                    </MDBListGroupItem>
                  </MDBListGroup>

                  <MDBBtn onClick={handleBackToShop} block size="lg">
                    Go to checkout
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}

export default CartComponent;
