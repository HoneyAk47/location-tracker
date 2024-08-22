const h3=document.getElementById("h3");
const button =document.getElementById("btn");
const apikey="6c55109e839f4ddcbc4a57c0b3fc35f5";
const span=document.getElementById("span");
const apiendpoint="https://api.opencagedata.com/geocode/v1/json";
const getlocation=async(longitude,latitude)=>{
   let query= `${latitude},${longitude}`;
let  apiurl=`${apiendpoint}?key=${apikey}&q= ${query}&pretty=1`;
try{
    let response=await fetch(apiurl);
    const data=await response.json();
    const{continent,country,city,country_code,district}=data.results[0].components;
    span.textContent=` ${continent} ->${country} ->${city}->${country_code}->${district}`;
 
 


}
catch(error){
console.log(error.message);
}
}
button.addEventListener("click",function(){
if(navigator.geolocation)
    {
     navigator.geolocation.getCurrentPosition((position)=>{
    const {longitude,latitude}=  position.coords;

getlocation( longitude,latitude);

     },
     (error)=>{
     h3.textContent=error.message
     }
    )
    }
})