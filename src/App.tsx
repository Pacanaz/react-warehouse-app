import { ColorModeSwitcher } from "./ColorModeSwitcher"
import {
  ChakraProvider,
  Flex,
  theme,
} from "@chakra-ui/react"
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom"

import ProductPage from "./pages/ProductPage"
import WelcomePage from "./pages/WelcomePage"
import RootLayout from "./pages/RootLayout"
import AddProductPage from "./pages/AddProductPage"
import ProductContextProvider from "./context/ProductContext"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <p>Page not found go <Link to='/'>back.</Link></p>,
    children: [
      { index: true, element: <WelcomePage /> },
      {
        path: "/products",
        element: <ProductPage />,
      },
      {
        path: "/products/create",
        element: <AddProductPage />,
      },
    ],
  },


])


export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex fontSize="xl" flexDirection='column' alignItems={'center'}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <ProductContextProvider>
        <RouterProvider router={router} />
      </ProductContextProvider>
    </Flex>
  </ChakraProvider>
)
