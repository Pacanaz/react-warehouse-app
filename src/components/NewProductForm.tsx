import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { Form, useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid'
import { useProductData } from "../context/ProductContext"



function NewProductForm() {
  const { addProduct } = useProductData()
  const navigate = useNavigate()
  const currDate = new Date().toLocaleString()
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm()

  function onSubmit(product: any) {

    product.id = uuidv4()

    product.history = {
      priceHistory: [],
      quantityHistory: [],
    }

    product.history.priceHistory.push({
      createdAt: currDate,
      price: product.price,
    })

    product.history.quantityHistory.push({
      createdAt: currDate,
      quantity: product.quantity,
    })


    addProduct(product)

    // Some sort of alert that item is added

    navigate('/products')
  }

  return (
    <FormControl w={{ base: 'sm', lg: 'xl' }} mx={'5%'}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel>Product Name</FormLabel>
        <Input mb={'10px'}
          id='productName'
          placeholder='Product Name'
          {...register('productName', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormLabel>Quantity</FormLabel>
        <Input mb={'10px'}
          id='quantity'
          placeholder='Quantity'
          type='number'
          min="0"
          {...register('quantity', {
            required: 'This is required',
          })}
        />
        <FormLabel>Price</FormLabel>
        <Input mb={'10px'}
          id='price'
          placeholder='Price'
          type='number'
          step="0.01"
          min="0"
          {...register('price', {
            required: 'This is required',
          })}
        />
        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
          Add to 📦
        </Button>
        <Button onClick={() => { navigate(-1) }} mt={4} ml={4} colorScheme='gray'>
          Back
        </Button>
      </Form>
    </FormControl>
  )
}
export default NewProductForm

