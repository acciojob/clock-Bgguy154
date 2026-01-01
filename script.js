//your JS code here. If required.
const time=document.querySelector("#timer");
window.addEventListener("DOMContentLoaded",(e)=>{
	e.preventDefault();
	const now=new Date();
	time.innerHTML=now.toLocaleString();
})