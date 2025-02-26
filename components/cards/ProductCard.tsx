import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";

interface Props {
  product: Product;
}


const ProductCard = ({
  product: { _id, productName, imageUrl, mrp, packing, description, category, salt },
}: Props) => {
  return (
<Link href={ROUTES.ASK_QUERY}>
    <div className="card-wrapper w-full rounded-[10px] p-4">
    <Image
      src={imageUrl}
      alt={productName}
      width={500}
      height={300}
      className="rounded-t-[10px] object-cover"
    />
    
    <div className="mt-4 space-y-2">
        <h3 className="text-dark200_light900 h3-semibold flex-center">
          {productName}
        </h3>
      
      <div className="text-dark400_light700 flex flex-col items-center gap-2">
        <p className="base-medium">MRP: ₹{mrp}</p>
        <p className="paragraph-regular">Packing: {packing}</p>
        <p className="paragraph-regular">Salt: {salt}</p>
      </div>
    </div>
  </div>
  </Link>
  );
};

export default ProductCard;
