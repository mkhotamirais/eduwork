const RegisterMsg = ({ success, error }) => {
  return (
    <>
      {success ? (
        <div className="w-full rounded border border-blue-400 bg-blue-100 p-2 text-blue-700">
          <span>Registrasi berhasil! </span>
          <a href="/login" className="underline font-semibold">
            Login
          </a>
        </div>
      ) : null}
      {error ? <div className="w-full rounded border border-rose-400 bg-rose-100 p-2 text-rose-700">{error}</div> : null}
    </>
  );
};
RegisterMsg.propTypes;

export default RegisterMsg;
