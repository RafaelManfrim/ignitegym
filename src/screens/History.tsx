import { useState } from "react"
import { Heading, VStack, SectionList, Text } from "native-base"

import { HistoryCard } from "@components/HistoryCard"
import { ScreenHeader } from "@components/ScreenHeader"

export function History() {
  const [exercises, setExercises] = useState([
    { title: '12.12.2022', data: ['Teste', 'Teste2'] }, 
    { title: '13.12.2022', data: ['Teste3', 'Teste4'] }
  ])

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={item => item}
        renderSectionHeader={({ section: { title } }) => (
          <Heading color="gray.300" fontSize="md" mt={10} mb={3} fontFamily="heading">
            {title}
          </Heading>
        )}
        renderItem={({ item }) => <HistoryCard />}
        showsVerticalScrollIndicator={false}
        px={8}
        contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center' }}
        ListEmptyComponent={() => (
          <Text color="gray.100" textAlign="center">
            Não há exercícios registrados ainda. {'\n'}
            Vamos fazer um exercício hoje?
          </Text>
        )}
      />
    </VStack>
  )
}