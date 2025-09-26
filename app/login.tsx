import { useRouter } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import LogoImage from "../assets/images/n1 1.png";

export default function LoginScreen() {
  const router = useRouter();

  const handleLogin = () => {
    router.replace("/profiles");  
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.headerContainer}>
        
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        
        <Image
          source={LogoImage}
          style={styles.headerLogoImage} 
        />
        
      </View>
    
      <TextInput placeholder="Email ou telefone" placeholderTextColor="#aaa" style={styles.input} />
      <TextInput placeholder="Senha" placeholderTextColor="#aaa" secureTextEntry style={styles.input} />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
       
        <Text style={styles.buttonText}>Entrar</Text> 
      </TouchableOpacity>

      <Text style={styles.link}>Precisa de ajuda?</Text>
      <Text style={styles.link}>Novo por aqui? Assine agora.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: { 
    flex: 1, 
    backgroundColor: "#000", 
    paddingHorizontal: 20, 
    paddingTop: 100, 
    justifyContent: "center" 
  },
  
  
  headerContainer: {
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row', 
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50, 
  },

  backButton: { 
    marginRight: 20, 
  },
  backArrow: { 
    color: 'white', 
    fontSize: 24, 
    fontWeight: 'bold' 
  },
  
  headerLogoImage: { 
    width: 120, 
    height: 40, 
    resizeMode: 'contain', 
  },
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