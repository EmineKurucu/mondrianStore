import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBox } from "./slices/boxSlice";
import Box, { Height40Beige, Width40Beige } from "./component/Box"; // Box komponentlerini import edin

const boxData = [
    {width:"225px", height:"225px", top:"50px", left:"55px", backgroundColor:"red", position:"absolute"},
    {width:"40px", height:"128px", top:"50px"},
    {width:"100px", height:"120px", top:"290px", left:"50px", backgroundColor:"rgb(1, 4, 30)", position:"absolute"},
    {width:"100px", height:"53px", top:"426px", left:"56px", backgroundColor:"beige", position:"absolute"},
    {width:"110px", height:"53px", top:"290px", left:"167px"},
    {width:"110px", height:"60px", top:"350px", left:"167px"},
    {width:"110px", height:"22px", top:"427px", left:"170px", backgroundColor:"rgb(1, 4, 30)"},
    {width:"273px", height:"15px", top:"465px", left:"170px"},
    {width:"150px", height:"130px", top:"50px", left:"295px", backgroundColor:"yellow"},
    {width:"72px", height:"90px", top:"190px", left:"295px"},
    {width:"74px", height:"90px", top:"190px", left:"372px" },
    {width:"152px", height:"50px", top:"293px", left:"293px"}, 
    {width:"152px", height:"96px", top:"355px", left:"293px",  backgroundColor:"rgb(5, 5, 89)"}, 
    {width:"30px", height:"325px", top:"52px", left:"460px"},
    {width:"30px", height:"125px", top:"355px", left:"460px", backgroundColor:"rgb(214, 80, 53)"},   
];

const boxHeight40Data = [
    { width: "115px" },
    { width: "151px", left: "130px" , backgroundColor:"yellow"},
    { width: "150px", left: "298px" , backgroundColor:"yellow"},
    { width: "30px", left: "460px" },
];

const boxWidth40Data = [
    { height: "170px", top: "190px" },
    { height: "110px", top: "370px" },
];

function Mondrian() {
    const adSoyad = useSelector((state) => state.user.adSoyad);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setBox(boxData));
    }, [dispatch]);

    return (
        <div style={{
            width: "100%",
            height: "100vh",
            backgroundColor: "rgb(0, 24, 45)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            flexDirection: "column"
        }}>
            <div style={{ color: "white", fontSize: "1.5em", marginBottom: "20px" }}>
                Merhaba {adSoyad}! Mondrian tasarımım nasıl gözüküyor?
            </div>

            <div style={{
                position: "relative",
                width: "500px",
                height: "495px",
                backgroundColor: "white",
                border: "10px solid black"
            }}>
                {boxData.map((box, index) => (
                    <Box key={index} {...box} />
                ))}

                {boxHeight40Data.map((box, index) => (
                    <Height40Beige key={index} {...box} />
                ))}

                {boxWidth40Data.map((box, index) => (
                    <Width40Beige key={index} {...box} />
                ))}
            </div>
        </div>
    );
}

export default Mondrian;