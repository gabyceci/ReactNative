import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Modal,
  Alert,
  ScrollView,
  Switch,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  Pressable,
  ImageBackground,
  SectionList,
  VirtualizedList,
  RefreshControl,
} from "react-native";

export default function App() {
  // Estados para la calculadora
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState("");
  
  // Estados para componentes adicionales
  const [modalVisible, setModalVisible] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [historial, setHistorial] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  // Funciones de la calculadora
  const sumar = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    if (isNaN(num1) || isNaN(num2)) {
      Alert.alert("Error", "Por favor ingresa números válidos");
      return;
    }
    const suma = num1 + num2;
    setResultado(suma);
    agregarAlHistorial(`${num1} + ${num2} = ${suma}`);
  };

  const restar = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    if (isNaN(num1) || isNaN(num2)) {
      Alert.alert("Error", "Por favor ingresa números válidos");
      return;
    }
    const resta = num1 - num2;
    setResultado(resta);
    agregarAlHistorial(`${num1} - ${num2} = ${resta}`);
  };

  const multiplicar = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    if (isNaN(num1) || isNaN(num2)) {
      Alert.alert("Error", "Por favor ingresa números válidos");
      return;
    }
    const multiplica = num1 * num2;
    setResultado(multiplica);
    agregarAlHistorial(`${num1} × ${num2} = ${multiplica}`);
  };

  const dividir = () => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);
    if (isNaN(num1) || isNaN(num2)) {
      Alert.alert("Error", "Por favor ingresa números válidos");
      return;
    }
    if (num2 === 0) {
      Alert.alert("Error", "No se puede dividir entre cero");
      return;
    }
    const divide = num1 / num2;
    setResultado(divide);
    agregarAlHistorial(`${num1} ÷ ${num2} = ${divide}`);
  };

  const limpiar = () => {
    setNumero1("");
    setNumero2("");
    setResultado("");
  };

  // Funciones adicionales
  const agregarAlHistorial = (operacion) => {
    setHistorial(prev => [...prev, { id: Date.now().toString(), operacion }]);
  };

  const mostrarHistorial = () => {
    setModalVisible(true);
  };

  const simularCarga = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      Alert.alert("Completado", "Operación simulada completada");
    }, 2000);
  };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const renderHistorialItem = ({ item }) => (
    <View style={styles.historialItem}>
      <Text style={styles.historialText}>{item.operacion}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView 
        contentContainerStyle={styles.scrollContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        
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

        
        {/* 1. Button */}
        <Text>1. Button:</Text>
        <Button title="Botón Simple" onPress={() => Alert.alert("Button presionado")} />
        
        {/* 2. Image */}
        <Text>2. Image:</Text>
        <Image 
          source={{uri: 'https://static.vecteezy.com/system/resources/thumbnails/042/599/851/small/flower-beautiful-flowers-images-flower-images-wallpapers-flowergraphy-free-photo.jpg'}}
          style={styles.imagen}
        />
        
        {/* 3. Modal */}
        <Text>3. Modal:</Text>
        <Button title="Abrir Modal" onPress={() => setModalVisible(true)} />
        
        {/* 4. ScrollView (ya contiene todo) */}
        <Text>4. ScrollView: (Este contenedor)</Text>
        
        {/* 5. Switch */}
        <Text>5. Switch:</Text>
        <Switch value={isEnabled} onValueChange={setIsEnabled} />
        
        {/* 6. ActivityIndicator */}
        <Text>6. ActivityIndicator:</Text>
        <ActivityIndicator size="large" color="#0000ff" />
        
        
        {/* 7. Pressable */}
        <Text>7. Pressable:</Text>
        <Pressable 
          style={styles.pressable}
          onPress={() => Alert.alert("Pressable presionado")}
        >
          <Text>Presiona aquí</Text>
        </Pressable>
        
        {/* 8. ImageBackground */}
        <Text>8. ImageBackground:</Text>
        <ImageBackground
          source={{uri: 'https://img.freepik.com/vector-gratis/fondo-hexagonal-oscuro-color-gradiente_79603-1409.jpg?semt=ais_hybrid&w=740'}}
          style={styles.imageBg}
        >
          <Text>Texto sobre imagen</Text>
        </ImageBackground>
        
        
        {/* 9. RefreshControl (dentro del ScrollView) */}
        <Text>9. RefreshControl: (Arrastra hacia abajo)</Text>
        
        {/* 10. Alert */}
        <Text>10. Alert:</Text>
        <Button title="Mostrar Alert" onPress={() => Alert.alert("Título", "Mensaje de alerta")} />

        <Modal
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <Text>Este es un Modal</Text>
            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
          </View>
        </Modal>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    alignItems: "center",
  },
  scrollContainer: {
    padding: 20,
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
  componentTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 10,
  },
  imagen: {
    width: 100,
    height: 100,
    marginVertical: 5,
  },
  pressable: {
    backgroundColor: "#ddd",
    padding: 10,
    marginVertical: 5,
  },
  imageBg: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    margin: 50,
  },
});