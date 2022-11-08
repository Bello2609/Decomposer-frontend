import React from "react";

const Button = ({children, click})=>{
    const buttonStyle = {
        background: "linear-gradient(83.32deg, #0093E9 -12.44%, rgba(128, 208, 199, 0) 413.8%)",
        color: "#fff",
        width: "150px",
        height: "50px",
        fontFamily: 'Poppins',
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "16px"
    }
    return(
        <>
            <button onClick={click} style={buttonStyle} type="submit">{children}</button>
        </>
    );
}
export default Button;