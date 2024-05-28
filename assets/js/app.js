const cl = console.log;


const tooglebtn = document.querySelectorAll(".tooglebtn")
const sideNavbar = document.getElementById("sideNavbar")
const backDrop = document.getElementById("backDrop")

const onShowSidebar = () =>{
	sidenavbar.classList.toggle("active")
	backDrop.classList.toggle("active")
}




tooglebtn.forEach(btn => {
	btn.addEventListener("click", onShowSidebar)
})

