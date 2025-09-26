// app/index.tsx (Splash Screen - Navegação Manual)

import { useRouter } from "expo-router";
// Removemos o 'useEffect' porque não precisamos mais do temporizador
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
// Importamos 'TouchableOpacity' para permitir o clique

// Ajuste o caminho da sua imagem
import LogoImage from "../assets/images/n1 1.png";

export default function SplashScreen() {
  const router = useRouter();

  // NOVO: Função chamada quando o usuário toca na logo
  const navigateToLogin = () => {
    // ✅ Redireciona para /login e remove a Splash do histórico
    router.replace("/login"); 
  };
  
  // Removemos o useEffect com o setTimeout

  return (
    <View style={styles.container}>
      {/* Envolvemos a logo em um TouchableOpacity */}
      <TouchableOpacity 
        style={styles.logoContainer} 
        onPress={navigateToLogin} // Chama a função ao clicar
      >
        <Image 
          source={LogoImage}
          style={styles.logo} // Aplica o estilo de tamanho
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#000", 
    justifyContent: "center", 
    alignItems: "center" 
  },
  logoContainer: {
    // Garante que o TouchableOpacity ocupe o espaço necessário para o clique
    padding: 20, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { 
    // Dimensões da sua logo
    width: 200, 
    height: 100, 
    resizeMode: 'contain', 
  },
});