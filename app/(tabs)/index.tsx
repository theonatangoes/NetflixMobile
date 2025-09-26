// app/(tabs)/index.tsx

import React from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

// Dados simulados
const movies = [
  { id: "1", title: "Money Heist", poster: "https://placehold.co/100x150?text=Money+Heist" },
  { id: "2", title: "Peaky Blinders", poster: "https://placehold.co/100x150?text=Peaky+Blinders" },
  // Adicione mais itens aqui
];

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.hero}>
        <Image 
          source={{ uri: "https://placehold.co/400x300?text=KUCH+KUCH+HOTA+HAI" }} 
          style={styles.heroImage} 
        />
        
        <View style={styles.heroDetails}>
          <Text style={styles.heroText}>Charming · Feel-Good · Dramedy · Movie</Text>
          <View style={styles.heroButtons}>
            <TouchableOpacity style={styles.myListButton}>
              <Text style={{color: '#fff'}}>+ My List</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.playButton}>
              <Text style={{ color: "#000", fontWeight: "bold" }}>▶ Play</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoButton}>
              <Text style={{color: '#fff'}}>ⓘ Info</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Text style={styles.section}>Releases in the Past Year</Text>
      <FlatList
        horizontal
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image source={{ uri: item.poster }} style={styles.poster} />
        )}
      />
      {/* Adicione mais FlatLists para as seções de filmes aqui */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", paddingTop: 0 },
  hero: { alignItems: "center", width: '100%' },
  heroImage: { width: "100%", height: 400, marginBottom: 10, resizeMode: 'cover' },
  heroDetails: { paddingHorizontal: 16, width: '100%', alignItems: 'center' },
  heroText: { color: "#aaa", fontSize: 12, marginBottom: 15, textAlign: 'center' },
  heroButtons: { flexDirection: 'row', justifyContent: 'space-around', width: '100%', marginBottom: 20 },
  playButton: { backgroundColor: "#fff", paddingVertical: 8, paddingHorizontal: 20, borderRadius: 4, flexDirection: 'row', alignItems: 'center' },
  myListButton: { alignItems: 'center' },
  infoButton: { alignItems: 'center' },
  section: { color: "#fff", fontSize: 18, marginLeft: 8, marginVertical: 10, fontWeight: 'bold' },
  poster: { width: 100, height: 150, borderRadius: 4, marginHorizontal: 8 },
});