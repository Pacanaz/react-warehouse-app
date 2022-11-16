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
  Button,
} from "@chakra-ui/react"
import { HamburgerIcon, EditIcon, DeleteIcon, EmailIcon, AddIcon } from '@chakra-ui/icons'

import TableHeader from "../components/TableHeader"
import { Link } from "react-router-dom"
function ProductPage() {
  return (
    <>
  
      <TableContainer borderRadius={'1em'}>
      <Link to={'create'}><Button size={'sm'} ml={'1em'} alignSelf={'flex-start'} leftIcon={<AddIcon/>} colorScheme='teal' variant='solid'>
    Add product
  </Button>
  </Link>
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
                    <MenuItem icon={<DeleteIcon />}
                      _hover={{ color: 'red' }}>
                      Delete
                    </MenuItem>
                    {/* https://chakra-ui.com/docs/components/alert-dialog */}
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

export default ProductPage