// app/(tabs)/index.tsx

import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItemInfo,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// ⚠️ GARANTA QUE ESTES IMPORTS DE DADOS ESTÃO CORRETOS
import { featuredMovie, homeMovies } from "../../data/homeMovies";
import { movieSections } from "../../data/movies";

// ✅ 1. IMPORTAÇÃO DAS IMAGENS (sem alterações aqui)
import LogoNetflix from "../../assets/images/logonetflix2.png";
import SearchIcon from "../../assets/images/lupa.png";
import ProfileIcon from "../../assets/images/perfil azul escuro.png";
import PlayIcon from "../../assets/images/Polygon 1.png";

const { width } = Dimensions.get("window");

// Tipos para TypeScript
interface Movie {
  id: string;
  poster: any;
}

interface MovieSection {
  title: string;
  data: Movie[];
}

// Componente que renderiza um único pôster
const renderMovieItem = ({ item }: ListRenderItemInfo<Movie>) => (
  <TouchableOpacity style={styles.movieItem}>
    <Image source={item.poster} style={styles.poster} />
  </TouchableOpacity>
);

// Componente que renderiza uma seção completa de filmes
const renderSection = (section: MovieSection) => (
  <View style={styles.section} key={section.title}>
    <Text style={styles.sectionTitle}>{section.title}</Text>
    <FlatList
      horizontal
      data={section.data}
      renderItem={renderMovieItem}
      keyExtractor={(movie) => movie.id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.sectionList}
    />
  </View>
);

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* O header foi MOVIDO para DENTRO do ScrollView */}
        <View style={styles.topBarContainer}>
          {/* Linha da Logo e Ícones */}
          <View style={styles.header}>
            <Image source={LogoNetflix} style={styles.logo} />
            <View style={styles.headerIcons}>
              <TouchableOpacity>
                <Image source={SearchIcon} style={styles.icon} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image source={ProfileIcon} style={styles.profileIcon} />
              </TouchableOpacity>
            </View>
          </View>
          
          {/* Linha dos Links de Navegação */}
          <View style={styles.navLinksContainer}>
            <Text style={styles.navLinkText}>TV Show</Text>
            <Text style={styles.navLinkText}>Filmes</Text>
            <Text style={styles.navLinkText}>Categorias</Text>
          </View>
        </View>

        {/* HERO SECTION */}
        <View style={styles.hero}>
          <Image source={featuredMovie.poster} style={styles.heroImage} />
          <Text style={styles.heroDescription}>
            Comédia dramática encantado
          </Text>
          <View style={styles.heroButtons}>
            {/* Botão Minha Lista */}
            <TouchableOpacity style={styles.myListButton}>
              <Text style={styles.myListIcon}>+</Text>
              <Text style={styles.myListText}>Minha Lista</Text>
            </TouchableOpacity>
            {/* Botão Play */}
            <TouchableOpacity style={styles.playButton}>
              <Image source={PlayIcon} style={styles.playIcon} />
              <Text style={styles.playButtonText}>Play</Text>
            </TouchableOpacity>
            {/* Botão Info */}
            <TouchableOpacity style={styles.infoButton}>
              <Text style={styles.infoIcon}>ⓘ</Text>
              <Text style={styles.infoText}>Info</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* SEÇÕES DE FILMES */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Lançamentos do Ano</Text>
          <FlatList
            horizontal
            data={homeMovies}
            renderItem={renderMovieItem}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.sectionList}
          />
        </View>
        
        {movieSections.map(renderSection)}
        
        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

// -------------------------------------------------------------
// STYLES
// -------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  topBarContainer: {
    paddingTop: 40,
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  logo: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 20,
  },
  profileIcon: {
    width: 30,
    height: 30,
    borderRadius: 5,
    marginLeft: 20,
  },
  navLinksContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
  },
  navLinkText: {
    color: "#fff",
    fontSize: 16,
    marginHorizontal: 15,
  },
  hero: {
    width: "100%",
    alignItems: "center",
  },
  heroImage: {
    width: width * 0.8,
    height: width * 0.8 * 1.5,
    resizeMode: "cover",
    borderRadius: 8,
  },
  heroDescription: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginTop: 15,
    maxWidth: "70%",
  },
  // ✅ ALTERAÇÃO: Trocado 'space-around' por 'center' para agrupar os botões
  heroButtons: {
    flexDirection: "row",
    justifyContent: "center", 
    alignItems: "center",
    width: "100%",
    marginTop: 15,
  },
  myListButton: {
    alignItems: "center",
    justifyContent: 'center',
  },
  myListIcon: {
    color: "#fff",
    fontSize: 30,
    marginBottom: 2,
  },
  myListText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  infoButton: {
    alignItems: "center",
    justifyContent: 'center',
  },
  infoIcon: {
    color: "#fff",
    fontSize: 26,
    marginBottom: 2,
  },
  infoText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  // ✅ ALTERAÇÃO: Adicionado marginHorizontal para espaçar o botão do meio
  playButton: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 4,
    marginHorizontal: 40, // Espaço entre o botão Play e os outros
  },
  playIcon: {
    width: 12,
    height: 12,
    resizeMode: 'contain',
    marginRight: 8,
  },
  playButtonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  section: {
    marginTop: 25,
    marginBottom: 5,
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
  movieItem: {
    marginRight: 8,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 4,
    resizeMode: "cover",
  },
});