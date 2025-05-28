import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1,
    alignItems: 'center',
    paddingBottom: 40,
  },
  header: {
    backgroundColor: '#D84343',
    height: 130,
    width: '100%',
    borderBottomRightRadius: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    paddingHorizontal: 25,
    marginTop: 30,
    width: '100%',
  },
  alertBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#2B6CA3',
  },
  value: {
    marginBottom: 10,
    color: '#333',
  },
  imagem: {
    width: '100%',
    height: 160,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    marginTop: 6,
    marginBottom: 10,
  },
  saveButton: {
    marginTop: 10,
    backgroundColor: '#2B6CA3',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  imagePicker: {
    backgroundColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },
  imagePickerText: {
    color: '#333',
    fontWeight: '600',
    textAlign: 'center',
  },
  homeIcon: {
    marginTop: 30,
    alignItems: 'center',
  },
});
