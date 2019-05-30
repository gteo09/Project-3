import axios from "axios";

export default {
    getInfo: function(){
        return axios.get("/api/allFarms")
    },
    findById: function(req, res) {
        console.log(req)
        return axios.get(`/api/allFarms/${req}`)
        },
    
    registerUser: (userInfo)=>{
        return axios.post("/api/register", userInfo)
    },

    loginUser: (userInfo)=>{
        return axios.post("/login", userInfo )
    },

    fetchProfile: id=>{
        return axios.get(`/api/user/${id}`)
    }
    //this api call should update profile and then send back updated profile as response

    // updateProfile: function(req, res){
    //     console.log(req)
    //     return axios.get("/api/update/")
    // }
}