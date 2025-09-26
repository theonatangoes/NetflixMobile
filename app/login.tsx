import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// ⚠️ ATENÇÃO: VERIFIQUE E AJUSTE O CAMINHO DA SUA IMAGEM DA LOGO ⚠️
// Confirme que sua logo está nesse caminho.
import LogoImage from "../assets/images/n1 1.png";

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    // Lógica de autenticação aqui
    // Redireciona para /profiles e remove o Login do histórico
    router.replace("/profiles");  
  };

  return (
    <View style={styles.container}>
      
      {/* NOVO CÓDIGO: Contêiner para o Cabeçalho com Seta e Logo */}
      <View style={styles.headerContainer}>
        
        {/* Botão de voltar (esquerda) */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        
        {/* Imagem da Logo (lado direito da seta) - AUMENTADA */}
        <Image
          source={LogoImage}
          style={styles.headerLogoImage} 
        />
        
      </View>
      {/* Fim do Contêiner do Cabeçalho */}


      {/* Inputs com Placeholders em Português */}
      {/* A prop 'justifyContent: "center"' no container fará o conteúdo abaixo centralizar na tela */}
      <TextInput placeholder="Email ou telefone" placeholderTextColor="#aaa" style={styles.input} />
      <TextInput placeholder="Senha" placeholderTextColor="#aaa" secureTextEntry style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        {/* Texto do botão em Português */}
        <Text style={styles.buttonText}>Entrar</Text> 
      </TouchableOpacity>

      {/* Links em Português */}
      <Text style={styles.link}>Precisa de ajuda?</Text>
      <Text style={styles.link}>Novo por aqui? Assine agora.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  // Ajustamos o padding superior para dar espaço ao novo cabeçalho fixo no topo
  container: { 
    flex: 1, 
    backgroundColor: "#000", 
    paddingHorizontal: 20, 
    paddingTop: 100, // Empurra o conteúdo para baixo do cabeçalho
    justifyContent: "center" 
  },
  
  // Contêiner que envolve a seta e a logo (Fixo no topo)
  headerContainer: {
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row', 
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50, // Espaço do topo (ajuste para o status bar)
  },

  backButton: { 
    marginRight: 20, // Espaço entre a seta e a logo
  },
  backArrow: { 
    color: 'white', 
    fontSize: 24, 
    fontWeight: 'bold' 
  },
  
  // ESTILO DA LOGO AUMENTADO PARA O CABEÇALHO
  headerLogoImage: { 
    width: 120, // Largura aumentada
    height: 40, // Altura aumentada
    resizeMode: 'contain', 
  },
  
  // Estilos centrais (mantidos)
  input: { 
    backgroundColor: "#333", 
    padding: 12, 
    borderRadius: 6, 
    color: "#fff", 
    marginBottom: 12 
  },
  button: { 
    backgroundColor: "#e50914", 
    padding: 15, 
    borderRadius: 6, 
    alignItems: "center" 
  },
  buttonText: { 
    color: "#fff", 
    fontSize: 16, 
    fontWeight: "bold" 
  },
  link: { 
    color: "#aaa", 
    marginTop: 16, 
    textAlign: 'center' 
  },
});