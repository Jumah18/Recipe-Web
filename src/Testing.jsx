import React from "react";

const testing = () => {
  return (
    <div>
      {/* Second test prompt */}
      <div className="p-6 sm:p-10 m-0 w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
          Garlic Knot Chicken Breasts
        </h1>

        <div className="text-white flex flex-col xl:flex-row justify-center items-center  p-5">
          <div className=" ">
            <img
              src="https://www.simplyrecipes.com/thmb/qkRyHMXNtnytpTr9Jo7UPipJhT8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Garlic-Knot-Chicken-LEAD-2-7d7087b6f7df4b688eb31739c801733e.jpg"
              alt="Garlic not"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-[#213547] p-5 text-left">
          {/* <div className=" flex flex-col justify-center bg-[#213547] p-5 text-left"> */}
            <h2>
            {/* <h2 className="text-left text-lg sm:text-xl md:text-2xl font-bold mb-4 text-white"> */}
              Recipe
            </h2>
            <ul className="text-sm sm:text-base">
              <li>2 tablespoons olive oil</li>
              <li>6 tablespoons unsalted butter, divided</li>
              <li>4 chicken cutlets (about 1 1/2 pounds)</li>
              <li>1 teaspoon kosher salt, plus more to taste</li>
              <li>1/2 teaspoon freshly ground black pepper</li>
              <li>4 large cloves garlic, minced</li>
              <li>1/4 cup packed fresh parsley leaves and tender stems</li>
              <li>1/4 cup finely grated Parmesan cheese</li>
              <li>1 lemon, cut into wedges (optional)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default testing;
