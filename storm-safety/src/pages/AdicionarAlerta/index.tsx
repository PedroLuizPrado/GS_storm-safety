import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';
import { Home } from 'lucide-react-native';

export default function AdicionarAlerta() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [problema, setProblema] = useState('');
  const [imagemUri, setImagemUri] = useState<string | null>(null);

  const escolherImagem = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagemUri(resultado.assets[0].uri);
    }
  };

  const salvarDados = async () => {
    try {
      const alerta = {
        nome,
        localizacao,
        problema,
        imagem: imagemUri,
        data: new Date().toISOString(),
      };
      const existentes = await AsyncStorage.getItem('alertas');
      const lista = existentes ? JSON.parse(existentes) : [];
      lista.push(alerta);
      await AsyncStorage.setItem('alertas', JSON.stringify(lista));
      Alert.alert('Sucesso', 'Alerta salvo com sucesso!');
      setNome('');
      setLocalizacao('');
      setProblema('');
      setImagemUri(null);
    } catch (err) {
      Alert.alert('Erro', 'Erro ao salvar os dados.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Relate seu{'\n'}Problema!</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Localização"
          value={localizacao}
          onChangeText={setLocalizacao}
        />
        <TextInput
          style={styles.input}
          placeholder="Problema"
          value={problema}
          onChangeText={setProblema}
        />

        <TouchableOpacity onPress={escolherImagem} style={styles.imagePicker}>
          <Text style={styles.imagePickerText}>
            {imagemUri ? 'Imagem Selecionada' : 'Selecionar Imagem'}
          </Text>
        </TouchableOpacity>

        {imagemUri && (
          <Image source={{ uri: imagemUri }} style={styles.preview} />
        )}

        <TouchableOpacity onPress={salvarDados} style={styles.button}>
          <Text style={styles.buttonText}>Salvar Alerta</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.homeIcon} onPress={() => navigation.navigate('Home' as never)}>
        <Home size={32} color="#19436E" />
      </TouchableOpacity>
    </ScrollView>
  );
}
