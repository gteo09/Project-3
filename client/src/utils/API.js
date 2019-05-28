import axios from "axios";

export default {
    getInfo: function(){
        return axios.get("/api/allFarms")
    },
    findById: function(req, res) {
        console.log(req)
        return axios.get(`/api/allFarms/${req}`)
        }
    //this api call should update profile and then send back updated profile as response

    // updateProfile: function(req, res){
    //     console.log(req)
    //     return axios.get("/api/update/")
    // }
}