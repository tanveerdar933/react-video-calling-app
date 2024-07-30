import axios from "../axios";

class Routes {
  //get jwt token
  async getJwtToken(data) {
    const response = await axios.post(`/auth/get_jwt_token`, data);
    if (response && response.response?.data) return response.response.data;
    return response.data;
  }
}

export default new Routes();