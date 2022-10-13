import React from "react";
import styled from "styled-components";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
// import { useSelector } from 'react-redux';
// import Confirmation from "./Confirmation";
import { Navigate, useNavigate } from "react-router-dom";
const CheckButtonPayCard = styled.button`
  height: 50px;
  line-height: 50px;
  background: #60b246;
  font-size: 15px;
  margin-bottom: 30px;
  text-align: center;
  padding: 0 16px;
  color: #fff;
  text-transform: uppercase;
  border: 0;
  outline: 0;
  position: relative;
  overflow: hidden;
  font-weight: 600;
  cursor: pointer;
  width: 100%;
`;

const Wrapper = styled.div`
  display: inline-block;
  min-width: 230px;
  background: #edf1f7;
  max-width: 245px;
`;

const MethodWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  position: relative;
  margin: 5px;
  margin-right: -10px;
  :hover {
    cursor: pointer;
    background: white;
    color: black;
  }
`;

const Title = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  color: #282c3f;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  :hover {
    color: black;
  }
`;

const Wallet = styled.img`
  height: 50px;
  width: 50px;
  vertical-align: inherit;
  margin-radius: 0px;
  box-shadow: 0 3px 5px 0 rgba(40, 44, 63, 0.4);
`;

const Method = styled.button`
  border: none;
  background-color: transparent;
  display: inline-block;
  color: #686b78;
  font-weight: 500;
  font-size: 16px;
  padding-right: 15px;
  ::hover{
    color:black;
  }
`;
const Buttonpay = styled.button`
  max-width: 142px;
  height: 40px;
  margin-top: 8px;
  line-height: 40px;
  text-align: center;
  padding: 0 16px;
  background: #60b246;
  color: #fff;
  text-transform: uppercase;
  border: 0;
  outline: 0;
  position: relative;
  overflow: hidden;
  font-weight: 600;
  cursor: pointer;
  min-width: 142px;
`;
const Walletmaindiv = styled.div`
  padding: 30px;
  padding-bottom: 29px;
  border: 1px solid #e9e9eb;
  margin-bottom: 20px;
`;
const CardInput = styled.input`
  background-color: transparent;
  color:black;
  line-height: normal;
  border: none;
  outline: none;
  height: 70px;
  width: 100%;
  font-size: 17px;
  margin: 0;
  padding: 0 20px;
  padding-top: 22px;
  box-shadow: none;
  box-sizing: border-box;
  border-radius: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  ::placeholder{
    margin-top:10px;
    font-weight:400;
  }
`;
const CardInputLabel = styled.label`
  position: absolute;
  left: 0;
  bottom: 24px;
  padding-left: 20px;
  line-height: 20px;
  font-size: 17px;
  cursor: text;
  transition: 0.2s ease;
  width: 100%;
  color: #93959f;
  will-change: transform, color, font-size;
  pointer-events: none;
  font-weight: 400;
`;
const TempWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 26px;
  font-size: 14px;
  font-weight: 500;
  color: #5d8ed5;
  transform: translateZ(0);
  cursor: pointer;
  will-change: transform;
  transition: 0.2s ease;
