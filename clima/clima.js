const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3a80d4df2ca3605a3e1b893afa0bfd6c&units=metric`)
    return resp.data.main.temp;
}


module.exports = {
    getClima
}