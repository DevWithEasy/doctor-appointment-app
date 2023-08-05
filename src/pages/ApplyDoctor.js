import { Button, HStack } from "native-base";
import { useEffect, useState } from "react";
import { ScrollView, Text, TextInput, ToastAndroid, View } from "react-native";
import getToken from "../utils/getToken";
import { handleApplyDoctor } from "../utils/doctors_utils";
import toast from "../utils/toast";

export default function ApplyDoctor() {
    const [token,setToken] = useState()
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [website,setWebsite] = useState('')
    const [education,setEducation] = useState('')
    const [specialization,setSpecialization] = useState('')
    const [experienceArea,setExperienceArea] = useState('')
    const [experience,setExperience] = useState('')
    const [feesPerConsultation,setFeesPerConsultation] = useState('')
    const [workedAt,setWorkedAt] = useState('')
    const [designation,setDesignation] = useState('')

    const data = {
        firstName,
        lastName,
        email,
        phone,
        website,
        education,
        specialization,
        experienceArea,
        experience,
        feesPerConsultation,
        workedAt,
        designation
    }

    useEffect(()=>{
        getToken(setToken)
    },[])

    return(
        <ScrollView className='px-2 space-y-2 bg-white'>
            <Text className='p-2 text-red-500'> Note : Please fillup the all information correctly and apply for a doctor profile.Sevice provider check your all info then approved your request.</Text>
            <View className='bg-white p-2 space-y-2 rounded-md'>
                <HStack className='space-x-2'>
                    <TextInput
                        onChangeText={text=>setFirstName(text)} 
                        className='w-1/2 p-2 border border-gray-300 rounded-md' 
                        placeholder='First name'
                        value={firstName}
                    />
                    <TextInput
                        onChangeText={text=>setLastName(text)} 
                        className='w-1/2 p-2 border border-gray-300 rounded-md' 
                        placeholder='Last name'
                        value={lastName}
                    />
                </HStack>
                <TextInput
                    onChangeText={text=>setEmail(text)}
                    className='p-2 border border-gray-300 rounded-md'
                    placeholder='Email Address'
                    value={email}
                />
                <TextInput
                    onChangeText={text=>setPhone(text)}
                    className='p-2 border border-gray-300 rounded-md'
                    placeholder='Phone number'
                    value={phone}
                />
                <TextInput
                    onChangeText={text=>setWebsite(text)}
                    className='p-2 border border-gray-300 rounded-md'
                    placeholder='Phone number'
                    value={website}
                />
                <TextInput
                    onChangeText={text=>setEducation(text)}
                    className='p-2 border border-gray-300 rounded-md'
                    placeholder='Education'
                    value={education}
                />
                <TextInput
                    onChangeText={text=>setSpecialization(text)}
                    className='p-2 border border-gray-300 rounded-md'
                    placeholder='Specialization'
                    value={specialization}
                />
                <TextInput
                    onChangeText={text=>setExperienceArea(text)}
                    className='p-2 border border-gray-300 rounded-md'
                    placeholder='Experience Area'
                    value={experienceArea}
                />
                
                <HStack className='space-x-2'>
                    <TextInput
                        onChangeText={text=>setExperience(text)} 
                        className='w-1/2 p-2 border border-gray-300 rounded-md' 
                        placeholder='Experience year'
                        value={experience}
                    />
                    <TextInput
                        onChangeText={text=>setFeesPerConsultation(text)} 
                        className='w-1/2 p-2 border border-gray-300 rounded-md' 
                        placeholder='Consultation fee'
                        value={feesPerConsultation}
                    />
                </HStack>
                <TextInput
                    onChangeText={text=>setDesignation(text)}
                    className='p-2 border border-gray-300 rounded-md'
                    placeholder='Designation'
                    value={designation}
                />
                <TextInput
                    onChangeText={text=>setWorkedAt(text)}
                    className='p-2 border border-gray-300 rounded-md'
                    placeholder='Worked At'
                    value={workedAt}
                />
                <Button
                    onClick={()=>handleApplyDoctor(data,token,ToastAndroid)}
                    className='bg-blue-400 text-white'
                >
                    Apply
                </Button>
            </View>
        </ScrollView>
    )
}