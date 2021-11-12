function renderBox(){
	
	this.css=`%%css%%`;
	this.html=`%%html%%`;
	document.getElementById('ecomMB').innerHTML = `<style>${this.css}</style>${this.html}`;
}

renderBox();