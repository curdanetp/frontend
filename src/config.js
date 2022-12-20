const timestamp = Date.now(); 
console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
console.log(window.location.hostname);
console.log('-----------------------------------------------------------------------')
const bg= {        
    host: `http://${window.location.hostname}/api`,
    port: 80,
    bkend_path:`http://${window.location.hostname}/api`        
}
console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
console.log('Paso por config.js :',bg.bkend_path);
module.exports={bg}