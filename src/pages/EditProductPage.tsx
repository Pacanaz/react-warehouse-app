import {
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText
  ,
} from '@chakra-ui/react'
import { useForm } from "react-hook-form"
import { Form, Link } from 'react-router-dom'
function EditProductPage() { 
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm()

  function onSubmit(values: any) {
    values.history = {  // idea of how to save history of quantity and price
      quantityHistory: [{
        createdAt: 2022,
        quantity: 6,
      },
      {
        createdAt: 2022,
        quantity: 6,
      },
      ],
      priceHistory: [{
        createdAt: 2022,
        price: 5,
      },
      {
        createdAt: 2021,
        price: 32,
      },
      ]
    }
    console.log(values)
    alert(JSON.stringify(values, null, 2))


  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <Input mb={'10px'}
          id='product_name'
          placeholder='Product Name'
          {...register('product_name', {
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
export default EditProductPage