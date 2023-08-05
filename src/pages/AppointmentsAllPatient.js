import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import axios from "axios";
import { HStack, VStack } from "native-base";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { apiUrl } from "../utils/baseUrl";
import dateGenerator from "../utils/dateGenerator";
import getToken from "../utils/getToken";

export default function AppointmentsAllPatient({route,navigation}) {
    const [show, setShow] = useState(false);
    const [day,setDay] = useState('');
    const [date, setDate] = useState(new Date(Date.now()));
    const [token,setToken] = useState()
    const [appointments,setAppointments] = useState([])
    const [key,setKey] = useState('');
    const [results,setResults] = useState([]);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShow(false);
        setDate(currentDate);
    };

    const appointmentUpdate=(id,status)=>{
        let data = []
        appointments.forEach(appointment=>{
            if(appointment._id === id){
                data.push({
                    ...appointment,status
                })
            }else{
                data.push(appointment)
            }
        })
        setAppointments(data)
        setResults(data)
    }

    async function getAppointments(){
        if(!day){
            toast.show({
                title: "Please select day and date",
                placement: "bottom"
              })
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

    async function confirmAppointment(id){
        try {
            const res = await axios.put(`${apiUrl}/appointment/confirm/${id}`,{},{
                headers : {
                    authorization : token
                }
            })
            if(res.data.status === 200){
                appointmentUpdate(id,'Confirmed')
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function rejectAppointment(id){
        try {
            const res = await axios.put(`${apiUrl}/appointment/reject/${id}`,{},{
                headers : {
                    authorization : token
                }
            })
            if(res.data.status === 200){
                appointmentUpdate(id, 'Rejected')
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function completeAppointment(id){
        try {
            const res = await axios.put(`${apiUrl}/appointment/complete/${id}`,{},{
                headers : {
                    authorization : token
                }
            })
            if(res.data.status === 200){
                appointmentUpdate(id,'Completed')
            }
        } catch (error) {
            console.log(error)
        }
    }

    function handleSort(key){
        if(key === 'Pending'){
            setResults(appointments.filter(appointment=>appointment.status === key))
        }else if(key === 'Confirmed'){
            setResults(appointments.filter(appointment=>appointment.status === key))
        }else if(key === 'Rejected'){
            setResults(appointments.filter(appointment=>appointment.status === key))
        }else if(key === 'Completed'){
            setResults(appointments.filter(appointment=>appointment.status === key))
        }else if(key === 'All'){
            setResults(appointments)
        }
    }
    
    useEffect(()=>{
        getToken(setToken)
    },[])
    
    return(
        <ScrollView className='mx-2 mt-2'>
            <VStack className='bg-white p-2 rounded-md space-y-2'>
                <View className='border border-gray-200 rounded-md'>
                    <Picker
                        selectedValue={day}
                        onValueChange={(itemValue, itemIndex) =>
                            {setDay(itemValue);setShow(!show)}
                        }
                    >
                        <Picker.Item label="Select" value="" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednessday" value="Wednessday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                    </Picker>
                </View>

                <TouchableOpacity
                    onPress={()=>setShow(!show)} 
                    className='px-4 py-4 border border-gray-200 rounded-md'
                >
                    <Text>{dateGenerator(date)}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={()=>getAppointments()} 
                    className='bg-blue-500 py-3 rounded-md'
                >
                    <Text className='text-white text-center'>Search</Text>
                </TouchableOpacity>
            </VStack>
            {show && <DateTimePicker
                        value={date}
                        onChange={onChange}
            />}

            {appointments.length>0 && <HStack className='w-full flex-1 justify-between my-2 bg-white py-1 rounded-md'>
                <View className='flex-1 justify-center items-center'>
                    <Text className='text-center'>{results.length} results found.</Text>
                </View>
                <View className='w-1/2 border border-gray-300 rounded-md'>
                    <Picker
                        selectedValue={key}
                        onValueChange={(itemValue, itemIndex) =>{
                            setKey(itemValue);handleSort(itemValue)
                        }}
                    >
                        <Picker.Item label="All" value="All" />
                        <Picker.Item label="Completed" value="Completed" />
                        <Picker.Item label="Confirmed" value="Confirmed" />
                        <Picker.Item label="Pending" value="Pending" />
                        <Picker.Item label="Rejected" value="Rejected" />
                    </Picker>
                </View>
            </HStack>}

            <View className='space-y-2'>
                {
                    results && results.map(appointment=><View
                        key={appointment._id}
                        className='bg-white p-2 rounded-md'
                        >
                        <View className='relative'>
                            <Text className='font-bold'>
                                {appointment?.patientName}
                            </Text>
                            <Text className='text-gray-500 text-xs'>
                                {appointment?.address}
                            </Text>
                            <Text className='text-gray-500 text-xs'>
                                {appointment?.gender} and {appointment?.age} years old.
                            </Text>
                            <Text className={appointment?.status=== 'Pending'  ?
                             'text-yellow-500 border border-yellow-500 w-24 text-center rounded-full my-1 py-0.5' :
                               appointment?.status=== 'Confirmed' ? 'text-blue-500 border border-blue-500 w-24 text-center rounded-full my-1 py-0.5' :
                               appointment?.status=== 'Completed' ? 'text-green-500 border border-green-500 w-24 text-center rounded-full my-1 py-0.5' : 'text-red-500 border border-red-500 w-24 text-center rounded-full my-1 py-0.5'}>
                                {appointment?.status}
                            </Text>
                        </View>
                        <View className='flex flex-row justify-end mt-2'>
                            {appointment?.status=== 'Confirmed' && <HStack className='space-x-2'>
                                <TouchableOpacity
                                    onPress={()=>completeAppointment(appointment._id)} 
                                    className='bg-green-500 px-4 py-2 rounded-md'
                                >
                                    <Text className='text-white'>Complete</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={()=>navigation.navigate('Appointment Details',{id : appointment._id,token})} 
                                    className='bg-gray-500 px-4 py-2 rounded-md'
                                >
                                    <Text className='text-white'>Details</Text>
                                </TouchableOpacity>
                            </HStack>}
                            {appointment?.status=== 'Completed' && <HStack>
                                <TouchableOpacity
                                    onPress={()=>navigation.navigate('Appointment Details',{id : appointment._id,token})} 
                                    className='bg-gray-500 px-4 py-2 rounded-md'
                                >
                                    <Text className='text-white'>Details</Text>
                                </TouchableOpacity>
                            </HStack>}
                            {appointment?.status=== 'Pending' || appointment?.status=== 'Rejected' && <HStack className='space-x-2'>
                                <TouchableOpacity
                                    onPress={()=>confirmAppointment(appointment._id)} 
                                    className='bg-blue-500 px-4 py-2 rounded-md'
                                >
                                    <Text className='text-white'>Confirm</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={()=>rejectAppointment(appointment._id)} 
                                    className='bg-red-500 px-4 py-2 rounded-md'
                                >
                                    <Text className='text-white'>Reject</Text>
                                </TouchableOpacity>
                            </HStack>}
                        </View>
                    </View>)
                }
           </View> 
        </ScrollView>
        
    )
}