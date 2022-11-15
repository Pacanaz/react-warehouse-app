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
  MenuButton,
  Menu,
  MenuItem,
  MenuList,
} from "@chakra-ui/react"
import { HamburgerIcon, EditIcon, DeleteIcon } from '@chakra-ui/icons'

import TableHeader from "./TableHeader"
import AddItem from "./AddItem"
function ItemPage() {
  return (
    <>
    
      <TableContainer borderRadius={'1em'}>
      <AddItem/>
        <Table size='md' colorScheme={'green'}>
          <Thead>
            <TableHeader />
          </Thead>
          <Tbody fontSize={'md'}>
            <Tr>
              <Td>Apple Green</Td>
              <Td>5</Td>
              <Td>25.4</Td>
              <Td><Tag variant='solid' colorScheme='teal'>Green</Tag></Td>
              <Td textAlign={'center'}>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label='Actions'
                    icon={<HamburgerIcon />}
                    variant='outline'
                  />
                  <MenuList fontSize={'md'}>
                    <MenuItem icon={<EditIcon />} >
                      Edit
                    </MenuItem>
                    <MenuItem icon={<DeleteIcon />}>
                      Delete
                    </MenuItem>
                  </MenuList>
                </Menu>
                {/* https://chakra-ui.com/docs/components/menu/usage */}
              </Td>
            </Tr>

          </Tbody>
          <Tfoot>
            <TableHeader />
          </Tfoot>
        </Table>

      </TableContainer>
    </>
  )
}

export default ItemPage