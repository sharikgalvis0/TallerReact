
import React from "react";
import Title from "../../components/Title";
import NavMenu from "../../components/NavMenu"; 
import Image from "../../components/Image"; 
import Button from "../../components/Button";
import Forms from "../../components/Forms";



const Home = () => {
    return (
        <div className="container">
            <NavMenu/>
            <Title/>
            <br/>
            <Image/>
            <Forms/>
            <Button/>
        
        </div>
    )
}

export default Home;