const $ = function(selector){
    let slider = document.querySelector(`.${selector}`);
    let itemHeight = slider.querySelector('.product-item').offsetHeight + 7;
    let sliderProduct = slider.querySelector('.slider-down');
    let sliderHeight = sliderProduct.offsetHeight;
    let buttonDown = slider.querySelector('.brand-center');
    let current = 0;
   
    function down(){
        buttonDown.addEventListener("click", function(){
            current +=1;
            sliderProduct.scrollTo({  top: sliderHeight,
                behavior: 'smooth'})
        })
    }
    return down();
}

$('ecomMB');