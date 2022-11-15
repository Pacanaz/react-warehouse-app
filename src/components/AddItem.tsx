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

function AddItem() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const saveInput = () => {
        console.log('ayy');
    }

    return (
      <>
        <Button w={'100%'} borderRadius={0} onClick={onOpen}><Text>+ Add Item</Text></Button>
  
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Yoyoyo
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={saveInput}>
                Add Item
              </Button>
              <Button variant='ghost' onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default AddItem