import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base"

import backgroundImg from "@assets/background.png"
import LogoSvg from "@assets/logo.svg"
import { Input } from "@components/Input"
import { Button } from "@components/Button"
import { useNavigation } from "@react-navigation/native"

export function SignUp() {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <ScrollView 
      contentContainerStyle={{ flexGrow: 1 }} 
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10}>
        <Image 
          source={backgroundImg} 
          defaultSource={backgroundImg}
          alt="Background com pessoa treinando em uma academia" 
          resizeMode="contain" 
          position="absolute" 
        />

        <Center my={24}>
          <LogoSvg />
          <Text color="gray.100" fontSize="sm" fontFamily="body">
            Treine sua mente e o seu corpo
          </Text>
        </Center>

        <Center flex={1}>
          <Heading color="gray.100" fontSize="xl" mb={6} fontFamily="heading">
            Crie sua conta
          </Heading>
          <Input 
            placeholder="Nome"
          />
          <Input 
            placeholder="E-mail" 
            keyboardType="email-address" 
            autoCapitalize="none" 
          />
          <Input 
            placeholder="Senha"
            secureTextEntry
          />
          <Button title="Criar e acessar" />
        </Center>

        <Button title="Voltar para o login" variant="outline" my={24} onPress={handleGoBack} />
      </VStack>
    </ScrollView>
  )
}