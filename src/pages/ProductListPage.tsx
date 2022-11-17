import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  TableContainer,
  Button,
} from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'

import TableHeader from "../components/TableHeader"
import { Link } from "react-router-dom"
import ProductItem from "../components/ProductItem"
function ProductListPage() {
  return (
    <>

      <TableContainer borderRadius={'1em'}>
        <Link to={'create'}><Button size={'sm'} ml={'1em'} alignSelf={'flex-start'} leftIcon={<AddIcon />} colorScheme='teal' variant='solid'>
          Add product
        </Button>
        </Link>
        <Table size='md' colorScheme={'green'}>
          <Thead>
            <TableHeader />
          </Thead>
          <Tbody fontSize={'md'}>
            <ProductItem />
          </Tbody>
          <Tfoot>
            <TableHeader />
          </Tfoot>
        </Table>

      </TableContainer>
    </>
  )
}

export default ProductListPage