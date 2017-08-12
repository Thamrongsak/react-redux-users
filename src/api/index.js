import axios from 'axios'

//https://randomuser.me/api/?page=3&results=10
export function getUsers (page=0, per_page=12){
    return axios .get(`https://randomuser.me/api/?page=${page}&results=${per_page}`)
}
