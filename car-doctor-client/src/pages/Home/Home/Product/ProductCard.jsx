import { FaShoppingCart } from "react-icons/fa";
import Rating from "react-rating";

const ProductCard = ({ product }) => {
    const { name, price, image, rating } = product;

    return (
        <div className="card card-compact w-full bg-base-800 shadow-xl">
            <figure>
                <img className="h-60 p-2 rounded-xl" src={image} alt={name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-xl md:text-2xl lg:text-2xl xl:text-2xl">{name}</h2>

                <div className="card-actions flex items-center mt-3">
                    <p className="text-[#FF3811] font-bold text-xl sm:mr-4 md:mr-8 lg:mr-12 xl:mr-16">Price: ${price}</p>
                    <Rating
                        emptySymbol={<span className="text-[#D3D3D3] text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl">&#9733;</span>}
                        fullSymbol={<span className="text-[#FF912C] text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl">&#9733;</span>}
                        initialRating={rating}
                        readonly
                    />
                    <p className="text-[#FF912C] ml-2 sm:ml-4 md:ml-6 lg:ml-8 xl:ml-10 font-bold">{rating.toFixed(1)}</p>
                    <p className="text-[#FF3811] text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl"><FaShoppingCart /></p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
