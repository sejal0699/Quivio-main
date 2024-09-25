import { StyleSheet } from "react-native";

export default StyleSheet.create({

   
        container: {
          flex: 1,
          paddingHorizontal: 24,
          paddingTop: 100,
          backgroundColor: '#E6EDF3',
        },
        header: {
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 10,
          marginTop:50
        },
        errorMessage: {
          color: '#122636',
          fontSize: 12,
          marginTop: 10,
        },
        
        backBox:{
            backgroundColor:"#FFFFFF",
            width:60,
            margin:10,
            borderRadius:10
          },
        loginButton: {
          backgroundColor: '#007BFF',
            paddingVertical: 18,
            borderRadius: 10,
            alignItems: 'center',
            marginBottom: 30,
          width:'90%',
          alignSelf:'center'
        },
        textCode: {
          color: '#081017',
         alignSelf:'flex-end',
         marginTop:10
        },
        loginButtonText: {
          color: '#ffffff',
          fontSize: 16,
          fontWeight: 'bold',
        },
        backButton: {
          marginBottom: 20,
        },
        backIcon: {
          width: 24,
          height: 24,
        },
        subHeader: {
          fontSize: 16,
          color: '#555',
          marginBottom: 20,
        },
        contentContainer: {
          flex: 1,
          paddingHorizontal: 16,
        
        },
        codeInputContainer: {
          flexDirection: 'row',
          
          width: '100%',
          marginVertical: 20,
          justifyContent:'space-evenly',
        
       

        },
        errorContainer: {
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
        },
        errorImage: {
          width: 20, 
          height: 20, 
          marginRight: 5, 
        },
        codeInput: {
          width: 20,
          height: 20,
          borderColor: '#E5E8EA',
          borderRightWidth:2,
          
          borderRadius: 1,
          color: '#0B1721',
          fontSize: 18,
          textAlign: 'center',
        },
        resendText: {
          fontSize: 14,
          marginTop: 20,
          color: '#555',
        },
        link: {
          color: '#007BFF',
        },
      
          buttonContainer: {
            paddingHorizontal: 16,
            paddingBottom: 20,
          },
          box:{
            backgroundColor:'#fff',
            borderRadius:10
          },
          loginButtonEnabled: {
            backgroundColor: '#007bff',
          },
          loginButtonDisabled: {
            backgroundColor: '#d3d3d3', 
          },
      
      });
      