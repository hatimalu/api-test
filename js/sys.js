let url = "https://ipapi.co/json/";
 
fetch(url)
   .then(function(response) {
       return response.json();
   })
   .then(function(ip) {
       console.log(ip);
       // 画面に書き出す
       document.getElementById("ip").lastElementChild.textContent = ip.network;
       document.getElementById("country").lastElementChild.textContent = ip.country_name;
       document.getElementById("city").lastElementChild.textContent = ip.region +","+ ip.city;
       document.getElementById("tsuusin").lastElementChild.textContent = ip.org;
       
   });
