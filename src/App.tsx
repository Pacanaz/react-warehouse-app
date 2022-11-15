import ItemPage from "./components/ItemPage"
import {
  ChakraProvider,
  Flex,
  Heading,
  theme,
  Spacer,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
} from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex textAlign="center" fontSize="xl" flexDirection='column' alignItems={'center'}>
        <ColorModeSwitcher justifySelf="flex-end" />
          <Heading mt={'5%'}>
            Warehouse App
          </Heading>
  <Spacer mb={'20vh'}></Spacer>
         <ItemPage />
         <FormControl>
  <FormLabel>Email address</FormLabel>
  <Input type='email' />
  <FormHelperText>We'll never share your email.</FormHelperText>
</FormControl>
      
    </Flex>
  </ChakraProvider>
)
