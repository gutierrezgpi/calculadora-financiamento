import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Styles } from './home.styles';
import calc from '../../constants/calc';

export const Home = () => {

  const [total_value, onChangeValue] = useState('');
  const [rate, onChangeRate] = useState('');
  const [qtd_portion, onChangeQTDPortion] = useState('');

  const [result, setResult] = useState('Preencha os valores e clique em calcular');

  const calcular = () => {

    const tv = parseFloat(total_value.replace(',', '.'));
    const r = parseFloat(rate.replace(',', '.'));
    const qtdp = parseFloat(qtd_portion);

    if (!isNaN(tv) && !isNaN(r) && !isNaN(qtdp)) {

      const result = calc(tv, r, qtdp);

      setResult(`R$ ${result[0]}\nParcelado em ${qtdp}x de R$ ${result[1]}`);

    } else {

      setResult('Por favor, insira números válidos');

    }

  };

  return (

    <View style={Styles.container}>

      <Text style={Styles.titleText}>Calculadora de Financiamento</Text>
      
      <br/>

      <Text>Valor</Text>
      <TextInput
        style={Styles.input}
        onChangeText={onChangeValue}
        value={total_value}
        inputMode='numeric'
      />

      <Text>Taxa</Text>
      <TextInput
        style={Styles.input}
        onChangeText={onChangeRate}
        value={rate}
        inputMode='numeric'
      />

      <Text>Quantidade de Parcelas</Text>
      <TextInput
        style={Styles.input}
        onChangeText={onChangeQTDPortion}
        value={qtd_portion}
        inputMode='numeric'
      />

      <Pressable style={Styles.button} onPress={calcular}>
        <Text style={Styles.button_text}>Calcular</Text>
      </Pressable>

      <br/>

      <Text>{result}</Text>

    </View>

  )
}
