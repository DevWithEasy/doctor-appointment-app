import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import { VStack } from "native-base";
import { useEffect, useState } from "react";
import { StatusBar,ScrollView, View } from "react-native";
import Doctor from "../components/Doctor";
import { apiUrl } from "../utils/baseUrl";
import statusBarHeight from "../utils/statusBarHight";
import Header from "../components/Header";


export default function Doctors({navigation}){
    const [specialist,setSpecialist] = useState('')
    const [allDoctors,setAllDoctors] = useState([])
    const [doctors,setDoctors] = useState([])
    async function getAllActiveDoctors(){
        try{
            const res = await axios.get(`${apiUrl}/doctor/allApprovedDoctors`)
            setAllDoctors(res.data.data)
            setDoctors(res.data.data)
        }catch(err){
            console.log(err);
        }
    }

    function findSpecialist(value){
        if(!value){
            setDoctors(allDoctors)
            setSpecialist('')
        }else{
            const doctors = allDoctors.filter(doctor => doctor.specialization === value)
            setDoctors(doctors)
            setSpecialist(value)
        }
        
    }

    useEffect(()=>{
        getAllActiveDoctors()
    },[navigation])
    
    return(
        <ScrollView 
            className='bg-white space-y-2'
        >
            <StatusBar backgroundColor='#3b82f6'/>
            <Header {...{navigation,text: 'Doctors'}}/>
            <View className='mx-2 border-[1px] border-gray-200 rounded-md'>
                <Picker
                    selectedValue={specialist}
                    onValueChange={(itemValue, itemIndex) =>
                        findSpecialist(itemValue)
                    }
                    >
                    <Picker.Item label="Select specialist" value="" />
                    {allDoctors && allDoctors.map(doctor=><Picker.Item 
                        key={doctor._id} 
                        label={doctor.specialization} value={doctor.specialization} 
                    />)}
                </Picker>
            </View>
            <VStack space='2' className=''>
                {doctors && doctors.map(doctor=><Doctor key={doctor?._id} {...{doctor,navigation}}/>)}
            </VStack>
        </ScrollView>
    )
}