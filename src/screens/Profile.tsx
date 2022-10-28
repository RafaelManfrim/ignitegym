import { ScreenHeader } from "@components/ScreenHeader"
import { UserPhoto } from "@components/UserPhoto"
import { Center, ScrollView, Skeleton, Text, VStack } from "native-base"
import { useState } from "react"
import { TouchableOpacity } from "react-native"

const PHOTO_SIZE = 33

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false)

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt={6} px={10}>
          {photoIsLoading ? (
            <Skeleton 
              w={PHOTO_SIZE}
              h={PHOTO_SIZE}
              rounded="full"
              startColor="gray.400"
              endColor="gray.500"
            />
          ) : (
            <UserPhoto 
              source={{ uri: "https://github.com/rafaelmanfrim.png" }} 
              size={PHOTO_SIZE}
              alt="Foto do usuário"
            />
          )}

          <TouchableOpacity>
            <Text color="green.500" fontSize="md" mb={8} mt={2} fontWeight="bold">
              Alterar foto
            </Text>
          </TouchableOpacity>
        </Center>
      </ScrollView>
    </VStack>
  )
}