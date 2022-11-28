import React from "react";
import { Text, Box } from "@chakra-ui/react";
import { FiMoreVertical } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import { css } from "@emotion/react";

const Service = ({open})=>{
    return (
        <>
            <Box display="flex" flexFlow="wrap"  width="100vw">
                <Box css={styles.container} p={5}>
                    <Box display="flex" justifyContent="space-between" mb={3}>
                        <Text>Boom Operator</Text>
                        <Text><FiMoreVertical /></Text>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Text>
                            $400 per day
                        </Text>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Text color="orange"><BsFillStarFill /></Text>
                            <Text>4.9 | 5</Text>
                        </Box>
                    </Box>
                </Box>
                <Box css={styles.container} p={5}>
                    <Box display="flex" justifyContent="space-between" mb={3}>
                        <Text>Boom Operator</Text>
                        <Text><FiMoreVertical /></Text>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Text>
                            $400 per day
                        </Text>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Text color="orange"><BsFillStarFill /></Text>
                            <Text>4.9 | 5</Text>
                        </Box>
                    </Box>
                </Box>
                <Box css={styles.container} p={5}>
                    <Box display="flex" justifyContent="space-between" mb={3}>
                        <Text>Boom Operator</Text>
                        <Text><FiMoreVertical /></Text>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Text>
                            $400 per day
                        </Text>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Text color="orange"><BsFillStarFill /></Text>
                            <Text>4.9 | 5</Text>
                        </Box>
                    </Box>
                </Box>
                <Box css={styles.container} p={5}>
                    <Box display="flex" justifyContent="space-between" mb={3}>
                        <Text>Boom Operator</Text>
                        <Text><FiMoreVertical /></Text>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Text>
                            $400 per day
                        </Text>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <Text color="orange"><BsFillStarFill /></Text>
                            <Text>4.9 | 5</Text>
                        </Box>
                    </Box>
                </Box>
                <Box onClick={open} css={styles.container} justifyContent="center" alignItems="center" cursor="pointer" p={5}>
                    <Text><AiOutlinePlus /></Text>
                    <Text>Add New</Text>
                </Box>
            </Box>
        </>
    );
}
const styles = {
    container: css`
        display: flex;
        flex-direction: column;
        width: 368px;
        height: 120px;
        border-radius: 10px;
        border: 1px solid #E1E1E1;
        margin-left: 10px;
        margin-top: 10px;
    `
}
export default Service;