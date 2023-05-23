import { StyleSheet, Text, View } from 'react-native';
import Perfil from '../components/Perfil/Perfil';
import FavoritosCard from '../components/FavoritosCard';
import Input from '../components/Input';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Perfil />

      <Input placeholder="Nome" />
      <Input placeholder="Endereço" />
      <Input placeholder="Filme favorito" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040316',
    
  },
  text:{
    color: '#ffffff',
  }
});
