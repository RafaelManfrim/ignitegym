import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import backgroundImg from "@assets/background.png"
import LogoSvg from "@assets/logo.svg"
import { Input } from "@components/Input"
import { Button } from "@components/Button"
import { AuthNavigatorRoutesProps } from "@routes/auth.routes"

type FormDataProps = {
  email: string
  password: string
}

const signInFormSchema = yup.object({
  email: yup.string().required("Informe o e-mail.").email("E-mail inválido"),
  password: yup.string().required("Informe a senha").min(6, "A senha deve ter pelo menos 6 dígitos"),
})

export function SignIn() {
  const { control, handleSubmit, formState } = useForm<FormDataProps>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(signInFormSchema)
  })

  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleNewAccount() {
    navigation.navigate('signUp')
  }

  function handleSignIn(data: FormDataProps) {
    console.log(data)
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
            Acesse sua conta
          </Heading>

          <Controller control={control} name="email" render={({ field }) => (
            <Input 
              placeholder="E-mail" 
              keyboardType="email-address" 
              autoCapitalize="none" 
              autoCorrect={false}
              onChangeText={field.onChange}
              value={field.value}
              errorMessage={formState.errors?.email?.message}
            />
          )} />

          <Controller control={control} name="password" render={({ field }) => (
            <Input 
              placeholder="Senha"
              secureTextEntry
              onChangeText={field.onChange}
              value={field.value}
              errorMessage={formState.errors?.password?.message}
            />
          )} />

          <Button title="Acessar" onPress={handleSubmit(handleSignIn)} />
        </Center>

        <Center my={24}>
          <Text color="gray.100" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>
          <Button title="Criar conta" variant="outline" onPress={handleNewAccount} />
        </Center>
      </VStack>
    </ScrollView>
  )
}