import { useEffect, useState } from "react";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth/thunks";
import Swal from "sweetalert2";

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state.auth);

  const {
    formState,
    formState: { email, password },
    onInputChange,
    onResetForm,
  } = useForm({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([email, password].some((input) => input === "")) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hay campos vacíos",
      });
    }

    dispatch(startLoginWithEmailPassword({ email, password }));
  };
  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <>
      <section className="mx-10 mt-40 grid md:grid-cols-2 items-center justify-center">
        <picture>
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_5tkzkblw.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </picture>
        <div className="flex flex-col">
          <h1 className="text-2xl text-teal-500 font-bold self-center">
            FauxMart
          </h1>
          <form action="" onSubmit={handleSubmit}>
            <div className="relative my-6">
              <input
                id="id-l10"
                type="email"
                name="email"
                placeholder="Correo electrónico"
                className="peer relative h-12 w-full border-b border-slate-200 px-4 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-teal-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                value={email}
                onChange={onInputChange}
              />
              <label
                htmlFor="id-l10"
                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-teal-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Correo electrónico
              </label>
            </div>
            <div className="relative my-6">
              <input
                id="id-l14"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Contraseña"
                className="peer relative h-12 w-full border-b border-slate-200 px-4 pr-12 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-teal-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                value={password}
                onChange={onInputChange}
              />
              <label
                htmlFor="id-l14"
                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-teal-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Contraseña
              </label>
              {showPassword ? (
                <svg
                  onClick={() => setShowPassword(!showPassword)}
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-3 right-4 h-6 w-6 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-6 description-6"
                  role="graphics-symbol"
                >
                  <title id="title-6">Check mark icon</title>
                  <desc id="description-6">Icon description here</desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => setShowPassword(!showPassword)}
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute top-3 right-4 h-6 w-6 cursor-pointer stroke-slate-400 peer-disabled:cursor-not-allowed"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="title-6d description-6d"
                  role="graphics-symbol"
                >
                  <title id="title-6d">Check mark icon</title>
                  <desc id="description-6d">Icon description here</desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
              )}
            </div>

            {errorMessage !== null &&
              errorMessage.includes("wrong-password") && (
                <div
                  className="w-full px-4 py-3 text-sm text-pink-500 border border-pink-100 rounded bg-pink-50"
                  role="alert"
                >
                  <p>Correo o Contraseña esta mal escrito</p>
                </div>
              )}
            {errorMessage !== null && errorMessage.includes("not-found") && (
              <div
                className="w-full px-4 py-3 text-sm text-pink-500 border border-pink-100 rounded bg-pink-50"
                role="alert"
              >
                <p>Usuario no existe</p>
              </div>
            )}
            <button
              className="h-10 mx-auto gap-2 mt-3 whitespace-nowrap rounded bg-teal-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-teal-200 transition duration-300 hover:bg-teal-600 hover:shadow-sm hover:shadow-teal-200 focus:bg-teal-700 focus:shadow-sm focus:shadow-teal-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-300 disabled:shadow-none"
              type="submit"
            >
              <span>Iniciar sesión</span>
            </button>
          </form>
          <p className="mt-4 mx-auto">O inicia sesión con</p>
          <button
            className="mt-4 flex flex-col justify-center items-center"
            type="button"
            onClick={onGoogleSignIn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 512 168"
            >
              <path
                fill="#FF302F"
                d="M496.052 102.672l14.204 9.469c-4.61 6.79-15.636 18.44-34.699 18.44-23.672 0-41.301-18.315-41.301-41.614 0-24.793 17.816-41.613 39.308-41.613 21.616 0 32.206 17.193 35.633 26.475l1.869 4.735-55.692 23.049c4.236 8.348 10.84 12.584 20.183 12.584 9.345 0 15.823-4.61 20.495-11.525zM452.384 87.66l37.19-15.45c-2.056-5.17-8.16-8.845-15.45-8.845-9.281 0-22.176 8.223-21.74 24.295z"
              ></path>
              <path
                fill="#20B15A"
                d="M407.407 4.931h17.94v121.85h-17.94V4.93z"
              ></path>
              <path
                fill="#3686F7"
                d="M379.125 50.593h17.318V124.6c0 30.711-18.128 43.357-39.558 43.357-20.183 0-32.33-13.58-36.878-24.606l15.885-6.604c2.865 6.79 9.78 14.827 20.993 14.827 13.767 0 22.24-8.535 22.24-24.482v-5.98h-.623c-4.112 4.983-11.961 9.468-21.928 9.468-20.807 0-39.87-18.128-39.87-41.488 0-23.486 19.063-41.8 39.87-41.8 9.905 0 17.816 4.423 21.928 9.282h.623v-5.98zm1.245 38.499c0-14.702-9.78-25.417-22.239-25.417-12.584 0-23.174 10.715-23.174 25.417 0 14.514 10.59 25.042 23.174 25.042 12.46.063 22.24-10.528 22.24-25.042z"
              ></path>
              <path
                fill="#FF302F"
                d="M218.216 88.78c0 23.984-18.688 41.613-41.613 41.613-22.924 0-41.613-17.691-41.613-41.613 0-24.108 18.689-41.675 41.613-41.675 22.925 0 41.613 17.567 41.613 41.675zm-18.19 0c0-14.95-10.84-25.23-23.423-25.23-12.583 0-23.423 10.28-23.423 25.23 0 14.826 10.84 25.23 23.423 25.23 12.584 0 23.423-10.404 23.423-25.23z"
              ></path>
              <path
                fill="#FFBA40"
                d="M309.105 88.967c0 23.984-18.689 41.613-41.613 41.613-22.925 0-41.613-17.63-41.613-41.613 0-24.108 18.688-41.613 41.613-41.613 22.924 0 41.613 17.443 41.613 41.613zm-18.253 0c0-14.95-10.839-25.23-23.423-25.23-12.583 0-23.423 10.28-23.423 25.23 0 14.826 10.84 25.23 23.423 25.23 12.646 0 23.423-10.466 23.423-25.23z"
              ></path>
              <path
                fill="#3686F7"
                d="M66.59 112.328c-26.102 0-46.534-21.056-46.534-47.158 0-26.101 20.432-47.157 46.534-47.157 14.079 0 24.357 5.544 31.957 12.646l12.522-12.521C100.479 7.984 86.338.258 66.59.258 30.833.259.744 29.414.744 65.17c0 35.758 30.089 64.912 65.846 64.912 19.312 0 33.889-6.354 45.289-18.19 11.711-11.712 15.324-28.158 15.324-41.489 0-4.174-.498-8.472-1.059-11.649H66.59v17.318h42.423c-1.246 10.84-4.672 18.253-9.718 23.298-6.105 6.168-15.76 12.958-32.705 12.958z"
              ></path>
            </svg>
          </button>

          <span className="self-start mt-8">
            ¿No tiene cuenta? {""}
            <Link to={"/registrarse"} className="hover:text-teal-500">
              Registrese
            </Link>
          </span>
        </div>
      </section>
    </>
  );
};
