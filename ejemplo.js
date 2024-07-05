/*import { View, Text ,Button,Alert,StyleSheet } from "react-native";
const alerta = () => {
  Alert.alert('Alert Title', 'My Alert Msg', [
    {
      text: 'Cancel',
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel',
    },
    { text: 'OK', onPress: () => console.log('OK Pressed') },
  ]);
}
//funcion para darle estilo a los elementos de la pantalla 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  normalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#841584',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});


export default function App() {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
  >
   <Text style={styles.titleText}>Universal React with Expo</Text>
  <Text style={styles.normalText}>Hello World!</Text>
  <Button
    onPress={alerta}
    title="Learn More"
    color="#841584"
    accessibilityLabel="boton"
    style={styles.button}
    textStyle={styles.buttonText}
  
    />
  </View>

    
  );
}*/