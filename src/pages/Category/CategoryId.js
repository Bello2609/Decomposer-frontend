import React from "react";
import { Box, Text, Image, Button, Heading, Wrap, WrapItem, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { css } from "@emotion/react";
import * as images from "../../images";
import { BsFillStarFill } from "react-icons/bs";
import GigCard from "../../component/GigCard/GigCard";
const CategoryId = ()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box css={styles.container}>
                <Text mb={5}>Categories  /  Music Production</Text>
                <Box display="flex" flexDirection="column">
                    <Box>
                        <Image src={images.image4}  width="1324px" alt="gig images" />
                    </Box>
                    <Box mt={10} display="flex" flexDirection="column">
                        <Box display="flex" justifyContent="space-between">
                            <Text fontSize="30px" fontFamily="sans-serif" >Neville Song Writer</Text>
                            <Text>$400 per day</Text>
                        </Box>
                        <Text my={5} fontSize="16px" className="text1" >Ahmad Hassan</Text>
                        <Box display="flex" justifyContent="space-between">
                            <Text className="text" fontSize="16px">
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                                 below for those <br />interested. The standard chunk of Lorem Ipsum used 
                                 since the 1500s is reproduced below for<br /> those interested. The 
                                 standard chunk of Lorem Ipsum used since the 1500s is reproduced <br />
                                 below for those interested.
                            </Text>
                            <Button onClick={onOpen} className="button">Send Offer</Button>
                        </Box>
                    </Box>
                </Box>
                <Box mt={10} display="flex" flexDirection="column">
                    <Heading as="h6">Reviews</Heading>
                    <Box display="flex" height="200px" mt={5}  flexDirection="column">
                        <Box width="500px" display="flex" justifyContent="space-between">
                            <Text display="flex" color="orange" ><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /></Text>
                            <Text>2 days ago</Text>
                        </Box>
                        <Text my={3} className="text">kelly M.</Text>
                        <Wrap width="500px">
                            <WrapItem>
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced 
                                below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus 
                                Bonorum et Malorum" by Cicero are also reproduced in their exact original
                                form, accompanied by English versions from the 1914 translation by H. Rackham.
                            </WrapItem>
                            
                        </Wrap>
                    </Box>
                    <Box display="flex" height="200px" mt={5}  flexDirection="column">
                        <Box width="500px" display="flex" justifyContent="space-between">
                            <Text display="flex" color="orange" ><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /></Text>
                            <Text>2 days ago</Text>
                        </Box>
                        <Text my={3} className="text">kelly M.</Text>
                        <Wrap width="500px">
                            <WrapItem>
                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced 
                                below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus 
                                Bonorum et Malorum" by Cicero are also reproduced in their exact original
                                form, accompanied by English versions from the 1914 translation by H. Rackham.
                            </WrapItem>
                            
                        </Wrap>
                    </Box>
                    <Box display="flex" flexDirection="column">
                        <Box display="flex">
                            <Text className="text" fontSize="30px">Related Service</Text>
                        </Box>
                        <Box className="card-body">
                            <GigCard />
                        </Box>
                    </Box>

                </Box>
                <Modal isOpen={isOpen} onClose={onClose} >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalBody>
                            <Box display="flex" flexDirection="column" width="300px" height="auto" bgColor="white">
                                <Heading>
                                Proposal
                                </Heading>
                                <Text>Write description</Text>
                            </Box>
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Box>
        </>
    );
}
const styles = {
    container: css`
        padding: 100px;
        .text1{
            color: #414A54;
        }
        .text{
            color: #333333;
        }
        .button{
            background: #1E3231;
            border-radius: 0px;
            color: #fff;
            font-size: 12px;
            font-family; 'Poppins'
        }
        .card-body{
            padding: 20px;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            grid-gap: 20px;
            align-items: stretch;
            overflow-x: hidden;
        }
    `
}
export default CategoryId;