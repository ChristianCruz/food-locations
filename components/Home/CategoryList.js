import React, { useState } from "react";
import Data from "../../shared/Data";
import Image from "next/image";

function CategoryList() {
  const [categoryList, setCategoryList] = useState(Data.CategoryListData);
  const [selectedCategory, setSelectedCategory] = useState();
  return (
    <div>
      <p className="font-bold">Select Food Type:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {categoryList.map((item, index) => (
          <div
            className="flex flex-col justify-center items-center bg-gray-100 p-2 m-2 rounded-md grayscale hover:grayscale-0 cursor-pointer"
            onClick={() => setSelectedCategory(index)}
          >
            <Image src={item.icon} alt={item.name} width={40} height={40} />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
export default CategoryList;
