
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// Frases de sorte para o biscoito
const fortunes = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades.",
  "O sucesso está no seu futuro próximo.",
  "A sorte favorece os audazes.",
  "A persistência realiza o impossível.",
  "Acredite nos seus sonhos e os tornará realidade."
];

export default function App() {
  // Estados para controlar o biscoito e a frase
  const [broken, setBroken] = useState(false);
  const [fortune, setFortune] = useState('');

  // Função para quebrar o biscoito e mostrar uma frase aleatória
  const breakCookie = () => {
    if (!broken) {
      const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
      setFortune(randomFortune);
      setBroken(true); // Marca como "quebrado"
    } else {
      // Reseta para mostrar o biscoito fechado
      setBroken(false);
      setFortune(''); // Limpa a frase anterior
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fortune Cookie</Text>
      
      {/* Exibe imagem do biscoito */}
      <Image
        style={styles.cookieImage}
        source={broken ? require('./assets/cookie_closed.png') : require('./assets/cookie_open.png')}
      />

      {/* Botão para quebrar o biscoito ou tentar de novo */}
      <TouchableOpacity style={styles.button} onPress={breakCookie}>
        <Text style={styles.buttonText}>{broken ? "Tentar de Novo" : "Quebrar Biscoito"}</Text>
      </TouchableOpacity>

      {/* Exibe a frase da sorte */}
      {broken && <Text style={styles.fortuneText}>{fortune}</Text>}
    </View>
  );
}
//visual do front e estilização.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cookieImage: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FF8C00',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  fortuneText: {
    marginTop: 20,
    fontSize: 18,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingHorizontal: 30,
  },
});
