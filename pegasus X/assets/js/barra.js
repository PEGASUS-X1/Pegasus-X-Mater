

let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;
 //selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
 
  });
}

let sidebar = document.querySelector(".bar-lateral");
let sidebarBtn = document.querySelector(".bx-menu");
let closenit = document.querySelector(".close-dait")
console.log(sidebarBtn);
closenit.addEventListener("click", ()=>{
  sidebar.style.display = "none";
});

sidebarBtn.addEventListener("click", ()=>{
  sidebar.style.display = "block";
  sidebar.classList.toggle("close");
});


