
         
var text = document.getElementById("text");


      

      async function getIPAddress() {
        return fetch("https://api.ipify.org?format=json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      text.innerHTML = 
            `
            <p class="text" id="text">Your Current IP Address is ${data.ip}</p>
            <button id="btn" onclick="getLocation()">Get Started</button>
            `
      return data.ip;
    })
    .catch((error) => {
      alert("Error while fetching the data....", error);
    });
}
getIPAddress();


  

    async function getLocation() {
        const ipAddress = await getIPAddress();
      
        fetch(`https://ipinfo.io/${ipAddress}?token=306f3b1024bacd`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            localStorage.setItem("data", JSON.stringify(data));
            window.location.href = `./MapPage/map.html`;
          })
          .catch((error) => {
            alert("Error while generation of token and getting the location", error);
          });
      }
      console.log("first");