import "./styles.css"
import { display } from "./display.js";


async function get_weather_data(location){
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=7B2BYVXBHT4Q8AMPNJBLWK4J5`);
    const data = await response.json();
    return data;
}


function main(){
    let btn = document.querySelector(".search_btn");

    btn.addEventListener("click", async() => {
        let input = document.querySelector("input");
        let location = input.value;

        let data = await get_weather_data(location);

        display(data);
    })
}


main();