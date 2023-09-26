import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCard from "./DonationCard";


const Donation = () => {
    const[data,setData]=useState([])
    
    const {id}=useParams()
    
    const cards= useLoaderData()
    
    
useEffect(() => {
    const findCard=cards.find(card=>card.id==id);
    setData(findCard)
},[id,cards])

    return (
        <div>
            <DonationCard data={data}></DonationCard>
        </div>
    );
};

export default Donation;