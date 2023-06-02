const timestamp = Date.now(); 
console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
console.log(window.location.hostname);
console.log('-----------------------------------------------------------------------')
const portserv=80;
const bg= {        
    host: `http://${window.location.hostname}`,
    port: portserv,
    bkend_path:`http://${window.location.hostname}:${portserv}`        
}
console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
console.log('3) Paso por config.js :',bg.bkend_path);
module.exports={bg}