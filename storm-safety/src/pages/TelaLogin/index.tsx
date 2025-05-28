import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { styles } from './styles';

export default function TelaLogin() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    if (!email || !senha) {
      return Alert.alert('Erro', 'Preencha todos os campos.');
    }

    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigation.navigate('Home' as never);
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        Alert.alert('Erro', 'Usuário não encontrado.');
      } else if (error.code === 'auth/wrong-password') {
        Alert.alert('Erro', 'Senha incorreta.');
      } else {
        Alert.alert('Erro', 'Não foi possível fazer login.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo de volta!</Text>

      <TextInput
        style={styles.input}
        placeholder="Insira seu e-mail"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Insira sua senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('TelaCadastro' as never)}>
        <Text style={styles.linkText}>Ainda não tem uma conta? Faça cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}
