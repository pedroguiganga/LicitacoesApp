import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Login from './src/pages/Login';
import CreateProcess from './src/pages/CreateProcess';
import ManageProcesses from './src/pages/ManageProcesses';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Fluxograma de Licitações' }} />
        <Stack.Screen name="Login" component={Login} options={{ title: 'Login do Administrador' }} />
        <Stack.Screen name="CreateProcess" component={CreateProcess} options={{ title: 'Criar Processo' }} />
        <Stack.Screen name="ManageProcesses" component={ManageProcesses} options={{ title: 'Gerenciar Processos' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
