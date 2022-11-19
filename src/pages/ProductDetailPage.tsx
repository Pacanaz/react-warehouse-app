import { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { useProductData } from "../context/ProductContext"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Box, Button, Flex, HStack, Menu, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, Stat, StatArrow, StatGroup, StatHelpText, Table, TableContainer, Tag, Tbody, Td, Tr, useColorModeValue, useDisclosure } from "@chakra-ui/react"
import DeleteButton from "../components/DeleteButton"
import EditButton from "../components/EditButton"
import { ArrowBackIcon } from '@chakra-ui/icons'


function ProductDetailPage() {



  const { getProduct } = useProductData()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [chart, setChart]: any = useState('')
  let { id } = useParams()

  const currentProduct = getProduct(id)


  const priceData = currentProduct.history.priceHistory
  const priceTimeStampArr = []
  const priceArr = []

  for (const pData of priceData) {
    priceTimeStampArr.push(pData.createdAt)
    priceArr.push(pData.price)
  }
  const lastPriceHistory = priceArr.slice(-2)[0]
  const quantityData = currentProduct.history.quantityHistory
  const quantityTimeStampArr = []
  const quantityArr = []
  for (const qData of quantityData) {
    quantityTimeStampArr.push(qData.createdAt)
    quantityArr.push(qData.quantity)
  }
  const lastQuantityHistory = quantityArr.slice(-2)[0]
  console.log(lastQuantityHistory)
  function getPercentageChange(oldNumber: number, newNumber: number) {


    const val = Math.floor(((oldNumber - newNumber) / newNumber) * 100)

    if (val > 0) {
      return { value: val + "%", status: 'decrease' }
    } else {
      return { value: (val * -1) + "%", status: 'increase' }
    }

  }
  const quantityStat: any = getPercentageChange(lastQuantityHistory, currentProduct.quantity)
  const priceStat: any = getPercentageChange(lastPriceHistory, currentProduct.price)

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

  const axisColor = useColorModeValue('#545558', '#cecece')

  const priceOptions = {
    responsive: true,
    scales: {
      y: {
        ticks: { color: axisColor }
      },
      x: {
        ticks: { color: axisColor }
      }
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: axisColor
        },
      },
      title: {
        display: true,
        text: `Price Chart`,
        color: axisColor,
      },
    },
  }

  const pLabels = priceTimeStampArr
  const pData = {
    labels: pLabels,
    datasets: [
      {
        label: 'Price',
        data: priceArr,
        borderColor: 'teal',
        backgroundColor: 'teal',
        tension: 0.4,
      },
    ],
  }


  const quantityOptions = {
    responsive: true,
    scales: {
      y: {
        ticks: { color: axisColor }
      },
      x: {
        ticks: { color: axisColor }
      }
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: axisColor
        },
      },
      title: {
        display: true,
        text: `Quantity Chart`,
        color: axisColor,
      },
    },
  }

  const qLabels = quantityTimeStampArr
  const qData = {
    labels: qLabels,
    datasets: [
      {
        label: 'Quantity',
        data: quantityArr,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgb(255, 99, 132)',
        tension: 0.4,
      },
    ],
  }

  const handleChartPick = (type: string) => {
    if (type === 'price') {
      setChart(<Line options={priceOptions} data={pData} />)
      onOpen()
    }
    if (type === 'quantity') {
      setChart(<Line options={quantityOptions} data={qData} />)
      onOpen()
    }
  }

  const navigate = useNavigate()

  return (
    <>
        <Button position={'absolute'} left={'0'}  size={['sm', 'md']} leftIcon={<ArrowBackIcon/>} alignSelf={'flex-start'} ml={'5'} mt={'-5'} colorScheme={'teal'} onClick={() => { navigate(-1) }}>Back</Button>
      <Flex w={priceArr.length === 1 && quantityArr.length === 1 ? {base: '90%', md:'60%'} : '90%'} alignItems={'center'} justifyContent={priceArr.length > 1 && quantityArr.length > 1 ? 'space-around' : 'center'} direction={{ base: 'column', lg: 'row' }}>
        <Box p={'5%'} minWidth={'20%'} width={'100%'}>

          <TableContainer mb={'10%'} whiteSpace={'normal'}>
            <Table size='md'>
              <Tbody fontSize={['xs', 'sm', 'md']}>
                <Tr>
                  <Td>Product</Td>
                  <Td isNumeric maxWidth={'30vw'}>{currentProduct.productName}</Td>
                </Tr>
                <Tr>
                  <Td>Product ID</Td>
                  <Td isNumeric maxWidth={'30vw'}>{currentProduct.id}</Td>
                </Tr>
                <Tr>
                  <Td>Price</Td>
                  <Td isNumeric>
                    {lastPriceHistory && (priceStat.value !== '100%' && priceStat.value !== 'Infinity%' && priceStat.value !== '0%') &&
                      <StatGroup display={'inline-block'} mr={'10px'}>
                        <Stat>
                          <StatHelpText>

                            <StatArrow type={priceStat.status} />
                            {priceStat.value}
                          </StatHelpText>
                        </Stat></StatGroup>}
                    ${currentProduct.price}</Td>
                </Tr>
                <Tr>
                  <Td>Stock</Td>
                  <Td isNumeric>
                    {lastQuantityHistory && (quantityStat.value !== '100%' && quantityStat.value !== 'Infinity%' && quantityStat.value !== '0%') &&
                      <StatGroup display={'inline-block'} mr={'10px'}>
                        <Stat>
                          <StatHelpText>

                            <StatArrow type={quantityStat.status} />
                            {quantityStat.value}
                          </StatHelpText>
                        </Stat></StatGroup>}
                    {currentProduct.quantity}</Td>
                </Tr>
                <Tr>
                  <Td>Tags</Td>
                  <Td isNumeric>
                  <HStack float={'right'} spacing={2}>
                    {currentProduct.tags.map((tag : string, index : number) => {
                    
                       return <Tag size={['sm', 'md']} key={index} variant='solid' colorScheme={tag.toLocaleLowerCase()}>
                          {tag}
                        </Tag>
                      
                    })}
                    </HStack>
                    </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>

          <Menu>
            <EditButton id={id} type={'single'} />
            <DeleteButton id={id} type={'single'} />
          </Menu>
        </Box>
        {priceArr.length && quantityArr.length &&

          <Box>
            {priceArr.length > 1 && (
              <>
                <Box position={'relative'} width={{ base: '400px', lg: '600px' }}>
                  <Button display={{base:'none', md:'block'}} size={'xs'} position={'absolute'} top={'-10'} right={'-5'}
                    onClick={() => handleChartPick('price')}
                    m={4}
                  >{`Full Screen Chart`}</Button>
                  <Line options={priceOptions} data={pData} /></Box> </>)}
            {quantityArr.length > 1 &&
              (
                <>
                  <Box position={'relative'} width={{ base: '400px', lg: '600px' }}>
                    <Button display={{base:'none', md:'block'}} size={'xs'} position={'absolute'} bottom={'-10'} right={'-5'}
                      onClick={() => handleChartPick('quantity')}
                      m={4}
                    >{`Full Screen Chart`}</Button>
                    <Line options={quantityOptions} data={qData} /> </Box>
                </>)}

          </Box>
        }
      </Flex>


      <Modal onClose={onClose} size='full' isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody display={'flex'} alignItems={'center'} justifyContent={'center'}>
            {chart}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  )
}

export default ProductDetailPage
