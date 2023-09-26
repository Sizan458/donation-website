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
    <img src={image}  className="h-[500px] w-full "></img>
    <h2 className="text-2xl font-bold text-black">{title}</h2>
    <p className="">{discussion}</p>
   
    <div className=" absolute bg-black w-[96%]  opacity-50 h-[70px] mt-[429px]"  >
    <div className=" mt-3  ml-3">
      <button className="btn btn-primary   bg-red-500 text-white" onClick={handleClick}>Donate {price}$</button>
    </div>
    </div>
  
  </div>
</div>
        </div>
    );
};

export default DonationCard;