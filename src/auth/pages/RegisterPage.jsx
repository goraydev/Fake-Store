import { useState } from "react";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { useForm } from "../../hook/useForm";

export const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const {
    formState: { displayName, email, password },
    formState,
    onInputChange,
    onResetForm,
  } = useForm({
    displayName: "",
    email: "",
    password: "",
  });

  const handleRegisterPage = (e) => {
    e.preventDefault();
    if ([displayName, email, password].some((i) => i === "")) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Hay campos vacíos",
      });
    }

    dispatch(
      startCreatingUserWithEmailPassword({ email, password, displayName })
    );
  };

  return (
    <>
      <section className="containerStore grid md:h-screen md:grid-cols-2 items-center justify-center">
        <picture className="animation">
          <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_evuhbe40.json"
            background="transparent"
            speed="1"
            autoplay
          ></lottie-player>
        </picture>
        <div className="flex flex-col">
          <h1 className="text-2xl text-teal-500 font-bold self-center">
            Registrarse
          </h1>
          <form action="" onSubmit={handleRegisterPage} aria-label="form-register">
            <div className="relative my-6">
              <input
                id="id-l04"
                type="text"
                placeholder="Nombre completo"
                className="peer relative h-12 w-full border-b border-slate-200 px-4 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-teal-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                name="displayName"
                value={displayName}
                onChange={onInputChange}
              />
              <label
                htmlFor="id-l04"
                className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-teal-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
              >
                Nombre completo
              </label>
            </div>
            <div className="relative my-6">
              <input
                id="id-l10"
                type="email"
                placeholder="Correo electrónico"
                className="peer relative h-12 w-full border-b border-slate-200 px-4 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-teal-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                name="email"
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
                placeholder="Contraseña"
                className="peer relative h-12 w-full border-b border-slate-200 px-4 pr-12 text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-teal-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                name="password"
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
            <button
              className="inline-flex w-full h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-teal-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-teal-200 transition duration-300 hover:bg-teal-600 hover:shadow-sm hover:shadow-teal-200 focus:bg-teal-700 focus:shadow-sm focus:shadow-teal-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-teal-300 disabled:bg-teal-300 disabled:shadow-none"
              type="submit"
            >
              <span>Crear cuenta</span>
            </button>
          </form>

          <span className="self-start mt-8">
            ¿Ya tiene cuenta? {""}
            <Link to={"/"} className="hover:text-teal-500">
              Inicie sesión
            </Link>
          </span>
        </div>
      </section>
    </>
  );
};
