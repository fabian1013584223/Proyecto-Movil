import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, FlatList, Modal, Pressable } from 'react-native';

const PedidoScreen = () => {
 const [pedidoVisible, setPedidoVisible] = useState(false);
 const [idPedido, setIdPedido] = useState('');
 const [idClienteProveedor, setIdClienteProveedor] = useState('');
 const [producto, setProducto] = useState('');
 const [cantidad, setCantidad] = useState('');
 const [fechaGeneracion, setFechaGeneracion] = useState('');
 const [valorTotal, setValorTotal] = useState('');
 const [estado, setEstado] = useState('Activo');

 const registrarPedido = () => {
    // Registrar el pedido aquí
    setPedidoVisible(false);
 };

 const cancelarRegistrarPedido = () => {
    setPedidoVisible(false);
 };

 const [selectedType, setSelectedType] = useState('Cliente');

 const clienteProveedor = [
    { id: 'Cliente', title: 'Cliente' },
    { id: 'Proveedor', title: 'Proveedor' },
 ];

 const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedType(item.id)} style={styles.clienteProveedorItem}>
      <Text style={styles.clienteProveedorText}>{item.title}</Text>
    </TouchableOpacity>
 );

 return (
    <View style={styles.container}>
      <Modal visible={pedidoVisible} animationType="slide">
        <View style={styles.modalContent}>
          <Text>Directed order from/to:</Text>
          <FlatList
            data={clienteProveedor}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedType}
          />
          <TextInput placeholder="Ingrese id del pedido" onChangeText={setIdPedido} />
          <TextInput placeholder="Ingrese id" onChangeText={setIdClienteProveedor} />
          <TextInput placeholder="Ingrese nombre del producto" onChangeText={setProducto} />
          <TextInput placeholder="Ingrese cantidad del producto" onChangeText={setCantidad} />
          <TextInput placeholder="Ingrese fecha de generación del pedido" onChangeText={setFechaGeneracion} />
          <TextInput placeholder="Ingrese valor total del pedido" onChangeText={setValorTotal} />
          <Text>Estado: {estado}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Registrar" onPress={registrarPedido} />
            <Button title="Cancelar" onPress={cancelarRegistrarPedido} />
          </View>
        </View>
      </Modal>
      <Pressable style={styles.button} onPress={() => setPedidoVisible(true)}>
        <Text style={styles.buttonText}>Registrar pedido</Text>
      </Pressable>
    </View>
 );
};

const styles = StyleSheet.create({
 container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
 },
 button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '80%',
 },
 buttonText: {
    fontSize: 18,
 },
 modalContent: {
    flex: 1,
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
 },
 buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
 },
 clienteProveedorItem: {
    padding: 10,
    backgroundColor: '#f9c2ff',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
 },
 clienteProveedorText: {
    fontSize: 16,
 },
});

export default PedidoRgtroScreen;