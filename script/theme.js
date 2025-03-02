let i =0;
document.getElementById('theme-box').addEventListener('click',function(){
  const colors = [
    "rgba(255, 240, 245, 0.7)", // Lavender Blush (soft pink)
    "rgba(240, 230, 140, 0.7)", // Khaki (soft yellow)
    "rgba(255, 218, 185, 0.7)", // Peach Puff (soft peach)
    "rgba(240, 128, 128, 0.7)", // Light Salmon (soft coral)
      "rgba(0, 0, 255, 0.5)",
    "rgba(255, 228, 196, 0.7)", // Bisque (soft beige)
 "rgba(255, 192, 203, 0.5)",
    "rgba(75, 0, 130, 0.5)"
    
];


i++;
if(i===8){
  i=0;

}
document.body.style.backgroundColor =colors[i]

})

  
  
  









