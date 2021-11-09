function renderBox(){
	this.css=`* {
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: "Roboto";
    box-sizing: border-box;
    background-color: gray;
  }
  
  @font-face {
    font-family: "Roboto";
    src: url("../src/fonts/Roboto-Medium.ttf");
    font-weight: normal;
    font-style: normal;
  }
  .ecomMB {
    background-color: white;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    height: 100px;
    width: 375px;
    display: flex;
  }
  .ecomMB .content-left {
    margin: 10px 12px;
  }
  .ecomMB .content-img {
    position: relative;
    height: 80px;
    width: 80px;
  }
  .ecomMB .content-img img {
    width: 100%;
    height: 100%;
  }
  .ecomMB .content-img .content-svg {
    position: absolute;
    bottom: 63px;
    right: 0;
  }
  .ecomMB .content-img .content-svg-text {
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
  .ecomMB .content-detail {
    margin-top: 13px;
    margin-right: 8px;
  }
  .ecomMB .content-detail h5 {
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    align-items: center;
    color: #373737;
  }
  .ecomMB .content-price {
    margin-top: 7px;
    margin-bottom: 5px;
    display: flex;
  }
  .ecomMB .content-price h5 {
    margin-right: 2px;
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
    color: #777777;
  }
  .ecomMB .content-price h4 {
    font-size: 16px;
    font-weight: 500;
    line-height: 18px;
    text-align: center;
    color: #e00000;
  }
  .ecomMB .content-brand {
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
  }
  .ecomMB .content-brand p {
    font-size: 9px;
    font-weight: bold;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #1c8ddc;
    margin-right: 2px;
  }
  .ecomMB .content-brand span {
    font-weight: normal;
    font-size: 9px;
    line-height: 18px;
    align-items: center;
    color: #a5a5a5;
  }
  /*# sourceMappingURL=style.css.map */`;
	this.html=`<div class="ecomMB">
    <div class="content-left">
        <div class="content-img">
            <div class="content-svg"><svg width="29" height="13" viewBox="0 0 29 13" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M4.12969 1.75491C4.61734 0.685918 5.68415 0 6.85912 0H29V13H3.66592C1.4823 13 0.0302258 10.7416 0.936489 8.75491L4.12969 1.75491Z"
                        fill="#E00000" /></svg>
                <p class="content-svg-text">-50%</p>
            </div>
            <img src="./src/img/Rectangle 12 (1).png" alt="ecommb">
        </div>
    </div>
    <div class="content-right">
        <div class="content-detail">
            <h5>Cuộn băng keo 2 mặt acrylic trong suốt Living C , băng keo dán tranh gán gương...</h5>
        </div>
        <div class="content-price">
            <h5><del>1.230.000 <u>đ</u></del></h5>

            <h4>1.230.000 <u>đ</u></h4>
        </div>
        <div class="content-brand">
            <p>Thegioididong</p>
            <span>tài trợ</span>
        </div>
    </div>
</div>`;
	document.getElementById('ecomMB').innerHTML = `<style>${this.css}</style>${this.html}`;
}

renderBox();