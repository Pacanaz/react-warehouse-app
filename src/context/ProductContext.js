import { useToast } from '@chakra-ui/react';
import { createContext, useContext, useEffect, useState } from "react"


const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(JSON.parse(window.localStorage.getItem('productData') || '[]'))
  const toast = useToast()

  useEffect(() => {
    
    window.localStorage.setItem('productData', JSON.stringify(products))

  }, [products])

  const getProduct = (id) => {

    const getSingleProduct = products.filter(product => product.id === id)

    return getSingleProduct[0]
  }


  const addProduct = (data) => {

    const newProduct = data;
    setProducts([...products, newProduct])
    toast({
      title: 'Product created.',
      description: `${data.productName} was created.`,
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
  }

  const deleteProduct = (id) => {

    const newProduct = products.filter(product => product.id !== id)
    setProducts(newProduct);
    toast({
      title: 'Product deleted.',
      description: "Your product was deleted",
      status: 'success',
      duration: 4000,
      isClosable: true,
    })

  }

  const editProduct = (data) => {

    const productCopy = [...products];

    const targetIndex = products.findIndex(f => f.id === data.id);

    productCopy[targetIndex] = data;
    setProducts(productCopy);

    toast({
      title: 'Product updated',
      description: `${data.productName} was updated.`,
      status: 'success',
      duration: 4000,
      isClosable: true,
    })

  }

  return (
    <ProductContext.Provider value={{ products, getProduct, addProduct, deleteProduct, editProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductData = () => useContext(ProductContext)

export default ProductContextProvider