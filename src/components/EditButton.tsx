import { EditIcon } from '@chakra-ui/icons'
import { MenuItem, MenuList } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function EditButton( {id} : any ) {
  return (
    <>
                 <Link to={`/products/${id}/edit`}><MenuItem icon={<EditIcon />} >
                   Edit
                 </MenuItem></Link>
    </>
  )
}

export default EditButton