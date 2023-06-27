import React from "react";
import { NavBar } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hook";
import { updateAccount } from "../../store/appstore/thunks";

export const SettingsUser = () => {
  const { photoURL, displayName } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const {
    formState: { name, photo },
    onInputChange,
    setFileInputValue,
  } = useForm({
    name: "",
    photo: "",
  });

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setFileInputValue("photo", file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAccount(name, photo));
  };

  return (
    <>
      <NavBar />
      <main className="containerStore">
        <section className="mt-24 p-4 shadow-md shadow-slate-200">
          <h2 className="text-center text-2xl mb-2">
            Actualizar datos de perfil
          </h2>
          <form
            action=""
            className="flex flex-col gap-4 md:grid"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col justify-center items-center">
              {photoURL ? (
                <img
                  src={photoURL}
                  alt="user"
                  className="w-56 rounded-full p-2"
                />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
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
              )}

              <input
                type="file"
                accept=".jpg, .png"
                className="file-input file-input-bordered file-input-success w-full max-w-xs"
                name="photo"
                onChange={handleFileInputChange}
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Nombre actual: {displayName}</span>
              </label>
              <input
                type="text"
                placeholder="Actualiza tu nombre aqui"
                className="input input-bordered w-full max-w-xs"
                name="name"
                value={name}
                onChange={onInputChange}
              />
            </div>
            <button
              disabled={!photo && !name}
              className="h-10 gap-2 col-start-2 mt-3 whitespace-nowrap rounded bg-teal-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-teal-200 transition duration-300 hover:bg-teal-600 hover:shadow-sm hover:shadow-teal-200 focus:bg-teal-700 focus:shadow-sm focus:shadow-teal-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-300 disabled:shadow-none"
              type="submit"
            >
              <span>Guardar cambios</span>
            </button>
          </form>
        </section>
      </main>
    </>
  );
};
