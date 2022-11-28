import React from "react";
import { Table, Tbody, Tr, Td, TableContainer, Box, Heading, Button, Text, useDisclosure } from "@chakra-ui/react";
import { css } from "@emotion/react";
//component
// import EmptyOrder from "../../component/Order/EmptyOrder/EmptyOrder";
import OrderAvailable from "../../component/Order/OrdersAvailable/OrderAvailable";
import Botton from "../../UI/button";
import MainModal from "../../UI/MainModal/MainModal";

const Orders = ()=>{
    const { isOpen: isOrder, onOpen: openOrder, onClose: closeOrder } = useDisclosure();
    const { isOpen: isConfirm, onOpen: openConfirm, onClose: closeConfirm } = useDisclosure();
    const { isOpen: isMessage, onOpen: openMessage, onClose: closeMessage } = useDisclosure();
    return(
        <>
        {/* <EmptyOrder /> */}
        <OrderAvailable modalClick={openOrder}  />

        <MainModal open={isOrder} close={closeOrder} width="1000px" height="900px">
            <Box display="flex" flexDirection="column">
                <Heading as="h5">Order Title # 01</Heading>
                <TableContainer my={5}>
                    <Table>
                        <Tbody>
                            <Tr>
                                <Td>Seller</Td>
                                <Td>Ebuka</Td>
                            </Tr>
                            <Tr>
                                <Td>Creatwed on</Td>
                                <Td>13 september 2022</Td>
                            </Tr>
                            <Tr>
                                <Td>Completeion Date</Td>
                                <Td>21 september 2022</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
                <Button onClick={openConfirm} css={styles.button}>
                    Cancel Order
                </Button>
            </Box>
        </MainModal>
        {/* are you sure modal */}
        <MainModal open={isConfirm} close={closeConfirm}>
            <Box height="150px" display="flex" flexDirection="column">
                <Text my={5} fontWeight="bold">Are you sure you want to cancel order?</Text>
                <Botton click={openMessage}>Confirm</Botton>
            </Box>
        </MainModal>
        {/* confirmation message modal */}
        <MainModal open={isMessage} close={closeMessage}>
            <Box height="150px" display="flex" flexDirection="column">
                <Text my={5} fontWeight="bold">Your order has been deleted successfully</Text>
            </Box>
        </MainModal>


        </>
    );
}
const styles = {
    button: css`
        background: #1E3231;
        color: #fff;
        font-size: 16px;
        font-family: 'Poppins';
        border: none;
        border-radius: 0px;
        width: 150px;
        height: 50px;
    `
}
export default Orders;