import {  
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    FormHelperText
    ,} from '@chakra-ui/react';
    import { useForm } from "react-hook-form";
function AddItemForm() {
    const {
      handleSubmit,
      register,
      formState: { isSubmitting },
    } = useForm()
  
    function onSubmit(values: any) {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          resolve()
        }, 3000)
      })
    }

     {/* <form onSubmit={handleSubmit(onSubmit)}>
                        <FormControl>
                            <FormLabel>Product Name</FormLabel>
                            <Input type='text' {...addItem("productName")}/>
                            <FormLabel>Quantity</FormLabel>
                            <Input type='text' {...addItem("quantity")}/>
                            <FormLabel>Price</FormLabel>
                            <Input type='text' {...addItem("price")} />
                            <FormHelperText>Pro tip: You will be able to edit the product name afterwards.</FormHelperText>
                        </FormControl>
                        </form> */}
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
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
        <Button mt={4} colorScheme='green' isLoading={isSubmitting} type='submit'>
          Add to 📦
        </Button>
      </form>
    )
  }
export default AddItemForm