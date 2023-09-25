import { useEffect, useState  } from "react";
import DonationsCart from "./donationsCart";


const Donations = () => {
    const[cards,setCards]= useState([])
    const [notFound,setNotFound] = useState(false)
    const[isShow,setISShow] = useState(false)
    useEffect(() =>{
        const addToDonation = JSON.parse( localStorage.getItem('card'))
        if(addToDonation){
        setCards(addToDonation)
        }else{
            setNotFound('No Data Found')
        }
    },[])
    
    return (
        <div>
         {notFound?<p className="h-[50vh ] mx-auto flex justify-center items-center text-2xl text-red-500">{notFound}</p>:<div className="grid grid-cols-2 gap-3">
           
        {
              isShow ? cards.map(card=><DonationsCart key={card.id} card={card}></DonationsCart> ):
              cards.slice(0,4).map(card=><DonationsCart key={card.id} card={card}></DonationsCart> )
             
        }
            
      <div className="flex justify-center content-center lg:ml-[90%] mb-4">
        <button  onClick={()=>setISShow(!isShow)} >{isShow ? "" :"Show All"}</button>
      </div>
            </div>}</div>
        
    );

};

export default Donations;