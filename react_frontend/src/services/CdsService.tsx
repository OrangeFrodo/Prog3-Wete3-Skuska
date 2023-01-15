import axios from "axios"

const BACKEND_URL = "http://localhost:8080/api/"

class CdsService {
    static getAllCd() {
        return axios.get(BACKEND_URL + "get-cd")
    }

    static postCd(cds: any) {
        return axios.post(BACKEND_URL + "add-cd", cds)
    }
}

export default CdsService