export const AuthWrapper = ({ children = "isi" }) => (
  <main className="min-h-screen w-full bg-slate-200 flex items-center justify-center">
    <section className="bg-white p-3 rounded mx-3 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">{children}</section>
  </main>
);
AuthWrapper.propTypes;

export const Badge = ({ children }) => (
  <button className={`rounded-lg leading-none p-1 text-xs bg-slate-500 text-white hover:bg-blue-500`}>{children}</button>
);
Badge.propTypes;