`;

const Payment = () => {
  const navigate = useNavigate();
  const [wallet, setWallet] = React.useState(null);
  const [cards, setCards] = React.useState(null);
  const [sodexo, setSodexo] = React.useState(null);
  const [cash, setCash] = React.useState(null);
  const [cardNumber, setCardNumber] = React.useState("")
  const [cvv, setCvv] = React.useState("")
  const [cardName, setCardName] = React.useState("")
  const [expiry, setExpiry]=React.useState("")
  
const nav = useNavigate();

  const handleExpiryDate = date => {
    setExpiry({
      value: date
    });
  };

  function handlePayment(e){
    e.preventDefault();
    nav("/ontheway");

  }

  const Wallet = () => {
    return (
      <>
        <div>
          <Walletmaindiv>
            <div>
              <div>
                <div>
                  <img
                    style={{
                      maxHeight: "40px",
                      width: " 40px",
                    }}
                    class="_1curP"
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_80/Amazon_Pay_Logos/Pay/logo_pay-primary-fullcolor-positive"
                  />
                </div>
              </div>
              <div style={{ marginTop: "17px" }}>
                <div
                  style={{
                    color: "#282c3f",
                    fontWeight: " 500",
                    fontSize: "17px",
                  }}
                  title="Amazon Pay"
                >
                  Amazon Pay
                </div>
              </div>
            </div>
            <div>
              <Buttonpay onClick={handlePayment}>Pay ₹250</Buttonpay>
            </div>
          </Walletmaindiv>
          <Walletmaindiv>
            <div>
              <div>
                <div>
                  <img
                    style={{
                      maxHeight: "40px",
                      width: " 40px",
                    }}
                    class="_1curP"
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_80/paytm_wcxbwf"
                  />
                </div>
              </div>
              <div style={{ marginTop: "17px" }}>
                <div
                  style={{
                    color: "#282c3f",
                    fontWeight: " 500",
                    fontSize: "17px",
                  }}
                  title="Paytm"
                >
                  Paytm
                </div>
              </div>
            </div>
            <div style={{ marginTop: "14px" }}>
              <div
                style={{
                  color: "#fc8019",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  cursor: " pointer",
                }}
              >
                Link Account
              </div>
            </div>
          </Walletmaindiv>
          <Walletmaindiv>
            <div>
              <div>
                <div>
                  <img
                    style={{
                      maxHeight: "40px",
                      width: " 40px",
                    }}
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_80/phonepe_icon_aca9jf"
                  />
                </div>
              </div>
              <div style={{ marginTop: "17px" }}>
                <div
                  style={{
                    color: "#282c3f",
                    fontWeight: " 500",
                    fontSize: "17px",
                  }}
                  title="Phonepay"
                >
                  PhonePe (Wallet/UPI/Cards)
                </div>
              </div>
            </div>
            <div style={{ marginTop: "14px" }}>
              <div
                style={{
                  color: "#fc8019",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  cursor: " pointer",
                }}
              >
                Link Account
              </div>
            </div>
          </Walletmaindiv>
          <Walletmaindiv>
            <div>
              <div>
                <div>
                  <img class="_1curP" src="" />
                  <img
                    style={{
                      maxHeight: "40px",
                      width: " 40px",
                    }}
                    class="_1curP"
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_80/v1612413183/PaymentLogos/Mobikwik"
                  ></img>
                </div>
              </div>
              <div style={{ marginTop: "17px" }}>
                <div
                  style={{
                    color: "#282c3f",
                    fontWeight: " 500",
                    fontSize: "17px",
                  }}
                  title="Mobikwik"
                >
                  Mobikwik
                </div>
              </div>
            </div>
            <div style={{ marginTop: "14px" }}>
              <div
                style={{
                  color: "#fc8019",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  cursor: " pointer",
                }}
              >
                Link Account
              </div>
            </div>
          </Walletmaindiv>
          <Walletmaindiv>
            <div>
              <div>
                <div>
                  <img
                    style={{
                      maxHeight: "40px",
                      width: " 40px",
                    }}
                    class="_1curP"
                    src="	https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_80/freecharge_ya2xfq"
                  />
                </div>
              </div>
              <div style={{ marginTop: "17px" }}>
                <div
                  style={{
                    color: "#282c3f",
                    fontWeight: " 500",
                    fontSize: "17px",
                  }}
                  title="freecharge"
                >
                  Freecharge
                </div>
              </div>
            </div>
            <div style={{ marginTop: "14px" }}>
              <div
                style={{
                  color: "#fc8019",
                  fontWeight: "600",
                  textTransform: "uppercase",
                  cursor: " pointer",
                }}
              >
                Link Account
              </div>
            </div>
          </Walletmaindiv>
        </div>
      </>
    );
  };
  const Cards = () => {
    return (
      <>
        <div
          style={{
            background: "#fff",
            flex: "1.3rem",
          }}
        >
          <div style={{ paddingLeft: " 40px", marginBottom: "40px" }}>
            <div>
              <div style={{ marginTop: "22px" }}>
                <div>
                  <div style={{ marginTop: "-22px" }}>
                    <div
                      style={{
                        color: "#282c3f",
                        fontWeight: "500",
                        fontSize: "18px",
                        marginBottom: " 25px",
                      
                      }}
                    >
                      Add New Card
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#7e808c",
                          whiteSpace: " nowrap",
                          textTransform: "uppercase",
                          marginRight: " 5px",
                        }}
                      >
                        We accept
                      </div>
                      <div style={{ display: "flex" }}>
                        <div style={{ marginRight: "16px" }}>
                          <div class="">
                            <div>
                              <img
                                style={{
                                  height: "12px",
                                  width: "37px",
                                  display: "block",
                                }}
                                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/Visa_lztyeu"
                              />
                            </div>
                          </div>
                        </div>
                        <div style={{ marginRight: "16px" }}>
                          <div class="">
                            <div>
                              <img
                                style={{
                                  display: "block",
                                  height: "12px",
                                  width: "37px",
                                }}
                                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/Mastercard_wqoea2"
                              />
                            </div>
                          </div>
                        </div>
                        <div style={{ marginRight: "16px" }}>
                          <div class="">
                            <div>
                              <img
                                style={{
                                  display: "block",
                                  height: "12px",
                                  width: "37px",
                                }}
                                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/Amex_ozga1w"
                              />
                            </div>
                          </div>
                        </div>
                        <div style={{ marginRight: "16px" }}>
                          <div class="">
                            <div>
                              <img
                                style={{
                                  display: "block",
                                  height: "12px",
                                  width: "37px",
                                }}
                                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/Zeta_zybqrc"
                              />
                            </div>
                          </div>
                        </div>
                        <div style={{ marginRight: "16px" }}>
                          <div class="">
                            <div>
                              <img
                                style={{
                                  display: "block",
                                  height: "12px",
                                  width: "37px",
                                }}
                                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/RuPayColoured_oyd73s_soebkd"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ paddingTop: "10px", marginTop: " 12px" }}>
                    <div style={{ position: " relative", overflow: "hidden" }}>
                      <div
                        style={{
                          border: " 1px solid #d4d5d9",
                          padding: "0",
                          display: " block",
                          position: "relative",
                          transform: "translateZ(0)",
                        }}
                      >
                        <CardInput
                          type="text"
                          placeholder="Card Number"
                         
                        />
                        <TempWrapper></TempWrapper>
                      
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          borderLeft: " 1px solid #d4d5d9",
                          borderRight: " 1px solid #d4d5d9",
                          width: "60%",
                        }}
                      >
                        <CardInput
                           placeholder="Valid through(MM/YY)"
                            onChange={date => handleExpiryDate(date)}
                            value={expiry}
                            disabled={false}
                            onBlur={date => handleExpiryDate(date)}
                        />

                       
                      </div>
                      <div
                        style={{
                          borderRight: "1px solid #d4d5d9",
                          width: "40%",
                          borderBottom: "0",
                        }}
                      >
                        <CardInput
                          type="number"
                        placeholder="CVV"
                      
                        />
                      </div>
                    </div>
                    <div style={{ position: "relative", overflow: "hidden" }}>
                      <div
                        style={{
                          border: " 1px solid #d4d5d9",
                          padding: "0",
                          display: " block",
                          position: "relative",
                          transform: "translateZ(0)",
                          borderBottom: "1px solid #d4d5d9",
                        }}
                      >
                        <CardInput
                          type="text"
                         placeholder="Name On Card"
                        
                        />
                        <TempWrapper></TempWrapper>
                       
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      margin: "30px 0",
                      width: "100%",
                      transform: " translateZ(0)",
                    }}
                  >
                    <div
                      style={{
                        display: "table-cell",
                        verticalAlign: " top",
                        width: "15px",
                      }}
                    >
                      <div>
                        <CheckBoxOutlinedIcon style={{ color: "#60b246" }} />
                      </div>
                    </div>
                    <div
                      style={{
                        marginLeft: "15px",
                        verticalAlign: "middle",
                        color: "#3d4152",
                        fontSize: " 13px",
                        fontWeight: "300",
                      }}
                    >
                      Securely save this card for a faster checkout next time.
                    </div>
                  </div>
                  <CheckButtonPayCard onClick={handlePayment}>Pay ₹250</CheckButtonPayCard>
                  <div
                    style={{
                      margin: " -22px 0 30px",
                      color: " #93959f",
                      fontSize: "12px",
                    }}
                  >
                    Card details will be saved securely, based of the industry
                    standard
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const Sodex = () => {
    return (
      <>
        <div
          style={{
            background: "#fff",
            flex: "1.3rem",
          }}
        >
          <div style={{ paddingLeft: " 40px", marginBottom: "40px" }}>
            <div>
              <div style={{ marginTop: "22px" }}>
                <div>
                  <div style={{ marginTop: "-22px" }}>
                    <div
                      style={{
                        color: "#282c3f",
                        fontWeight: "500",
                        fontSize: "18px",
                        marginBottom: " 25px",
                        textTransform: " lowercase",
                      }}
                    >
                      Add New Card
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "#7e808c",
                          whiteSpace: " nowrap",
                          textTransform: "uppercase",
                          marginRight: " 5px",
                        }}
                      >
                        We accept
                      </div>
                      <div style={{ display: "flex" }}>
                        <div style={{ marginRight: "16px" }}>
                          <div class="">
                            <div>
                              <img
                                style={{
                                  display: "block",
                                  height: "12px",
                                  width: "37px",
                                }}
                                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/Sodexo_tfxihv"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ paddingTop: "10px", marginTop: " 12px" }}>
                    <div style={{ position: " relative", overflow: "hidden" }}>
                      <div
                        style={{
                          border: " 1px solid #d4d5d9",
                          padding: "0",
                          display: " block",
                          position: "relative",
                          transform: "translateZ(0)",
                        }}
                      >
                        <CardInput
                          type="text"
                          name="cardNumber"
                          id="cardNumber"
                          autocomplete="off"
                          value=""
                        />
                        <TempWrapper></TempWrapper>
                        <CardInputLabel for="cardNumber">
                          Card number
                        </CardInputLabel>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                      }}
                    >
                      <div
                        style={{
                          borderLeft: " 1px solid #d4d5d9",
                          borderRight: " 1px solid #d4d5d9",
                          width: "60%",
                        }}
                      >
                        <CardInput
                          type="text"
                          name="expiry"
                          value=""
                          autocomplete="off"
                        />

                        <p
                          style={{
                            marginTop: "-35px",
                            lineHeight: "20px",
                            color: "#93959f",
                            fontSize: "17px",
                            fontWeight: "400",
                            paddingLeft: "20px",
                          }}
                        >
                          Valid through(MM/YY)
                        </p>
                      </div>
                      <div
                        style={{
                          borderRight: "1px solid #d4d5d9",
                          width: "40%",
                          borderBottom: "0",
                        }}
                      >
                        <CardInput
                          type="text"
                          name="cvv"
                          id="cvv"
                          autocomplete="off"
                          value=""
                        />

                        <p
                          style={{
                            marginTop: "-35px",
                            lineHeight: "20px",
                            color: "#93959f",
                            fontSize: "17px",
                            fontWeight: "400",
                            paddingLeft: "20px",
                          }}
                        >
                          CVV
                        </p>
                      </div>
                    </div>
                    <div style={{ position: "relative", overflow: "hidden" }}>
                      <div
                        style={{
                          border: " 1px solid #d4d5d9",
                          padding: "0",
                          display: " block",
                          position: "relative",
                          transform: "translateZ(0)",
                          borderBottom: "1px solid #d4d5d9",
                        }}
                      >
                        <CardInput
                          type="text"
                          name="name"
                          id="name"
                          autocomplete="off"
                          value=""
                        />
                        <TempWrapper></TempWrapper>
                        <CardInputLabel for="name">Name on card</CardInputLabel>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      margin: "30px 0",
                      width: "100%",
                      transform: " translateZ(0)",
                    }}
                  >
                    <div
                      style={{
                        display: "table-cell",
                        verticalAlign: " top",
                        width: "15px",
                      }}
                    >
                      <div>
                        <CheckBoxOutlinedIcon style={{ color: "#60b246" }} />
                      </div>
                    </div>
                    <div
                      style={{
                        marginLeft: "15px",
                        verticalAlign: "middle",
                        color: "#3d4152",
                        fontSize: " 13px",
                        fontWeight: "300",
                      }}
                    >
                      Securely save this card for a faster checkout next time.
                    </div>
                  </div>
                  <CheckButtonPayCard onClick={handlePayment}>Pay ₹250</CheckButtonPayCard>
                  <div
                    style={{
                      margin: " -22px 0 30px",
                      color: " #93959f",
                      fontSize: "12px",
                    }}
                  >
                    Card details will be saved securely, based of the industry
                    standard
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const Cash = () => {
    return (
      <>
        <div style={{ background: "#fff" }}>
          <div style={{ paddingLeft: "40px", marginBottom: " 40px" }}>
            <div>
              <div style={{ maxWidth: "380px" }}>
                <img
                  style={{
                    marginBottom: "42px",
                    marginTop: " 40px",
                    width: "80px",
                    maxHeight: "80px",
                  }}
                  alt=""
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_80/PaymentLogos/instruments/4x/Cod"
                />
                <div
                  style={{
                    lineHeight: "1.4",
                    opacity: ".8",
                    marginTop: "0!important",
                    marginBottom: " 20px!important",
                    fontWeight: "600",
                    color: "#282c3f",
                  }}
                >
                  <div
                    style={{
                      color: "#282c3f",
                      fontWeight: " 500",
                      fontSize: "17px",
                    }}
                    title="Cash"
                  >
                    Cash
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      marginTop: "2px",
                      color: "#7e808c",
                      fontWeight: "300",
                      lineHeight: "18px",
                    }}
                  >
                    Pay cash at the time of delivery. We recommend you use
                    online payments for contactless delivery
                  </div>
                </div>
                <CheckButtonPayCard onClick={handlePayment}>Pay ₹237</CheckButtonPayCard>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  // const state = useSelector((state) => state);
  let Total = 100;

  function handleWallet(e) {
    e.preventDefault();
    setWallet(true);
    setCash(false);
    setSodexo(false);
    setCards(false);
  }
  function handleCard(e) {
    e.preventDefault();
    setWallet(false);
    setCash(false);
    setSodexo(false);
    setCards(true);
  }
  function handleSodex(e) {
    e.preventDefault();
    setWallet(false);
    setCash(false);
    setSodexo(true);
    setCards(false);
  }
  function handleCash(e) {
    e.preventDefault();
    setWallet(false);
    setCash(true);
    setSodexo(false);
    setCards(false);
  }

  return (
    <>
    
      <Title>Choose payment method</Title>
      <div style={{display:"flex"}}>
        <Wrapper>
          <MethodWrapper style={{
          backgroundColor: wallet ? 'white' : 'transparent',
          
        }}>
            <AccountBalanceWalletIcon
              style={{
                color: " #686b78",
                fontSize: "17px",
                margin: "0 15px",
              }}
            />
            <Method  
         onClick={handleWallet}>Wallets</Method>
          </MethodWrapper>
          <MethodWrapper style={{
          backgroundColor: cards ? 'white' : 'transparent',
          
        }}>
            <CreditCardOutlinedIcon
              style={{
                color: " #686b78",
                fontSize: "17px",
                margin: "0 15px",
              }}
            />
            <Method onClick={handleCard}>Credit & Debit cards</Method>{" "}
          </MethodWrapper>
          <MethodWrapper style={{
          backgroundColor: sodexo ? 'white' : 'transparent',
          color: sodexo? "black":""
        }}>
            <CreditCardOutlinedIcon
              style={{
                color: sodexo ? "black":"none",
                color: " #686b78",
                fontSize: "17px",
                margin: "0 15px",
              }}
            />
            <Method onClick={handleSodex}>Sodexo</Method>{" "}
          </MethodWrapper>
          <MethodWrapper style={{
          backgroundColor: cash ? 'white' : 'transparent',
          color: cash? "black":""
          
        }}>
            <CurrencyRupeeOutlinedIcon
              style={{
                color: " #686b78",
                fontSize: "17px",
                margin: "0 15px",
              }}
            />
            <Method onClick={handleCash}>Pay on Delivery</Method>{" "}
          </MethodWrapper>
        </Wrapper>
        <div style={{ paddingLeft: "40px", marginBottom: "40px}" }}>
          {wallet ? (
            <Wallet />
          ) : cards ? (
            <Cards />
          ) : sodexo ? (
            <Sodex />
          ) : cash ? (
            <Cash />
          ) : (
            <Wallet/>
          )}
        </div>
      </div>
    </>
  );
};

export default Payment;

// {this.props.conditionA ? "Condition A"
// : this.props.conditionB ? "Condition B"
// : "Neither"}
