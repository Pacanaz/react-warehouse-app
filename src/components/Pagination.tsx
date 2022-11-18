import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Flex, Select, Text } from '@chakra-ui/react'
import { useState, useEffect } from "react"

function Pagination({ totalProducts, productsPerPage, setCurrentPage, currentPage, setProductsPerPage }: any) {
    const [currentPageSel, setCurrentPageSel] = useState(currentPage)
    const [currentPaginationPage, setCurrentPaginationPage] = useState(1)

    let pages = []
    let prodSelect = [5]

    useEffect(() => {

        setCurrentPage(currentPaginationPage)

        if(currentPaginationPage !== 1 && totalProducts === productsPerPage){
            setCurrentPaginationPage(1);
        }

    }, [currentPaginationPage, setCurrentPage, totalProducts, productsPerPage])



    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pages.push(i)
    }
   
   let i = 5;
   do {
       i= i+5;
       prodSelect.push(i);
    
   } while (i<totalProducts);


    const lastPage = Math.ceil(totalProducts / productsPerPage)

    return (
        <>
            <Flex>
                <Box userSelect={'none'} mt={'20px'} width={'100%'} textAlign={'left'} display={'flex'} alignItems={'center'}>
                    {
                        currentPaginationPage === 1 &&
                       <>
                        <Select w={'80px'} placeholder='' value={currentPageSel} onChange={(event) => { setProductsPerPage(event.target.value); setCurrentPageSel(event.target.value) }}>
                            {
                                prodSelect.map((prodSel, index) => {
                                    return <option key={index} value={prodSel}>{prodSel}</option>
                                })
                            }
                        </Select>
                    <Text fontSize={'md'} ml={'10px'}>items per page</Text>
                    </>
                    }
                </Box>

                <Box userSelect={'none'} mt={'20px'} width={'100%'} textAlign={'right'} display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
                    {
                        pages.length > 1 &&
                        // pages.map((page, index) => {
                        //     return <Button colorScheme={page === currentPage ? 'teal' : 'gray'} mr={'10px'} key={index} onClick={() => setCurrentPage(page)} >{page}</Button>
                        // })
                        <>
                            <ChevronLeftIcon cursor={'pointer'} _hover={{color:'teal'}} fontSize={'30px'} visibility={currentPaginationPage !== 1 ? 'visible' : 'hidden'} onClick={() => setCurrentPaginationPage(currentPaginationPage - 1)} />
                            {currentPaginationPage}
                            <ChevronRightIcon cursor={'pointer'} _hover={{color:'teal'}} fontSize={'30px'} visibility={currentPaginationPage !== lastPage ? 'visible' : 'hidden'}
                                onClick={() => setCurrentPaginationPage(currentPaginationPage + 1)} />

                        </>
                    }
                </Box>
            </Flex>
        </>
    )
}

export default Pagination