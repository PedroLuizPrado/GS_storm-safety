import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1,
    paddingBottom: 40,
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#2B6CA3',
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
  form: {
    paddingHorizontal: 30,
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    width: '100%',
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
  },
  preview: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#2B6CA3',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  homeIcon: {
    marginTop: 30,
    alignItems: 'center',
  },
});
