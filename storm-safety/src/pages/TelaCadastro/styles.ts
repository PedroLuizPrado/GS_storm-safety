import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#CBDCFF',
    width: '100%',
    height: 220,
    borderBottomRightRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#19436E',
    marginTop: 20,
    marginBottom: 10,
  },
  form: {
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#19436E',
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  loginText: {
    textAlign: 'center',
    fontSize: 12,
    marginTop: 16,
    color: '#888',
  },
  loginLink: {
    color: '#19436E',
    fontWeight: '600',
  },
});
