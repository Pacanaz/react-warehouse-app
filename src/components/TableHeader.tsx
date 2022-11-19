import {
    Th, Tr,
  } from "@chakra-ui/react"



const TableHeader = () => {
 
   
        return ( 
            <Tr>
            <Th >Product name</Th>
            <Th>Stock</Th>
            <Th>Price</Th>
            <Th textAlign={{ sm: 'center', lg: 'left' }}>Tags</Th>
            <Th textAlign={'center'}>Actions</Th>
          </Tr>
            )
    

};

export default TableHeader