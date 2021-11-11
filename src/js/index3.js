const $ = function(selector){
    let slider = document.querySelector(`.${selector}`);
    let itemHeight = slider.querySelector('.product-item').offsetHeight + 7;
    let sliderProduct = slider.querySelector('.slider-down');
    let buttonDown = slider.querySelector('.brand-center');
    let current = 0;
   
    function down(){
        buttonDown.addEventListener('scroll', (event) => {
                console.log(a);
        });
    }
    return down();
}

$('ecomMB');