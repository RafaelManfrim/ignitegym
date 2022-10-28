import { useState } from "react"
import { Heading, VStack, SectionList } from "native-base"

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
          <Heading color="gray.300" fontSize="md" mt={10} mb={3}>
            {title}
          </Heading>
        )}
        renderItem={({ item }) => <HistoryCard />}

        showsVerticalScrollIndicator={false}
        px={8}
      />
    </VStack>
  )
}