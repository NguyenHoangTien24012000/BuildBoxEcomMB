function renderBox(){
	var imgContent = "%imgContent%", imgSp1 = "%imgSp1%", descriptionSp1 = "%descriptionSp1%", prevPrice1 = "%prevPrice1%", nextPrice1 = "%nextPrice1%", imgSp2 = "%imgSp2%", descriptionSp2 ="%descriptionSp2%", prevPrice2 = "%prevPrice2%", nextPrice2 = "%nextPrice2%", imgSp3 = "%imgSp3%", descriptionSp3 = "%descriptionSp3%" , prevPrice3 = "%prevPrice3%", nextPrice3 = "%nextPrice3%" , imgSp4= "%imgSp4%", descriptionSp4 = "%descriptionSp4%", prevPrice4 = "%prevPrice4%", nextPrice4 = "%nextPrice4%";
	this.css=`@font-face {
    font-family: "Roboto";
    src: url("../src/fonts/Roboto-Thin.ttf");
    font-style: normal;
    font-weight: 300;
  }
  @font-face {
    font-family: "Roboto";
    src: url("../src/fonts/Roboto-Medium.ttf");
    font-style: normal;
    font-weight: normal;
  }
  @font-face {
    font-family: "Roboto";
    src: url("../src/fonts/Roboto-Bold.ttf");
    font-style: normal;
    font-weight: bold;
  }
  * {
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: "Roboto";
    box-sizing: border-box;
  }
  
  .ecomMB {
    position: relative;
    left: 50%;
    transform: translate(-50%);
    width: 320px;
    height: 500px;
    background: #ffffff;
    border: 1px solid #e7e7e7;
  }
  .ecomMB .adx-logo {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }
  .ecomMB .ecomMB-bg {
    width: 320px;
    height: 180px;
  }
  .ecomMB .ecomMB-bg img {
    width: 100%;
    height: 100%;
  }
  
  .ecomMB-product {
    margin-top: 5px;
    overflow: hidden;
    margin-top: 11px;
    margin-left: 15px;
    display: flex;
    height: 100%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }
  .ecomMB-product::-webkit-scrollbar {
    display: none;
  }
  .ecomMB-product .product-item {
    margin-right: 15px;
    width: 180px;
    height: 280px;
    box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.06);
  }
  .ecomMB-product .product-img {
    position: relative;
  }
  .ecomMB-product .product-img img {
    width: 180px;
    height: 179.25px;
  }
  .ecomMB-product .product-img .content-svg {
    position: absolute;
    top: 0;
    right: 0;
  }
  .ecomMB-product .product-img .content-svg-text {
    font-weight: bold;
    font-size: 13px;
    line-height: 18px;
    color: #fff;
    position: absolute;
    top: 3px;
    right: 8px;
  }
  .ecomMB-product .product-detail {
    margin-top: 13px;
    margin-left: 9px;
    margin-right: 7px;
    position: relative;
  }
  .ecomMB-product .item-detail h5 {
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    color: #464646;
  }
  .ecomMB-product .item-price {
    margin-top: 9px;
  }
  .ecomMB-product .item-price h4 {
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #e00000;
  }
  .ecomMB-product .item-price h5 {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #777777;
  }
  .ecomMB-product .icon-arrow {
    position: absolute;
    right: 0;
    bottom: -5px;
  }
  
  .content-brand .brand-right {
    position: absolute;
    right: 5px;
    bottom: 0;
  }
  /*# sourceMappingURL=style2.css.map */`;
	this.html=`<div class="ecomMB">
    <div class="ecomMB-img">
        <div class="ecomMB-bg">
            <img src="${imgContent}" alt="black-friday">
        </div>
        <div class="adx-logo">
            <img src="https://adi.admicro.vn/adx/adxlogo-1.png" alt="adx-logo">
        </div>
    </div>
    <div class="ecomMB-product">
        <div class="product-item">
            <div class="product-img">
                <div class="content-svg"><svg width="49" height="23" viewBox="0 0 49 23" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.61666 1.77062C8.10071 0.693144 9.17198 0 10.3532 0H49.0003V22.2594H3.04868C0.872522 22.2594 -0.579627 20.0151 0.312151 18.03L7.61666 1.77062Z"
                            fill="#E00000" />
                    </svg>

                    <p class="content-svg-text">-50%</p>
                </div>
                <img src="${imgSp1}" alt="ecommb">
            </div>
            <div class="product-detail">
                <div class="item-detail">
                    <h5>${descriptionSp1}</h5>
                </div>
                <div class="item-price">
                    <h4>${prevPrice1} <u>đ</u></h4>
                    <h5><del>${nextPrice1} <u>đ</u></del></h5>
                </div>
                <div class="icon-arrow">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667"
                            stroke="#464646" stroke-width="1.25" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M12.5 2.5H17.5V7.5" stroke="#464646" stroke-width="1.25" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M8.33301 11.6667L17.4997 2.5" stroke="#464646" stroke-width="1.25"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
            </div>
        </div>
        <div class="product-item">
            <div class="product-img">
                <div class="content-svg"><svg width="49" height="23" viewBox="0 0 49 23" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.61666 1.77062C8.10071 0.693144 9.17198 0 10.3532 0H49.0003V22.2594H3.04868C0.872522 22.2594 -0.579627 20.0151 0.312151 18.03L7.61666 1.77062Z"
                            fill="#E00000" />
                    </svg>

                    <p class="content-svg-text">-50%</p>
                </div>
                <img src="${imgSp2}" alt="ecommb">
            </div>
            <div class="product-detail">
                <div class="item-detail">
                    <h5>${descriptionSp2}</h5>
                </div>
                <div class="item-price">
                    <h4>${prevPrice2} <u>đ</u></h4>
                    <h5><del>${nextPrice2} <u>đ</u></del></h5>
                </div>
                <div class="icon-arrow">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667"
                            stroke="#464646" stroke-width="1.25" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M12.5 2.5H17.5V7.5" stroke="#464646" stroke-width="1.25" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M8.33301 11.6667L17.4997 2.5" stroke="#464646" stroke-width="1.25"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
            </div>
        </div>
        <div class="product-item">
            <div class="product-img">
                <div class="content-svg"><svg width="49" height="23" viewBox="0 0 49 23" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.61666 1.77062C8.10071 0.693144 9.17198 0 10.3532 0H49.0003V22.2594H3.04868C0.872522 22.2594 -0.579627 20.0151 0.312151 18.03L7.61666 1.77062Z"
                            fill="#E00000" />
                    </svg>

                    <p class="content-svg-text">-50%</p>
                </div>
                <img src="${imgSp3}" alt="ecommb">
            </div>
            <div class="product-detail">
                <div class="item-detail">
                    <h5>${descriptionSp3}</h5>
                </div>
                <div class="item-price">
                    <h4>${prevPrice3} <u>đ</u></h4>
                    <h5><del>${nextPrice3} <u>đ</u></del></h5>
                </div>
                <div class="icon-arrow">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667"
                            stroke="#464646" stroke-width="1.25" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M12.5 2.5H17.5V7.5" stroke="#464646" stroke-width="1.25" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M8.33301 11.6667L17.4997 2.5" stroke="#464646" stroke-width="1.25"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
            </div>
        </div>
        <div class="product-item">
            <div class="product-img">
                <div class="content-svg"><svg width="49" height="23" viewBox="0 0 49 23" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M7.61666 1.77062C8.10071 0.693144 9.17198 0 10.3532 0H49.0003V22.2594H3.04868C0.872522 22.2594 -0.579627 20.0151 0.312151 18.03L7.61666 1.77062Z"
                            fill="#E00000" />
                    </svg>

                    <p class="content-svg-text">-50%</p>
                </div>
                <img src="${imgSp4}" alt="ecommb">
            </div>
            <div class="product-detail">
                <div class="item-detail">
                    <h5>${descriptionSp4}</h5>
                </div>
                <div class="item-price">
                    <h4>${prevPrice4} <u>đ</u></h4>
                    <h5><del>${nextPrice4} <u>đ</u></del></h5>
                </div>
                <div class="icon-arrow">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667"
                            stroke="#464646" stroke-width="1.25" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M12.5 2.5H17.5V7.5" stroke="#464646" stroke-width="1.25" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M8.33301 11.6667L17.4997 2.5" stroke="#464646" stroke-width="1.25"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>
            </div>
        </div>

    </div>
    <div class="content-brand">
        <div class="brand-right">
            <img src="./src/img/Lazada via AdX Ecom.png" alt="Adx">
        </div>
    </div>
</div>`;
	document.getElementById('ecomMB').innerHTML = `<style>${this.css}</style>${this.html}`;
}

renderBox();