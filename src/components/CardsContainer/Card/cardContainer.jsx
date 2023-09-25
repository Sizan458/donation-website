import { useLoaderData } from "react-router-dom";
import Card from "./Card";


const  Cards= () => {
    const cards = useLoaderData()
    console.log(cards)
    return (
        <div className="mt-7 grid grid-cols-4 gap-3 w-[95%] mx-auto">
          {
            cards.map(card=><Card key={card.id} card={card}></Card>)
          }
        </div>
    );
};

export default Cards;