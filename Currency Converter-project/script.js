const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies/usd.json";

const dropdowns = document.querySelector(".dropdown select");

let i =o

for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        }else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
}
