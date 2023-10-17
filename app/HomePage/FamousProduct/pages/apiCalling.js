import axios from "axios"

export const getAllProduct = async (curentPage) =>{ 
    let data =  await axios.get(`https://reqres.in/api/users?page=${curentPage}`)
    return data
}