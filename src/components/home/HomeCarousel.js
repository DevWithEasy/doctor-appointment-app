import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { carouselData } from '../../../assets/home_carousel_data';

const HomeCarousel = ({ navigation }) => {
    const width = Dimensions.get('window').width;
    console.log()
    return (
        <View className=''>
            <Carousel
                loop
                width={width}
                height={width / 2.5}
                autoPlay={true}
                autoplayInterval={15000}
                data={carouselData}
                scrollAnimationDuration={10000}
                renderItem={({ item, index }) => (
                    <View
                        style={{ height: width / 3 }}
                        className='flex-1 flex-row p-4 bg-blue-50'
                    >
                        <View className='w-8/12'>
                            <Text className='font-bold text-lg text-blue-500'>
                                {item?.subject}
                            </Text>
                            <Text className='text-gray-600'>
                                {item?.details}
                            </Text>
                            {item.button && <TouchableOpacity
                                onPress={() => navigation.navigate(item?.page)}
                                className='mt-2 px-2 py-1.5 bg-green-500 w-40 rounded-full'
                            >
                                <Text className='text-white text-center'>{item?.page_title}</Text>
                            </TouchableOpacity>}
                        </View>
                        <View className='w-4/12 flex-1 justify-start items-center '>
                            <Image source={item?.image} className='w-24 h-24' />
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

export default HomeCarousel;