export const PaymentMethod = () => {
  return (
    <div>
      <h2 className="text-xl pt-4 pl-4">Métodos de pago</h2>
      <div className="shadow-md shadow-slate-200 p-4">
        <form action="" className="flex flex-col gap-2 mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Número de la tarjeta</span>
            </label>
            <input
              type="text"
              placeholder="XXXX-XXXX-XXXX-XXX"
              className="input input-bordered input-success w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Propietario de la tarjeta</span>
            </label>
            <input
              type="text"
              placeholder="NOMBRES Y APELLIDOS"
              className="input input-bordered input-success w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">CSV</span>
            </label>
            <input
              type="text"
              placeholder=""
              className="input input-bordered input-success w-1/2"
            />
          </div>
          <button
            className="h-10 flex items-center justify-center gap-2 mt-3 whitespace-nowrap rounded bg-teal-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-teal-200 transition duration-300 hover:bg-teal-600 hover:shadow-sm hover:shadow-teal-200 focus:bg-teal-700 focus:shadow-sm focus:shadow-teal-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-300 disabled:shadow-none"
            type="submit"
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
                d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
              />
            </svg>

            <span>Pagar con tarjeta</span>
          </button>
        </form>

        <div className="">
          <p className="text-center">O paga con </p>
          <button
            type="button"
            className="w-full py-6 h-10 flex items-center justify-center gap-2 mt-3 whitespace-nowrap rounded bg-teal-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-teal-200 transition duration-300 hover:bg-teal-600 hover:shadow-sm hover:shadow-teal-200 focus:bg-teal-700 focus:shadow-sm focus:shadow-teal-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-300 disabled:shadow-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-paypal"
              width="30"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 13l2.5 0c2.5 0 5 -2.5 5 -5c0 -3 -1.9 -5 -5 -5h-5.5c-.5 0 -1 .5 -1 1l-2 14c0 .5 .5 1 1 1h2.8l1.2 -5c.1 -.6 .4 -1 1 -1zm7.5 -5.8c1.7 1 2.5 2.8 2.5 4.8c0 2.5 -2.5 4.5 -5 4.5h-2.6l-.6 3.6a1 1 0 0 1 -1 .8l-2.7 0a.5 .5 0 0 1 -.5 -.6l.2 -1.4" />
            </svg>
            <span>PayPal</span>
          </button>
        </div>
      </div>
    </div>
  );
};
