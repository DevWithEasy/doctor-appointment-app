import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import statusBarHeight from '../utils/statusBarHight';
import HomeCarousel from '../components/home/HomeCarousel';
import HomeService from '../components/home/HomeService';
import Hero from '../components/home/Hero';

export default function Home({ navigation }) {

    return (
        <ScrollView
            style={statusBarHeight}
            className='bg-white space-y-2 flex-1 flex-col'>
            {/* <Hero /> */}

            {/* slide carousel */}
            <HomeCarousel {...{ navigation }} />
            

            {/* servive section*/}
            <HomeService {...{ navigation }} />

        </ScrollView>
    );
}
