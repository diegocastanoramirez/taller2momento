import { StyleSheet, Text, View,Button } from 'react-native';

export default function Loguin({navigation,route}){
  //  let mtitle =route.params.title;
        const {title,name} = route.params;
        console.log(route.params);
    return (
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}> 
            <Text style={{marginBottom:10}}> Estamos en contactenos</Text>
            <Text>Titulo:{title}</Text>
            <Text>Formulario:</Text>
            <Text>Nombre Completo: {name}</Text>
            <Button title='Ir a inicio' onPress={()=>{navigation.navigate('Home')}}/>
        </View>
    );
}