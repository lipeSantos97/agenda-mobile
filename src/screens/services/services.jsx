import { View, Text, FlatList, Image } from "react-native";
import { styles } from "./services.style";
import { doctors_services } from "../../constants/data";
import icon from "../../constants/icon";
import Service from "../../components/Service/service"


function Services() {
    return <View style={styles.container}>
        <View style={styles.banner}>
            <Image source={icon.female}></Image>
            <Text style={styles.name}>Heber</Text>
            <Text style={styles.specialty}>Cardiologista</Text>
        </View>

        <FlatList data={doctors_services}
            keyExtractor={(serv) => serv.id_service}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
                return <Service description={item.description}
                    price={item.price} />
            }} />
    </View>;
}
export default Services;