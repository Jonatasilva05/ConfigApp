import { View, Text, TouchableOpacity } from 'react-native';

export default function Navbar({ mudarTela }) {
  return (
    <View style={{
      position: 'absolute', // Fixa no rodapé
      bottom: 0,
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 15,
      backgroundColor: '#6200ea',
    }}>
      <TouchableOpacity onPress={() => mudarTela('Home')}>
        <Text style={{ color: 'white', fontSize: 18 }}>Inicio </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => mudarTela('About')}>
        <Text style={{ color: 'white', fontSize: 18 }}>Sobre </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => mudarTela('login')}>
        <Text style={{ color: 'white',backgroundColor: 'green',fontSize: 18}}>Entrar </Text>
      </TouchableOpacity>
    </View>
  );
}
// se quiser colocar uma imagem local use
// source={{ uri: 'https://source.unsplash.com/random/302x202' }} 
// online use
// style={{ width: 300, height: 200, marginBottom: 10, borderRadius: 10 }} 