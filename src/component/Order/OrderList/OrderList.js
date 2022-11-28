import React, { useState } from "react";
import { Table, Tbody, Tr, Td, TableContainer, Text, Box} from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";
import uuid from "react-uuid";



const OrderList = ({ click })=>{
        const [ show, setShow ] = useState(false);
        
    const data = 
        [
            {
                id: uuid(),
                name: "ebuka",
                title: "#01",
                status: "pending",
                price: "$400 per song"
            },
            {
                id: uuid(),
                name: "ebuka",
                title: "#01",
                status: "pending",
                price: "$400 per song"
            },
            {
                id: uuid(),
                name: "ebuka",
                title: "#01",
                status: "pending",
                price: "$400 per song"
            }
        ]
        const showDelete = (id)=>{
            const toDelete = data.filter(mm=>{
                if(mm.id === id){
                    setShow(!show);
                }
            });

        }
       
       
    return(
        <>
            <TableContainer>
                <Table variant="simple">
                    <Tbody>
                     
                            {
                                data.map(tdata=>(
                                    
                                        <Tr key={tdata.id} position="relative">
                                            <Td>{tdata.name}</Td>
                                            <Td>{tdata.title}</Td>
                                            <Td display="flex" alignItems="center"><Box bgColor="#FFE9FD" borderRadius="10" ><Text fontSize="13px" color="#FF2666" p={1}>{tdata.status}</Text></Box></Td>
                                            <Td>{tdata.price}</Td>
                                            <Td><Text onClick={(id)=> showDelete(tdata.id)} cursor="pointer"><FiMoreVertical /></Text></Td>
                                            {
                                                show && 
                                                <Box onClick={click} cursor="pointer"  position="absolute" top="40px" right="5px" display="flex" justifyContent="center" alignItems="center" width="150px" height="50px" bgColor="#F2F2F2" color="#1E3231">
                                                    Delete Order
                                                </Box>
                                            }
                                            
                                        </Tr>
                                ))
                            }

                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
    
}

export default OrderList;