const BASE_URL='http://localhost:4000';

const getTickers= fetch(BASE_URL).then(response=>response.json()).catch();

export default getTickers;