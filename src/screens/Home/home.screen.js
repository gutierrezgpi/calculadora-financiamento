import { useState } from 'react';
import { View } from 'react-native';

import { Styles } from './home.styles';

import { Header } from '../../components/Header/header.component';
import { Form } from '../../components/Form/form.component';
import { Result } from '../../components/Result/result.component';


export const Home = () => {

  const [resultTaked, sendRes] = useState(['', 'Preencha os valores e clique em calcular'])

  const sendResult = (result) => {

    const res = []

    if (result[0] == 'error'){

      res[0] = ''
      res[1] = result[1]

    }else {

      res[0] = `Total: R$ ${result[0]}`
      res[1] = `${result[2]}x de R$ ${result[1]}`

    }

    sendRes(res)

  }

  return (

    <View style={Styles.container}>

      <Header />

      <Form onCalc={sendResult} />

      <Result resultTaked={resultTaked} />

    </View>

  )
}
