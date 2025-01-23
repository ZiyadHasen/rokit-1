import mysql from "mysql2/promise";
import { NextApiRequest, NextApiResponse } from "next";

let connectionParams = {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "0966463034f",
  database: "hdadmin",
};

export default async function saveUserData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const connection = mysql.createConnection(connectionParams);

    if (req.method === "POST") {
      const { ipAddress, country, region, city } = req.body;

      (await connection).query(`CREATE TABLE IF NOT EXISTS UserData (
        id INT AUTO_INCREMENT PRIMARY KEY,
          ipAddress VARCHAR(255),
          country VARCHAR(255),
          region VARCHAR(255),
          cityName VARCHAR(255)
        )`);

      (await connection).query(
        `
        INSERT INTO UserData (ipAddress, country, region, cityName)
        VALUES (?, ?, ?, ?);
      `,
        [ipAddress, country, region, city]
      );

      // console.log(req.body);

      return res.status(200).json({ message: "This user data is saved" });
    }
  } catch (error) {
    console.log(error);
  }
}
