class Api{
    getListPhone() {
        return axios({
          url: "https://670fd53ea85f4164ef2c1d34.mockapi.io/capstone2",
          method: "GET",
        });
      }
}
export default Api;