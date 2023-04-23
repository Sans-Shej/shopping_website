<template>
    <div>
    
    <div>
          
          <div className="card-details-container">
            <h3 className="ha2">ENTER YOUR CARD DETAILS</h3>
            <!-- <img
              class="img"
              src="https://static.zara.net/static/images/payment/payment/icon-payment-visa.svg"
              alt=""
            /> -->
            <form action="" className="card-detail">
              <input type="number" name="cardnumber"  value={user.cardnumber} onChange={handleChange}  placeholder="CARD NUMBER"  />
              <input type="month" name="month" value={user.month} onChange={handleChange}  placeholder="MONTH" />
              <input type="number" name="year" value={user.year} onChange={handleChange}  placeholder="YEAR" />
              <br />
              <input type="text" className="card-holder-input" name="cardholder" value={user.cardholder} onChange={handleChange}  placeholder="CARD HOLDER" />
              <input type="text" name="cvv" value={user.cvv} onChange={handleChange} placeholder="CVV2 SECURITY CODE" />
            </form>
            
          </div>
  
          <div className="cards">
            <div className="pr">
              <div className="price">
                <p>TOTAL : RS {{ cartCheckoutPrice }}</p>
              </div>
              <button onClick={purchase}>
                CONTINUE
              </button>
            </div>
          </div>
        </div>
      
    </div>
  </template>
  
  <script>
   import { mapGetters } from "vuex";
   export default {
    computed: {
    ...mapGetters([
      "cartCheckoutPrice",
    ]),
  },
   };
  </script>

  <style>
.cards{
    display: flex;
    justify-content: space-between;
    background-color: white;
    width: 100%;
    height: 80px;
    position: fixed;
    margin-top: 5%;

}
.pr{
    display: flex;
    margin-left: 69%;
}
span{
    font-size: 12px;
    font-weight: bold;
}
.img{
    border: 1px solid rgb(204, 202, 202);
    width: 8%;
    margin-top: 60px;
    margin-left: 7%;

}
form>input{
    border: none;
    border-bottom: 1px solid rgb(196, 193, 193);
    width: 20%;
    height: 25px;
    font-size: 10px;
    font-weight: bold;
    margin-right: 30px;
  
    margin-top: 50px;
}
.ha2{
    margin-left: 7%;
    font-size: 90%;

}
.card-details-container{
   border: 1px solid black;
    width: 50%;
    margin: auto;
    margin-top: 10%;
}
.card-holder-input{
    margin-left: 10%;
    width: 20%;
}
@media only screen and (min-width:375px) and (max-width:768px){
 
    .cards{
        margin-top: 490px;
    }
    .pr{
        margin-left: 50%;
    }
}

@media only screen and (min-width:0px) and (max-width:390px){
    .cards{
        margin-top: 245px;
        border-top: 2px solid black;
    }
    .pr{
        margin-left: 15%;
    }
    .card-details-container>img{
        width: 90px;
    }
    form>input{
        width: 35%;
        font-size: 12px;
    }
}

.btn-continue{
    margin-left: 75%;
    position: relative;
}
  </style>