import React from 'react';
import { Box, Text, Heading } from '@chakra-ui/react';
import { css } from '@emotion/react';

const Dashboard = ()=>{
    return(
        <>
            <Box css={styles.container}>
                <Box display="flex" justifyContent="space-between" mb={3}>
                    <Text>Dashboard</Text>
                    <Text textDecoration="underline">switch to seller mode</Text>
                </Box>
                <Box className="dashboard" width="900px" height="200px">
                    <Box className='dashboard-content' display="flex" justifyContent="space-between" alignItems="center">
                        <Text>Ahmad Hassan</Text>
                        <Box display="flex" alignItems="center">
                            <Text>Total Balance</Text>&nbsp;
                            <Heading as="h6">$14,000</Heading>
                        </Box>
                    </Box>
                    <Box display="flex">
                        <Box borderRadius="5" display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="81px" height="91px" bgColor="#fff" opacity="0.39" mr={3} p={3}>
                            <Text>Sales</Text>
                            <Text>14</Text>
                        </Box>
                        <Box borderRadius="5" display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="150px" height="90px" bgColor="#fff" opacity="0.39" p={3}>
                            <Text>July Earnings</Text>
                            <Text>$1312.90</Text>
                        </Box>
                    </Box>
                   
                </Box>
                <Box my={5} display="flex" flexDirection="row">
                    <Box p={4} mr={3} width="250px" borderRadius="5px" height="100px" border="1px" borderColor="#E1E1E1">
                        <Text>Amount to Withdrawal:</Text>
                        <Text>$1000</Text>
                    </Box>
                    <Box p={4} mr={3} width="250px" height="100px" border="1px" borderColor="#E1E1E1">
                        <Text>Pending Amount:</Text>
                        <Text>$1000</Text>
                    </Box>
                    <Box p={4} width="250px" height="100px" border="1px" borderColor="#E1E1E1">
                        <Text>Amount to be cleared</Text>
                        <Text>$1000</Text>
                    </Box>
                </Box>
                <Box my={5} display="flex">
                    <Text mr={4} display="flex" alignItems="center" justifyContent="center" borderRadius="10px" bgColor="#1E3231" className="withdraw">Withdraw Earnings</Text>
                    <Text mr={4} display="flex" alignItems="center" justifyContent="center" borderRadius="10px" bgColor="#0093E9" className="withdraw">Go to inbox</Text>
                    <Text mr={4} display="flex" alignItems="center" justifyContent="center" borderRadius="10px" bgColor="#1E3231" className="withdraw">Analytics</Text>
                    <Text  display="flex" alignItems="center" justifyContent="center" borderRadius="10px" bgColor="#0093E9" className="withdraw">My Profile</Text>
                </Box>
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
        .dashboard{
            background: linear-gradient(245.8deg, #676767 -2.47%, #FBFBFB -2.46%, #CACACA 90.52%, #0A0A0A 106.11%, #919191 106.11%);
            padding: 30px
        }
        .withdraw{
            color: #fff;
            font-size: 13px;
            font-family: 'Poppins';
            border: none;
            border-radius: 0px;
            width: 150px;
            height: 50px;
            }
        // .dashboard-content{
        //     padding: 30px
        // }
    
    `
}
export default Dashboard;