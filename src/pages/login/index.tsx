import React from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,

} from "react-native";

import { style } from '../Login/styles';
import Logo from '../../assets/image/logo01.png';

// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");

export default function Login() {
    return (
        <View style={style.container} >
            <View >
                <Image 
                style={style.logo} 
                source={Logo}
                resizeMode='contain'/>
            </View>
            <View style={style.inputContainer}>
                <Text style={style.text}> Olá, seja bem vindo!!!</Text>
                <TextInput
                    style={style.input}
                    placeholder="Digite seu email"
                    placeholderTextColor="#f0f0f0"
                // value={email}
                // onChangeText={setEmail}
                />
                <TextInput
                    style={style.input}
                    placeholder="Digite sua senha"
                    placeholderTextColor="#f0f0f0"
                    secureTextEntry={true}
                // value={password}
                // onChangeText={setPassword}
                />

                <TouchableOpacity style={style.button}>

                </TouchableOpacity>
            </View >

        </View>
    )
}
