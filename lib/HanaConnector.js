import hana from "@sap/hana-client";
import dotenv from "dotenv";
dotenv.config();

const conn_params = {
  serverNode: process.env.HANA_URL,
  uid: process.env.HANA_USERNAME,
  pwd: process.env.HANA_PASSWORD,
};

export const runQuery = async (query) => {
  const connection = hana.createConnection();
  connection.connect(conn_params);

  const result = await connection.exec(query);

  connection.disconnect();
  return result;
};
