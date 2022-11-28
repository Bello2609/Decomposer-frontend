import React from "react";
import { Box, Image, Heading, Text } from "@chakra-ui/react";
import * as images from "../../images"
const JobList = ()=>{
    return(
        <>
            <Box display="flex" flexDirection="column">
                <Box display="flex" width="800px" height="200px" border="1px" borderColor="#E1E1E1" p={2} mb={3}>
                    <Image src={images.rectangle75} width="214px" height="180px" />
                    <Box px={5} my={4} width="100%">
                        <Box display="flex" justifyContent="space-between">
                            <Box>
                                <Heading as="h6" fontSize="24px">
                                    Neville Song writer
                                </Heading>
                                <Text color="#666666" my={3} fontSize="18px">
                                    Ahmad Hassan
                                </Text>
                            </Box>
                            <Text>Singer</Text>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Text color="#666666" fontSize="18px">The standard chunk of Lorem Ipsum used <br /> since the 1500s is reproduced below..</Text>
                            <Box cursor="pointer" display="flex" justifyContent="center" p={2} alignItems="center" border="1px" borderColor="#1E3231">Send quote</Box>
                        </Box>
                    </Box>

                </Box>
                <Box display="flex" width="800px" height="200px" border="1px" borderColor="#E1E1E1" p={2} mb={3}>
                    <Image src={images.rectangle75} width="214px" height="180px" />
                    <Box px={5} my={4} width="100%">
                        <Box display="flex" justifyContent="space-between">
                            <Box>
                                <Heading as="h6" fontSize="24px">
                                    Neville Song writer
                                </Heading>
                                <Text color="#666666" my={3} fontSize="18px">
                                    Ahmad Hassan
                                </Text>
                            </Box>
                            <Text>Singer</Text>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Text color="#666666" fontSize="18px">The standard chunk of Lorem Ipsum used <br /> since the 1500s is reproduced below..</Text>
                            <Box cursor="pointer" display="flex" justifyContent="center" p={2} alignItems="center" border="1px" borderColor="#1E3231">Send quote</Box>
                        </Box>
                    </Box>

                </Box>
                <Box display="flex" width="800px" height="200px" border="1px" borderColor="#E1E1E1" p={2} mb={3}>
                    <Image src={images.rectangle75} width="214px" height="180px" />
                    <Box px={5} my={4} width="100%">
                        <Box display="flex" justifyContent="space-between">
                            <Box>
                                <Heading as="h6" fontSize="24px">
                                    Neville Song writer
                                </Heading>
                                <Text color="#666666" my={3} fontSize="18px">
                                    Ahmad Hassan
                                </Text>
                            </Box>
                            <Text>Singer</Text>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Text color="#666666" fontSize="18px">The standard chunk of Lorem Ipsum used <br /> since the 1500s is reproduced below..</Text>
                            <Box cursor="pointer" display="flex" justifyContent="center" p={2} alignItems="center" border="1px" borderColor="#1E3231">Send quote</Box>
                        </Box>
                    </Box>

                </Box>

            </Box>
        </>
    );
}
export default JobList;