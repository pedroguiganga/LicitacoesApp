import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Picker } from 'react-native';
import { addProcess } from '../services/storage';

export default function CreateProcess({ navigation }) {
  const [protocolo, setProtocolo] = useState('');
  const [objeto, setObjeto] = useState('');
  const [modalidade, setModalidade] = useState('');

  const handleSubmit = async () => {
    if (protocolo && objeto && modalidade) {
      await addProcess({ protocolo, objeto, modalidade, fase: '01 - EM ANALISE' });
      navigation.navigate('ManageProcesses');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Número de Protocolo:</Text>
      <TextInput style={styles.input} value={protocolo} onChangeText={setProtocolo} />
      <Text style={styles.label}>Objeto:</Text>
      <TextInput style={styles.input} value={objeto} onChangeText={setObjeto} />
      <Text style={styles.label}>Modalidade:</Text>
      <Picker selectedValue={modalidade} onValueChange={(value) => setModalidade(value)}>
        <Picker.Item label="Pregão Eletrônico" value="Pregão Eletrônico" />
        <Picker.Item label="Dispensa Local" value="Dispensa Local" />
        <Picker.Item label="Dispensa Eletrônica" value="Dispensa Eletrônica" />
        <Picker.Item label="Inexigibilidade" value="Inexigibilidade" />
        <Picker.Item label="Credenciamento" value="Credenciamento" />
      </Picker>
      <Button title="Salvar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#CCC', padding: 10, marginBottom: 20, borderRadius: 5 },
});
