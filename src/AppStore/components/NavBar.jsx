import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAction } from "../../store/auth/thunks";

export const NavBar = () => {
  const { photoURL } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <div className="navbar bg-teal-500">
      <div className="flex-1">
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          FauxMart
        </Link>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-slate-400">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn bg-teal-500 btn-block">
                  Ver carrito
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {photoURL && <img src={photoURL} alt="user" />}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="44"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <Link>Settings</Link>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
