import { Picker } from "@react-native-picker/picker";
import axios from 'axios';
import { useToast, VStack } from "native-base";
import { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import Doctor from "../components/Doctor";
import { apiUrl } from '../utils/baseUrl';
import statusBarHeight from "../utils/statusBarHight";
import daysOfWeek from "../../assets/days";
import Header from "../components/Header";

export default function FindAppointment({ navigation }) {
    const toast = useToast()
    const [doctors, setDoctors] = useState([])
    const [specializations, setSpecializations] = useState([])
    const [specialist, setSpecialist] = useState('')
    const [day, setDay] = useState('')

    async function getAllActiveSpecialistDoctors() {
        try {
            const res = await axios.get(`${apiUrl}/doctor/specialist`)
            setSpecializations(res.data.data)
        } catch (err) {
            console.log(err);
        }
    }

    async function getAllActiveSpecialist() {
        if (!specialist) {
            toast.show({
                title: "No specialist select",
                placement: "bottom"
            })
        } else {
            try {
                const res = await axios.get(`${apiUrl}/doctor/find/specialist?specialist=${specialist}`)
                setDoctors(res.data.data)
            } catch (error) {
                console.log(error);
            }
        }
    }
    useEffect(() => {
        getAllActiveSpecialistDoctors()
    }, [])

    console.log(specialist,day)
    return (
        <ScrollView 
        className='bg-white space-y-2'
        >
            <Header {...{navigation , text : 'Find Appoinments'}}/>
            <View className='p-2 space-y-2 rounded-md'>
                <View className='border-[1px] border-gray-200 rounded-md'>
                    <Picker
                        selectedValue={specialist}
                        onValueChange={(itemValue, itemIndex) =>
                            setSpecialist(itemValue)
                        }
                    >
                        <Picker.Item label='Select specialization' value='' />
                        {
                            specializations && specializations.map((doctor, i) => <Picker.Item
                                key={i}
                                label={doctor}
                                value={doctor}
                            />)
                        }
                    </Picker>
                </View>
                <View className='border-[1px] border-gray-200 rounded-md'>
                    <Picker
                        selectedValue={day}
                        onValueChange={(itemValue, itemIndex) =>
                            setDay(itemValue)
                        }
                    >
                        <Picker.Item label='Select day' value='' />
                        {
                            daysOfWeek.map((day, i) => <Picker.Item
                                key={i}
                                label={day}
                                value={day}
                            />)
                        }
                    </Picker>
                </View>
                <TouchableOpacity className='p-2 bg-blue-500 rounded-md' onPress={() => getAllActiveSpecialist()}>
                    <Text className='text-white text-lg text-center'>Search</Text>
                </TouchableOpacity>
            </View>

            {doctors.length > 0 && <VStack space='2' className='my-2'>
                <Text className='text-right pr-2'>We are found {doctors.length} doctors</Text>
                {doctors.map(doctor => <Doctor key={doctor?._id} {...{ doctor, navigation }} />)}
            </VStack>}

        </ScrollView>
    )
}