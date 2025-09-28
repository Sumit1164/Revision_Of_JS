const URL = "https://dog.ceo/api/breeds/list";
const factpara = document.querySelector('#fact');
const getBreeds = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data.message);
      const breeds = Object.keys(data.message);
      const firstBreed = breeds[0];
      console.log(firstBreed);
    // console.log(JSON.stringify(data.message, null, 2));
    factpara.innerText = breeds[0];
}


const response = await fetch("https://dog.ceo/api/breeds/list", {
  method: "POST",
  // …
});