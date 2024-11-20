import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { getProcesses } from '../services/storage';

export default function Home({ navigation }) {
  const [processes, setProcesses] = useState([]);

  useEffect(() => {
    const fetchProcesses = async () => {
      const data = await getProcesses();
      setProcesses(data);
    };
    fetchProcesses();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.adminButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.adminText}>Administrador</Text>
      </TouchableOpacity>
      <FlatList
        data={processes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.protocolo}: {item.objeto}</Text>
            <Text>Fase Atual: {item.fase}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  adminButton: { marginBottom: 20, backgroundColor: '#4CAF50', padding: 10, borderRadius: 5 },
  adminText: { color: '#FFF', fontWeight: 'bold', textAlign: 'center' },
  card: { padding: 10, marginBottom: 10, borderColor: '#CCC', borderWidth: 1, borderRadius: 5 },
  title: { fontWeight: 'bold' },
});
