import axios from 'axios';

const ImoveisURL = 'http://localhost:8090/'

class ImoveisAxios {
    async listarImoveis(){
        var resp = await axios.get(ImoveisURL + 'imoveis')
        return {data: resp.data}
    }
    
    async filterImovel(id){
        var resp = await axios.get(ImoveisURL + 'imoveis/' + id)
        return {data:resp.data}
    }

    async getImovel(id){
        var resp = await axios.get(ImoveisURL + 'imoveis/' + id)
        return {data:resp.data}
    }
    
    async deletetImovel(id){
        await axios.delete(ImoveisURL + 'imoveis/' + id)
    }
}

export default new ImoveisAxios()
