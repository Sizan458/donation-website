

const DonationCard = ({data}) => {
    const{image,discussion,title,price}=data
    return (
        <div className="p-5">
            <div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
    <img src={image}  className="h-[500px] p-1  "></img>
    <h2 className="text-2xl font-bold text-black">{title}</h2>
    <p className="">{discussion}</p>
    <div className="card-actions ">
      <button className="btn btn-primary  -mt-[195px] ml-4 w-[130px]">Price {price}$</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default DonationCard;