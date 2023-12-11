import { ScrollView, Text, View } from "react-native";
import statusBarHeight from "../utils/statusBarHight";
import Header from "../components/Header";

export default function Hospitals({navigator}) {
    return(
        <ScrollView
        className='bg-white'
        >
            <Header {...{navigator, text:'Hospitals'}}/>
            <Text>Hospitals</Text>
        </ScrollView>
    )
}