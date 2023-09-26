
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PieChart, Pie,  Tooltip, } from 'recharts';





const Statistics = () => {
 const[total ,setTotal]=useState(0)
 const[myDonation,setMyDonation]=useState(0)
 const fixed= useLoaderData()
 useEffect(() => {  
  const addToDonation = JSON.parse( localStorage.getItem('card'))
    const donation=fixed.length


    setTotal(donation)
    const given = ((addToDonation.length /fixed.length)*100)
    setMyDonation(given)

 },[fixed])
    
   
    const data=[
      {id:1,name:"Total Donation%",value:total},
      {id:2,name:"My Donation%",value:myDonation},
     
    ]
   
    
   return (
      <div >
          <h1 className='text-center text-2xl text-black'>See your donation rate</h1>
        <PieChart width={300} height={400}  className='md:ml-[30%] lg:ml-[40%] mt-4 p-1'>
            <Pie  data={data} dataKey="value" cx="50%" cy="40%" outerRadius={150} fill="#CB7E43 "  />
            <Tooltip/>
            </PieChart>
        
      </div>
      
    );
};

export default Statistics;