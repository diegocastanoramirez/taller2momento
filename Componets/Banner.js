import { Image } from "react-native-web";

export default function Banner(props){
    return(
        <Image source={require(`../assets/${props.name}.svg`)}></Image>
    )
}