import { Text, View } from "react-native"
import { Styles } from "./header.styles"

export const Header = () => {
    return (
        <View style={Styles.header}>
            <Text style={Styles.titleText}>Calculadora de Financiamento</Text>
        </View>
    )
}