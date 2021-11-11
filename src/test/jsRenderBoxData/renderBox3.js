function renderBox(){
	 var imgSp1 = "https://vn-live-05.slatic.net/p/92617dda7bc68bcb1a8c686e985c72fb.jpg_720x720q80.jpg_.webp", descriptionSp1 = "Cuộn băng keo 2 mặt acrylic trong suốt Living C , băng k...", prevPrice1 = "1.230.000", nextPrice1 = "1.230.000", imgSp2 = "https://vn-live-05.slatic.net/p/2093d57c803c555c294f7285d46da9d9.jpg_720x720q80.jpg_.webp", descriptionSp2 ="Cuộn băng keo 2 mặt trong suốt...", prevPrice2 = "1.230.000", nextPrice2 = "1.230.000", imgSp3 = "https://vn-live-05.slatic.net/p/92617dda7bc68bcb1a8c686e985c72fb.jpg_720x720q80.jpg_.webp", descriptionSp3 = "Cuộn băng keo 2 mặt trong suốt..." , prevPrice3 = "1.230.000", nextPrice3 = "1.230.000" , imgSp4= "https://vn-live-05.slatic.net/p/2093d57c803c555c294f7285d46da9d9.jpg_720x720q80.jpg_.webp", descriptionSp4 = "Cuộn băng keo 2 mặt trong suốt...", prevPrice4 = "1.230.000", nextPrice4 = "1.230.000";
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
    width: 375px;
    height: 363px;
    background-color: #f9f9f9;
  }
  .ecomMB .ecomMB-top {
    display: flex;
  }
  .ecomMB .ecomMB-top .ecomMB-top-img {
    margin-top: 14px;
    margin-left: 23px;
    width: 70px;
    height: 35px;
  }
  .ecomMB .ecomMB-top .ecomMB-top-img img {
    width: 100%;
    height: 100%;
  }
  .ecomMB .ecomMB-top .ecomMB-top-text {
    margin-top: 18px;
    margin-left: 10px;
  }
  .ecomMB .ecomMB-top h5 {
    font-weight: 500;
    font-size: 14px;
    color: #222222;
  }
  .ecomMB .ecomMB-top p {
    font-size: 9px;
    color: #9b9b9b;
  }
  .ecomMB .ecomMB-top .ecomMB-top-button {
    position: absolute;
    left: 279px;
    top: 18px;
  }
  .ecomMB .ecomMB-top .ecomMB-top-button button {
    width: 85px;
    height: 27px;
    border: 1px solid #222222;
    border-radius: 22px;
    font-size: 12px;
    color: #222222;
  }
  
  .ecomMB-product {
    margin-top: 14px;
    overflow: hidden;
    margin-left: 20px;
    display: flex;
    height: 100%;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    background-color: #fff;
  }
  .ecomMB-product::-webkit-scrollbar {
    display: none;
  }
  .ecomMB-product .product-item {
    margin-right: 20px;
    width: 190px;
    height: 278px;
    box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.06);
  }
  .ecomMB-product .product-item img {
    width: 100%;
    height: 100%;
  }
  .ecomMB-product .product-img {
    position: relative;
    width: 190px;
    height: 190px;
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
    margin: 2px 10px 0 10px;
    position: relative;
  }
  .ecomMB-product .item-detail h5 {
    font-size: 13px;
    font-weight: 400;
    line-height: 18px;
    color: #464646;
  }
  .ecomMB-product .item-price {
    margin-top: 5px;
  }
  .ecomMB-product .item-price h4 {
    font-weight: 500;
    font-size: 13px;
    line-height: 18px;
    color: #e00000;
  }
  .ecomMB-product .item-price h5 {
    font-weight: 400;
    font-size: 9px;
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
  /*# sourceMappingURL=style3.css.map */`;
	this.html=`<div class="ecomMB">
    <div class="ecomMB-top">
        <div class="ecomMB-top-img">
            <img src="https://haymora.com/upload/images/hang_tieu_dung/loreal_viet_nam/logo.jpg" alt="logo">
        </div>
        <div class="ecomMB-top-text">
            <h5>L’oréal Việt Nam</h5>
            <p>tài trợ</p>
        </div>
        <div class="ecomMB-top-button">
            <button>XEM NGAY</button>
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