import {
    Th,
  } from "@chakra-ui/react"



const TableHeader = () => {
 
   
        return ( 
            <>
            <Th >Product name</Th>
            <Th>Stock</Th>
            <Th>Price</Th>
            <Th textAlign={'center'}>Tags</Th>
            <Th textAlign={'center'}>Actions</Th>
          </>
            )
    

};

export default TableHeader