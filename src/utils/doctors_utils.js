import { apiUrl } from "./baseUrl"
import toast from "./toast"

export async function handleApplyDoctor(value,token,ToastAndroid){
    try {
        const res = await axios.post(`${apiUrl}/api/doctor/apply`,value,{
            headers : {
                authorization : token
            }
        })
        if(res.data.status === 200){
            toast(ToastAndroid,'Applied Doctor successfully.')
        }
    } catch (error) {
        if(error){
            toast(ToastAndroid,error.message)
        }
    }
}