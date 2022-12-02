let url = "";
 
fetch(url)
   .then(function(response) {
       return response.json();
   })
   .then(function(ip) {
       console.log(ip);
       // 画面に書き出す
       document.getElementById("ip").lastElementChild.textContent = ip.ip;
   });
