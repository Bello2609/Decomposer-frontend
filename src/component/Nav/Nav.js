import React from "react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Nav = ()=>{
    const styles = {
        marginRight: "25px",
        color: "#333",
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "800",
        fontSize: "16px"
    }
    return (
        <>
            <Box display="flex" justifyContent="center" pl={4}>
                <Link style={styles} to="/">Home</Link>
                <Link style={styles} to="/explore">Explore</Link>
                <Link style={styles} to="/recent">Recents jobs</Link>
                <Link style={styles} to="/seller">Become a seller</Link>
                <Link style={styles} to="/signin">Sign in</Link>
            </Box>
        </>
    );
}
export default Nav;