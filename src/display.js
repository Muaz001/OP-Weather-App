
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
                        let sub_item = document.createElement("li");
                        
                        let word = each[0].toUpperCase() + each.slice(1); // Making the first letter uppercase
                    
                        sub_item.textContent = `${word}: ${data[item][each]}`;
                        card.append(sub_item);
                    }
            }
            card.append(element);
        }
        // console.log(element);
        // console.log(item, data[item]);
    }
    display.append(card);
}

export {display};