import { StyleSheet, Text, View, Image,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Contacts from './screens/Contacts';
//import Loguin from './screens/Loguin';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons'
import { TextInput, Button } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { useState } from 'react';
import Banner from './Componets/Banner.js';


//crear constante para generar las rutas de las pantallas(screens)

let users = [
  { usuario: 'anderson22',nombre:"anderson camilo",password: "22"},
  { usuario: 'aladeus11',nombre:"flavio nelson", password: "11"}
]
let cars = [
  { placa: 'VJT91D', marca: 'akt', estado:"disponible"},
  { placa: 'NIR43B', marca: 'auteco', estado:"disponible"},
]
let rent = [
  { numRenta: 22212, username: 'anderson', numplaca: "NIR43B", fecha:'2023-05-23'},
  { numRenta: 15356, username: 'alejandro', numplaca: "VJT91D", fecha:'2023-05-29'}
]


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  
  const { } = useForm();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerStyle: {
          backgroundColor: "blue"
        },
        headerTintColor: "white"
      }}>
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ title: 'BMW' }} />
        {/* <Stack.Screen name="Home" component={HomeScreen} options={{title:'Inicio'}}/>
        <Stack.Screen name="Contacts" component={Contacts} options=      {{title:'Contactanos'}}/>
        <Stack.Screen name='Loguin'component={Loguin} options={{title:'Loguin'}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function HomeScreen({ navigation }) {

  const [usuario, setUsuario] = useState('');
  const [password, setpassword] = useState('');
  const [errormess, seterrormess] = useState('');
  const [vacio, setvacio] = useState('');


  return (
    <View style={styles.container}>
      <Image
        style={styles.imgstyle}
        source={require('./assets/BMW.jpg')}
      />
      <Text style={{ marginBottom: 20, fontWeight: "bold", fontSize: 20 }}>INGRESA LOS DATOS DEL USUARIO</Text>
      <TextInput
        label="Nombre de usuario"
        mode='Flat'
        right={<TextInput.Icon icon="account-box" />}
        style={{ marginTop: 20, backgroundColor: "#dcdcdc" }}
        // onBlur={onBlur}
        onChangeText={usuario => setUsuario(usuario)}
        value={usuario}
      />
      <TextInput
        label="Password"
        mode='flat'
        right={<TextInput.Icon icon="eye" />}
        style={{ marginTop: 25, backgroundColor: "#dcdcdc" }}
        // onBlur={onBlur}
        onChangeText={password => setpassword(password)}
        value={password}
        secureTextEntry  //PARA NO DEJAR VER LO QUE SE ESTA ESCRIBIENDO EN LA CONTRASEÑA, POR DEFECTO VIENE EN TRUE
      />

      <Button
        style={{ marginTop: 40, backgroundColor: 'blue' }}
        icon="login"
        mode="contained"
        onPress={() => {
          if (usuario != '' && password != '') {
            let findUser = users.find(usr => usr.usuario == usuario && usr.password == password);
            if (findUser != undefined) {
              seterrormess('')
              const { name, usuario } = findUser
              setUsuario('');
              setpassword('');
              navigation.navigate('car', { name: name, usuario: usuario })
            }
            else {
              seterrormess('Correo y/o contraseña ICONRRECTO')
            }
          } else {
            seterrormess('Todos los datos son obligatorios')
          }
        }}
      >
        Iniciar Sesion
      </Button>
      <Text style={{ color: 'green' }}>{vacio}</Text>
      <Text style={{ color: 'red' }}>{errormess}</Text>

      
      <Button
        style={{ marginTop: 20, backgroundColor: 'blue' }}
        icon="login"
        mode="contained"
        onPress={() => {
          
          navigation.navigate('Register')
        }}
      >
        Registrar
      </Button>

      <Text style={{ marginTop: 25, color: "#b5b5b5" }}>Terminos y Condiciones</Text>
    </View>
  );
}

function registerScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [password, setpassword] = useState('');
  const [nombre,setnombre]=useState('');
  const [errormess, seterrormess] = useState('');
  const [vacio, setvacio] = useState('');
 // const [usuario, setUsuario] = useState('');
 

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      usuario: '',
      nombre:'',
      password: '',
    }
  });

  return (

    
    <View style={styles.container}>
      <Image
        style={styles.imgstyle}
        source={require('./assets/BMW.jpg')}
      />
      <Text style={{ marginBottom: 20, fontWeight: "bold", fontSize: 20 }}>REGISTRO</Text>

      
      <TextInput
      label="Nombre usuario"
      mode='Flat'
      right={<TextInput.Icon icon="account-box" />}
      style={{ marginTop: 20, backgroundColor: "#dcdcdc" }}
      onChangeText={(input) => {
        // Validar que solo contenga letras y números
        const filteredInput = input.replace(/[^a-zA-Z0-9]/g, "");
        setUsuario(filteredInput);
      }}
      value={usuario}   
    />

      
<TextInput
  label="Nombre"
  mode="Flat"
  right={<TextInput.Icon icon="account-box" />}
  style={{ marginTop: 20, backgroundColor: "#dcdcdc" }}
  onChangeText={(input) => {
    // Validar que solo contenga letras y espacios
    const filteredInput = input.replace(/[^a-zA-Z\s]/g, "");
    setnombre(filteredInput);
  }}
  value={nombre}
/>

<TextInput
  label="Password"
  mode='flat'
  right={<TextInput.Icon icon="eye" />}
  style={{ marginTop: 25, backgroundColor: "#dcdcdc" }}
  onChangeText={(password) => {
    // filtrar cualquier otro carácter que no sea una letra o número
    const filteredPassword = password.replace(/[^a-zA-Z0-9]/g, '');
    setpassword(filteredPassword);
  }}
  value={password}
  secureTextEntry={true}
  keyboardType="alphanumeric"
/>
        <Text style={{ color: 'green' }}>{vacio}</Text>
        <Text style={{ color: 'red' }}>{errormess}</Text>

<Button
        style={{ marginTop: 40, backgroundColor: 'blue' }}
        icon="login"
        mode="contained"
       
        onPress={() => {
          if (usuario != '' && password !== '' && nombre != '') {
            let findUser = users.find(usr => usr.usuario == usuario);
            if (findUser != undefined) {
              seterrormess('Usuario ya existe')
              //navigation.navigate('Contacts', { name: name, usuario: usuario, nombre:nombre })
            }
            else {
             // const {  usuario, nombre,password } = findUser

              users.push({ usuario:usuario,nombre:nombre, password:password})
              setUsuario('');
              setpassword('');
              setnombre('');
              navigation.navigate('Home')
              

            }
          } else {
            seterrormess('Todos los datos son obligatorios')
          }
        }}
      >
        RegistrarDatos
      </Button>

      <Button
        style={{ marginTop: 20, backgroundColor: 'blue' }}
        icon="login"
        mode="contained"
        onPress={() => {
          
          navigation.navigate('Home')
        }}
      >
        Ir a home
      </Button>
      
      </View>
  );
}

function carScreen({ navigation }) {
  const [placa, setplaca] = useState('');
  const [marca, setmarca] = useState('');
  const [estado,setestado]=useState('');
  const [errormess, seterrormess] = useState('');
  const [vacio, setvacio] = useState('');
 // const [usuario, setUsuario] = useState('');
 

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      placa: '',
      marca:'',
      estado: '',
    }
  });

  return (

    


    <View style={[styles.container,{flex: 1, flexDirection: 'row'} ]}>

      <View style={[styles.container,{flex: 1} ]}>
      <Image
        style={styles.imgstyle}
        source={require('./assets/BMW.jpg')}
      />
      <Text style={{ marginBottom: 20, fontWeight: "bold", fontSize: 20 }}>Car</Text>

      
      <TextInput
      label="Placa"
      mode='Flat'
      right={<TextInput.Icon icon="account-box" />}
      style={{ marginTop: 20, backgroundColor: "#dcdcdc" }}
      onChangeText={(input) => {
        // Validar que solo contenga letras y números
        const filteredInput = input.replace(/[^a-zA-Z0-9]/g, "");
        setplaca(filteredInput);
      }}
      value={placa}   
    />


<TextInput
      label="Marca"
      mode='Flat'
      right={<TextInput.Icon icon="account-box" />}
      style={{ marginTop: 20, backgroundColor: "#dcdcdc" }}
      onChangeText={(input) => {
        // Validar que solo contenga letras y números
        const filteredInput = input.replace(/[^a-zA-Z0-9]/g, "");
        setmarca(filteredInput);
      }}
      value={marca}   
    />
      <TextInput
            label="Estado"
            mode='Flat'
            right={<TextInput.Icon icon="account-box" />}
            style={{ marginTop: 20, backgroundColor: "#dcdcdc" }}
            keyboardType='default'
            onChangeText={text => {
              const letters = /^[A-Za-z]+$/;
              if (text.match(letters) || text === '') {
                setestado(text);
              }
            }}
            value={estado}   
      />


        <Text style={{ color: 'green' }}>{vacio}</Text>
        <Text style={{ color: 'red' }}>{errormess}</Text>

<Button
        style={{ marginTop: 40, backgroundColor: 'blue' }}
        icon="login"
        mode="contained"
       
        onPress={() => {
          if (placa != '' && marca !== '' && estado != '') {
            let findUser = cars.find(car => car.placa == placa);
            if (findUser != undefined) {
              seterrormess('Placa ya existe')
              //const { name, usuario, nombre } = findUser
              //navigation.navigate('Contacts', { name: name, usuario: usuario, nombre:nombre })
            }
            else {
              cars.push({ placa:placa, marca:marca, estado:estado})
              setmarca('');
              setplaca('');
              setestado('');
            }
          } else {
            seterrormess('Todos los datos son obligatorios')
          }
        }}
      >
         RegistrarDatos
      </Button> 


      </View>

      <View style={[styles.container,{flex: 1} ]}>
      <FlatList
          data={cars}
          renderItem={({ item }) => (
            <View style={{backgroundColor:"blue"}}>
              <Text style={{fontSize:20}}>Placa: {item.placa}</Text>
              <Text style={{fontSize:15}}>Marca: {item.marca}</Text>
              <Text style={{fontSize:15}}>Estado: {item.estado}</Text>
            </View>
          )}
          keyExtractor={item => item.placa}
        />
      </View>
      

      
      </View>
  );
}

function rentaScreen({ navigation }) {
  const [numrenta, setnumrenta] = useState('');
  const [placa, setplaca] = useState('');
  const [usuario, setUsuario] = useState('');
  const [fecha, setfecha] = useState('');
  const [errormess, seterrormess] = useState('');
  const [vacio, setvacio] = useState('');
 // const [usuario, setUsuario] = useState('');
 

  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      placa: '',
      numrenta:'',
      usuario: '',
      fecha: '',
    }
  });

  return (

    
    <View style={styles.container}>
      <Image
        style={styles.imgstyle}
        source={require('./assets/BMW.jpg')}
      />
      <Text style={{ marginBottom: 20, fontWeight: "bold", fontSize: 20 }}>Renta</Text>

      


<TextInput
      label="Numero de renta"
      mode='Flat'
      right={<TextInput.Icon icon="account-box" />}
      style={{ marginTop: 20, backgroundColor: "#dcdcdc" }}
      onChangeText={(input) => {
        // Validar que solo contenga letras y números
        const filteredInput = input.replace(/[^0-9]/g, "");
        setnumrenta(filteredInput);
      }}
      value={numrenta}   
    />


      <TextInput
          label="Usuario"
          mode='Flat'
          right={<TextInput.Icon icon="account-box" />}
          style={{ marginTop: 20, backgroundColor: "#dcdcdc" }}
          onChangeText={(input) => {
            // Validar que solo contenga letras y números
            const filteredInput = input.replace(/[^a-zA-Z0-9]/g, "");
            setUsuario(filteredInput);
          }}
          value={usuario}   
      />


    <TextInput
          label="Placa"
          mode='Flat'
          right={<TextInput.Icon icon="account-box" />}
          style={{ marginTop: 20, backgroundColor: "#dcdcdc" }}
          onChangeText={(input) => {
            // Validar que solo contenga letras y números
            const filteredInput = input.replace(/[^a-zA-Z0-9]/g, "");
            setplaca(filteredInput);
          }}
          value={placa}   
        />


        <TextInput
          label="Fecha"
          mode='Flat'
          keyboardType='numeric'
          maxLength={8}
          placeholder='DD-MM-AAAA'
          style={{ marginTop: 20, backgroundColor: "#dcdcdc" }}
          onChangeText={fecha => setfecha(fecha)}
          value={fecha}   
        />
        <Text style={{ color: 'green' }}>{vacio}</Text>
        <Text style={{ color: 'red' }}>{errormess}</Text>

<Button
        style={{ marginTop: 10, backgroundColor: 'blue' }}
        icon="login"
        mode="contained"
       
        onPress={() => {
          if (numrenta != '' && usuario !== '' && placa != ''&& fecha != '') {
            let findUser = users.find(usr => usr.usuario == usuario);
            let findCar =cars.find(car => car.placa == placa );
         

            if (findUser != undefined&&findCar!= undefined) {

              if(findCar.estado=="disponible"){
                rent.push({numRenta:numrenta, username:usuario, numplaca:placa, fecha:fecha})
              }else{
                seterrormess('El vehiculo no esta disponible')
              }    
              setnumrenta('');
              setUsuario('');
              setplaca('');
              setfecha('');
          
              cars = cars.map(car => {
                if (car.placa == placa) {
                  return {
                     placa:findCar.placa, marca:findCar.marca, estado:"No disponible"
                  };
                }
                return car;
                
              });
              console.log(cars)
              //navigation.navigate('Contacts', { name: name, usuario: usuario, nombre:nombre })
            }
            else {
              seterrormess('El usuario o la el vehiculo no existen')
            }
          } else {
            seterrormess('Todos los datos son obligatorios')
          }
        }}
      >
         RegistrarDatos
      </Button> 
      </View>
  );
}
function ProductsScreen({ navigation }) {
  let title = "Este es el titulo"
  let fullname = "Roxy la mejor de lo mejor"
  return (
    <View style={styles.container}>
      <Text style={{ marginBottom: 20 }}>Estamos en Productos</Text>
    </View>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, //lo que hace es no mostrar cada tittulo del componente....
        tabBarActiveTintColor: 'Blue',
        tabBarInactiveTintColor: 'white',
        tabBarActiveBackgroundColor: 'blue',
        tabBarInactiveBackgroundColor: '#6699CC'
      }}
    >
      <Tab.Screen name='Home' component={HomeScreen} options={{
        tabBarStyle: { display: 'none' },
        tabBarIcon: (tabInfo) => (<MaterialIcons name='home' size={22} />)
      }} />
      {/* <Tab.Screen name='Products' component={ProductsScreen} options={{
        tabBarIcon: (tabInfo) => (<MaterialIcons name='category' size={22} />)
      }} /> */}
      {/* <Tab.Screen name='Contacts' component={Contacts} options={{
        tabBarIcon: (tabInfo) => (<MaterialIcons name='call' size={22} />)
      }} /> */}
        <Tab.Screen name='Register' component={registerScreen} options={{
          tabBarStyle: { display: 'none' },
        tabBarIcon: (tabInfo) => (<MaterialIcons name='call' size={22} />)
        
      }} />
        <Tab.Screen name='car' component={carScreen} options={{
        tabBarIcon: (tabInfo) => (<MaterialIcons name='call' size={22} />)
        
      }} />
        <Tab.Screen name='renta' component={rentaScreen} options={{
        tabBarIcon: (tabInfo) => (<MaterialIcons name='call' size={22} />)
        
      }} />


    </Tab.Navigator>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgstyle: {
    width: 120,
    height: 100,
    marginBottom: 35
  }
});
