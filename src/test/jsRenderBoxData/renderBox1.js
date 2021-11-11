function renderBox(){
	var imgContent = "https://vn-live-05.slatic.net/p/35d9575fb700691a1173c8294cbad42e.jpg_720x720q80.jpg_.webp", imgSp1 = "https://vn-live-05.slatic.net/p/2093d57c803c555c294f7285d46da9d9.jpg_720x720q80.jpg_.webp", descriptionSp1 = "Cuộn băng keo 2 mặt acrylic trong suốt Living C , băng keo dán tranh gán gương...", prevPrice1 = "1.230.000", nextPrice1 = "1.230.000", imgSp2 = "https://vn-live-05.slatic.net/p/35d9575fb700691a1173c8294cbad42e.jpg_720x720q80.jpg_.webp", descriptionSp2 ="Cuộn băng keo 2 mặt acrylic trong suốt Living C , băng keo dán tranh gán gương...", prevPrice2 = "1.230.000", nextPrice2 = "1.230.000", imgSp3 = "https://vn-live-05.slatic.net/p/35d9575fb700691a1173c8294cbad42e.jpg_720x720q80.jpg_.webp", descriptionSp3 = "Cuộn băng keo 2 mặt acrylic trong suốt Living C , băng keo dán tranh gán gương..." , prevPrice3 = "1.230.000", nextPrice3 = "1.230.000" , imgSp4= "https://vn-live-05.slatic.net/p/35d9575fb700691a1173c8294cbad42e.jpg_720x720q80.jpg_.webp", descriptionSp4 = "Cuộn băng keo 2 mặt acrylic trong suốt Living C , băng keo dán tranh gán gương...", prevPrice4 = "%prevPrice4", nextPrice4 = "1.230.000", imgSp5 = "https://vn-live-05.slatic.net/p/35d9575fb700691a1173c8294cbad42e.jpg_720x720q80.jpg_.webp", descriptionSp5 = "Cuộn băng keo 2 mặt acrylic trong suốt Living C , băng keo dán tranh gán gương...", prevPrice5 = "1.230.000", nextPrice5 = "1.230.000";
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
  width: 320px;
  height: 180px;
}

.slider-down {
  overflow: hidden;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
}
.slider-down::-webkit-scrollbar {
  display: none;
}

.ecomMB-product {
  margin-top: 5px;
  height: 290px;
  transition: all 1s;
}
.ecomMB-product .product-item {
  margin: 7px 10px 0px 12px;
  display: flex;
}
.ecomMB-product .item-left .content-img {
  position: relative;
  height: 90px;
  width: 90px;
}
.ecomMB-product .item-left .content-img img {
  width: 100%;
  height: 100%;
}
.ecomMB-product .item-left .content-img .content-svg {
  position: absolute;
  bottom: 73px;
  right: 0;
}
.ecomMB-product .item-left .content-img .content-svg-text {
  font-weight: bold;
  font-size: 10px;
  line-height: 18px;
  align-items: center;
  text-align: center;
  color: #ffffff;
  position: absolute;
  top: 0;
  right: 2px;
}
.ecomMB-product .item-right {
  margin-top: 4px;
  margin-left: 12px;
}
.ecomMB-product .item-right .item-detail h5 {
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #373737;
  font-weight: 400;
}
.ecomMB-product .item-right .item-price {
  margin-top: 6px;
  display: flex;
}
.ecomMB-product .item-right .item-price h5 {
  margin-right: 2px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  text-align: center;
  color: #777777;
}
.ecomMB-product .item-right .item-price h4 {
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  color: #e00000;
}

