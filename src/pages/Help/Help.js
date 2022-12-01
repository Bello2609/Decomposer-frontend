import React from "react";
import { css } from "@emotion/react";
import * as images from "../../images";
import { Box, Text, Input, Button, Heading, Wrap, WrapItem } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Help = ()=>{
    return(
        <>
            <Box css={styles.container}>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgImg={`url(${images.rectangle72})`} bgSize="cover" bgPos="center" bgRepeat="no-repeat" width="1200px" height="300px">
                    <Heading as="h6" fontSize="30px" color="#fff">Here for help</Heading>
                    <Box display="flex" p={2} justifyContent="center" alignItems="centerS" width="650px" height="60px" bg="white">
                        <Text display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100px" height="40px"><BiSearch /></Text>
                        <Input border="none" outline="none" mx={2} width="400px" placeholder="Search Problem" />
                        <Button className="search-button">Search</Button>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="space-between" mt={10}>
                    <Box>
                        <Heading as="h6">FAQ's</Heading>
                        <Wrap>
                            <WrapItem width="400px">
                                <Text color="#333333">
                                    The standard chunk of Lorem Ipsum used since the 1500s 
                                    is reproduced below for those interested. Sections 1.10.32
                                    and 1.10.33 from.
                                </Text>
                            </WrapItem>
                        </Wrap>
                    </Box>
                    <Box color="#1E3231">
                        <Box display="flex" mb={3}>
                            <Text mr={5} color="#EEEEEE"><IoIosArrowDropdownCircle /></Text>
                            <Wrap>
                                <WrapItem width="450px">
                                    <Text>Safe and secure</Text>
                                </WrapItem>
                            </Wrap>
                        </Box>
                        <Box display="flex" mb={3}>
                            <Text mr={5} color="#EEEEEE"><IoIosArrowDropdownCircle /></Text>
                            <Wrap>
                                <WrapItem width="450px">
                                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
                                </WrapItem>
                            </Wrap>
                            
                        </Box>
                        <Box display="flex" mb={3}>
                            <Text mr={5} color="#EEEEEE"><IoIosArrowDropdownCircle /></Text>
                            <Wrap>
                                <WrapItem width="450px">
                                    <Text>The point of using Lorem Ipsum is that it has a more-or-less </Text>
                                </WrapItem>
                            </Wrap>
                        </Box>
                        <Box display="flex" mb={3}>
                            <Text mr={5} color="#EEEEEE"><IoIosArrowDropdownCircle /></Text>
                            <Wrap>
                                <WrapItem width="450px">
                                    <Text>Many desktop publishing packages and web page editors now</Text>
                                </WrapItem>
                            </Wrap>
                        </Box>
                        <Box display="flex">
                            <Text mr={5} color="#EEEEEE"><IoIosArrowDropdownCircle /></Text>
                            <Wrap>
                                <WrapItem width="450px">
                                    <Text>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text>
                                </WrapItem>
                            </Wrap>
                        </Box>
                    </Box>
                </Box>
                <Heading as="h5" mt={5} fontStyle="normal" color="#3D90E2">The standard chunk of Lorem Ipsum used since the 1500s is <br />reproduced below for those interested.</Heading>
                <Box mt={5} p={10}  display="flex" justifyContent="center" flexDirection="column" width="1200px" height="400px" bgPosition="center" bgSize="contain" bgRepeat="no-repeat" bgImage={`url(${images.rectangle133})`}>
                    <Text fontSize="30px" color="#1E3231">Get Assistance from our <br />Customer Support!</Text>
                    <Button bgColor="#1E3231" color="#fff" borderRadius="0" mt={4} width="200px" height="50px">Subscribe now</Button>
                </Box>
            </Box>
        </>
    );
}
const styles = {
    container: css`
        padding: 100px;
        .search-button{
            background: #1E3231;
            color: #fff;
            font-size: 16px;
            font-family: 'Poppins';
            border: none;
            border-radius: 0px;
            width: 150px;
            height: 50px;
        }
    `
}
export default Help;