import React from "react";
import { View, Text, StyleSheet, Button, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Inicio = () => {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const navigation = useNavigation();

  const fetchDataFromESP32 = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://192.168.4.22/");
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchDataFromESP32();
  }, []);

  const getData = () => (data !== null ? data : {});

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    resultContainer: {
      marginTop: 20,
      alignItems: "center",
    },
    content: {
      fontSize: 18,
      textAlign: "center",
    },
  });

  return (
    <View style={styles.container}>
      <Button
        title="Actualizar Datos"
        onPress={fetchDataFromESP32}
        disabled={loading}
      />
      <View style={styles.resultContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : data !== null ? (
          <>
            <Text style={styles.content}>Se encontró una práctica</Text>
            <Button
              title="Ir a Detalle"
              onPress={() =>
                navigation.navigate("Detalle", { jsonData: getData() })
              }
            />
          </>
        ) : (
          <Text style={styles.content}>No se encontraron prácticas</Text>
        )}
      </View>
    </View>
  );
};

export default Inicio;
