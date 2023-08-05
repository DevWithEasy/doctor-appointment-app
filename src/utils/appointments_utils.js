import axios from "axios";
import { apiUrl } from "./baseUrl";
import toast from "./toast";
import dateGenerator from "./dateGenerator";

export async function getAppointments(day,date,token,setAppointments,setResults,ToastAndroid){
    if(!day || !date){
        toast(ToastAndroid, "Please select day and date")
    }else{
        try{
            const res = await axios.get(`${apiUrl}/appointment/all/search?day=${day}&date=${dateGenerator(date)}`,{
                headers : {
                    authorization : `${token}`
                }
            });

            setAppointments(res.data.data);
            setResults(res.data.data)
        }catch(err){
            console.log(err);
        }
    }
    
}

export async function confirmAppointment(id,token){
    const res = await axios.put(`${apiUrl}/appointment/confirm/${id}`,{},{
        headers : {
            authorization : token
        }
    });
    if(res.data.status === 200){
        getAppointments()
    };
}

export async function rejectAppointment(id){
    const res = await axios.put(`${apiUrl}/appointment/reject/${id}`,{},{
        headers : {
            authorization : token
        }
    });
    if(res.data.status === 200){
        getAppointments()
    };
}

export async function completeAppointment(id){
    const res = await axios.put(`/api/appointment/complete/${id}`,{},{
        headers : {
            authorization : token
        }
    });
    if(res.data.status === 200){
        getAppointments()
    };
}