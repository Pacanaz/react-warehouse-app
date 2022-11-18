import {
    Th,
  } from "@chakra-ui/react"



const TableHeader = () => {
 
   
        return ( 
            <>
            <Th>Product name</Th>
            <Th>Stock</Th>
            <Th>Price</Th>
            <Th>Tags</Th>
            <Th textAlign={'center'}>Actions</Th>
          </>
            )
    

};

export default TableHeader