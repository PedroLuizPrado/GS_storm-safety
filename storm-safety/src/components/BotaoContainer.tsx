import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { AlertTriangle, List } from 'lucide-react-native';
import styles from './styles';

type Props = {
  tipo: 'adicionar' | 'ver';
  onPress: () => void;
};

export default function BotaoContainer({ tipo, onPress }: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, tipo === 'adicionar' ? styles.azul : styles.vermelho]}
      onPress={onPress}
    >
      <View style={styles.content}>
        {tipo === 'adicionar' ? (
          <AlertTriangle color="#fff" size={24} />
        ) : (
          <List color="#fff" size={24} />
        )}
        <Text style={styles.texto}>
          {tipo === 'adicionar' ? 'Adicione seu Alerta!' : 'Veja seus alertas!'}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
