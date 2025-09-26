import React from "react";
import { 
  FlatList, 
  Image, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
  Dimensions,
  StatusBar 
} from "react-native";
import { movieSections } from '../../data/movies';

const { width, height } = Dimensions.get('window');

export default function MoviesScreen() {
  const renderMovieItem = ({ item }) => (
    <TouchableOpacity style={styles.movieItem}>
      <Image source={item.poster} style={styles.poster} />
    </TouchableOpacity>
  );

  const renderSection = ({ item: section }) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{section.title}</Text>
      <FlatList
        horizontal
        data={section.data}
        renderItem={renderMovieItem}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.sectionList}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>NETFLIX</Text>
      </View>

      {/* Lista de seções */}
      <FlatList
        data={movieSections}
        renderItem={renderSection}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: 'rgba(0,0,0,0.9)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  headerTitle: {
    color: '#E50914',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    paddingTop: 100, // Espaço para o header
  },
  section: {
    marginVertical: 15,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 12,
  },
  sectionList: {
    paddingHorizontal: 16,
  },
  movieItem: {
    marginRight: 8,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 4,
    resizeMode: 'cover',
  },
});