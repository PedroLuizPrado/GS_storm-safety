import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaCadastro from '../pages/TelaCadastro';
import TelaLogin from '../pages/TelaLogin';
import Home from '../pages/Home';
import AdicionarAlerta from '../pages/AdicionarAlerta';
import HistoricoAlertas from '../pages/HistoricoAlertas';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="TelaCadastro" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
      <Stack.Screen name="TelaLogin" component={TelaLogin} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AdicionarAlerta" component={AdicionarAlerta} />
      <Stack.Screen name="HistoricoAlertas" component={HistoricoAlertas} />
    </Stack.Navigator>
  );
}
