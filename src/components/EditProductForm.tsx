import { Button, FormControl, Input } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { Form, Link, useNavigate, useParams } from "react-router-dom"
import { useProductData } from "../context/ProductContext"


  
function EditProductForm() {
  const {getProduct, editProduct} = useProductData();

  let { id } = useParams();

      const currentProduct = getProduct(id);

    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        formState: { isSubmitting },
      } = useForm()

      function onSubmit(product: any) {

        const currDate = new Date().toLocaleString();

        product.id = id;
        currentProduct.productName !== product.productName && (currentProduct.productName = product.productName)
       
        if(currentProduct.price !== product.price){
          currentProduct.history.priceHistory.push({
            createdAt: currDate,
            price: product.price,
          })
          currentProduct.price = product.price 
        }

        if(currentProduct.quantity !== product.quantity){
          currentProduct.history.quantityHistory.push({
            createdAt: currDate,
            quantity: product.quantity,
          })
          currentProduct.quantity = product.quantity 
         
        }
    
        editProduct(currentProduct)
        // Some sort of alert that item is added

        navigate('/products')
      }

    
      
    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <Input mb={'10px'}
              id='productName'
              placeholder='Product Name'
              {...register('productName', {
                required: 'This is required',
                minLength: { value: 4, message: 'Minimum length should be 4' },
              } )} defaultValue={currentProduct.productName}
            />
            <Input mb={'10px'}
              id='quantity'
              placeholder='Quantity'
              type='number'
              min="0"
              {...register('quantity', {
                required: 'This is required',
              })} defaultValue={currentProduct.quantity}
            />
            <Input mb={'10px'}
              id='price'
              placeholder='Price'
              type='number'
              step="0.01"
              min="0"
              {...register('price', {
                required: 'This is required',
              })} defaultValue={currentProduct.price}
            />
          </FormControl>
          <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
            Add to 📦
          </Button>
          <Button onClick={() => {navigate(-1)}} mt={4} ml={4} colorScheme='gray'>
            Back
          </Button>
        </Form>
      )
            }
export default EditProductForm

