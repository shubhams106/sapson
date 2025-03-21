import Image from "next/image";
import Link from "next/link";
import React from "react";

import ROUTES from "@/constants/routes";

interface Props {
  product: Product;
}

// product: { _id, productName, imageUrl, mrp, packing, description, category, salt },

const ProductCard = ({
  product: { ProductName, ImageUrl, Mrp, Packing, Composition },
}: Props) => {
  return (
<Link href={ROUTES.ASK_QUERY}>
    <div className="card-wrapper w-full rounded-[10px] p-4">
    <Image
      src={ImageUrl}
      alt={ProductName}
      width={500}
      height={300}
      className="rounded-t-[10px] object-cover"
    />
    
    <div className="mt-4 space-y-2">
        <h3 className="text-dark200_light900 h3-semibold flex-center">
          {ProductName}
        </h3>
      
      <div className="text-dark400_light700 flex flex-col items-center gap-2">
        <p className="base-medium">MRP: ₹{Mrp}</p>
        <p className="paragraph-regular">Packing: {Packing}</p>
        <p className="paragraph-regular">Composition: {Composition}</p>
      </div>
    </div>
  </div>
  </Link>
  );
};

export default ProductCard;
