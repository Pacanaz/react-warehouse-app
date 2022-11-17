import { useParams } from "react-router-dom"
import { useProductData } from "../context/ProductContext"




function ProductDetailPage() {

    const {getProduct, deleteProduct, editProduct} = useProductData();

    let { id } = useParams();

    const currentProduct = getProduct(id);
    console.log(currentProduct);
  return (
      <>
      <p>{currentProduct.id}</p>
      <p>Product name:{currentProduct.productName}</p>
      <p>Price:{currentProduct.price}</p>
      <p>Quantity:{currentProduct.quantity}</p>
    </>
  )
}

export default ProductDetailPage
