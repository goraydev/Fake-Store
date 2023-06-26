import * as LottiePlayer from "@lottiefiles/lottie-player";
import { Link } from "react-router-dom";
export const PaymentCompleted = () => {
  return (
    <div className="containerStore h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl text-center">Pago exitoso</h2>
      <div className="w-64">
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player
          src="https://assets8.lottiefiles.com/packages/lf20_pBawUjQ12v.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
      <Link
        to={"/"}
        className="text-xl text-center flex justify-center items-center hover:text-teal-500"
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
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <p>Volver a la tienda</p>
      </Link>
    </div>
  );
};
