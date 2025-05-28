import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth, db } from '../../config/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { styles } from './styles';

export default function Home() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('...');

  useEffect(() => {
    async function fetchUserName() {
      const user = auth.currentUser;
      if (user) {
        const ref = doc(db, 'usuarios', user.uid);
        const docSnap = await getDoc(ref);
        if (docSnap.exists()) {
          setNome(docSnap.data().nome);
        }
      }
    }

    fetchUserName();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />

      <Text style={styles.title}>Olá, {nome}!</Text>
      <Text style={styles.subtitle}>Seja bem-vindo! Nos diga seu problema</Text>

      <TouchableOpacity
        style={styles.buttonBlue}
        onPress={() => navigation.navigate('AdicionarAlerta' as never)}
      >
        <Image source={require('../../assets/alert.png')} style={styles.icon} />
        <Text style={styles.buttonText}>Adicione seu Alerta!</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonRed}
        onPress={() => navigation.navigate('HistoricoAlertas' as never)}
      >
        <Image source={require('../../assets/list.png')} style={styles.icon} />
        <Text style={styles.buttonText}>Veja seus alertas!</Text>
      </TouchableOpacity>
    </View>
  );
}
