import React from 'react';
import { ImageBackground, View,Text } from 'react-native';

const Hero = () => {
    return (
        <ImageBackground
                source={require('../../../assets/images/appointment.jpg')}
                className='relative flex-1 bg-cover h-40 rounded-md bg-opacity-50'>
            </ImageBackground>
    );
};

export default Hero;