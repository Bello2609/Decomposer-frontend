import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
import { css } from '@emotion/react';
import OrderList from '../OrderList/OrderList';


const OrderAvailable = ({ modalClick })=>{
    return (
        <>
            <Box css={styles.container}>
                <Box display="flex" justifyContent="space-between">
                    
                    <Text>Dashboard / orders</Text>
                    <Text textDecoration="underline">switch buyer mode</Text>
                </Box>
                <Heading as="h5" my={4}>Orders (4)</Heading>
                <OrderList click={modalClick} />
               
            </Box>
        
        </>
    );
}
const styles={
    container: css`
        padding: 100px;
        color: #333333;
    `
}
export default OrderAvailable;