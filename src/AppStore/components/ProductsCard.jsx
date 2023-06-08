import { useEffect } from "react";
import {
  startGetCategories,
  startGetProducts,
} from "../../store/appstore/thunks";
import { useDispatch, useSelector } from "react-redux";

export const ProductsCard = () => {
  const { allProducts, isLoading } = useSelector((state) => state.appstore);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetProducts());
    dispatch(startGetCategories());
  }, []);

  return (
    <main className="containerStore">
      <div className="cards">
        <ul className="cards_list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-24 mb-10">
          {!isLoading &&
            allProducts.map((product) => (
              <li key={product.id}>
                <div className="overflow-hidden  rounded bg-white text-slate-500 shadow-md shadow-slate-200">
                  <figure>
                    <img
                      src={product.image}
                      alt="card image"
                      className="aspect-square w-full"
                    />
                  </figure>

                  <div className="p-6">
                    <header className="mb-4">
                      <h3 className="text-xl font-medium text-slate-700">
                        {product.title}
                      </h3>
                      <h6 className="badge badge-neutral">
                        {product.category}
                      </h6>
                    </header>
                    <p className=" text-slate-400">${product.price}</p>
                  </div>
                  <div className="flex justify-end p-6 pt-0">
                    <button className="inline-flex h-10 w-full items-center justify-center gap-2 whitespace-nowrap rounded bg-teal-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-teal-600 focus:bg-teal-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-300 disabled:shadow-none">
                      <span>Ver más</span>
                    </button>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </main>
  );
};
