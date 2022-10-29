import { VStack, Image, Text, Center, Heading, ScrollView } from "native-base"
import { useNavigation } from "@react-navigation/native"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import backgroundImg from "@assets/background.png"
import LogoSvg from "@assets/logo.svg"
import { Input } from "@components/Input"
import { Button } from "@components/Button"

type FormDataProps = {
  name: string
  email: string
  password: string
  password_confirm: string
}

const signUpFormSchema = yup.object({
  name: yup.string().required("Informe o nome."),
  email: yup.string().required("Informe o e-mail.").email("E-mail inválido"),
  password: yup.string().required("Informe a senha").min(6, "A senha deve ter pelo menos 6 dígitos"),
  password_confirm: yup.string().required("Confirme a senha").oneOf([null, yup.ref("password")], "As senhas precisam ser iguais")
})

export function SignUp() {
  const { control, handleSubmit, formState } = useForm<FormDataProps>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirm: "",
    },
    resolver: yupResolver(signUpFormSchema)
  })

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  function handleSignUp(data: FormDataProps) {
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
            Crie sua conta
          </Heading>

          <Controller control={control} name="name" render={({ field }) => (
            <Input 
              placeholder="Nome"
              onChangeText={field.onChange}
              value={field.value}
              errorMessage={formState.errors?.name?.message}
            />
          )} />
          
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
  
          <Controller control={control} name="password_confirm" render={({ field }) => (
            <Input 
              placeholder="Confirme a senha"
              secureTextEntry
              onChangeText={field.onChange}
              value={field.value}
              onSubmitEditing={handleSubmit(handleSignUp)}
              returnKeyType="send"
              errorMessage={formState.errors?.password_confirm?.message}
            />
          )} />
          
          <Button title="Criar e acessar" onPress={handleSubmit(handleSignUp)} />
        </Center>

        <Button title="Voltar para o login" variant="outline" my={24} onPress={handleGoBack} />
      </VStack>
    </ScrollView>
  )
}
