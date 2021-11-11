function renderBox(){
	var imgContent = "%imgContent%", imgSp1 = "%imgSp1%", descriptionSp1 = "%descriptionSp1%", prevPrice1 = "%prevPrice1%", nextPrice1 = "%nextPrice1%", imgSp2 = "%imgSp2%", descriptionSp2 ="%descriptionSp2%", prevPrice2 = "%prevPrice2%", nextPrice2 = "%nextPrice2%", imgSp3 = "%imgSp3%", descriptionSp3 = "%descriptionSp3%" , prevPrice3 = "%prevPrice3%", nextPrice3 = "%nextPrice3%" , imgSp4= "%imgSp4%", descriptionSp4 = "%descriptionSp4%", prevPrice4 = "%prevPrice4%", nextPrice4 = "%nextPrice4%";
	this.css=`%%css%%`;
	this.html=`%%html%%`;
	document.getElementById('ecomMB').innerHTML = `<style>${this.css}</style>${this.html}`;
}

renderBox();