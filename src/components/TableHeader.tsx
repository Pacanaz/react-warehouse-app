import {
    Th,
  } from "@chakra-ui/react"



const TableHeader = () => {
 
   
        return ( 
            <>
            <Th >Product name</Th>
            <Th>Stock</Th>
            <Th>Price</Th>
            <Th textAlign={{ sm: 'center', lg: 'left' }}>Tags</Th>
            <Th textAlign={'center'}>Actions</Th>
          </>
            )
    

};

export default TableHeader