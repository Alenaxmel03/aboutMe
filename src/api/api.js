import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "aee7f1aa-bff7-41f4-a106-f58e3c12a71c",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId) {
       return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
      return  instance.delete(`follow/${userId}`);
  },
  getContent(userId) {
    console.warn('Obsolete method. Please use contentAPI object')
   return contentAPI.getContent(userId);
  },
};

export const contentAPI = {
  getContent(userId) {
   return instance.get(`profile/` + userId);
  },
  getStatus (userId){
    return instance.get(`profile/status/` + userId);
   },
   updateStatus (status){
    return instance.put(`profile/status`, {status: status});
   },
};

export const authAPI = {
  getLogin(){
    return instance.get(`auth/me`)
  }
};

