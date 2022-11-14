import { Box, Image, Text} from "@chakra-ui/react";
import React from "react";
import * as images from '../../images';
import { css } from "@emotion/react";
import { BsFillStarFill } from "react-icons/bs";

const GigCard = ()=>{
    return (
        <>
        <Box display="flex" flexFlow="wrap" width="100vw">
            <Box css={styles.card} display="flex" flexDirection="column" width="auto" height="auto">
                    <Image src={images.rectangle74} width="400px" height="234px" />
                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={5}>
                        <Text fontStyle="normal" fontFamily="sans-serif" fontSize="30px" >Neville Song writer</Text>
                        <Text>$400 per day</Text>
                    </Box>
                    <Text fontSize="18px" color="gray">Ahmad Hassan</Text>
                    <Text fontSize="18px" color="gray">The standard chunk of Lorem Ipsum used <br />since the 1500s is reproduced below..</Text>
                    <Box display="flex" justifyContent="flex-end"><Text fontSize="20px" color="orange"><BsFillStarFill /></Text>4.9 | 5</Box>
            </Box>
            <Box css={styles.card} display="flex" flexDirection="column" width="auto" height="auto">
                    <Image src={images.rectangle74}  width="400px" height="234px" />
                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={5}>
                        <Text fontStyle="normal" fontFamily="sans-serif" fontSize="30px" >Neville Song writer</Text>
                        <Text>$400 per day</Text>
                    </Box>
                    <Text fontSize="18px" color="gray">Ahmad Hassan</Text>
                    <Text fontSize="18px" color="gray">The standard chunk of Lorem Ipsum used <br />since the 1500s is reproduced below..</Text>
                    <Box display="flex" justifyContent="flex-end"><Text fontSize="20px" color="orange"><BsFillStarFill /></Text>4.9 | 5</Box>
            </Box>
            <Box css={styles.card} display="flex" flexDirection="column" width="auto" height="auto">
                    <Image src={images.rectangle74} width="400px" height="234px" />
                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={5}>
                        <Text fontStyle="normal" fontFamily="sans-serif" fontSize="30px" >Neville Song writer</Text>
                        <Text>$400 per day</Text>
                    </Box>
                    <Text fontSize="18px" color="gray">Ahmad Hassan</Text>
                    <Text fontSize="18px" color="gray">The standard chunk of Lorem Ipsum used <br />since the 1500s is reproduced below..</Text>
                    <Box display="flex" justifyContent="flex-end"><Text fontSize="20px" color="orange"><BsFillStarFill /></Text>4.9 | 5</Box>
            </Box>
            <Box css={styles.card} display="flex" flexDirection="column" width="auto" height="auto">
                    <Image src={images.rectangle74} width="400px" height="234px" />
                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={5}>
                        <Text fontStyle="normal" fontFamily="sans-serif" fontSize="30px" >Neville Song writer</Text>
                        <Text>$400 per day</Text>
                    </Box>
                    <Text fontSize="18px" color="gray">Ahmad Hassan</Text>
                    <Text fontSize="18px" color="gray">The standard chunk of Lorem Ipsum used <br />since the 1500s is reproduced below..</Text>
                    <Box display="flex" justifyContent="flex-end"><Text fontSize="20px" color="orange"><BsFillStarFill /></Text>4.9 | 5</Box>
            </Box>
        </Box>
        </>
    );
}
const styles = {
    card: css`
        padding: 10px;
        border: 1px solid #E1E1E1;
        margin: 10px;
        
    `
}
export default GigCard;