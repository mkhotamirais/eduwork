import { NavLink, Outlet, ScrollRestoration } from "react-router-dom";
import { AsideGrid, H2 } from "../components/Tags";

const navQuestion = [
  { to: "/", title: "home" },
  { to: "asynchronous", title: "asynchronous" },
  { to: "hook", title: "hook react" },
  { to: "hookThree", title: "useEffect, useState, useReducer" },
  { to: "middleware", title: "middleware express" },
  { to: "nosql", title: "pertimbangan NoSql" },
  { to: "relasiSql", title: "tipe relasi sql" },
  { to: "axios", title: "axios" },
  { to: "casl", title: "casl" },
  { to: "dataExchange", title: "data exchange component" },
  { to: "flexGridCondition", title: "flex/grid condition" },
  { to: "reqRes", title: "req res" },
  { to: "opsiSelainExpress", title: "opsi selain express" },
  { to: "clientServer", title: "client/server side" },
  { to: "spa", title: "spa" },
  { to: "fungsiRedux", title: "fungsi redux" },
  { to: "auth2", title: "authentication authorization" },
  { to: "libraryAuthorization", title: "library authorization" },
  { to: "errorStatus", title: "error 409, 500, 401" },
  { to: "localstorage", title: "localstorage" },
  { to: "expressUploadLibrary", title: "express upload library" },
];

const Layout = () => {
  return (
    <main className="grid grid-cols-5 gap-3 items-start p-3 lg:px-16">
      <AsideGrid className="col-span-1 sticky top-3">
        <H2>kisi kisi ujian kelulusan</H2>
        <ol className="list-decimal list-inside" start={0}>
          {navQuestion.map((item) => (
            <li key={item.title} className="hover:underline">
              <NavLink to={item.to}>{item.title}</NavLink>
            </li>
          ))}
        </ol>
      </AsideGrid>
      <section className="col-span-4 min-h-screen">
        <Outlet />
      </section>
      <ScrollRestoration />
    </main>
  );
};

export default Layout;
