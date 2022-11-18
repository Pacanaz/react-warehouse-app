import { Button, FormControl, FormLabel, Input, Tooltip, useToast } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { Form, useNavigate, useParams } from "react-router-dom"
import { useProductData } from "../context/ProductContext"



function EditProductForm() {
  const { getProduct, editProduct } = useProductData()

  let { id } = useParams()

  const currentProduct = getProduct(id)

  const navigate = useNavigate()

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, isDirty },
  } = useForm({
    defaultValues: {
      productName: currentProduct.productName,
      quantity: currentProduct.quantity,
      price: currentProduct.price
    },
  })
  const toast = useToast()
  function onSubmit(product: any) {

    const currDate = new Date().toLocaleString()

    product.id = id
    currentProduct.productName !== product.productName && (currentProduct.productName = product.productName)

    if (currentProduct.price !== product.price) {
      currentProduct.history.priceHistory.push({
        createdAt: currDate,
        price: product.price,
      })
      currentProduct.price = product.price
    }

    if (currentProduct.quantity !== product.quantity) {
      currentProduct.history.quantityHistory.push({
        createdAt: currDate,
        quantity: product.quantity,
      })
      currentProduct.quantity = product.quantity

    }



    if (!isDirty) {
      toast({
        title: 'What are you doing?',
        description: `${product.productName} wasn't saved because nothing was changed.`,
        status: 'warning',
        duration: 9000,
        isClosable: true,
      })
    } else {
      navigate(-1)
      editProduct(currentProduct)

    }
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
        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} disabled={!isDirty} type='submit'>
          {!isDirty ? <Tooltip hasArrow label="You didn't change anything!" aria-label='A tooltip'>
            Edit 📦
          </Tooltip> : 'Edit 📦'}
        </Button>
        <Button onClick={() => { navigate(-1) }} mt={4} ml={4} colorScheme='gray'>
          Back
        </Button>
      </Form>
    </FormControl>
  )
}
export default EditProductForm

