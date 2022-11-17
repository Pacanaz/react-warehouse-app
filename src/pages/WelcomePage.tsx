import { Flex, Heading } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useProductData } from "../context/ProductContext"

function WelcomePage() {

  const {products} = useProductData();

  return (
    <>
    <Flex direction={'column'} alignItems={'center'} justifyContent={'center'} h={'100%'}>
    <Heading color={'teal'}>Fun fact!</Heading>
    {products.length === 0 ? 'There are no products in the system, add some in the Products page!' : 
    <Heading fontWeight={'normal'} size={'md'}>There {products.length === 1 ? 'is' : 'are'} currently <b style={{color:'teal', fontSize:'35px'}}>{products.length}</b> 
    {products.length === 1 ? ' product' : ' products'} in the system! </Heading>
    } 
    </Flex>
    </>
  )
}

export default WelcomePage