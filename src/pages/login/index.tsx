import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import { style } from './styles';

export default function Login() {
    return (
        <View styles={style.container} >
            {/* primeiro */}
            <View styles={style.boxTop}>

            </View >
            {/* segundo */}
            <View styles={style.boxMid}>

            </View>
            {/* terceiro */}
            <View styles={style.boxBottom}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContentent: 'center',
    }
})