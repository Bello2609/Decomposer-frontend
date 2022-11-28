import React from "react";
import { Box, Text, Heading, Button } from "@chakra-ui/react";
import { css } from "@emotion/react";

const EmptyOrder = ()=>{
    return (
        <>
            <Box css={styles.container}>
                <Box display="flex" justifyContent="space-between" mb={3}>
                    <Text>Dashboard / orders</Text>
                    <Text textDecoration="underline">switch to seller mode</Text>
                </Box>
                <Heading as="h5" mb={3}>No Orders yet : &#40;</Heading>
                <Button className="button">Find Services</Button>
            </Box>        
        </>
    );
}
const styles = {
    container: css`
        padding: 100px;
        display: flex;
        flex-direction: column;
        color: #1E3231;
        .button{
            background: #1E3231;
            color: #fff;
            width: 150px;
            height: 50px;
        }
    `
}
export default EmptyOrder;