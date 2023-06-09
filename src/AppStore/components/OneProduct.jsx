import { useParams } from "react-router-dom";
import { NavBar } from "./NavBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startProductById } from "../../store/appstore/thunks";
import { Rating } from "./Rating";
import {
  decrement,
  increment,
  startUpProducts,
} from "../../store/appstore/appstoreSlice";
import Swal from "sweetalert2";

export const OneProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startProductById(id));
  }, []);

  const { productActive } = useSelector((state) => state.appstore);

  const handleAddProduct = () => {
    dispatch(startUpProducts());
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Agregado al carrito",
      showConfirmButton: false,
      timer: 1500,
    });
  };

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
              <div className="flex flex-col">
                <div className="flex gap-4 items-center py-4">
                  <p>Unidades</p>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => dispatch(decrement())}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                  {productActive.amount}
                  <button
                    type="button"
                    className="btn"
                    onClick={() => dispatch(increment())}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </div>
                <button
                  type="button"
                  className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-md focus-visible:outline-none whitespace-nowrap bg-teal-500 shadow-teal-200 hover:bg-teal-600 hover:shadow-sm hover:shadow-teal-200 focus:bg-teal-700 focus:shadow-sm focus:shadow-teal-200 disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-300 disabled:shadow-none"
                  onClick={handleAddProduct}
                >
                  <span>Añadir al carrito</span>
                </button>
              </div>
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
