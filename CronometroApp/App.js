
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0); // Estado para o tempo
  const [isVisible, setIsVisible] = useState(true); // Estado de controle visivel

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 1); // adiciona o tempo
      }, 10); // 
    } else if (!isRunning && time !== 0) {
      clearInterval(interval); //Deixar limpo intervalor  se o cronometro  n estiver rodando
    }
    return () => clearInterval(interval); 
  }, [isRunning, time]);

  // Função para iniciar o cronômetro
  const startTimer = () => {
    setIsRunning(true);
    setIsVisible(true); // Reseta a visual quando o cronômetro começa
  };

  // Função para parar o cronômetro
  const stopTimer = () => {
    setIsRunning(false);
  };

  // Função para reiniciar o cronômetro
  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  // efeito do texto para piscar
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsVisible(prev => !prev); 
    }, 500); // Tempo em milissegundos

    return () => clearInterval(blinkInterval); //lima o intervalor de uso
  }, []);

  // Converção tempo
  const formatTime = () => {
    const minutes = String(Math.floor((time / 6000) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((time / 100) % 60)).padStart(2, '0');
    const milliseconds = String(time % 100).padStart(2, '0');
    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cronômetro</Text>
      
      {/* Exibe o tempo formatado */}
      <Text style={styles.timer}>{formatTime()}</Text>

      {/* Nome do projeto com efeito piscando */}
      {isVisible && <Text style={styles.projectName}>Cronômetro App</Text>}

      {/* Imagem do corredor */}
      <Image
        source={require('./assets/runner.png')} // Certifique-se de que o caminho está correto
        style={styles.runnerImage}
      />

      {/* Botões para controlar o cronômetro */}
      <TouchableOpacity style={styles.button} onPress={startTimer}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={stopTimer}>
        <Text style={styles.buttonText}>Parar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={resetTimer}>
        <Text style={styles.buttonText}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
}
// visual do front e estilização
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
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  projectName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF8C00',
    marginBottom: 20,
  },
  runnerImage: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#FF8C00',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
