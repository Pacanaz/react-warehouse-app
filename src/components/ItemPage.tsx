import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Td,
  TableContainer,
  IconButton,
  Tag,
} from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'

import TableHeader from "./TableHeader"
import AddItem from "./AddItem"
function ItemPage() {
  return (
    <TableContainer borderRadius={'1em'}>
      <Table size='md'>
        <Thead>
          <TableHeader />
        </Thead>
        <Tbody>
          <Tr>
            <Td>Apple Green</Td>
            <Td>5</Td>
            <Td>25.4</Td>
            <Td><Tag variant='solid' colorScheme='teal'>Green</Tag></Td>
            <Td textAlign={'center'}>
              <IconButton
                backgroundColor={'transparent'}
                aria-label='Actions'
                icon={<HamburgerIcon />}
              />
            </Td>
          </Tr>

        </Tbody>
        <Tfoot>
          <TableHeader />
        </Tfoot>
      </Table>
      <AddItem/>
    </TableContainer>
  )
}

export default ItemPage