import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "../components/NavBar";
import { sumTotalCart } from "../../helpers/sumTotalCart";
import { Link } from "react-router-dom";
import { startShowProductCart } from "../../store/appstore/appstoreSlice";
import { startDeletingProductCart } from "../../store/appstore/thunks";
import { Modal } from "../components/Modal";
import { PaymentMethod } from "../components/PaymentMethod";

export const CheckoutPage = () => {
  const { myCart } = useSelector((state) => state.appstore);

  const dispatch = useDispatch();

  const handleShowProduct = (id) => {
    dispatch(startShowProductCart(id));
    window.my_modal_3.showModal();
  };

  const handleDeleteProduct = (id) => {
    dispatch(startDeletingProductCart(id));
  };

  return (
    <>
      <NavBar />
      <Modal />
      <main className="containerStore">
        <section className="mt-24 grid grid-cols-2 gap-10">
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
                        onClick={() => handleShowProduct(productCart.id)}
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        className="btn bg-red-400"
                        onClick={() => handleDeleteProduct(productCart.id)}
                      >
                        Eliminar
                      </button>
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
          <PaymentMethod />
        </section>
      </main>
    </>
  );
};
