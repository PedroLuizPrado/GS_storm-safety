import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#19436E',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 13,
    color: '#19436E',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonBlue: {
    backgroundColor: '#91C4FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 16,
    width: 300,
    marginBottom: 20,
    height: 260,
  },
  buttonRed: {
    backgroundColor: '#FA7A7A',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderRadius: 16,
    width: 300,
    height: 260,
  },
  buttonText: {
    marginLeft: 12,
    fontSize: 22, 
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  icon: {
    width: 30,   
    height: 30,
    resizeMode: 'contain',
  },
});
