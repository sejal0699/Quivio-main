import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#E6EDF3',
  },
  headerContainer: {
    marginTop: 60,
    marginBottom: 20,
 
   height:100
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#000',
  },
  subHeader: {
    fontSize: 14,
    color: '#6C757D',
    marginTop: 8,
    textAlign: 'left',
  },
  inputContainer: {
  
    marginTop:20
   
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'left',
  },
  criteriaContainer: {
    marginTop: 10,
  },
  criteriaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  criteriaIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  valid: {
    color: '#122636',
  },
  invalid: {
    color: '#122636',
  },
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonEnabled: {
    backgroundColor: '#2A7BBB',
  },
  buttonDisabled: {
    backgroundColor: '#B0B0B0',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  eyeIcon: {
    marginBottom: 40,
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  backdropIcon:{
    
    paddingVertical:10,
   
        },
});
