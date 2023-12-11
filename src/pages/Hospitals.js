import { Text, View } from "react-native";
import statusBarHeight from "../utils/statusBarHight";

export default function Hospitals() {
    return(
        <ScrollView
        style={statusBarHeight}
        className='bg-white'
        >
            <Text>Hospitals</Text>
        </ScrollView>
    )
}