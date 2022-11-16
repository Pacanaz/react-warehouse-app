
import { Spacer } from '@chakra-ui/react'
import AddProductPage from '../pages/AddProductPage'


function AddItem() {


    // const onSubmit = (data : {id: string, name: string, quantity: number, price:number }) => (
    //     console.log(data)
    // )

    return (
        <>

            📦 Add Warehouse Product
            <Spacer mb={'2%'} />
            <AddProductPage />

        </>
    )
}

export default AddItem