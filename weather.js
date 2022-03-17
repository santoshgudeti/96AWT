function fetchWeather()
{
  var request = new XMLHttpRequest();
  var city = document.getElementById("temp").value;
  //var city="delhi"
   
   var url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=284ef6d8a0adba989936a4348efb6c5d&units=metric"
   request.open('Get',url)
   request.onload=function(){
       var result=JSON.parse(this.response)
       console.log(result);
       document.getElementById("result").value=result.main.temp
   }
   request.send();
   //console.log("Fetching")
}