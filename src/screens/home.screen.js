import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

import { Styles } from './home.styles';
import { Header } from '../components/Header/header.component';
import calc from '../../constants/calc';

export const Home = () => {

  const [total_value, onChangeValue] = useState('');
  const [rate, onChangeRate] = useState('');
  const [qtd_portion, onChangeQTDPortion] = useState('');

  const [res_total, setResTotal] = useState('');
  const [res_portion, setResPortion] = useState('Preencha os valores e clique em calcular');

  const calcular = () => {

    const tv = parseFloat(total_value.replace(',', '.'));
    const r = parseFloat(rate.replace(',', '.'));
    const qtdp = parseFloat(qtd_portion);

    if (!isNaN(tv) && !isNaN(r) && !isNaN(qtdp)) {

      const result = calc(tv, r, qtdp);

      setResTotal(`Total: R$ ${result[0]}`);
      setResPortion(`${qtdp}x de R$ ${result[1]}`);

    } else {

      setResPortion('Por favor, insira números válidos');

    }

  };

  return (

    <View style={Styles.container}>

      <Header />

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

      <Text style={Styles.res_total}>{res_total}</Text>
      <Text style={Styles.res_portion}>{res_portion}</Text>

    </View>

  )
}
