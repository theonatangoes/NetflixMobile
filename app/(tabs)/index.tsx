import React from "react";
import { 
  FlatList, 
  Image, 
  ScrollView, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
  ListRenderItemInfo
} from "react-native";
import { homeMovies, featuredMovie } from "../../data/homeMovies";

// Tipagem dos filmes
interface Movie {
  id: string;
  poster: any; // pode ser { uri: string } ou require()
}

export default function HomeScreen() {
  const renderMovieItem = ({ item }: ListRenderItemInfo<Movie>) => (
    <Image source={item.poster} style={styles.poster} />
  );

  return (
    <ScrollView style={styles.container}>
      {/* Hero Section - Filme em destaque manual */}
      <View style={styles.hero}>
        <Image 
          source={featuredMovie.poster} 
          style={styles.heroImage} 
        />
        <View style={styles.heroOverlay}>
          <View style={styles.heroButtons}>
            <TouchableOpacity style={styles.myListButton}>
              <Text style={styles.buttonText}>+ My List</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playButtonText}>▶ Play</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoButton}>
              <Text style={styles.buttonText}>ⓘ Info</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* APENAS UMA SEÇÃO */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Releases in the Past Year</Text>
        <FlatList
          horizontal
          data={homeMovies} // Todas as 6 imagens
          renderItem={renderMovieItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.sectionList}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#000" 
  },
  hero: {
    width: "100%",
    height: 500,
  },
  heroImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  heroOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 20,
  },
  heroButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  playButton: {
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 25,
    borderRadius: 4,
  },
  playButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  myListButton: {
    alignItems: "center",
  },
  infoButton: {
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
  section: {
    marginVertical: 20,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 16,
    marginBottom: 12,
  },
  sectionList: {
    paddingHorizontal: 16,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 4,
    marginRight: 8,
    resizeMode: "cover",
  },
});