.content-brand {
  display: flex;
  margin: 2px 12px;
  position: relative;
}
.content-brand .brand-left {
  position: absolute;
  left: 0;
}
.content-brand .brand-center {
  position: absolute;
  left: 50%;
  cursor: pointer;
}
.content-brand .brand-right {
  position: absolute;
  right: 0;
}
/*# sourceMappingURL=style1.css.map */`;
	this.html=`<div class="ecomMB">
        <div class="ecomMB-img">
            <div class="ecomMB-bg">
                <img src="${imgContent}" alt="black-friday">
            </div>
            <div class="adx-logo">
                <img src="https://adi.admicro.vn/adx/adxlogo-1.png" alt="adx-logo">
            </div>
        </div>
        <div class="slider-down">
            <div class="ecomMB-product">
                <div class="product-item">
                    <div class="item-left">
                        <div class="content-img">
                            <div class="content-svg"><svg width="29" height="13" viewBox="0 0 29 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.12969 1.75491C4.61734 0.685918 5.68415 0 6.85912 0H29V13H3.66592C1.4823 13 0.0302258 10.7416 0.936489 8.75491L4.12969 1.75491Z"
                                        fill="#E00000" />
                                </svg>
                                <p class="content-svg-text">-50%</p>
                            </div>
                            <img src="${imgSp1}" alt="ecommb">
                        </div>
                    </div>
                    <div class="item-right">
                        <div class="item-detail">
                            <h5>${descriptionSp1}
                            </h5>
                        </div>
                        <div class="item-price">
                            <h5><del>${prevPrice1} <u>đ</u></del></h5>

                            <h4>${nextPrice1} <u>đ</u></h4>
                        </div>
                    </div>
                </div>
                <div class="product-item">
                    <div class="item-left">
                        <div class="content-img">
                            <div class="content-svg"><svg width="29" height="13" viewBox="0 0 29 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.12969 1.75491C4.61734 0.685918 5.68415 0 6.85912 0H29V13H3.66592C1.4823 13 0.0302258 10.7416 0.936489 8.75491L4.12969 1.75491Z"
                                        fill="#E00000" />
                                </svg>
                                <p class="content-svg-text">-50%</p>
                            </div>
                            <img src="${imgSp2}" alt="ecommb">
                        </div>
                    </div>
                    <div class="item-right">
                        <div class="item-detail">
                            <h5>${descriptionSp2}</h5>
                        </div>
                        <div class="item-price">
                            <h5><del>${prevPrice2} <u>đ</u></del></h5>

                            <h4>${nextPrice2} <u>đ</u></h4>
                        </div>
                    </div>
                </div>
                <div class="product-item">
                    <div class="item-left">
                        <div class="content-img">
                            <div class="content-svg"><svg width="29" height="13" viewBox="0 0 29 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.12969 1.75491C4.61734 0.685918 5.68415 0 6.85912 0H29V13H3.66592C1.4823 13 0.0302258 10.7416 0.936489 8.75491L4.12969 1.75491Z"
                                        fill="#E00000" />
                                </svg>
                                <p class="content-svg-text">-50%</p>
                            </div>
                            <img src="${imgSp3}" alt="ecommb">
                        </div>
                    </div>
                    <div class="item-right">
                        <div class="item-detail">
                            <h5>${descriptionSp3}</h5>
                        </div>
                        <div class="item-price">
                            <h5><del>${prevPrice3} <u>đ</u></del></h5>

                            <h4>${nextPrice3} <u>đ</u></h4>
                        </div>
                    </div>
                </div>
                <div class="product-item">
                    <div class="item-left">
                        <div class="content-img">
                            <div class="content-svg"><svg width="29" height="13" viewBox="0 0 29 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.12969 1.75491C4.61734 0.685918 5.68415 0 6.85912 0H29V13H3.66592C1.4823 13 0.0302258 10.7416 0.936489 8.75491L4.12969 1.75491Z"
                                        fill="#E00000" />
                                </svg>
                                <p class="content-svg-text">-50%</p>
                            </div>
                            <img src="${imgSp4}" alt="ecommb">
                        </div>
                    </div>
                    <div class="item-right">
                        <div class="item-detail">
                            <h5>${descriptionSp4}</h5>
                        </div>
                        <div class="item-price">
                            <h5><del>${prevPrice4} <u>đ</u></del></h5>

                            <h4>${nextPrice4} <u>đ</u></h4>
                        </div>
                    </div>
                </div>
                <div class="product-item">
                    <div class="item-left">
                        <div class="content-img">
                            <div class="content-svg"><svg width="29" height="13" viewBox="0 0 29 13" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4.12969 1.75491C4.61734 0.685918 5.68415 0 6.85912 0H29V13H3.66592C1.4823 13 0.0302258 10.7416 0.936489 8.75491L4.12969 1.75491Z"
                                        fill="#E00000" />
                                </svg>
                                <p class="content-svg-text">-50%</p>
                            </div>
                            <img src="${imgSp5}" alt="ecommb">
                        </div>
                    </div>
                    <div class="item-right">
                        <div class="item-detail">
                            <h5>${descriptionSp5}</h5>
                        </div>
                        <div class="item-price">
                            <h5><del>${prevPrice5} <u>đ</u></del></h5>

                            <h4>${nextPrice5} <u>đ</u></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="content-brand">
            <div class="brand-left">
                <img src="../src/img/Lazada tài trợ.png" alt="Lazada">
            </div>
            <div class="brand-center">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L13 1" stroke="#515151" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </div>
            <div class="brand-right">
                <img src="../src/img/AdX Ecom.png" alt="Adx">
            </div>
        </div>
    </div>`;
	document.getElementById('ecomMB').innerHTML = `<style>${this.css}</style>${this.html}`;
}

renderBox();