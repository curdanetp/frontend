const timestamp = Date.now(); 
console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
console.log(process.env)
console.log('-----------------------------------------------------------------------')
const bg= {        
    host: `http://${windows.location}/api`,
    port: 4000,
    bkend_path:`http://${windows.location}/api:4000`        
}
console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
console.log('Paso por config.js :',`http://${windows.location}/api`);
module.exports={bg}