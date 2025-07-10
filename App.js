import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
 
export default function App() {
  // crear los estados para los numeros
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState("");
 
  // funcion para sumar los numeros
  const sumar = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    const suma = num1 + num2;
    setResultado(suma);
  };
 
  // funcion para restar los numeros
  const restar = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    const resta = num1 - num2;
    setResultado(resta);
  };

  // funcion para multiplicar los numeros
  const multiplicar = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    const multiplica = num1 * num2;
    setResultado(multiplica);
  };

  // funcion para dividir los numeros
  const dividir = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    const divide = num1 / num2;
    setResultado(divide);
  };

  // funcion para limpiar los campos
  const limpiar = () => {
    setNumero1("");
    setNumero2("");
    setResultado("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora 2A</Text>
      <View>
        <Text>Ingrese numero 1: </Text>
        <TextInput 
          placeholder="Escribe un numero" 
          onChangeText={setNumero1}
          value={numero1}
        />
      </View>
      <View>
        <Text>Ingrese numero 2: </Text>
        <TextInput 
          placeholder="Escribe un numero" 
          onChangeText={setNumero2}
          value={numero2}
        />
      </View>
      <TouchableOpacity style={styles.boton} onPress={sumar}>
        <Text style={{ color: "#FFF" }}>Sumar</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.boton} onPress={restar}>
        <Text style={{ color: "#FFF" }}>Restar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton} onPress={multiplicar}>
        <Text style={{ color: "#FFF" }}>Multiplicar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton} onPress={dividir}>
        <Text style={{ color: "#FFF" }}>Dividir</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.boton} onPress={limpiar}>
        <Text style={{ color: "#FFF" }}>Limpiar</Text>
      </TouchableOpacity>

      <Text style={styles.titulo}>Resultado: {resultado}</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    alignItems: "center",
  },
  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
  },
  boton: {
    backgroundColor: "blue",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    textAlign: "center",
  },
});