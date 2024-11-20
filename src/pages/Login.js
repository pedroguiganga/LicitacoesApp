import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { authenticate } from '../services/auth';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const success = await authenticate(username, password);
    if (success) {
      navigation.navigate('ManageProcesses');
    } else {
      setError('Usuário ou senha inválidos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput placeholder="Usuário" style={styles.input} value={username} onChangeText={setUsername} />
      <TextInput placeholder="Senha" style={styles.input} value={password} secureTextEntry onChangeText={setPassword} />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Entrar" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#CCC', padding: 10, marginBottom: 20, borderRadius: 5 },
  error: { color: 'red', marginBottom: 20, textAlign: 'center' },
});
