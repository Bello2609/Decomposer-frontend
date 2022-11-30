import React, { useState } from 'react';
import { Box, Heading, Text, Input, Select, Textarea, RadioGroup, Radio, VStack, useDisclosure } from '@chakra-ui/react';
import * as images from "../../images";
import { css } from '@emotion/react';
//component
import JobList from '../../component/JobLIst/JobList';
import MainModal from '../../UI/MainModal/MainModal';
import Botton from '../../UI/button';
import { FiPaperclip } from "react-icons/fi";
import { BsFilter } from "react-icons/bs";

const Jobs = ()=>{
    const { isOpen: isService, onOpen: openService, onClose: closeService } = useDisclosure();
    const [ show, setShow ] = useState(false);
    return(
        <>
            <Box css={styles.container}>
                <Box className="category">
                    <Heading as="h5">#Recent Jobs</Heading>
                    <Text>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for <br />those interested.</Text>
                </Box>
                <Box display="flex" cursor="pointer" justifyContent="center" alignItems="center" width="auto" height="400px" bgPosition="center" bgRepeat="no-repeat" bgImage={`url(${images.rectangle138})`}>
                    <Heading onClick={openService} as="h5" cursor="pointer" fontSize="16px" p={3} bgColor="#FBFFF1" color="#1E3231">Post a job</Heading>
                </Box>
                <Box className='joblist' width="1200px">
                    <Box display="flex" justifyContent="space-between">
                        <Box position="relative">
                            <Text display="flex" cursor="pointer" onClick={()=> setShow(!show)}><BsFilter />&nbsp;Filter</Text>
                            {
                                show && 
                                <Box position="absolute" backgroundColor="white" width="170px">
                                <RadioGroup defaultValue="1" dislay="flex" flexDirection="row">
                                    
                                    <Radio width="100%" value="1" colorSchema="blue">past 5 month</Radio>
                                    <Radio width="100%" value="2" colorSchema="blue">Last Month</Radio>
                                    <Radio width="100%" value="3" colorSchema="blue">Newest</Radio>
                                    <Radio width="100%" value="4" colorSchema="blue">Oldest</Radio>
                                   
                                    
                                </RadioGroup>
                            </Box>
                            }
                        </Box>
                        <Box display="flex"> 
                            <Box border="1px" borderColor="#DFDFDF">Singer</Box>
                            <Box ml={2} border="1px" borderColor="#DFDFDF">Producer</Box>
                            <Box ml={2} border="1px" borderColor="#DFDFDF">Mixin artist</Box>
                            <Box ml={2} border="1px" borderColor="#DFDFDF">+ add keyword</Box>
                        </Box>
                    </Box>
                    <JobList />
                </Box>
                {/* service adding modal */}
                <MainModal open={isService} close={closeService} isWidth="500px" isHeight="700px">
                    <Box display='flex' flexDirection="column" p={5}>
                        <Heading as="h5" fontSize="30px" mb={10}>Add Service</Heading>
                        <Input type="text" mb={5} borderRadius="0" placeholder="title" />
                        <Box display="flex" mb={5}>
                            <Input type="number" borderRadius="0" placeholder="price" />
                            <Select borderRadius="0" width="200px" ml={1}>
                                <option value="per hour">singer</option>
                                <option value="per week">singer</option>
                                <option value="per month">singer</option>
                                <option value="per sound">singer</option>
                                <option value="per project">singer</option>
                            </Select>
                        </Box>
                        <Box mb={5}>
                            <Textarea  borderRadius="0" placeholder="Description"></Textarea>
                            <Box display="flex">
                                <Text><FiPaperclip /></Text>
                                <Text>Upload File (Optional)</Text>
                            </Box>
                        </Box>
                        <Botton>Publish Now</Botton>
                    </Box>
                </MainModal>
                    
            </Box>
        </>
    );
}
const styles = {
    container: css`
        display: flex;
        flex-direction: column;
        .category{
            padding: 50px 100px;
        }
        .joblist{
            padding: 50px 200px;
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
export default Jobs;