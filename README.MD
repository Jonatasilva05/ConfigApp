#Meu Primeiro APP com REACT NATIVE E EXPO

## Para começar devemos primeiro instalar o NODE.JS

acesse:

   ```bash
      https://nodejs.org
   ```

#### Após instalado reinicie o computador para que possa ser reconhecido pelo sistema operacinal da sua maquina

#### Ao liga-lo novamente execute pelo prompt de comando(cmd) ou powershell

   ```bash
      node -v
   ```

#### Isso mostrará a versão instalada do NODE.JS

#### Após ter o NODE instalado com sucesso, iremos instalar o expo...

##### Para instalar o Expo de maneira global execute no (cmd ou powershell):

   ```bash
      npm install -g expo-cli
   ```

#### Pode demorar para a instalação ser concluída, logo em Seguida execute...

   ```bash
      expo --version
   ```

#### Isso retornará a versão instalada do Expo

<br>

#### Depois de finalizado toda as configurações vamos dar inicio ao projeto...

###### Obs: Se desejar saber onde o arquivo se encontrará, aconselho navegar pelas pastas até encontrar um local de facil acesso como Desktop(Area de trabalho) ou Downloads e dentro desse local criar uma nova pasta para melhor visualização e identificação dos arquivos gerados/baixados

##### Execute:

   ```bash
      expo init MeuApp
   ```

// vale lembrar que não necessáriamente precisa ser MeuApp

## É de extrema importancia saber que ele lhe dará opções de instalação, aconselhavél escolher a Blanck que é a padrão e mais facil pois é "relacionada com Javascript" mas se for familiarizado com Typescript escolha a Blank(typescript)

#### Assim que baixado execute:

   ```bash
      cd MeuApp
   ```

// Para entrar na pasta

#### Assim que estiver dentro da pasta execute:

   ```bash
      npm start
   ```

#### Dessa maneira o npm será executado:

<br>

#### Para acessar no celular baixe o app Expo Go e escaneie o QrCode gerado no terminal

<br><br><br>

####  Pronto agora é só se divertir...

<br><br><br>

#### Caso queira criar uma outra tela e navegar entre elas, Será necessario ultilizar o React Navigation(BIBLIOTECA)

#### No terminal dentro do projeto (MeuApp) execute:

   ```bash
      npm install @react-navigation/native
   ```

#### Depois faça a instalação das dependencias executando:
   
   ```bash
      npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons @react-navigation/stack
   ```

#### Em seguida se seu sistema operacional for Windowns execute também...

   ```bash
      npx expo install react-native-gesture-handler
   ```

<br><br>

### Outras Configurações

##### Se precisar atualizar o npm execute no termial:
   ```bash
      npm update
   ```

##### Se quiser saber quais bibliotecas estão desatualizadas execute:
   ```bash
      npm outdated
   ```

##### Se quiser atualizar manualmente as bibliotecas estão desatualizadas execute:
   ```bash
      npm install <nome-biblioteca-desatualizada>@latest
   ```
