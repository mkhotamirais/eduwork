const MyProfil = () => {
  return (
    <div>
      <h1 className="font-semibold bg-slate-50 p-2 pl-4 border-b">My Profil</h1>
      <div className="p-2 pl-4">
        <table className="w-full table-auto">
          <tbody>
            <tr className="border-b">
              <td className="leading-loose">Nama</td>
              <td>Ahmad</td>
            </tr>
            <tr className="border-b">
              <td className="leading-loose">Email</td>
              <td>ahmad@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProfil;
