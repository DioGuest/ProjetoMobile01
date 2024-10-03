import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import quotes from './quotes.json'; // Certifique-se de que o caminho está correto

export default function App() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  // Mapeamento das imagens dos autores 
  const authorImages = {
    "Albert Einstein": require('./assets/einstein.png'),
    "Steve Jobs": require('./assets/steve_jobs.png')
  };

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.quoteText}>"{currentQuote.quote}"</Text>
      <Text style={styles.authorText}>- {currentQuote.author}</Text>

      {/* Usando mapa dos autores para renderizar as imagens de cada um */}
      <Image
        style={styles.authorImage}
        source={authorImages[currentQuote.author]} 
      />

      <TouchableOpacity style={styles.button} onPress={getRandomQuote}>
        <Text style={styles.buttonText}>Nova Citação</Text>
      </TouchableOpacity>
    </View>
  );
}

//visual do front e estilização

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  quoteText: {
    fontSize: 24,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },
  authorText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  authorImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
