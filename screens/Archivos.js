import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

const data = {
  labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
  datasets: [
    {
      label: 'Ventas',
      data: [12, 19, 3, 5, 2],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    },
  ],
};

const options = {
  scales: {
    x: {
      type: 'category',
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    },
    y: {
      beginAtZero: true,
    },
  },
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  buttonContainer: {
    marginTop: 10,
    backgroundColor: '#841584',
    paddingVertical: 10,
    paddingHorizontal: 100,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  additionalText: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
});

const Archivos = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const renderItem = ({ item }) => {
    const isExpanded = item.key === expandedItem;

    const toggleExpand = () => {
      if (isExpanded) {
        setExpandedItem(null); // Si ya está expandido, colapsar
      } else {
        setExpandedItem(item.key); // Expandir este elemento
      }
    };

    return (
      <View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={toggleExpand}
        >
          <Text style={styles.buttonText}>{item.key}</Text>
        </TouchableOpacity>
        {isExpanded && (
          <Text style={styles.additionalText}>
            Aquí va el texto adicional para {item.key}
          </Text>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: 'Devin' },
          { key: 'Dan' },
          { key: 'Dominic' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
          
        ]}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Archivos;
