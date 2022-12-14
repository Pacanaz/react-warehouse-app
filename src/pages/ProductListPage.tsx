import {
  Table,
  Thead,
  Tbody,
  TableContainer,
  Button,
  Heading,
  Flex,
  Box,
  Image,
} from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'
import TableHeader from "../components/TableHeader"
import { Link } from "react-router-dom"
import ProductItem from "../components/ProductItem"
import { useProductData } from "../context/ProductContext"
import { useState } from "react"
import Pagination from "../components/Pagination"



function ProductListPage() {

  const { products } = useProductData()
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(5)

  const lastProdIndex = currentPage * productsPerPage;
  const firstProdIndex = lastProdIndex - productsPerPage;
  const currentProducts = products.slice(firstProdIndex, lastProdIndex);
  
  return (
    <>

      <TableContainer whiteSpace={'normal'} maxWidth={'90%'} width={{base:'100%'}}>
        {products.length !== 0 ?
          <>
            <Link to={'create'}><Button mb={'1vh'} size={{ base: 'xs', lg: 'sm' }} alignSelf={'flex-start'} leftIcon={<AddIcon />} colorScheme='teal' variant='solid'>
              Add product
            </Button>
            </Link>

            <Table size={['xs', 'sm', 'md']} colorScheme={'green'}>
              <Thead userSelect={'none'} fontSize={{ base: 'xx-small' }}>
                <TableHeader />
              </Thead>
              <Tbody fontSize={'md'}>
                <ProductItem products={currentProducts} />
              </Tbody>
            </Table>
            <Pagination 
                totalProducts={products.length} 
                productsPerPage={productsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                setProductsPerPage={setProductsPerPage}
                />
          </>
          : <Flex direction={'column'} alignItems={'center'}>
            <Box boxSize='xs'>
              <Image src='/assets/images/pulp-fiction-john-travolta.gif' alt='Dan Abramov' />
            </Box>
            <Heading mb={'5'}>No products</Heading>
            <Link to={'create'}><Button size={{ base: 'md', lg: 'lg' }} leftIcon={<AddIcon />} colorScheme='teal' variant='solid'>
              Add product
            </Button>
            </Link>
          </Flex>}
      </TableContainer>
    </>
  )
}

export default ProductListPage