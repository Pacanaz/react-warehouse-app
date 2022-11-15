import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Td,
  TableContainer,
  IconButton,
} from "@chakra-ui/react"
import { HamburgerIcon } from '@chakra-ui/icons'

import TableHeader from "./TableHeader"
import AddItem from "./AddItem"
function ItemPage() {
  return (
    <TableContainer borderRadius={'1em'}>
      <Table size='md'>
        <Thead>
          <TableHeader position={'thead'}/>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Apple Green</Td>
            <Td>5</Td>
            <Td>25.4</Td>
            <Td>Green</Td>
            <Td>
              <IconButton
                colorScheme='blue'
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