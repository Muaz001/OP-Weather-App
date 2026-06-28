function display(data) {
  let display = document.querySelector(".display");
  display.innerHTML = "";

  let card = document.createElement("ol");
  for (let item in data) {
    let element = document.createElement("li");

    if (item === "address") {
      element.textContent = `Location: ${data[item]}`;
      card.append(element);
    } else if (item === "timezone") {
      element.textContent = `Timezone: ${data[item]}`;
      card.append(element);
    } else if (item === "description") {
      element.textContent = `Description: ${data[item]}`;
      card.append(element);
    } else if (item === "currentConditions") {
      for (let each in data[item]) {
        // Where data[item] is the value of each
        if (
          [
            "conditions",
            "datetime",
            "feelslike",
            "humidity",
            "temp",
            "sunrise",
            "sunset",
          ].includes(each) //Checking if each is in this array of words
        ) {
          if (each === "temp" || each === "feelslike") {
            //Converting farenheight to celsius
            let current_value = data[item][each];
            let temp_in_celsius = Math.round(
              (Number(current_value) - 32) * (5 / 9),
            );

            let sub_item = document.createElement("li");

            let word = each[0].toUpperCase() + each.slice(1); // Making the first letter uppercase

            sub_item.textContent = `${word}: ${temp_in_celsius} °C`;
            card.append(sub_item);
          } else {
            // Else print everything else normally
            let sub_item = document.createElement("li");

            let word = each[0].toUpperCase() + each.slice(1); // Making the first letter uppercase

            sub_item.textContent = `${word}: ${data[item][each]}`;
            card.append(sub_item);
          }
        }
      }
      card.append(element);
    }
    // console.log(element);
    // console.log(item, data[item]);
  }
  display.append(card);
}

function change_color(data) {
  let body = document.querySelector("body");
  let main_sec = document.querySelector("main");
  let card = document.querySelector(".display");

  let colors = [
    ["#E85D04", "#FFD166"],
    ["#1D4ED8", "#7DD3FC"],
    ["#0F4C5C", "#A8DADC"],
  ];

  for (let item in data) {
    if (item === "currentConditions") {
      for (let each in data[item]) {
        if (each === "temp") {
          let current_value = data[item][each];
          let temp_in_celsius = Math.round(
            (Number(current_value) - 32) * (5 / 9),
          );
          if (temp_in_celsius > 25) {
            body.style.backgroundColor = colors[0][0];
            main_sec.style.backgroundColor = colors[0][1];
            card.style.backgroundColor = colors[0][0];
          } else if (temp_in_celsius < 10) {
            body.style.backgroundColor = colors[1][0];
            main_sec.style.backgroundColor = colors[1][1];
            card.style.backgroundColor = colors[1][0];
          } else if (temp_in_celsius < 25 && temp_in_celsius > 10) {
            body.style.backgroundColor = colors[2][1];
            main_sec.style.backgroundColor = colors[2][0];
            card.style.backgroundColor = colors[2][1];
          }
        }
      }
    }
  }
}

export { display, change_color };
