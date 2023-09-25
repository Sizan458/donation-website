import swal from 'sweetalert';



const DonationCard = ({data}) => {
    const{image,discussion,title,price}=data
    const handleClick = () => {
      const newArray = [];
      const addToDonation = JSON.parse( localStorage.getItem('card'))
      if(!addToDonation){
        newArray.push(data)
        localStorage.setItem('card', JSON.stringify(newArray))
        swal("Good job!", "Thanks For Donation", "success");
      }else{
        newArray.push(...addToDonation, data)
        localStorage.setItem('card', JSON.stringify(newArray))
        swal("Good job!", "Thanks For Donation", "success");
      }
      console.log(data)
    

    }
    return (
        <div className="p-5">
            <div className="card  bg-base-100 shadow-xl">
  <div className="card-body">
    <img src={image}  className="h-[500px] p-1  "></img>
    <h2 className="text-2xl font-bold text-black">{title}</h2>
    <p className="">{discussion}</p>
   
    <div className="card-actions ">
      <button className="btn btn-primary  -mt-[195px] ml-4 w-[130px]" onClick={handleClick}>Donate {price}$</button>
    </div>
  
  </div>
</div>
        </div>
    );
};

export default DonationCard;