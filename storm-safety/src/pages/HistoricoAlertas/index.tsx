import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { Home, Trash2, Edit, Save } from 'lucide-react-native';

type Alerta = {
  nome: string;
  localizacao: string;
  problema: string;
  imagem?: string;
  data: string;
};

export default function HistoricoAlertas() {
  const navigation = useNavigation();
  const [alertas, setAlertas] = useState<Alerta[]>([]);
  const [editandoIndex, setEditandoIndex] = useState<number | null>(null);
  const [formEditado, setFormEditado] = useState<Partial<Alerta>>({});

  const carregarAlertas = async () => {
    const dados = await AsyncStorage.getItem('alertas');
    if (dados) {
      setAlertas(JSON.parse(dados));
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', carregarAlertas);
    return unsubscribe;
  }, [navigation]);

  const excluir = async (index: number) => {
    const lista = [...alertas];
    lista.splice(index, 1);
    await AsyncStorage.setItem('alertas', JSON.stringify(lista));
    setAlertas(lista);
  };

  const escolherImagem = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!resultado.canceled) {
      setFormEditado({ ...formEditado, imagem: resultado.assets[0].uri });
    }
  };

  const salvarEdicao = async (index: number) => {
    const lista = [...alertas];
    lista[index] = {
      ...lista[index],
      ...formEditado,
    };
    await AsyncStorage.setItem('alertas', JSON.stringify(lista));
    setAlertas(lista);
    setEditandoIndex(null);
    setFormEditado({});
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Aqui seu{'\n'}Histórico de alertas!</Text>
      </View>

      <View style={styles.content}>
        {alertas.map((item, index) => (
          <View key={index} style={styles.alertBox}>
            {editandoIndex === index ? (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Nome"
                  value={formEditado.nome ?? item.nome}
                  onChangeText={(text) => setFormEditado({ ...formEditado, nome: text })}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Localização"
                  value={formEditado.localizacao ?? item.localizacao}
                  onChangeText={(text) => setFormEditado({ ...formEditado, localizacao: text })}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Problema"
                  value={formEditado.problema ?? item.problema}
                  onChangeText={(text) => setFormEditado({ ...formEditado, problema: text })}
                />

                <TouchableOpacity onPress={escolherImagem} style={styles.imagePicker}>
                  <Text style={styles.imagePickerText}>
                    {formEditado.imagem ? 'Nova imagem selecionada' : 'Selecionar nova imagem'}
                  </Text>
                </TouchableOpacity>

                {(formEditado.imagem || item.imagem) && (
                  <Image
                    source={{ uri: formEditado.imagem ?? item.imagem }}
                    style={styles.imagem}
                  />
                )}

                <TouchableOpacity onPress={() => salvarEdicao(index)} style={styles.saveButton}>
                  <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.value}>{item.nome}</Text>

                <Text style={styles.label}>Localização:</Text>
                <Text style={styles.value}>{item.localizacao}</Text>

                <Text style={styles.label}>Problema:</Text>
                <Text style={styles.value}>{item.problema}</Text>

                {item.imagem && (
                  <Image source={{ uri: item.imagem }} style={styles.imagem} />
                )}
              </>
            )}

            <View style={styles.actions}>
              {editandoIndex === index ? (
                <TouchableOpacity onPress={() => salvarEdicao(index)}>
                  <Save size={22} color="#2B6CA3" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => {
                  setEditandoIndex(index);
                  setFormEditado(item);
                }}>
                  <Edit size={22} color="#2B6CA3" />
                </TouchableOpacity>
              )}

              <TouchableOpacity onPress={() => excluir(index)}>
                <Trash2 size={22} color="#c0392b" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.homeIcon} onPress={() => navigation.navigate('Home' as never)}>
        <Home size={32} color="#19436E" />
      </TouchableOpacity>
    </ScrollView>
  );
}
