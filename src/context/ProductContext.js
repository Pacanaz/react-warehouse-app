import { createContext, useContext, useEffect, useState } from "react"


const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setProducts] = useState(JSON.parse(window.localStorage.getItem('productData') || '[]'))


  useEffect(() => {

    window.localStorage.setItem('productData', JSON.stringify(products))
    console.log('changed')
  }, [products])

  const getProduct = (id) => {
  
    const getSingleProduct = products.filter(product => product.id === id)
    
    return getSingleProduct[0]
  }


  const addProduct = (data) => {

    const newProduct = data;
    setProducts([...products, newProduct])

  }

  const deleteProduct = (id) => {

    const newProduct = products.filter(product => product.id !== id)
    setProducts(newProduct);

  }

  const editProduct = (data) => {
   
    // const editedProductsArr = products.map(product => {
    //   if(product.id === editedProduct.id){
    //     console.log('found same')
    //     console.log(product)
    //     setProducts([...product, editedProduct])
    //     console.log(editedProductsArr)
    //   }
      
    // }

    const productCopy = [...products];

    const targetIndex = products.findIndex(f=>f.id === data.id);

    productCopy[targetIndex] = data;
    console.log(productCopy)
    setProducts(productCopy);
    

    
  }

  return (
    <ProductContext.Provider value={{ products, getProduct, addProduct, deleteProduct, editProduct }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export const useProductData = () => useContext(ProductContext)

export default ProductContextProvider