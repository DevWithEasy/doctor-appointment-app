import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

const Header = ({navigation,text}) => {
    return (
        <View
            className='fixed top-0 p-2 flex-1 flex-row items-center space-x-3 bg-blue-500'
        >
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Icon name='arrow-back-outline' size={22} color='#ffffff'/>
            </TouchableOpacity>
            <Text
                className='text-xl font-bold text-white'
            >
            {text}
            </Text>
        </View>
    );
};

export default Header;