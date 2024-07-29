import axios from 'axios'

const baseURL = 'http://localhost:4000'

export const getAll = async () => {
    try {
        return await axios.get(`${baseURL}/getAll`)
    } catch (error) {
        return []
    }
}

export const getAllPublishers = async () => {
    try {
        return await axios.get(`${baseURL}/getAllPublishers`)
    } catch (error) {
        return []
    }
}

export const getHero = async (id) => {
    try {
        return await axios.get(`${baseURL}/getHeroById/${id}`)
    } catch (error) {
        return []
    }
}

export const updateHero = async (id, updateData) => {
    try {
        const response = await axios.put(`${baseURL}/update/${id}`, updateData);
        return response.data;
    } catch (error) {
        console.error('Error actualizando el héroe:', error);
        return { success: false, message: 'Error al actualizar el héroe' };
    }
}
export const postHero = async (form) => {
    try {
        const response = await axios.post(`${baseURL}/createHero`, form);
        
        return response.data;
    } catch (error) {
        return []
    }
}

export const deleteOne = async (form) => {
    try {
        var data = JSON.stringify(form);

        var config = {
            method: 'delete',
            url: `${baseURL}/delete/${form.hero_id}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        return await axios(config);
    } catch (error) {
        return []
    }
}