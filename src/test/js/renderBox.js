function renderBox(){
	this.css=`@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&family=Roboto:wght@300;400;500;700&display=swap");
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Roboto", sans-serif;
  box-sizing: border-box;
}

.ecomMB {
  background-color: #FBF9FC;
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
  top: 0;
  right: 0;
}
.ecomMB .content-img .content-svg-text {
  font-weight: bold;
  font-size: 10px;
  line-height: 15px;
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
  font-weight: normal;
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
  font-weight: 700;
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
	this.html=` <div class="ecomMB">
  <div class="content-left">
      <div class="content-img">
          <div class="content-svg"><svg width="29" height="13" viewBox="0 0 29 13" fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M4.12969 1.75491C4.61734 0.685918 5.68415 0 6.85912 0H29V13H3.66592C1.4823 13 0.0302258 10.7416 0.936489 8.75491L4.12969 1.75491Z"
                      fill="#E00000" /></svg>
                  </div>
                  <img src="https://scontent.fhan5-7.fna.fbcdn.net/v/t39.30808-6/cp0/250650320_3065059797092085_6835746116390500626_n.jpg?_nc_cat=100&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=XENUU7dGBAwAX_IYXbu&_nc_ht=scontent.fhan5-7.fna&oh=0a6cf0449967703ca25aa67376a9deaa&oe=6192578F" alt="ecommb">
                  <p class="content-svg-text">-50%</p>
      </div>
  </div>
  <div class="content-right">
      <div class="content-detail">
          <h5>Cu???n b??ng keo 2 m???t acrylic trong su???t Living C , b??ng keo d??n tranh g??n g????ng...</h5>
      </div>
      <div class="content-price">
          <h5><del>1.230.000 <u>??</u></del></h5>

          <h4>1.230.000 <u>??</u></h4>
      </div>
      <div class="content-brand">
          <p>Thegioididong</p>
          <span>t??i tr???</span>
      </div>
  </div>
</div>`;
	document.getElementById('ecomMB').innerHTML = `<style>${this.css}</style>${this.html}`;
}

renderBox();