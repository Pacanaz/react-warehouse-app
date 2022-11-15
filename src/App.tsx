import ItemPage from "./components/ItemPage"
import {
  ChakraProvider,
  Flex,
  Heading,
  theme,
  Spacer,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex textAlign="center" fontSize="xl" flexDirection='column' alignItems={'center'}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Heading mt={'5%'}>
        📦 Warehouse App
      </Heading>
      <Spacer mb={'20vh'}></Spacer>
      <ItemPage />


    </Flex>
  </ChakraProvider>
)
