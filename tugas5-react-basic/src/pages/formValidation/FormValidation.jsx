import TugasFormRegistrasi from "./TugasFormRegistrasi";

const FormValidation = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="border p-3 rounded-lg">
        <h1 className="text-center font-semibold text-2xl">
          Form Registrasi with Validator
        </h1>
        <TugasFormRegistrasi />
      </div>
    </div>
  );
};

export default FormValidation;
