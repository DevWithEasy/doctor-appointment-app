import React from 'react';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import Header from '../components/Header';

const More = ({navigation}) => {
    return (
        <ScrollView
            className='bg-white'
        >
            <Header {...{navigation, text : 'More'}}/>
            <TouchableOpacity
                onPress={()=>navigation.navigate('Profile')}
            >
                <Text>Profile</Text>
            </TouchableOpacity>
            
        </ScrollView>
    );
};

export default More;