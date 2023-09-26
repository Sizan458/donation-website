import { useLoaderData } from "react-router-dom";
import Card from "./Card";


const  Cards= () => {
    const cards = useLoaderData()
    
    return (
        <div className="mt-7 grid  grid-cols-1 gap-3 w-[95%] mx-auto mb-3 md:grid-cols-2 lg:grid-cols-4" >
          {
            cards.map(card=><Card key={card.id} card={card}></Card>)
          }
        </div>
    );
};

export default Cards;