const input = $("input");
const searchPos = $(".search-pos");
input.hide();
$(".result").fadeOut();
$(".error").fadeOut();
let apiKey = '67da0cb94e6ca3ed73beb8a057461a44' , f , k , c;
const temp_place = document.querySelector(".temp")
const hum = document.querySelector(".hum");
const img = document.querySelector(".img");
const main_place = document.querySelector(".main-place");
$(".span").click(function(){
    let animate = `<i class="mt-6 fa-solid fa-cog fa-spin fa-3x" style="color: white;"></i><br> <span class="text-2xl">Oops.!.</span><br><span>please dose'nt country</span>`;
    if(input.val() == "")
         input.toggle(500);        
        else{
            $(".result").fadeIn(500);
             
           fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.val()}&appid=${apiKey}`).then(res => res.json()).then(response => {
                f = ((parseInt(response.main.temp) - 273.15) * 1.8) + 32 ;
                c = Math.floor((f - 32) * (5/9));
                temp_place.innerHTML = `${c} <sup><sup>o</sup>c</sup>`;
                $(".temp-text").text(response.weather[0].main);
                hum.innerHTML = `${response.main.humidity}%`;
                $(".speed").text(Math.floor(response.wind.speed) + "KM/h");
                $(".error").fadeOut();
                switch(response.weather[0].main){
                    case 'Clear':
                        img.src = "sun.png";
                    break;
                    case 'Rain':
                        img.src = "rain.png";
                    break;
                    case 'Snow':
                        img.src = "snow.png";
                    break;
                    default :
                        img.src = "cloudy.png";
                    break;
                }
           }).catch(function(){
            $(".error").fadeIn(500);
           })
        }
})
