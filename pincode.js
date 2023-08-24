const inputBox = window.document.getElementById("input-box");
//console.log('inputBox', inputBox)
const searchBtn = window.document.getElementById("searchBtn");
const pincodeImage = window.document.querySelector(".pincode-image");
const area = window.document.querySelector(".area");
const pincodeNotFound = window.document.querySelector(".pincode-not-found");
const pincodeFound = window.document.querySelector(".pincode-found");
async function checkpincode(perimeter) {
  // const apiKey = "f064592898mshb2b8be1fa34cbbfp15d6f6jsnbb95d408e932";
  // const url = `https://india-pincode-with-latitude-and-longitude.p.rapidapi.com/api//v1/pincode/${perimeter}`;
  // // const url = 'https://india-pincode-with-latitude-and-longitude.p.rapidapi.com/api/v1/pincode/600001';
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'f064592898mshb2b8be1fa34cbbfp15d6f6jsnbb95d408e932',
  //     'X-RapidAPI-Host': 'india-pincode-with-latitude-and-longitude.p.rapidapi.com'
  //   }
  // };
  // const areaperimeter = await fetch(url, options).then((response) =>
  //   response.json()
  // );
  //const url = `https://india-pincode-with-latitude-and-longitude.p.rapidapi.com/api/v1/pincode/${perimeter}`;
  //console.log('url', url)
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'f064592898mshb2b8be1fa34cbbfp15d6f6jsnbb95d408e932',
  //     'X-RapidAPI-Host': 'india-pincode-with-latitude-and-longitude.p.rapidapi.com'
  //   }
  // };

//   let result
//   try {
//     const response = await fetch(url, options);
//     result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
//   if (result.cod == `404`) {
//     pincodeNotFound.style.display = "flex";
//     pincodeFound.style.display = "none";
//     console.log("error");
//     return;
//   }
//   pincodeNotFound.style.display = "none";
//   pincodeFound.style.display = "flex";
//   area.innerHTML = `${result.main}`; 
//      }
// searchBtn.addEventListener("click", () => {
//   console.log('searchBtn.value',inputBox.value )
//   checkpincode(inputBox.value);
// });}
