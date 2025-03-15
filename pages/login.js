import { View, Text } from 'react-native';
import Navbar from '../components/Navbar';

export default function LoginConta({ mudarTela }) {
  return (
    <View style={{ flex: 1,  paddingBottom: 60 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>Tela de Login</Text>
      </View>
      <Navbar mudarTela={mudarTela} />
    </View>
  );
}
