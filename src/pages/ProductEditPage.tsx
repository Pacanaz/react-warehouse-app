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
import EditProductForm from '../components/EditProductForm'
function EditProductPage() { 
  const {
    handleSubmit,
    register,
    formState: { isSubmitting },
  } = useForm()

  function onSubmit(values: any) {
    
    console.log(values)
    alert(JSON.stringify(values, null, 2))


  }

  return (
    <EditProductForm/>
  )
}
export default EditProductPage