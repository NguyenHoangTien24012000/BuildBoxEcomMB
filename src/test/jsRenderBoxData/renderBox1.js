function renderBox(){
	var imgContent = "https://vn-live-05.slatic.net/p/35d9575fb700691a1173c8294cbad42e.jpg_720x720q80.jpg_.webp", imgSp1 = "https://vn-live-05.slatic.net/p/2093d57c803c555c294f7285d46da9d9.jpg_720x720q80.jpg_.webp", descriptionSp1 = "Cuộn băng keo 2 mặt acrylic trong suốt Living C , băng keo dán tranh gán gương...", prevPrice1 = "1.230.000", nextPrice1 = "1.230.000", imgSp2 = "https://vn-live-05.slatic.net/p/35d9575fb700691a1173c8294cbad42e.jpg_720x720q80.jpg_.webp", descriptionSp2 ="Cuộn băng keo 2 mặt acrylic trong suốt Living C , băng keo dán tranh gán gương...", prevPrice2 = "1.230.000", nextPrice2 = "1.230.000", imgSp3 = "https://vn-live-05.slatic.net/p/35d9575fb700691a1173c8294cbad42e.jpg_720x720q80.jpg_.webp", descriptionSp3 = "Cuộn băng keo 2 mặt acrylic trong suốt Living C , băng keo dán tranh gán gương..." , prevPrice3 = "1.230.000", nextPrice3 = "1.230.000" , imgSp4= "https://vn-live-05.slatic.net/p/35d9575fb700691a1173c8294cbad42e.jpg_720x720q80.jpg_.webp", descriptionSp4 = "Cuộn băng keo 2 mặt acrylic trong suốt Living C , băng keo dán tranh gán gương...", prevPrice4 = "%prevPrice4", nextPrice4 = "1.230.000", imgSp5 = "https://vn-live-05.slatic.net/p/35d9575fb700691a1173c8294cbad42e.jpg_720x720q80.jpg_.webp", descriptionSp5 = "Cuộn băng keo 2 mặt acrylic trong suốt Living C , băng keo dán tranh gán gương...", prevPrice5 = "1.230.000", nextPrice5 = "1.230.000";
	this.css=`@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&family=Roboto:wght@300;400;700&display=swap");
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto", sans-serif;
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
                <svg width="35" height="17" viewBox="0 0 35 17" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M0 0H35V17H0V0Z" fill="url(#pattern0)"/>
                    <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#image0_343_1232" transform="scale(0.0285714 0.0588235)"/>
                    </pattern>
                    <image id="image0_343_1232" width="35" height="17" xlink:href="data:image/png;base64,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"/>
                    </defs>
                    </svg>                    
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