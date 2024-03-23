import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <header className="w-full py-4 mx-auto border-b-2 dark:bg-slate-900 bg-slate-100">
      <div className="container flex items-center justify-between gap-2 px-4 md:px-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold md:text-3xl rainbow">Mendang Mending</h1>
        </div>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Header;
