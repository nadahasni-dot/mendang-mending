const Hero = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg md:text-xl font-semibold">
        Bandingkan Sesuatu dengan Bantuan AI
      </h2>
      <p className="text-xs md:text-sm dark:text-slate-300 text-slate-600 max-w-2xl">
        Bagi kamu kamu kaum mendang mending yang suka membandingkan sesuatu,{" "}
        <span className="font-semibold text-black dark:text-white">
          Mendang Mending
        </span>{" "}
        hadir untuk membantumu melakukan perbandingan dengan bantuan{" "}
        <span className="font-semibold text-black dark:text-white">
          GOOGLE Gemini AI
        </span>{" "}
        yang powerful!
      </p>
    </div>
  );
};

export default Hero;
