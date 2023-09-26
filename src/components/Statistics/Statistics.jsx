
import { PieChart, Pie,  Tooltip, } from 'recharts';





const Statistics = () => {
 
    
   
    const data=[
      {id:1,name:"Total Donation%",value:100},
      {id:2,name:"My Donation%",value:56},
     
    ]
   
    
   return (
      <div >
       
        <PieChart width={1200} height={500}>
            <Pie data={data} dataKey="value" cx="50%" cy="40%" outerRadius={150} fill="#CB7E43 "  />
            <Tooltip/>
            </PieChart>
        
      </div>
      
    );
};

export default Statistics;