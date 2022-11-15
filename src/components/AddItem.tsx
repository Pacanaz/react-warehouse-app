import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    useDisclosure,
  
} from '@chakra-ui/react'
import AddItemForm from './AddItemForm'


function AddItem() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    // const onSubmit = (data : {id: string, name: string, quantity: number, price:number }) => (
    //     console.log(data)
    // )

    return (
        <>
            <Button colorScheme='green' w={'100%'} borderRadius={0} onClick={onOpen}><Text>+ Add Item</Text></Button>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>📦 Add Warehouse Item</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    <AddItemForm/>
                    </ModalBody>

                    <ModalFooter>
                        
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddItem