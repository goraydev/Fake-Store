import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutAction } from "../../store/auth/thunks";
import {
  startProductsByCategory,
  startProductsByTitle,
} from "../../store/appstore/thunks";
import { useForm } from "../../hooks/useForm";
import { sumTotalCart } from "../../helpers/sumTotalCart";

export const NavBar = () => {
  const { photoURL } = useSelector((state) => state.auth);
  const { allCategories, myCart } = useSelector((state) => state.appstore);

  const {
    formState: { search },
    onInputChange,
  } = useForm({
    search: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(startProductsByTitle(search));
    navigate(`/productos/producto/${search}}`);
  };

  return (
    <div className="navbar bg-teal-500 fixed top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown block md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Portfolio</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          FauxMart
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0}>
            <details>
              <summary>Categorias</summary>
              <ul className="p-2">
                {allCategories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={`/productos/categorias/${category}`}
                      onClick={() =>
                        dispatch(startProductsByCategory(category))
                      }
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="form-control">
          <form action="" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Buscar por nombre"
              className="input input-bordered w-24 md:w-auto"
              name="search"
              value={search}
              onChange={onInputChange}
            />
          </form>
        </div>
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
              <span className="badge badge-sm indicator-item">
                {myCart.length}
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">
                {myCart.length} productos
              </span>
              <span className="text-slate-400">
                Total: {sumTotalCart(myCart)}
              </span>
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
