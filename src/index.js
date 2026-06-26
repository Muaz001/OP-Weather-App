import "./styles.css"


function get_location(){
    return prompt("Enter your location: ");
}


async function get_weather_data(location){
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=7B2BYVXBHT4Q8AMPNJBLWK4J5`);
    const data = await response.json();
    return data;
}


function display(data){
    console.log("START HERE:")


    let display = document.querySelector(".display");
    display.innerHTML = "";

    let card = document.createElement("ol");
    for (let item in data){
        let element = document.createElement("li");
        
        if (item === "address"){
            element.textContent = `Location: ${data[item]}`;
            card.append(element);
        }
        else if (item === "timezone"){
            element.textContent = `Timezone: ${data[item]}`;
            card.append(element);
        }
        else if (item === "description"){
            element.textContent = `Description: ${data[item]}`;
            card.append(element);
        }
        else if(item === "currentConditions"){
            let conditions = document.createElement("ol")
            for (let each in data[item]){ // Where data[item] is the value of each
                if ([
                    "conditions", 
                    "datetime", 
                    "feelslike", 
                    "humidity", 
                    "temp", 
                    "sunrise",
                    "sunset"].includes(each)  //Checking if each is in this array of words
                    ){
                        let condition = document.createElement("li");
                        
                        let word = each[0].toUpperCase() + each.slice(1); // Making the first letter uppercase
                    
                        condition.textContent = `${word}: ${data[item][each]}`;
                        conditions.append(condition)
                    }
            }
            element.append(conditions);
            card.append(element);
        }
        // console.log(element);

        console.log(item, data[item]);


        // if (each === "days"){
        //     console.log(`${each}: ${data[each]}`);
            
        //     for (let each2 of data[each]){ // Where data[each] is the list of objects in days
        //         for (let each3 in each2[])
        //     }
        // }    
        // console.log(`${each}: ${data[each]}`);
    }
    display.append(card);
}


async function main(){
    let location = get_location();
    let data = await get_weather_data(location);
    display(data);
}


main()