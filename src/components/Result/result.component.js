import { Text, View } from "react-native"
import { Styles } from "./result.styles"

export const Result = ({ resultTaked }) => {
    
    return (

        <View style={Styles.result}>

            <Text style={Styles.res_total}>{resultTaked[0]}</Text>
            <Text style={Styles.res_portion}>{resultTaked[1]}</Text>

        </View>

    )

}