import React from "react";
import { 
    Box, 
    Text, 
    Image, 
    Button, 
    Heading, 
    Wrap, 
    WrapItem, 
    useDisclosure,
    Textarea
     } from "@chakra-ui/react";
import { css } from "@emotion/react";
import * as images from "../../images";
import { BsFillStarFill } from "react-icons/bs";
import { FiPaperclip } from "react-icons/fi";
import GigCard from "../../component/GigCard/GigCard";
import Botton from "../../UI/button";
import MainModal from "../../UI/MainModal/MainModal";
const CategoryId = ()=>{
    const { isOpen: isProposal, onOpen: openProposal, onClose: closeProposal } = useDisclosure();
    const { isOpen: isConfirm, onOpen: openConfirm, onClose: closeConfrim } = useDisclosure();
    const { isOpen: isSuccess, onOpen: openSuccess, onClose: closeSuccess } = useDisclosure();
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
                            <Button onClick={openProposal} className="button">Send Offer</Button>
                        </Box>
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
                    <Box display="flex" flexDirection="column">
                        <Box display="flex">
                            <Text className="text" fontSize="30px">Related Service</Text>
                        </Box>
                        <Box className="card-body">
                            <GigCard />
                        </Box>
                    </Box>

                </Box>
                {/* modal section */}
                <MainModal open={isProposal} close={closeProposal}>
                    <Box display="flex" flexDirection="column" width="300px" height="auto" bgColor="white">
                        <Heading>
                        Proposal
                        </Heading>
                        <Text my={5}>Write description</Text>
                        <Textarea maxLength="1200" width="400px" placeholder="write your proposal here" />
                        <Box display="flex" justifyContent="space-between" width="400px" my={5}>
                            <Box display="flex">
                                <Text><FiPaperclip /></Text>
                                <Text>Upload File (Optional)</Text>
                            </Box>
                            <Text style={{ color: "#3D90E2" }}>Max 1200 words</Text>
                        </Box>
                        <Botton click={openConfirm}>Send Proposal</Botton>
                    </Box>
                </MainModal>
                <MainModal open={isConfirm} close={closeConfrim}>
                    <Box height="150px" display="flex" flexDirection="column">
                        <Text my={5} fontWeight="bold">Please confirm to sent proposal?</Text>
                        <Botton click={openSuccess}>Confirm</Botton>
                    </Box>
                </MainModal>
                <MainModal open={isSuccess} close={closeSuccess}>
                    <Box height="150px" display="flex" flexDirection="column">
                        <Text my={5} fontWeight="bold">Please confirm to sent proposal?</Text>
                        <Botton>Confirm</Botton>
                    </Box>
                </MainModal>
                
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