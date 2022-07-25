
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Button } from 'react-native-elements';

export default function App() {
  const [email, setEmail] = useState()

  
    
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/login.png')} />

      <View style={styles.view}>
        <Text style={styles.title}>Hello</Text>
        <Text style={styles.subtitle}>Sign in to your account</Text>
      </View>

      <TextInput
        placeholder='your@email.com'
        style={styles.input}
        onKeyPress={(e) => setEmail(e.target.value)}
      />
      <TextInput
        placeholder='******'
        style={styles.input}
      />
      <Button
        title='Log In'
        onPress={() => alert('PULSADO')}
        titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
        buttonStyle={{
          borderWidth: 0,
          borderColor: 'transparent',
          borderRadius: 30,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 20,
        }}
        icon={{
          name: 'arrow-right',
          type: 'font-awesome',
          size: 15,
          color: 'white',
        }}
        iconRight
        iconContainerStyle={{ marginLeft: 10, marginRight: -10 }}
      />
      <StatusBar style="auto" />
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '90%',
    height: '30%',
    borderRadius: 40,
    marginTop: -50,
    marginVertical: 20

  },
  view: {
    width: 'auto',
    paddingTop: 20,
    paddingBottom: 20

  },
  title: {
    fontSize: 80,
    color: '#34434D',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 20,
    color: 'gray'
  },
  input: {
    padding: 10,
    paddingStart: 30,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: 'white'
  }
});
