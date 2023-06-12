import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "../components/NavBar";
import { sumTotalCart } from "../../helpers/sumTotalCart";
import { Link } from "react-router-dom";
import { startUpdateCart } from "../../store/appstore/appstoreSlice";

export const CheckoutPage = () => {
  const { myCart } = useSelector((state) => state.appstore);

  const dispatch = useDispatch();

  const handleUpdateProduct = (id) => {
    dispatch(startUpdateCart(id));
  };

  return (
    <>
      <NavBar />
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
