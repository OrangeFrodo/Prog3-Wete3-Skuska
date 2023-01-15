import axios from "axios"

const BACKEND_URL = "http://localhost:8080/api/"

class ZanerService {
    static getAllZaner() {
        return axios.get(BACKEND_URL + "get-zanre")
    }

    static postZaner(zaner: any) {
        return axios.post(BACKEND_URL + "add-zaner", zaner)
    }
}

export default ZanerService