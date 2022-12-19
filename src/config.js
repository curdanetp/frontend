const bg= {        
    host: process.env.REACT_APP_BE_HOST,
    port: process.env.REACT_APP_BE_PORT,
    bkend_path:`http://${process.env.REACT_APP_BE_HOST}:${process.env.REACT_APP_BE_PORT}`        
}
console.log('Paso por config.js :',bg);
module.exports={bg}