import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import { style } from './styles';

export default function Login() {
    return (
        <View style={style.container} >
            <View style={style.boxTop}>
                <Text>Top</Text>

            </View >

            <View style={style.boxMid}>
                <Text>Mid</Text>

            </View>

            <View style={style.boxBottom}>
                <Text>Bottom</Text>

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