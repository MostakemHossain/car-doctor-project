import { FaShoppingCart } from "react-icons/fa";
import Rating from "react-rating";

const ProductCard = ({ product }) => {
    const { name, price, image, rating } = product;

    return (
        <div className="card card-compact w-96 bg-base-800 shadow-xl">
            <figure><img className="h-60 p-2 rounded-xl" src={image} alt={name} /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{name}</h2>

                <div className="card-actions flex items-center mb-3">
                    <p className="text-[#FF3811] font-bold text-xl mr-40">Price: ${price}</p>
                    <Rating
                        emptySymbol={<span className="text-[#D3D3D3] text-2xl">&#9733;</span>}
                        fullSymbol={<span className="text-[#FF912C] text-2xl">&#9733;</span>}
                        initialRating={rating}
                        readonly
                    />
                    <p className="text-[#FF912C] mr-32 font-bold ml-2">{rating.toFixed(1)}</p>
                    <p className="text-[#FF3811] text-2xl "><FaShoppingCart /></p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
