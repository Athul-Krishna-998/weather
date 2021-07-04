const nameplace=document.querySelector(".nameofplace");
const temperature=document.querySelector(".temperature");
const description=document.querySelector(".temp-description");
const picture=document.querySelector(".pic");
const search=document.querySelector(".search");
const butt=document.querySelector(".btn");

butt.addEventListener('click',function(event)
{
   event.preventDefault;
   const names=search.value;
   search.value="";
   newplace(names);
});

function newplace(namesearch)
{
   const proxy="https://cors-anywhere.herokuapp.com/";
          const api=`${proxy}api.openweathermap.org/data/2.5/weather?q=${namesearch}&appid=d970a77662801e60d160516f48954acc`;

          fetch(api).then(response=>
            {
               return response.json();
            })
            .then(data=>{
               console.log(data);
               const name=data['name'];
               const temperatureval=data['main']['temp'];
               const text=data['weather'][0]['description'];
               const icon=data['weather'][0]['id'];
               
               if(icon<300 && icon>200)
               {
                  picture.src="heavy-rain.png";
               }
               else if(icon<600 && icon>300)
               {
                  picture.src="weather.png";
               }
               else if(icon<700 && icon>600)
               {
                  picture.src="snowing.png";
               }
               else if(icon==800)
               {
                  picture.src="sun.png";
               }
               else
               {
                  picture.src="cloudy.png";
               }
               nameplace.innerText=name;
               temperature.innerText=Math.round(temperatureval-273);
               description.innerText=text;
            });
}

window.addEventListener('load',()=>
{

   let longitude;
   let latitude;

   if(navigator.geolocation)
   {
      navigator.geolocation.getCurrentPosition(position=>
      {
          longitude=position.coords.longitude;
          latitude=position.coords.latitude;
          const proxy="https://cors-anywhere.herokuapp.com/";
          const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d970a77662801e60d160516f48954acc`;

          fetch(api).then(response=>
            {
               return response.json();
            })
            .then(data=>{
               console.log(data);
               const name=data['name'];
               const temperatureval=data['main']['temp'];
               const text=data['weather'][0]['description'];
               const icon=data['weather'][0]['id'];
               
               if(icon<300 && icon>200)
               {
                  picture.src="heavy-rain.png";
               }
               else if(icon<600 && icon>300)
               {
                  picture.src="weather.png";
               }
               else if(icon<700 && icon>600)
               {
                  picture.src="snowing.png";
               }
               else if(icon==800)
               {
                  picture.src="sun.png";
               }
               else
               {
                  picture.src="cloudy.png";
               }
               nameplace.innerText=name;
               temperature.innerText=Math.round(temperatureval-273);
               description.innerText=text;
            });
      });
   }
});
