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

import ProductListPage from "./pages/ProductListPage"
import WelcomePage from "./pages/WelcomePage"
import RootLayout from "./pages/RootLayout"
import AddProductPage from "./pages/AddProductPage"
import ProductContextProvider from "./context/ProductContext"
import ProductDetailPage from "./pages/ProductDetailPage"
import ProductEditPage from "./pages/ProductEditPage"
import ErrorPage from "./pages/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <WelcomePage /> },
      {
        path: "/products",
        element: <ProductListPage />,
      },
      {
        path: '/products/:id',
          element: <ProductDetailPage/>
      },
      {
        path: '/products/:id/edit',
          element: <ProductEditPage/>
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
