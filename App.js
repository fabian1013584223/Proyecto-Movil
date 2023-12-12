import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormularioLogin from './src/Components/FormularioLogin';
import RegistrarStockScreen from './src/Components/RegistrarStockScreen';
import RegistrarPrecioScreen from './src/Components/RegistrarPrecioScreen';
import RegistrarproducScreen from './src/Components/RegistrarproducScreen';
import RgstroProveedorScreen from './src/Components/RgstroProveedorScreen';
import ModificarCliente from './src/Components/ModificarCliente';
import ModificarPrecio from './src/Components/ModificarPrecio';
import ModificarProducto from './src/Components/ModificarProducto';
import ModificarProveedor from './src/Components/ModificarProveedor';
import ModificarUsuario from './src/Components/ModificarUsuario';
import NosotrosScreen from './src/Components/NosotrosScreen';
import DerechosScreen from './src/Components/DerechosScreen';
import LoginAdmin from './src/Components/LoginAdmin';
import IndexAdministrador from './src/Components/IndexAdministrador'; 

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavegationContainer>
      <Stack.Navigator initialRouterName="LoginAdmin">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false, title: "Login" }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false, title: "Menu" }}
        />
        <Stack.Screen
          name="Barra"
          component={NavBar}
          options={{ headerShown: false, title: "NavBar" }}
        />
        <Stack.Screen
          name="FormularioLogin"
          component={ () => <FormularioLogin api={api} />}
          options={{ headerShown: false, title: "NavBar" }}
        />
        <Stack.Screen
          name="RegistrarStockScreen"
          component={ () => <RegistrarStockScreen api={api} />}
          options={{ headerShown: false, title: "NavBar" }}
        />
        <Stack.Screen
          name="RegistrarPrecioScreen"
          component={ () => <RegistrarPrecioScreen api={api} />}
          options={{ headerShown: false, title: "NavBar" }}
        />
        <Stack.Screen
          name="RegistrarproducScreen"
          component={ () => <RegistrarproducScreen api={api} />}
          options={{ headerShown: false, title: "NavBar" }}
        />
        <Stack.Screen
          name="RgstroProveedorScreen"
          component={ () => <RgstroProveedorScreen api={api} />}
          options={{ headerShown: false, title: "NavBar" }}
        />
        <Stack.Screen
          name="RgstroProveedorScreen"
          component={ () => <RgstroProveedorScreen api={api} />}
          options={{ headerShown: false, title: "NavBar" }}
        />
        <Stack.Screen
          name="ModificarCliente"
          component={ () => <ModificarCliente api={api} />}
          options={{ headerShown: false, title: "NavBar" }}
        />
        <Stack.Screen
          name="ModificarPrecio"
          component={ () => <ModificarPrecio api={api} />}
          options={{ headerShown: false, title: "NavBar" }}
        />
        <Stack.Screen
          name="ModificarProducto"
          component={ () => <ModificarProducto api={api} />}
          options={{ headerShown: false, title: "NavBar" }}
        />
        <Stack.Screen
          name="ModificarProveedor"
          component={ () => <ModificarProveedor api={api} />}
          options={{ headerShown: false, title: "NavBar" }}
        />
        <Stack.Screen
          name="ModificarUsuario"
          component={ () => <ModificarUsuario api={api} />}
          options={{ headerShown: false, title: "NavBar" }}
        />
        <Stack.Screen
          name="NosotrosScreen"
          component={ () => <NosotrosScreen api={api} />}
          options={{ headerShown: false, title: "NavBar" }}
        />
        <Stack.Screen
          name="DerechosScreen"
          component={ () => <DerechosScreen api={api} />}
          options={{ headerShown: false, title: "NavBar" }}
        />
        <Stack.Screen
          name="LoginAdmin"
          component={ () => <LoginAdmin api={api} />}
          options={{ headerShown: false, title: "NavBar" }}
        />
        <Stack.Screen
          name="IndexAdministrador"
          component={ () => <IndexAdministrador api={api} />}
          options={{ headerShown: false, title: "NavBar" }}
        />
      </Stack.Navigator>
      </NavegationContainer>
  );
};


export default App;