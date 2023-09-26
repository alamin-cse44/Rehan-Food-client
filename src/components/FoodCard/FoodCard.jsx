const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  
  const handleAddToCart = item => {
    
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-5 top-5 rounded px-3 py-1 bg-slate-900 text-white">
        {price}
      </p>
      <div className="card-body flex justify-center items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline bg-slate-100  border-0 border-orange-400 border-b-4 mt-4 text-black">
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
