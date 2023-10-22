import { Pressable, Text, TextInput, View } from "react-native"

import { Styles } from "./form.styles"
import { useState } from "react";

import calc from "../../../constants/calc";

export const Form = ({ onCalc }) => {

    const [total_value, onChangeValue] = useState('');
    const [rate, onChangeRate] = useState('');
    const [qtd_portion, onChangeQTDPortion] = useState('');

    const calcular = () => {

        const tv = parseFloat(total_value.replace(',', '.'));
        const r = parseFloat(rate.replace(',', '.'));
        const qtdp = parseFloat(qtd_portion);

        if (!isNaN(tv) && !isNaN(r) && !isNaN(qtdp)) {

            const result = calc(tv, r, qtdp);

            onCalc([result[0], result[1], qtdp])

        } else {

            onCalc(['error', 'Por favor, insira números válidos'])

        }

    };

    return (
        <View style={Styles.form}>

            <Text style={Styles.label}>Valor:</Text>
            <TextInput
                style={Styles.input}
                onChangeText={onChangeValue}
                value={total_value}
                inputMode='numeric'
            />

            <Text style={Styles.label}>Taxa:</Text>

            <TextInput
                style={Styles.input}
                onChangeText={onChangeRate}
                value={rate}
                inputMode='numeric'
            />

            <Text style={Styles.label}>Quantidade de Parcelas:</Text>
            <TextInput
                style={Styles.input}
                onChangeText={onChangeQTDPortion}
                value={qtd_portion}
                inputMode='numeric'
            />

            <Pressable style={Styles.button} onPress={calcular}>
                <Text style={Styles.button_text}>Calcular</Text>
            </Pressable>

        </View>
    )
}