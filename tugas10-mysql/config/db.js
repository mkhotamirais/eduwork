import { Sequelize } from "sequelize";

const db = new Sequelize("eduwork_tugas_mysql", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    console.log("Connection succesfully");
  } catch (error) {
    console.error("Unable connect", error);
  }
})();

export default db;
