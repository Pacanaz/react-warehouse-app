import { Box, Button, Flex, Select, Text } from '@chakra-ui/react'
import { useState} from "react"

function Pagination( {totalProducts, productsPerPage, setCurrentPage, currentPage, setProductsPerPage} : any) {
    const [currentPageSel, setCurrentPageSel] = useState(currentPage)

    let pages = [];

   
    for (let i = 1; i<= Math.ceil(totalProducts/productsPerPage); i++) {
        pages.push(i)
    }

    const pagesSelector = [5, 10, 15, 20, 30, 40, 50];

  return (
    <>
    <Flex>
     <Box mt={'20px'} width={'100%'} textAlign={'left'} display={'flex'} alignItems={'center'}>
        {
            <Select w={'80px'} placeholder='' value={currentPageSel} onChange={(event) => {setProductsPerPage(event.target.value); setCurrentPageSel(event.target.value);}}>
                {
                    pagesSelector.map((pageSel, index) => {
                        return <option value={pageSel}>{pageSel}</option>
                    })
                }
          </Select>
        }
        <Text fontSize={'md'} ml={'10px'}>items per page</Text>
    </Box>
    
    <Box mt={'20px'} width={'100%'} textAlign={'right'}>
        {
            pages.length > 1 &&
            pages.map((page, index) => {
                return <Button colorScheme={page === currentPage ? 'teal' : 'gray'} mr={'10px'} key={index} onClick={() => setCurrentPage(page)} >{page}</Button>
            })
        }
    </Box>
    </Flex>
        </>
  );
}

export default Pagination