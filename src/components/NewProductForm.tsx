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
    <FormControl w={{ base: 'xs', lg: 'xl' }} mx={'10%'}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel ml={{base:'10px', sm:'0'}}>Product Name</FormLabel>
        <Input mb={'10px'}
          id='productName'
          placeholder='Product Name'
          {...register('productName', {
            required: 'This is required',
            minLength: { value: 4, message: 'Minimum length should be 4' },
          })}
        />
        <FormLabel ml={{base:'10px', sm:'0'}}>Quantity</FormLabel>
        <Input mb={'10px'}
          id='quantity'
          placeholder='Quantity'
          type='number'
          inputMode="numeric"
          min="0"
          {...register('quantity', {
            required: 'This is required',
          })}
        />
        <FormLabel ml={{base:'10px', sm:'0'}}>Price</FormLabel>
        <Input mb={'10px'}
          id='price'
          placeholder='Price'
          type='number'
          inputMode="numeric"
          step="0.01"
          min="0"
          {...register('price', {
            required: 'This is required',
          })}
        />
        <Button mt={4} w={{base:'90%', sm: 'inherit'}} mx={{base:'5%', sm: 'inherit'}} colorScheme='teal' isLoading={isSubmitting} type='submit'>
          Add to 📦
        </Button>
        <Button w={{base:'90%', sm: 'inherit'}} mx={{base:'5%', sm: '4'}} onClick={() => { navigate(-1) }} mt={4} colorScheme='gray'>
          Back
        </Button>
      </Form>
    </FormControl>
  )
}
export default NewProductForm

