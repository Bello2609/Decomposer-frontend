import React, { useState } from "react";
import { Heading, Input, Box, Text, Select } from "@chakra-ui/react";
import * as images from "../../images";
import { css } from "@emotion/react";
import { BiSearch } from "react-icons/bi";

const Explore = ()=>{
    const [ isExplore, setExplore ] = useState(false);
    const exploreChanger = ()=>{
        setExplore(!isExplore);
    }
    return(
        <>
            <Box display="flex" width="100vw" height="50vw">
                <Box m={10} display="flex" >
                    <Box display="flex" flexDirection="column">
                        <Heading mb={5} as="h5">#Discover</Heading>
                        <Box ml={5}>
                            <Text color="gray" cursor="pointer" mb={5}>Producers</Text>
                            <Text color="gray" mb={5}>Singers</Text>
                            <Text color="gray" mb={5}>Song Writers</Text>
                            <Text color="gray" mb={5}>Master Engineer</Text>
                            <Text color="gray" mb={5}>Musician</Text>
                            <Text color="gray" onClick={exploreChanger} mb={5}>Explore All</Text>
                        </Box>
                    </Box>
                    {
                        isExplore && (
                            <Box left="200px"  width="390px"  pl={5} display="flex" flexDirection="column">
                                <Heading mb={5} as="h5">Explore All</Heading>
                                <Box ml={5}>
                                    <Text color="gray" mb={5}>Accordionist</Text>
                                    <Text color="gray" mb={5}>Boom Operator</Text>
                                    <Text color="gray" mb={5}>Dialogue Editors</Text>
                                    <Text color="gray" mb={5}>Acoustic Guitarist</Text>
                                    <Text color="gray" mb={5}>Bagpipe players</Text>
                                    <Text color="gray" mb={5}>Music publishing Administrator</Text>
                                    <Text color="gray" mb={5}>Music publishing Administrator</Text>
                                    <Text color="gray" mb={5}>Music PR / Public Relation</Text>
                                </Box>
                            </Box>
                        )
                    }
                </Box>
                <Box position="relative"  css={styles.container} flex="flex" width="1269px" height="500px"  flexDirection="column" bgImage={`url(${images.rectamgle101})`} bgPosition="center" bgRepeat="no-repeat" bgSize="cover" >
                    <Heading as="h4" mb={5} color="white">Your top talent exists here! <br />Start Discovering</Heading>
                    <Text mb={5} color="white">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for <br />those interested.</Text>
                            <Box display="flex" p={2} justifyContent="center" alignItems="centerS" width="650px" height="60px" bg="white">
                                    <button css={styles.button_section}><BiSearch /></button>
                                    <Input border="none" mx={2} width="400px" placeholder="Search Talent" />
                                    <Select color="blue" border="none" width="150px">
                                        <option value="singer">singer</option>
                                        <option value="producer">producer</option>
                                        <option value="song writer">writers</option>
                                        <option value="master engineers">engineers</option>
                                    </Select>
                            </Box>
                </Box>
            </Box>
        </>
    );
}
const styles = {
    container: css`
        padding: 100px;
        
    `,
   
}
export default Explore;