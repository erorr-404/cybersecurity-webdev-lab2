const osInfo = document.querySelector("#os-info");

function saveToLocalStorage(data) {
  localStorage.setItem("userAgent", data);
}

function loadFromLocalStorage() {
  return localStorage.getItem("userAgent");
}

// get data
const clientData = window.navigator.userAgent;
console.log(clientData);

// save to local storage
saveToLocalStorage(clientData);

// load data back
const loadedData = loadFromLocalStorage();

// insert into page
osInfo.textContent = loadedData;
