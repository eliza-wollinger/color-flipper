const e=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"],n=document.getElementById("btn"),c=document.querySelector(".color");n.addEventListener("click",function(){let t="#";for(let o=0;o<6;o++)t+=e[r()];c.textContent=t,document.body.style.backgroundColor=t});function r(){return Math.floor(Math.random()*e.length)}