import React from "react";
import { Box, Text, Select, Input, Wrap, WrapItem, Image, Heading, Center, Button, HStack } from "@chakra-ui/react";
import { css } from "@emotion/react";
import * as images from "../../images"
import { BiSearch } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";

const Home = ()=>{
    return (
        <>
            {/* <Box>

                <Box p={10}>
                    <Box display="flex" fontWeight="bold" fontSize="3xl" width="75%">
                        <Heading as="h5" display="flex">Hire the right&nbsp;<Text as="span" color="blue.400">passionate talent</Text>&nbsp;for your</Heading>
                    </Box>
                    <Heading as="h5" mb={5}  fontWeight="bold">unique work.</Heading>

                    <Text color="gray" fontSize="xs">
                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below <br /> for those interested.
                    </Text>
                </Box>
                <Box position="relative" width="100%" height="400px"  css={styles.container}>
                    <Box position="absolute" width="100%" height="400px" zIndex={1} bgPosition="center" bgRepeat="no-repeat" bgImage={`url(${images.banner})`}>
                        <Box display="flex" p={2} justifyContent="center" alignItems="centerS" pos="absolute" top="20px" left="350px" width="650px" height="60px" bg="white">
                                <button css={styles.button_section}><BiSearch /></button>
                                <Input border="none" mx={2} width="400px" placeholder="Search Talent" />
                                <Select color="blue" border="0" borderColor="white" width="auto">
                                    <option value="singer">singer</option>
                                    <option value="producer">producer</option>
                                    <option value="song writer">writers</option>
                                    <option value="master engineers">engineers</option>
                                </Select>
                            
                        </Box>
                    </Box>
                </Box>
                <Box p={10}>
                    <Box>
                        <Text fontStyle="normal" fontWeight="bold" fontSize="25px">
                            Fill the profile and get <br />yourself started
                        </Text>
                        <Wrap pt={5}>
                            <WrapItem  mr={2} width="369px" height="189px" bgRepeat="no-repeat" bgPosition="center" bgImage={`url(${images.rectangle128})`}>
                                <Text 
                                    fontSize="noraml" 
                                    fontWeight="bold" 
                                    zIndex="5" 
                                    bgGradient="linear(to-bl, white, black)" 
                                    opacity="0.7" 
                                    width="100%" 
                                    height="100%" 
                                    display="flex" 
                                    justifyContent="center" 
                                    alignItems="flex-end" 
                                    color="white">
                                    Singer
                                </Text>
                            </WrapItem>
                            <WrapItem mr={2} width="369px" height="189px" bgRepeat="no-repeat" bgPosition="center" bgImage={`url(${images.rectangle129})`}>
                                <Text 
                                    fontSize="noraml" 
                                    fontWeight="bold" 
                                    bgGradient="linear(to-bl, white, black)" 
                                    opacity="0.7" 
                                    width="100%" 
                                    height="100%" 
                                    display="flex" 
                                    justifyContent="center" 
                                    alignItems="flex-end" 
                                    color="white">
                                    Producer
                                </Text>
                            </WrapItem>
                            <WrapItem  mr={2} width="369px" height="189px" bgRepeat="no-repeat" bgPosition="center" bgImage={`url(${images.rectangle130})`}>
                                <Text 
                                    fontSize="noraml" 
                                    fontWeight="bold" 
                                    zIndex="5" 
                                    bgGradient="linear(to-bl, white, black)" 
                                    opacity="0.7" 
                                    width="100%" 
                                    height="100%" 
                                    display="flex" 
                                    justifyContent="center" 
                                    alignItems="flex-end" 
                                    color="white">
                                        Lyricist
                                </Text>
                            </WrapItem>
                            <WrapItem mr={2} bgGradient="linear(to-r, green.200, pink.500)" width="369px" height="189px" bgRepeat="no-repeat" bgPosition="center" bgImage={`url(${images.rectangle131})`}>
                                <Text
                                    fontSize="noraml" 
                                    fontWeight="bold" 
                                    zIndex="5" 
                                    bgGradient="linear(to-bl, white, black)" 
                                    opacity="0.7" 
                                    width="100%" 
                                    height="100%" 
                                    display="flex" 
                                    justifyContent="center" 
                                    alignItems="flex-end" 
                                    color="white">
                                        Music publishing Admininstration
                                </Text>
                            </WrapItem>
                            <WrapItem mr={2} width="369px" height="189px" bgRepeat="no-repeat" bgPosition="center" bgImage={`url(${images.rectangle132})`}>
                                <Text 
                                    fontSize="noraml" 
                                    fontWeight="bold" 
                                    zIndex="5" 
                                    bgGradient="linear(to-bl, white, black)" 
                                    opacity="0.7" 
                                    width="100%" 
                                    height="100%" 
                                    display="flex" 
                                    justifyContent="center" 
                                    alignItems="flex-end" 
                                    color="white">
                                        Music Relations
                                </Text>
                            </WrapItem>
                            <WrapItem mr={2} width="369px" height="189px">
                                <Text 
                                    fontSize="noraml" 
                                    fontWeight="bold" 
                                    zIndex="5" 
                                    width="100%" 
                                    height="100%" 
                                    display="flex" 
                                    justifyContent="center" 
                                    alignItems="center" 
                                    color="black">
                                        Explore All
                                </Text>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
                <Box p={10} height="auto" display="flex" mt={10}>
                    <Box width="50%">
                        <Image src={images.rectangle11} alt="laptop" />
                    </Box>
                    <Box width="50%" pl={10}>
                        <Wrap>
                            <WrapItem display="flex" flexDirection="column">
                                <Heading as="h5">Fill the profile and get yourself started</Heading>
                                <Text color="gray" fontSize="16px" mt={10}>
                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced 
                                    below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus 
                                    Bonorum et Malorum" by Cicero are also reproduced in their exact original 
                                    form, accompanied by English versions from the 1914 translation by H. Rackham.
                                </Text>
                            </WrapItem>
                        </Wrap>
                        
                    </Box>
                </Box>
                <Box p={10} display="flex" justifyContent="space-between">
                    <Box mr={10} width="40%" display="flex" flexDirection="column">
                        <Wrap>
                            <WrapItem display="flex" flexDirection="column">
                                <Heading mb={10} as="h5">Over 400,000 musicians <br />have used and trust<br /> SoundBetter</Heading>
                                <Text color="gray" fontSize="16px" className="text">
                                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced 
                                    below for those interested. Sections 1.10.32 and 1.10.33 from.
                                </Text>
                            </WrapItem>
                        </Wrap>
                    </Box>
                    <Box  display="flex" flexDirection="column">
                        <Box display="flex" mb={3} p={5} width="400px" height="100px" border="1px" borderColor="gray.200" borderRadius="10">
                            <Text pr={3} fontSize="30px" color="green.200"><BsShieldCheck /></Text>
                            <Box>
                                <Heading as="h6" size="xs">Safe and secure</Heading>
                                <Text fontSize="14px">Fund a project to get started and release payment once it's completed</Text>
                            </Box>
                        </Box>
                        <Box display="flex" p={5} mb={3} width="400px" height="100px" border="1px" borderColor="gray.200" borderRadius="10">
                            <Text pr={3} fontSize="30px" color="green.200"><BsShieldCheck /></Text>
                            <Box>
                                <Heading as="h6" size="xs">Protect your copyright</Heading>
                                <Text fontSize="14px">Our software provides a record of exchanges and files for future reference</Text>
                            </Box>
                        </Box>
                        <Box display="flex" mb={3} p={5} width="400px" height="100px" border="1px" borderColor="gray.200" borderRadius="10">
                            <Text pr={3} fontSize="30px" color="green.200"><BsShieldCheck /></Text>
                            <Box>
                                <Heading as="h6" size="xs">Human support</Heading>
                                <Text fontSize="14px">Email, phone and chat to help you with your projects</Text>
                            </Box>
                        </Box>
                        <Box display="flex" mb={3} p={5} width="400px" height="100px" border="1px" borderColor="gray.200" borderRadius="10">
                            <Text pr={3} fontSize="30px" color="green.200"><BsShieldCheck /></Text>
                            <Box>
                                <Heading as="h6" size="xs">Level up</Heading>
                                <Text fontSize="14px">Better sounding content gets more plays, bookings and placement</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Center fontWeight="bold" fontSize="2xl">
                        Best from Music Club
                    </Center>
                    <Box css={styles.gallery}>
                        <Image mr={2} src={images.rectangle13} alt="music" />
                        <Image mr={2} className="image-gallery" src={images.rectangle14} alt="music" />
                        <Image mr={2} src={images.rectangle17} alt="music" />
                        <Image mr={2} className="image-gallery" src={images.rectangle16} alt="music" />
                    </Box>
                </Box>
                <Box mt={5} p={10} display="flex" justifyContent="center" flexDirection="column" width="100%" height="400px" bgPosition="center"  bgImage={`url(${images.rectangle139})`}>
                    <Text fontSize="30px" color="white">Subscribe our newsletter and get <br />regular updates</Text>
                    <Button color="gray" borderRadius="0" mt={4} width="200px" height="50px">Subscribe now</Button>
                </Box>
            </Box> */}
            
        </>
    );
}
const styles = {
    container: css`
        background: linear-gradient(12.12deg, rgba(0, 0, 0, 0.5) 8.53%, rgba(0, 0, 0, 0) 52.42%);
    `,
    button_section: css`
        height: 60px;
        width: 100px;
    `,
    gallery: css`
        display: flex;
        justify-content: center;
        align-items: center;

        .image-gallery{
            margin-top: 200px;
        }
    `

}
export default Home;