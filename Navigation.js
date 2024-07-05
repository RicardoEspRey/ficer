import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';
//screens
import Inicio from "./screens/Inicio";
import Archivos from "./screens/Archivos";
import Detalle from "./screens/Detalle";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

  function InicioStack() {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={Inicio} />
          <Stack.Screen name="Detalle" component={Detalle} />
        </Stack.Navigator>
      );
    }
    
    function ArchivosStack() {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Archivos" component={Archivos} />
          <Stack.Screen name="Detalle" component={Detalle} />
        </Stack.Navigator>
      );
    }

  export default function Navigation() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Inicio"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
  
              if (route.name === 'Inicio') {
                iconName = 'home-outline';
              } else if (route.name === 'Archivos') {
                iconName = 'archive-outline';
              }
  
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{

          }}
        >
          <Tab.Screen name="Inicio" component={InicioStack} />
          <Tab.Screen name="Archivos" component={ArchivosStack} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
