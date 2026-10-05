function ProductCard(props) {
  return (
    <div className="rounded-lg border border-gray-300 p-4">
      <img className="h-40 w-full object-contain" src={props.image} alt={props.name} />

      <h2 className="mt-3 text-lg font-bold">{props.name}</h2>
      <p>{props.price} AZN</p>
      <p className="text-gray-600">{props.category}</p>

      <button
        type="button"
        className="mt-3 cursor-pointer rounded bg-blue-600 px-4 py-2 text-white"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
