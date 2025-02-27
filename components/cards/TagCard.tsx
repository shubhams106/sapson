import Image from "next/image";
import React from "react";

import { Badge } from "../ui/badge";

interface Props {
  name: string;
  remove?: boolean;
  handleRemove?: () => void;
}

const TagCard = ({
  name,
  remove,
  handleRemove,
}: Props) => {

    return (

      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 flex flex-row gap-2 rounded-md border-none px-4 py-2 uppercase">
      <div className="flex-center space-x-2">
        <span>{name}</span>
      </div>

      {remove && (
        <Image
          src="/icons/close.svg"
          width={12}
          height={12}
          alt="close icon"
          className="cursor-pointer object-contain invert-0 dark:invert"
          onClick={handleRemove}
        />
      )}
    </Badge>
    )
};

export default TagCard;
