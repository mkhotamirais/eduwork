import style from "./modul.module.css";

const ModuleStyle = () => {
  return (
    <div className={`${style.modul} ${style.center}`}>
      Teks ini dihias dengan module css
    </div>
  );
};

export default ModuleStyle;
