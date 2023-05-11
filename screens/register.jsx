import { StyleSheet, Text, View,Button } from 'react-native';

export default function Register({navigation,route}){
    const {name,email,password} = route.params;
    return (
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}> 
            <Text style={{marginBottom:10}}> Estamos en register</Text>
        </View>
    );
}