import { Button, FormControl, Input } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { Form, Link, useNavigate } from "react-router-dom"
import {v4 as uuidv4} from 'uuid'
import { useProductData } from "../context/ProductContext"


  
function NewProductForm() {
  const {addProduct} = useProductData();
    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        formState: { isSubmitting },
      } = useForm()

      function onSubmit(product: any) {

        product.id=uuidv4()
        
        product.history = { 
          priceHistory: [],
          quantityHistory: [],
        }


        addProduct(product);
    
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
              })}
            />
            <Input mb={'10px'}
              id='quantity'
              placeholder='Quantity'
              type='number'
              min="0"
              {...register('quantity', {
                required: 'This is required',
              })}
            />
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
export default NewProductForm

