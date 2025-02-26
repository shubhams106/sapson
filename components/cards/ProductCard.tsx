import Image from "next/image";
import React from "react";


interface Props {
  product: Product;
}


const ProductCard = ({
  product: { _id, productName, imageUrl, mrp, packing, description, category, salt },
}: Props) => {
  return (
    <div className="card-wrapper w-full rounded-[10px] p-4">
    <Image
      src={imageUrl}
      alt={productName}
      width={500}
      height={300}
      className="rounded-t-[10px] object-cover"
    />
    
    <div className="mt-4 space-y-2">
        <h3 className="text-dark200_light900 h3-semibold">
          {productName}
        </h3>
      
      <div className="text-dark400_light700">
        <p className="base-medium">MRP: ₹{mrp}</p>
        <p className="paragraph-regular">Packing: {packing}</p>
        <p className="paragraph-regular">Salt: {salt}</p>
      </div>
    </div>
  </div>
  );
};

export default ProductCard;
