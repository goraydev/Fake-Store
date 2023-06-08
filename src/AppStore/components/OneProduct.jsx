import { useParams } from "react-router-dom";
import { NavBar } from "./NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startProductById } from "../../store/appstore/thunks";
import { Rating } from "./Rating";

export const OneProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startProductById(id));
  }, []);

  const { productActive } = useSelector((state) => state.appstore);

  return (
    <>
      <NavBar />

      {productActive && (
        <main className="containerStore">
          <div className="mt-24 flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
            <figure className="flex-1">
              <img
                src={productActive.image}
                alt="card image"
                className="aspect-square"
              />
            </figure>
            <div className="flex-1 p-6 sm:mx-6 sm:px-0">
              <header className="flex gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-medium text-slate-700">
                    {productActive.title}
                  </h3>
                  <p className="text-sm text-slate-400">
                    {" "}
                    {productActive.category}
                  </p>
                </div>
              </header>
              <p>{productActive.description}</p>
              <p className="py-4 text-3xl">${productActive.price}</p>
            </div>
          </div>

          <div className="flex flex-col items-center py-4 gap-2 shadow-md shadow-slate-200">
            <h4 className="font-bold text-slate-700">Valoración</h4>
            <Rating />
            <span className="text-xs leading-6 text-slate-400">
              Basado en {productActive.rating.count} reseñas de usuarios
            </span>
          </div>
        </main>
      )}
    </>
  );
};
