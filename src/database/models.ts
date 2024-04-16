const { Sequelize, DataTypes } = require("sequelize");

const DATABASE_NAME: string = process.env.AI_DATABASE_NAME || "";
const DATABASE_USER: string = process.env.AI_DATABASE_USER || "";
const DATABASE_PASSWORD: string = process.env.AI_DATABASE_PASSWORD || "";
const DATABASE_SERVER: string = process.env.AI_DATABASE_SERVER || "";
const DATABASE_DIALECT: string = process.env.AI_DATABASE_DIALECT || "";

const database = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
  /*	DATABASE_DIALECT: one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' 	*/
  host: DATABASE_SERVER,
  dialect: DATABASE_DIALECT,
  logging: false,
});

export const authenticate = () => {
  return database.authenticate();
};

export const syncAllModels = async (pForce: boolean) => {
  return await database.sync({ force: pForce });
};

export const ClassifiedMail = database.define("ClassifiedMail", {
  id: {
    type: DataTypes.UUID,
    allownull: false,
    primaryKey: true,
  },
  sentDateTime: DataTypes.DATE,
  is_inbound: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  subject: DataTypes.TEXT,
  from: DataTypes.TEXT,
  toRecipients: DataTypes.TEXT,
  ccRecipients: DataTypes.TEXT,
  bccRecipients: DataTypes.TEXT,
  body: DataTypes.TEXT("long"),
  isCommercialRequest: DataTypes.BOOLEAN,
});
