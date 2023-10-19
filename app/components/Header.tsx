import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 flex items-center justify-between h-24  teal-100 bg-slate-700">
      <Link href="/">
        <h1 className=" px-3 text-4xl font-bold text-amber-50">Word Document</h1>
      </Link>

      <nav>
        <ul className="list-none flex gap-2 px-3">
          <li className=" border-2 bg-inherit bg-slate-700 text-white p-2">
            <Link href="/preview">Preview</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
