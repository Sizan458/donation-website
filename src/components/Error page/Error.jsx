import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="flex justify-center items-center mt-[90px]">
            <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src="/public/7938315_3814246.jpg" alt="Shoes" /></figure>
  <div className="card-body">
   
    <Link to='/'>
    <div className="card-actions justify-center">
      <button className="btn btn-primary bg-red-300 text-black text-lg">Go To Home</button>
    </div>
    </Link>
  </div>
</div>
            </div>
        </div>
    );
};

export default Error;