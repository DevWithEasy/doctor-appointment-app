import React from 'react';
import { ScrollView, Text } from 'react-native';
import statusBarHeight from '../utils/statusBarHight';

const More = () => {
    return (
        <ScrollView
            style={statusBarHeight}
            className='bg-white'
        >
            <Text>Hello</Text>
        </ScrollView>
    );
};

export default More;