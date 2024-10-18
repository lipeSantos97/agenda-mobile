import { View, TouchableOpacity, Text, Image } from "react-native";
import { styles } from "./doctor.style"


function Doctor(props) {
    return <TouchableOpacity>
        <Image source={props.icon} />
        <Text>{props.name}</Text>
        <Text>{props.specialty}</Text>
    </TouchableOpacity>
}
export default Doctor;