import { Link } from "react-router-dom";


const Card = ({card}) => {
  const {id,image,category,title,colors}=card
    return (
        <div>
           <Link to={`/donation/${id}`}>
           <div className="card  bg-base-100 shadow-xl  " >
  <figure><img src={image} className="h-[250px] w-[300px] py-4" /></figure>
  <div className="card-body">
    <div >
    <h2 className="card-title" >{category}</h2>
    </div>
    <p className="text-center  ">{title}</p>
   
  </div>
</div>
           </Link>
        </div>
    );
};

export default Card;