const await = require("await");
const { header } = require("express-validator");


const PublicVapidKey = 'BBWY8BRnP4weIFV3oS3tJd1mVGdmSxrJw1WoZFGvuyneZ-cUk2a9lu9gYxzrCkfvR6Yp18piEYuoYWW3S6TkS9I';

//check for server worker
if('serverWorker' in navigator){
    send().catch(err=>console.log(err))

}
//reguister SW , Push, SEnd Push
async function send(){
    //reguister SW
const reguister= await navigator.serviceWorker.register('/Worker.js',{
    scope:'/'
})
console.log('server Worker Regester')
//reguister  Push
console.log('regestuir push')
const subscription = await reguister.pushManager.subscribe({
    userVisibleOnly:true,
    applicationServerKey:urlBase64ToUint8Array(PublicVapidKey)
});
console.log('push regesture.....')
////push notification 
await fetch('/subscribe',{
    method:"POST",
    body:JSON.stringify(subscription),
    header:{
'content-type':'application/json'
    }
})

function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');
  
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
  
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
}