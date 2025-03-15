import { useState } from 'react';
import HomeScreen from './pages/Inicio';
import AboutScreen from './pages/vacinacao';
import LoginConta from './pages/login';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('Home');

  return (
    <>
      {telaAtual === 'Home' && <HomeScreen mudarTela={setTelaAtual} />}
      {telaAtual === 'About' && <AboutScreen mudarTela={setTelaAtual} />}
      {telaAtual === 'login' && <LoginConta mudarTela={setTelaAtual} />}
    </>
  );
}