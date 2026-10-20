const osInfo = document.querySelector("#os-info");

function saveToLocalStorage(data) {
  localStorage.setItem("client", JSON.stringify(data));
}

function loadFromLocalStorage() {
  return JSON.parse(localStorage.getItem("client"));
}

function clientDataToString(data) {
  const brandsString = data.brands.map((b) => b.brand).join(", ");
  return `Browser: ${brandsString}; OS: ${data.platform}`;
}

// get data
const clientData = window.navigator.userAgentData;
console.log(clientData);

// save to local storage
saveToLocalStorage(clientData);

// load data back
const loadedData = loadFromLocalStorage();

// insert into page
osInfo.textContent = clientDataToString(loadedData);
