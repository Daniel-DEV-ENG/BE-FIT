console.log('server worked loaded')
self.addEventListener('push',e=>{
    const data = e.data.json();
    self.registration.showNotification(data.title,{
        body:"done done done "
    })
})