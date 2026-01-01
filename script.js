//your JS code here. If required.
const time=document.querySelector("#time");
window.addEventListener("DOMContentLoaded",(e)=>{
	e.preventDefault();
	const now=new Date();
	time.innerHTML=now.toLocaleString();
})