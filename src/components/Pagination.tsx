import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Flex, Select, Text } from '@chakra-ui/react'
import { useState, useEffect } from "react"

function Pagination({ totalProducts, productsPerPage, setCurrentPage, currentPage, setProductsPerPage }: any) {
    const [currentPageSel, setCurrentPageSel] = useState(currentPage)
    const [currentPaginationPage, setCurrentPaginationPage] = useState(1)

    let pages = []

    useEffect(() => {

        setCurrentPage(currentPaginationPage)

    }, [currentPaginationPage, setCurrentPage])



    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pages.push(i)
    }

    const lastPage = Math.ceil(totalProducts / productsPerPage)

    const pagesSelector = [5, 10, 15, 20, 30, 40, 50]

    return (
        <>
            <Flex>
                <Box userSelect={'none'} mt={'20px'} width={'100%'} textAlign={'left'} display={'flex'} alignItems={'center'}>
                    {
                       
                       <>
                        <Select w={'80px'} placeholder='' value={currentPageSel} onChange={(event) => { setProductsPerPage(event.target.value); setCurrentPageSel(event.target.value) }}>
                            {
                                pagesSelector.map((pageSel, index) => {
                                    return <option value={pageSel}>{pageSel}</option>
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