import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, StatusBar } from 'react-native';
import List from './src/Usuarios';

export default function App() {
  const [user, setUser] = useState([
    { id: '1', nome: 'Cleber', email: 'maria@email.com', city: 'Rio de Janeiro' },
    { id: '2', nome: 'Maria', email: 'maria@email.com', city: 'Campos' },
    { id: '3', nome: 'Rodolfo', email: 'rodolfo@email.com', city: 'São Paulo' },
    { id: '4', nome: 'Ana', email: 'ana@email.com', city: 'Nova Iorque' },
    { id: '5', nome: 'Ana', email: 'ana@email.com', city: 'Nova Iorque' },
    { id: '6', nome: 'Ana', email: 'ana@email.com', city: 'Nova Iorque' },
    { id: '7', nome: 'Ana', email: 'ana@email.com', city: 'Nova Iorque' },
  ]);

  return (
    <View style={styles.container}>
     
      <StatusBar barStyle="light-content" backgroundColor="#eb6314" />

      <View style={styles.campoTitle}>
        <Text style={styles.title}>Seja Bem-Vindo</Text>
      </View>

      <FlatList
        data={user}
        renderItem={({ item }) => <List data={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },

  campoTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eb6314'
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
    margin: 6,
    color: '#fff',
  },
});
