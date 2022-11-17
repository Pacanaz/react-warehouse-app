import { EditIcon } from '@chakra-ui/icons'
import { Button, MenuItem } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function EditButton( {id, type} : any ) {
  return (
    <>
    {type === 'menu' && <Link to={`/products/${id}/edit`}><MenuItem icon={<EditIcon />} >
                   Edit
                 </MenuItem></Link>}
    
    {type === 'single' && <Link to={`/products/${id}/edit`}><Button colorScheme={'teal'}>Edit</Button></Link>}
                 
    </>
  )
}

export default EditButton