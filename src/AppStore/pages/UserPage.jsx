import { useDispatch, useSelector } from "react-redux";
import { NavBar } from "../components/NavBar";
import { deleteAccount } from "../../store/appstore/thunks";

export const UserPage = () => {
  const dispatch = useDispatch();
  const { photoURL, displayName, email } = useSelector((state) => state.auth);

  const handleDeleteMyAccount = () => {
    dispatch(deleteAccount());
  };

  return (
    <>
      <NavBar />
      <main className="containerStore">
        <div className=" mt-36 overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
          <div className="p-6">
            <header className="mb-4 flex gap-4">
              <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white">
                {photoURL && <img src={photoURL} alt="user" />}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  className="icon icon-tabler icon-tabler-user-circle"
                  viewBox="0 0 24 24"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <path d="M3 12a9 9 0 1018 0 9 9 0 10-18 0"></path>
                  <path d="M9 10a3 3 0 106 0 3 3 0 10-6 0M6.168 18.849A4 4 0 0110 16h4a4 4 0 013.834 2.855"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-medium text-slate-700">
                  {displayName}
                </h3>
                <p className="text-sm text-slate-400">{email}</p>
                <button
                  onClick={handleDeleteMyAccount}
                  className="my-2 inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide text-white transition duration-300 rounded whitespace-nowrap bg-red-500 hover:bg-red-600 focus:bg-red-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-red-300 disabled:bg-red-300 disabled:shadow-none"
                  type="button"
                >
                  <span>Eliminar mi cuenta</span>
                </button>
              </div>
            </header>
          </div>
        </div>
      </main>
    </>
  );
};
