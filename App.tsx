import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/pages/Login';

export default function App() {
  return (
    <View style={style.container}>
      <StatusBar style="auto" />
      <Login/>
    </View>
  );
}

const style = StyleSheet.create({
container: {
  flex: 1,
  width: '100%',
  height: '100%',
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},

});
