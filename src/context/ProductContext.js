import { createContext, useContext, useEffect, useState } from "react"


const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState(JSON.parse(window.localStorage.getItem('productData') || '[]'))


  useEffect(() => {
    
    window.localStorage.setItem('productData', JSON.stringify(products))
   
  }, [products])
  

    const addProduct = (data) => {

      const newProduct = data;
      setProducts([...products, newProduct ])

    }

    const deleteProduct = (id) => {
      
      const newProduct = products.filter(product => product.id !== id)
      setProducts(newProduct);

    }

  return (
    <ProductContext.Provider value ={{products, addProduct, deleteProduct}}>
    {props.children}
    </ProductContext.Provider>
  )
}

export const useProductData = () => useContext(ProductContext)

export default ProductContextProvider