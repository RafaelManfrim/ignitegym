import { Input as NativeBaseInput, IInputProps, FormControl } from "native-base"

type InputProps = IInputProps & {
  errorMessage?: string | null
}

export function Input({ errorMessage = null, ...rest }: InputProps) {
  const invalid = !!errorMessage || rest.isInvalid

  return (
    <FormControl isInvalid={invalid} mb={4}>
      <NativeBaseInput 
        h={14}
        px={4}
        bg="gray.700"
        color="white"
        placeholderTextColor="gray.300"
        borderWidth={1}
        borderColor="gray.700"
        fontSize="md"
        fontFamily="body"
        isInvalid={invalid}
        _invalid={{
          borderColor: "red.500",
          borderWidth: 1
        }}
        _focus={{ bg: "gray.700", borderWidth: 1, borderColor: "green.500"}}
        {...rest}
      />

      <FormControl.ErrorMessage _text={{ color: "red.500" }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}