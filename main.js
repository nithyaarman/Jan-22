function display(){
  var textElement = document.getElementById("hideme");
  if (textElement.style.display === "none")
{
    textElement.style.display = "block";
    } 
    else {
        textElement.style.display = "none";
        }
}