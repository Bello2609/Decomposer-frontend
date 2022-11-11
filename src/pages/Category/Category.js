import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import * as images from "../../images";
import GigCard from "../../component/GigCard/GigCard";


const Category = ()=>{
    return(
        <>
            <Box css={styles.container}>
                <Box className="category">
                    <Heading as="h5">#Music publishing Administration</Heading>
                    <Text>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for <br />those interested.</Text>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" width="auto" height="400px" bgPosition="center" bgRepeat="no-repeat" bgImage={`url(${images.image3})`}>
                    <Text fontSize="25px">Offers (6+)</Text>
                </Box>
                
                    <Box className="card-body">
                        <GigCard />
                    </Box>
                    
               
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
export default Category;