const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodedUrl = encodeURI(dir)


    const instance = axios.create({
        baseURL: `https: //devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': '3ea66e729amsh59232669df0b86dp185e13jsn07c402c4c69f' }
    });


    const resp = await instance.get();

    if (resp.data.Results.lengh === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}