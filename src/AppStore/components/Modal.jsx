import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../store/appstore/appstoreSlice";
import { startSavingProduct } from "../../store/appstore/thunks";
import { useRef } from "react";
import { getEnvironments } from "../../helpers/getEnvironments";

export const Modal = () => {
  const { productActive } = useSelector((state) => state.appstore);
  const modalRef = useRef(null);
  const dispatch = useDispatch();

  const hideModal = () => {
    if (modalRef.current) {
      getEnvironments().VITE_MODE !== "FakeStore en testing"
        ? modalRef.current.close()
        : null;
    }
  };

  const handleUpdateProduct = () => {
    dispatch(startSavingProduct());
    hideModal();
  };

  return (
    <dialog ref={modalRef} id="my_modal_3" className="modal">
      <form method="dialog" className="modal-box">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        {productActive && (
          <>
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
                aria-label="btn-update"
                type="button"
                className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded shadow-md focus-visible:outline-none whitespace-nowrap bg-teal-500 shadow-teal-200 hover:bg-teal-600 hover:shadow-sm hover:shadow-teal-200 focus:bg-teal-700 focus:shadow-sm focus:shadow-teal-200 disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-300 disabled:shadow-none"
                onClick={handleUpdateProduct}
              >
                <span>Actualizar compra</span>
              </button>
            </div>
          </>
        )}
      </form>
    </dialog>
  );
};
