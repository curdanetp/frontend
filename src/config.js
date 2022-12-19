const timestamp = Date.now(); 
console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp));
const bg= {        
    host: process.env.REACT_APP_BE_HOST,
    port: process.env.REACT_APP_BE_PORT,
    bkend_path:`http://${process.env.REACT_APP_BE_HOST}:${process.env.REACT_APP_BE_PORT}`        
}
console.log('Paso por config.js :',bg);
module.exports={bg}