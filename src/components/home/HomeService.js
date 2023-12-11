import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { servicesData } from '../../../assets/home_carousel_data';

const HomeService = ({navigation}) => {
    return (
        <View className=''>
                <Text className='text-2xl text-center p-2 '>Services</Text>
                <View className='flex-1 flex-col space-y-2 p-2'>
                    {
                        servicesData.map((service) => <View
                            key={service.id}
                            onPress={() => navigation.navigate(service?.page)}
                            className={`space-y-2 p-2 flex-1 ${service?.direction} justify-between border-[0.5px] border-gray-200`}
                        >
                            <View
                                className='w-9/12 space-y-1'
                            >
                                <Text className='text-lg text-blue-500 font-bold'>
                                    {service?.title}
                                </Text>
                                <Text>
                                    {service?.details}
                                </Text>
                            </View>
                            <View
                                className='w-3/12 flex-1 flex-row items-end'
                            >
                                <Image source={service?.image} className='w-16 h-16 mx-auto' />
                            </View>
                            
                            
                        </View>)
                    }
                </View>
            </View>
    );
};

export default HomeService;