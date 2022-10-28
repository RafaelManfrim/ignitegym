import { Input as NativeBaseInput, IInputProps } from "native-base"

export function Input(props: IInputProps) {
  return (
    <NativeBaseInput 
      h={14}
      px={4}
      mb={4}
      bg="gray.700"
      color="white"
      placeholderTextColor="gray.300"
      borderWidth={0}
      fontSize="md"
      fontFamily="body"
      _focus={{ bg: "gray.700", borderWidth: 1, borderColor: "green.500"}}
      {...props}
    />
  )
}