import React from "react";
import { Box, Text, Image, Button, Wrap, WrapItem, Heading, useDisclosure} from "@chakra-ui/react";
import { css } from "@emotion/react";
import * as images from "../../images";
import { FiMoreVertical } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { BsFillStarFill } from "react-icons/bs";
import Service from "../../component/Servies/Services";
import MainModal from "../../UI/MainModal/MainModal";


const UserProfile = ()=>{
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box css={styles.container}>
                <Box display="flex" mb={5} justifyContent="space-between">
                    <Text>Categories / singer</Text>
                    <Text>Orders</Text>
                </Box>
                <Box>
                    <Box position="relative" width="100%" height="250px" bgPos="center" bgRepeat="no-repeat" bgSize="cover" bgImage={`url(${images.rectangle58})`}>
                        <Box p={3}>
                            <Text onClick={onOpen} cursor="pointer" color="white" fontSize="20px">
                                <FiMoreVertical />
                            </Text>
                        </Box>
                        <Box display="flex" mt={10} color="white" fontSize="30px" justifyContent="center" alignItems="center">
                            <Text>Singer</Text>
                        </Box>
                    </Box>
                    <Image position="absolute" top="350px" left="150px" border="10px" borderColor="white" src={images.rectangle60} borderRadius="100%" alt="profile photo" />
                </Box>
                <Box className="info" >
                    <Box>
                        <Box display="flex" justifyContent="space-between" width="500px">
                            <Text>Ahmad Hassan</Text>
                            <Text display="flex" alignItems="center"><MdLocationOn />Munich, Germany</Text>
                        </Box>
                        <Wrap>
                            <WrapItem>
                                <Text className="text" width="650px">
                                    It is a long established fact that a reader will be distracted by the 
                                    readable content of a page when looking at its layout. The point of using
                                    Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                                    as opposed to using 'Content here, content here', making it look like 
                                    readable English. Many desktop publishing packages and web page editors 
                                    now use Lorem Ipsum as their default model text, and a search for 'lorem 
                                    ipsum' will uncover many web sites still in their infancy. Various versions 
                                    have evolved over the years, sometimes by accident, sometimes on purpose 
                                    (injected humour and the like).
                                </Text>
                            </WrapItem>
                        </Wrap>
                    </Box>
                    <Button className="button" border="none" borderRadius="0">Contact me</Button>
                </Box>
                <Box mt={5}>
                    <Heading as="h5">Servies(2)</Heading>
                    <Box className="services">
                        <Service />
                    </Box>
                </Box>
                {/* review section */}
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
                </Box>
                {/* modal */}
                <MainModal open={isOpen} close={onClose}>
                    
                        <Box position="relative" top="0" left="0" bgSize="cover" bgPosition="center" bgImage={`url(${images.rectangle58})`}  height="200px" width="400px">
                        <Image position="absolute" top="10px" src={images.rectangle60} width="100px" height=" 100px" borderRadius="100" /> 
                        </Box>
                        
                   
                </MainModal>

            </Box>
        </>
    );
}
const styles = {
    container: css`
        width: 100vw;
        height: auto;
        padding: 100px;
        .info{
            display: flex;
            justify-content: space-between;
            margin-top: 100px;
        }
        .button{
            background: #1E3231;
            color: #fff;
            font-size: 16px;
            font-family: 'Poppins';
        }
        .text{
            text-align: wrap;
            text-justify: inter-word;
        }
        .services{
            padding: 20px;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            grid-gap: 20px;
            align-items: stretch;
            overflow-x: hidden;
        }
        
    `
}
export default UserProfile;