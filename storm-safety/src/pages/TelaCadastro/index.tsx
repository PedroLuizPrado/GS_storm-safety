import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';
import { styles } from './styles';

export default function TelaCadastro() {
  const navigation = useNavigation();

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleSignUp = async () => {
    if (!nome || !sobrenome || !email || !senha || !confirmarSenha) {
      return Alert.alert('Erro', 'Preencha todos os campos.');
    }

    if (senha !== confirmarSenha) {
      return Alert.alert('Erro', 'As senhas não coincidem.');
    }

    try {
      await createUserWithEmailAndPassword(auth, email, senha);

      await setDoc(doc(db, 'usuarios', auth.currentUser?.uid!), {
        nome,
        sobrenome,
        email
      });

      Alert.alert('Sucesso', 'Conta criada com sucesso!');
      navigation.navigate('TelaLogin' as never);
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Erro', 'Email já está em uso.');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Erro', 'Email inválido.');
      } else if (error.code === 'auth/weak-password') {
        Alert.alert('Erro', 'Senha fraca. Mínimo de 6 caracteres.');
      } else {
        Alert.alert('Erro', 'Erro ao criar conta.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>

      <Text style={styles.title}>Cadastre sua conta</Text>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Primeiro Nome" value={nome} onChangeText={setNome} />
        <TextInput style={styles.input} placeholder="Sobrenome" value={sobrenome} onChangeText={setSobrenome} />
        <TextInput style={styles.input} placeholder="email" keyboardType="email-address" value={email} onChangeText={setEmail} />
        <TextInput style={styles.input} placeholder="Insira sua senha" secureTextEntry value={senha} onChangeText={setSenha} />
        <TextInput style={styles.input} placeholder="Confirme sua senha" secureTextEntry value={confirmarSenha} onChangeText={setConfirmarSenha} />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('TelaLogin' as never)}>
          <Text style={styles.loginText}>
            Já tem uma conta? <Text style={styles.loginLink}>Faça login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
