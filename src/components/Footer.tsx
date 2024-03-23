const Footer = () => {
  return (
    <footer className="text-sm w-full border border-t-2 text-center dark:bg-slate-900 bg-slate-100 py-4">
      <p>
        Made with 💗 by{" "}
        <a
          className="text-sky-900 dark:text-sky-500 dark:hover:text-sky-600 font-semibold hover:text-sky-400 transition"
          href="https://nadahasnim.vercel.app"
        >
          Nada Hasni M
        </a>
      </p>
      <p>
        Powered by{" "}
        <a
          className="text-sky-900 dark:text-sky-500 dark:hover:text-sky-600 font-semibold hover:text-sky-400 transition"
          href="https://ai.google.dev/"
        >
          Google Gemini
        </a>
      </p>
    </footer>
  );
};

export default Footer;
