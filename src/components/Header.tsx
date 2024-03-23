import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <header className="dark:bg-slate-900 bg-slate-100 border-b-2 py-4 mx-auto w-full">
      <div className="container flex justify-between px-4 md:px-8 items-center gap-2">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-xl md:text-3xl rainbow">Mendang Mending</h1>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
