// app/(tabs)/_layout.tsx

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

// DICA: Você precisará instalar o pacote de ícones, se ainda não tiver:
// npx expo install @expo/vector-icons

export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={{
        tabBarActiveTintColor: 'white', // Ícone e texto ativo
        tabBarInactiveTintColor: 'gray', // Ícone e texto inativo
        tabBarStyle: {
          backgroundColor: 'black', // Fundo preto da TabBar
          borderTopColor: 'transparent', // Remove a linha superior
          height: 60,
          paddingBottom: 5,
        },
        headerShown: false, // Esconde o cabeçalho em todas as telas das Tabs
      }}
    >
      {/* Configuração para a Home (index.tsx) */}
      <Tabs.Screen
        name="index" // Corresponde ao app/(tabs)/index.tsx
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ),
        }}
      />

      {/* Exemplo de outras abas da Netflix - Você deve criar o arquivo .tsx correspondente */}
      <Tabs.Screen
        name="new_hot" // Crie um arquivo app/(tabs)/new_hot.tsx
        options={{
          title: 'New & Hot',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="movie-roll" size={24} color={color} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="search" // Crie um arquivo app/(tabs)/search.tsx
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="downloads" // Crie um arquivo app/(tabs)/downloads.tsx
        options={{
          title: 'Downloads',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="arrow-down-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}