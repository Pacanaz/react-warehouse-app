import {
    Th,
    Td
  } from "@chakra-ui/react"


interface TableHeaderProps {
    position?: string
}


const TableHeader = ({ position } : TableHeaderProps): JSX.Element => {
 
    if (position === 'thead'){
        return ( 
            <>
            <Th>Product name</Th>
            <Th>Qty In Stock</Th>
            <Th>Price</Th>
            <Th>Tags</Th>
            <Th>Actions</Th>
          </>
            )
    }else{
        return ( 
            <>
            <Td>Product name</Td>
            <Td>Qty In Stock</Td>
            <Td>Price</Td>
            <Td>Tags</Td>
            <Td>Actions</Td>
          </>
            )
    }

      
   
};

export default TableHeader