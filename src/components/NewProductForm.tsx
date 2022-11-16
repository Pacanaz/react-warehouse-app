import { Button, FormControl, Input } from "@chakra-ui/react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Form, Link, useNavigate } from "react-router-dom"
import {v4 as uuidv4} from 'uuid'


  
function NewProductForm() {

    // TODO: useState and make the product list refresh after new product is added.
    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        formState: { isSubmitting },
      } = useForm()

      function onSubmit(product: any) {

        product.id=uuidv4()
  
        const getProducts = JSON.parse(window.localStorage.getItem('productData') || '[]')
        
        console.log(getProducts)

        window.localStorage.setItem('productData', JSON.stringify([...getProducts, product]))
    
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
              {...register('quantity', {
                required: 'This is required',
              })}
            />
            <Input mb={'10px'}
              id='price'
              placeholder='Price'
              type='number'
              {...register('price', {
                required: 'This is required',
              })}
            />
          </FormControl>
          <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>
            Add to 📦
          </Button>
          <Link to={'/products'}><Button mt={4} ml={4} colorScheme='gray'>
            Back to list
          </Button></Link>
        </Form>
      )
            }
export default NewProductForm

