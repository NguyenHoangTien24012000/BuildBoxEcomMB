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
  font-weight: 400;
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
  font-weight: 400;
}

.ecomMB-product {
  margin-top: 14px;
  overflow: hidden;
  padding-left: 20px;
  display: flex;
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
  height: 284px;
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
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  color: #fff;
  position: absolute;
  top: 3px;
  right: 8px;
}
.ecomMB-product .product-detail {
  margin: 10px 10px 0 10px;
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

.content-brand{
  margin-top:4px;
  margin-right:10px;
}
.content-brand .brand-right {
  display: flex;
  justify-content: flex-end;
}
/*# sourceMappingURL=style3.css.map */`;
	this.html=`<div class="ecomMB">
    <div class="ecomMB-top">
        <div class="ecomMB-top-img">
            <img src="https://scontent.fhan5-4.fna.fbcdn.net/v/t39.30808-6/cp0/241281698_3065095247088540_6255043321029684430_n.jpg?_nc_cat=104&_nc_rgb565=1&ccb=1-5&_nc_sid=dbeb18&_nc_ohc=4rpCvN3Wlb0AX-mFekL&_nc_ht=scontent.fhan5-4.fna&oh=865c56867ba8c5c65afb1b56005ed81f&oe=6192515D" alt="logo">
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
                <img src="https://scontent.fhan5-7.fna.fbcdn.net/v/t39.30808-6/cp0/250650320_3065059797092085_6835746116390500626_n.jpg?_nc_cat=100&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=XENUU7dGBAwAX_IYXbu&_nc_ht=scontent.fhan5-7.fna&oh=0a6cf0449967703ca25aa67376a9deaa&oe=6192578F" alt="ecommb">
            </div>
            <div class="product-detail">
                <div class="item-detail">
                    <h5>Cuộn băng keo 2 mặt acrylic trong suốt Living C , băng k...</h5>
                </div>
                <div class="item-price">
                    <h4>1.230.000 <u>đ</u></h4>
                    <h5><del>1.230.000 <u>đ</u></del></h5>
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
                <img src="https://scontent.fhan5-3.fna.fbcdn.net/v/t39.30808-6/cp0/241561161_3065059813758750_6873533799104582011_n.jpg?_nc_cat=106&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=8Xb_pLCqw1UAX_FuGNV&_nc_ht=scontent.fhan5-3.fna&oh=a96a7398ed6999d6cffac12d9fdee818&oe=6192FCA4" alt="ecommb">
            </div>
            <div class="product-detail">
                <div class="item-detail">
                    <h5>Cuộn băng keo 2 mặt trong suốt...</h5>
                </div>
                <div class="item-price">
                    <h4>1.230.000 <u>đ</u></h4>
                    <h5><del>1.230.000 <u>đ</u></del></h5>
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
                <img src="https://scontent.fhan5-3.fna.fbcdn.net/v/t39.30808-6/cp0/241561161_3065059813758750_6873533799104582011_n.jpg?_nc_cat=106&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=8Xb_pLCqw1UAX_FuGNV&_nc_ht=scontent.fhan5-3.fna&oh=a96a7398ed6999d6cffac12d9fdee818&oe=6192FCA4" alt="ecommb">
            </div>
            <div class="product-detail">
                <div class="item-detail">
                    <h5>Cuộn băng keo 2 mặt trong suốt...</h5>
                </div>
                <div class="item-price">
                    <h4>1.230.000 <u>đ</u></h4>
                    <h5><del>1.230.000 <u>đ</u></del></h5>
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
                <img src="https://scontent.fhan5-3.fna.fbcdn.net/v/t39.30808-6/cp0/241561161_3065059813758750_6873533799104582011_n.jpg?_nc_cat=106&_nc_rgb565=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=8Xb_pLCqw1UAX_FuGNV&_nc_ht=scontent.fhan5-3.fna&oh=a96a7398ed6999d6cffac12d9fdee818&oe=6192FCA4" alt="ecommb">
            </div>
            <div class="product-detail">
                <div class="item-detail">
                    <h5>Cuộn băng keo 2 mặt trong suốt...</h5>
                </div>
                <div class="item-price">
                    <h4>1.230.000 <u>đ</u></h4>
                    <h5><del>1.230.000 <u>đ</u></del></h5>
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
            <svg width="46" height="9" viewBox="0 0 46 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.70215 6.34473H1.94824L1.37207 8H0.0878906L2.77344 0.890625H3.88184L6.57227 8H5.2832L4.70215 6.34473ZM2.29492 5.34863H4.35547L3.3252 2.39941L2.29492 5.34863ZM7.0459 5.31934C7.0459 4.50553 7.2347 3.85286 7.6123 3.36133C7.98991 2.86654 8.49609 2.61914 9.13086 2.61914C9.69076 2.61914 10.1432 2.81445 10.4883 3.20508V0.5H11.6748V8H10.6006L10.542 7.45312C10.1872 7.88281 9.71354 8.09766 9.12109 8.09766C8.5026 8.09766 8.0013 7.84863 7.61719 7.35059C7.23633 6.85254 7.0459 6.17546 7.0459 5.31934ZM8.23242 5.42188C8.23242 5.95898 8.33496 6.37891 8.54004 6.68164C8.74837 6.98112 9.04297 7.13086 9.42383 7.13086C9.90885 7.13086 10.2637 6.91439 10.4883 6.48145V4.22559C10.2702 3.80241 9.91862 3.59082 9.43359 3.59082C9.04948 3.59082 8.75326 3.74382 8.54492 4.0498C8.33659 4.35254 8.23242 4.8099 8.23242 5.42188ZM15.4736 3.45898L16.9678 0.890625H18.3936L16.2451 4.41602L18.4424 8H17.002L15.4736 5.39258L13.9404 8H12.5049L14.707 4.41602L12.5537 0.890625H13.9795L15.4736 3.45898Z" fill="#626262"/>
                <path d="M26.001 4.82617H23.0811V7.01367H26.4941V8H21.8457V0.890625H26.46V1.88672H23.0811V3.84961H26.001V4.82617ZM29.458 7.15039C29.7542 7.15039 30 7.06413 30.1953 6.8916C30.3906 6.71908 30.4948 6.50586 30.5078 6.25195H31.626C31.613 6.58073 31.5104 6.88835 31.3184 7.1748C31.1263 7.45801 30.8659 7.68262 30.5371 7.84863C30.2083 8.01465 29.8535 8.09766 29.4727 8.09766C28.7337 8.09766 28.1478 7.8584 27.7148 7.37988C27.2819 6.90137 27.0654 6.24056 27.0654 5.39746V5.27539C27.0654 4.47135 27.2803 3.82845 27.71 3.34668C28.1396 2.86165 28.7256 2.61914 29.4678 2.61914C30.096 2.61914 30.6071 2.80306 31.001 3.1709C31.3981 3.53548 31.6064 4.01562 31.626 4.61133H30.5078C30.4948 4.30859 30.3906 4.05957 30.1953 3.86426C30.0033 3.66895 29.7575 3.57129 29.458 3.57129C29.0739 3.57129 28.7777 3.71126 28.5693 3.99121C28.361 4.2679 28.2552 4.68945 28.252 5.25586V5.44629C28.252 6.01921 28.3545 6.44727 28.5596 6.73047C28.7679 7.01042 29.0674 7.15039 29.458 7.15039ZM32.2998 5.30957C32.2998 4.79199 32.4023 4.3265 32.6074 3.91309C32.8125 3.49642 33.1006 3.17741 33.4717 2.95605C33.8428 2.73145 34.2692 2.61914 34.751 2.61914C35.4639 2.61914 36.0417 2.84863 36.4844 3.30762C36.9303 3.7666 37.1712 4.37533 37.207 5.13379L37.2119 5.41211C37.2119 5.93294 37.111 6.39844 36.9092 6.80859C36.7106 7.21875 36.4242 7.53613 36.0498 7.76074C35.6787 7.98535 35.249 8.09766 34.7607 8.09766C34.0153 8.09766 33.418 7.85026 32.9688 7.35547C32.5228 6.85742 32.2998 6.19499 32.2998 5.36816V5.30957ZM33.4863 5.41211C33.4863 5.95573 33.5986 6.38216 33.8232 6.69141C34.0479 6.9974 34.3604 7.15039 34.7607 7.15039C35.1611 7.15039 35.472 6.99414 35.6934 6.68164C35.918 6.36914 36.0303 5.91178 36.0303 5.30957C36.0303 4.77572 35.9147 4.35254 35.6836 4.04004C35.4557 3.72754 35.1449 3.57129 34.751 3.57129C34.3636 3.57129 34.056 3.72591 33.8281 4.03516C33.6003 4.34115 33.4863 4.80013 33.4863 5.41211ZM39.3311 2.7168L39.3652 3.26855C39.7363 2.83561 40.2441 2.61914 40.8887 2.61914C41.5951 2.61914 42.0785 2.88932 42.3389 3.42969C42.723 2.88932 43.2633 2.61914 43.96 2.61914C44.5426 2.61914 44.9756 2.78027 45.2588 3.10254C45.5452 3.4248 45.6917 3.90007 45.6982 4.52832V8H44.5117V4.5625C44.5117 4.22721 44.4385 3.98145 44.292 3.8252C44.1455 3.66895 43.903 3.59082 43.5645 3.59082C43.2943 3.59082 43.0729 3.66406 42.9004 3.81055C42.7311 3.95378 42.6123 4.14258 42.5439 4.37695L42.5488 8H41.3623V4.52344C41.346 3.90169 41.0286 3.59082 40.4102 3.59082C39.9349 3.59082 39.598 3.78451 39.3994 4.17188V8H38.2129V2.7168H39.3311Z" fill="#00A78D"/>
                </svg>
        </div>
    </div>
</div>`;
	document.getElementById('ecomMB').innerHTML = `<style>${this.css}</style>${this.html}`;
}

renderBox();