import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View, Center } from 'react-native';
import statusBarHeight from '../utils/statusBarHight';
import axios from 'axios'
import { apiUrl } from '../utils/baseUrl';
import { addDoctors, addSpecializations } from '../store/slice/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { HStack } from 'native-base';

export default function Home({ navigation }) {
    const dispatch = useDispatch()
    const { doctors, specializations } = useSelector(state => state.auth)

    useEffect(() => {
        const getHomeData = async () => {
            try {
                const res = await axios.get(`${apiUrl}/doctor/home-data`)
                dispatch(addDoctors(res.data.data.doctors))
                dispatch(addSpecializations(res.data.data.specializations))
            } catch (error) {
                console.log(error)
            }
        }
        getHomeData()
    }, [])

    console.log(specializations)
    return (
        <View>
            <HStack space={3} justifyContent="center">
                <View>
                    <Text>adfasdfas</Text>
                </View>
            </HStack>
        </View>
    );
}
