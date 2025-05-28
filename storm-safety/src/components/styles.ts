import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '90%',
    padding: 20,
    borderRadius: 16,
    alignSelf: 'center',
    marginVertical: 12,
    elevation: 3,
  },
  azul: {
    backgroundColor: '#89C2FF',
  },
  vermelho: {
    backgroundColor: '#F26C6C',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  texto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
