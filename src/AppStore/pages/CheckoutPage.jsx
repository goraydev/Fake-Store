import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "../components/NavBar";
import { sumTotalCart } from "../../helpers/sumTotalCart";
import { Link } from "react-router-dom";
import {
  decrement,
  increment,
  startUpdateCart,
} from "../../store/appstore/appstoreSlice";

export const CheckoutPage = () => {
  const { myCart, productActive } = useSelector((state) => state.appstore);

  const dispatch = useDispatch();

  const handleUpdateProduct = (id) => {
    dispatch(startUpdateCart(id));
    window.my_modal_3.showModal();
  };

  return (
    <>
      <NavBar />
      <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
          <h3 className="font-bold text-lg">{productActive.title}</h3>
          <div className="text-xs text-slate-800 flex flex-col justify-end">
            <span>SubTotal: {productActive.total}</span>
            <p>Cantidad: {productActive.amount}</p>
          </div>
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
            >
              <span>Añadir al carrito</span>
            </button>
          </div>
        </form>
      </dialog>
      <main className="containerStore">
        <section className="mt-24 grid grid-cols-2">
          <div className="myCart">
            <ul className="divide-y divide-slate-100 shadow-md shadow-slate-200">
              {myCart &&
                myCart.map((productCart) => (
                  <li
                    className="flex items-center gap-4 px-4 py-3"
                    key={productCart.id}
                  >
                    <div className="flex shrink-0 items-center self-center">
                      <img
                        src={productCart.image}
                        alt="product image"
                        className="w-12 rounded"
                      />
                    </div>

                    <div className="flex min-h-[2rem] min-w-0 flex-1 flex-col items-start justify-center gap-0">
                      <h4 className="w-full truncate text-base text-slate-700">
                        <Link to={`/producto/${productCart.id}`}>
                          {productCart.title}
                        </Link>
                      </h4>
                    </div>
                    <div className="text-xs text-slate-400 flex flex-col justify-end items-end">
                      <span>SubTotal: {productCart.total}</span>
                      <p>Cantidad: {productCart.amount}</p>
                    </div>
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn bg-amber-400"
                        onClick={() => handleUpdateProduct(productCart.id)}
                      >
                        Editar
                      </button>
                      <button className="btn bg-red-400">Eliminar</button>
                    </div>
                  </li>
                ))}
              <li
                className="flex items-center gap-4 px-4 py-3"
                key={myCart?.length}
              >
                <div className="flex min-h-[2rem] min-w-0 flex-1 flex-col items-start justify-center gap-0">
                  <h4 className="w-full truncate text-base text-slate-700">
                    Total a pagar
                  </h4>
                </div>
                <div className="text-xs text-slate-400 flex flex-col justify-end items-end">
                  {sumTotalCart(myCart)}
                </div>
              </li>
            </ul>
          </div>
          <div className="checkout"></div>
        </section>
      </main>
    </>
  );
};
