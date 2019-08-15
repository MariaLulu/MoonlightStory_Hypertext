const tip = document.getElementById('tooltip');

tip.addEventListener("mouseover", function(){
  document.getElementById("tooltiptext").style.visibility = "visible";
});

tip.addEventListener("mouseout",function(){
  document.getElementById("tooltiptext").style.visibility = "hidden";
});

const tip2 = document.getElementById('tooltip2');

tip2.addEventListener("mouseover", function(){
  document.getElementById("tooltiptext2").style.visibility = "visible";
});

tip2.addEventListener("mouseout",function(){
  document.getElementById("tooltiptext2").style.visibility = "hidden";
});