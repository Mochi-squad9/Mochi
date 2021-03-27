import api from '../services/http-ApiConnection.js';

// Captura dos dados da API

const getAllMaterials = () => {
    const data = api.api_materials.get('/').then(response => {
        return response.data;
    });
    return data;
}


export default { getAllMaterials };
