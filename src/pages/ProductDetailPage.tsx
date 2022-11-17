import { Chart } from "react-chartjs-2"
import { useParams } from "react-router-dom"
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
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import { Box, Flex, Menu } from "@chakra-ui/react"
import DeleteButton from "../components/DeleteButton"
import EditButton from "../components/EditButton"

  

     


      

function ProductDetailPage() {
    
 

    const {getProduct, deleteProduct, editProduct} = useProductData();

    let { id } = useParams();

    const currentProduct = getProduct(id);
    const priceData = currentProduct.history.priceHistory;
        const priceTimeStampArr = [];
        const priceArr = [];
    for (const pData of priceData) {
        priceTimeStampArr.push(pData.createdAt)
        priceArr.push(pData.price)
    }
    const quantityData = currentProduct.history.quantityHistory;
        const quantityTimeStampArr = [];
        const quantityArr = [];
    for (const qData of quantityData) {
        quantityTimeStampArr.push(qData.createdAt)
        quantityArr.push(qData.quantity)
    }
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );
  
      const priceOptions = {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom' as const,
            },
            title: {
              display: true,
              text: `${currentProduct.productName} Price Chart`,
            },
          },
        };
   
    const pLabels = priceTimeStampArr;
    const pData = {
        labels: pLabels,
        datasets: [
          {
            label: 'Price',
            data: priceArr,
            borderColor: 'teal',
            backgroundColor: 'teal',
          },
        ],
      };

      const quantityOptions = {
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom' as const,
            },
            title: {
              display: true,
              text: `${currentProduct.productName} Quantity Chart`,
            },
          },
        };
   
    const qLabels = quantityTimeStampArr;
    const qData = {
        labels: qLabels,
        datasets: [
          {
            label: 'Quantity',
            data: quantityArr,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgb(255, 99, 132)',
          },
        ],
      };

  return (
      <>
      <p>Product name:{currentProduct.productName}</p>
      <p>Price:{currentProduct.price}</p>
      <p>Quantity:{currentProduct.quantity}</p>
      <Box>
      <Menu>
      <EditButton id={id} />
      <DeleteButton id={id} />
      </Menu>
      </Box>
      <Box w={'90%'}>
      {priceArr.length > 1 && <Line options={priceOptions} data={pData} />}
      {quantityArr.length > 1 && <Line options={quantityOptions} data={qData} />}
      </Box>

    </>
  )
}

export default ProductDetailPage
