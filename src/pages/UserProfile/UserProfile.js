import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { css } from "@chakra-ui/react";
import * as images from "../../images";


const UserProfile = ()=>{
    return (
        <>
            <Box css={styles.container}>
                <Box display="flex" justifyContent="space-between">
                    <Text>Categories / singer</Text>
                    <Text>Orders</Text>
                </Box>
                <Box>
                    <Box width="100vw" height="500px" bgPos="center" bgRepeat="no-repeat" bgSize="cover" bgImage={`url(${images.rectangle58})`}>

                    </Box>
                    <Image src={images.rectangle60} borderRadius="100%" alt="profile photo" />
                </Box>
            </Box>
        </>
    );
}
const styles = {
    container: css`
        width: 100vw;
        height: 100vh;
        height: 100px;
        border: 1px solid red;
        padding: 100px;
        
    `
}
export default UserProfile;