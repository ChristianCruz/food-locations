import React, { useState } from "react";
import Data from "../../shared/Data";
import Image from "next/image";

function CategoryList() {
  const [categoryList, setCategoryList] = useState(Data.CategoryListData);
  const [selectedCategory, setSelectedCategory] = useState();
  return (
    <div>
      <p className="font-bold">Select Food Type:</p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {categoryList.map((item, index) => (
          // We need to apply dynamic css for the selection to work onClick
          <div
            className={`flex flex-col justify-center items-center bg-gray-100 p-2 m-2 rounded-md grayscale hover:grayscale-0 cursor-pointer
            ${selectedCategory == index ? "grayscale-0 drop-shadow-md" : null}`}
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
