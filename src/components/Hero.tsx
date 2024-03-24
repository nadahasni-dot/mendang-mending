const Hero = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold md:text-2xl">
        Bandingkan Sesuatu dengan Bantuan AI
      </h2>
      <p className="max-w-2xl text-sm md:text-base dark:text-slate-300 text-slate-600">
        Bagi kamu kamu <span className="italic underline">"Kaum mendang-mending"</span> yang suka membandingkan sesuatu,{" "}
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
