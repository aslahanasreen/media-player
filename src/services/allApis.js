import axios from "axios";

const baseUrl = "https://mpserver-689r.onrender.com"

export const addvideos=async (data)=>{
    return await axios.post(`${baseUrl}/videos`,data)
}

export const getvideos= async ()=>{
    return await axios.get(`${baseUrl}/videos`)
}

export const dltVideos = async (id)=>{
    return await axios.delete(`${baseUrl}/videos/${id}`)
}

export const addcategory = async (data) => {
    return await axios.post(`${baseUrl}/category`,data)
}

export const getCategories = async () => {
    return await axios.get(`${baseUrl}/category`)
}

export const delCategory = async (id) => {
    return await axios.delete(`${baseUrl}/category/${id}`)
}

export const addHistory = async (data) => {
    return await axios.post(`${baseUrl}/history`,data)
}

export const getHistory = async ()=>{
    return await axios.get(`${baseUrl}/history`)
}

export const delHistory = async (id) => {
    return await axios.delete(`${baseUrl}/history/${id}`)
}

export const updateCategory = async (id,data) => {
    return await axios.put(`${baseUrl}/category/${id}`,data)
}

export const checkEmail = async (email) => {
    return await axios.get(`${baseUrl}/users?email=${email}`)
}

export const addUser = async (data) =>{
    return await axios.post(`${baseUrl}/users`,data)
}

export const checkLogin = async (email,password)=>{
    return await axios.get(`${baseUrl}/users?email=${email}&password=${password}`)
}