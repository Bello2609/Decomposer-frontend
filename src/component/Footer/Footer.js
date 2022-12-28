import React from "react";
import { Box, Text, Heading, Input} from "@chakra-ui/react";
import Button from "../../UI/button";
import { BsTwitter } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom"

const Footer = ()=>{
    return (
        <>
            <Box  display="flex" justifyContent="space-between" width="100%" px={10} py={5}>
                <Box>
                    <Text mb={2}>Try L'ARTDECOMPOSER</Text>
                    <Box width="100%">
                        <Input width="250px" height="50px" mr={4} placeholder="Email Address"  />
                        <Button>Get Started</Button>
                    </Box>
                    <Box mt={5} mb={10} display="flex">
                        <Text><BsTwitter /></Text>
                        <Text><AiFillYoutube /></Text>
                    </Box>
                    <Text>2022 L'artdecomposer Corporation. All Rights Reserved by salman khalid</Text>
                </Box>
                <Box display="flex">
                    <Box mr={5} justifyContent="flex-start">
                        <Heading as="h3" size="lg"><Link to="/help">Help</Link></Heading>
                            <Text mt={5}>Sign in</Text>
                            <Text>Become Seller</Text>
                            <Text>Get Quote</Text>
                            <Text>Customer Support</Text>
                    </Box>
                    <Box justifyContent="flex-start">
                        <Heading as="h3" size="lg">Explore</Heading>
                            <Text mt={5}>Producer</Text>
                            <Text>Singers</Text>
                            <Text>Song Writer</Text>
                            <Text>Master Engineers</Text>
                    </Box>
                   
                </Box>
            </Box>
        </>
    );
}
export default Footer;