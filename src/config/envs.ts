import "dotenv/config";
import * as joi from "joi";

interface EnvVars {
  PORT: number;
  //NATS SERVICE
  NATS_SERVERS: string[];
  //DATABASE
  DB_HOST: string;
  DB_PORT: number;
  DB_NAME: string;
  DB_USER: string;
  DB_PASSWORD: string;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    //NATS SERVICE
    NATS_SERVERS: joi.array().items(joi.string()).required(),
    //DATABASE
    DB_HOST: joi.string().required(),
    DB_PORT: joi.number().required(),
    DB_NAME: joi.string().required(),
    DB_USER: joi.string().required(),
    DB_PASSWORD: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS?.split(","),
});

if (error) {
  console.error('Config validation error(s):');
  console.log("============================================================");
  error.details.forEach((detail) => {
    console.error(`====>>> ${detail.message}`);
  });
  console.log("============================================================");
  throw new Error('Environment variables validation failed.');
}

const envVars: EnvVars = value;

export const envs = {
  port: envVars.PORT,
  //DATABASE
  dbHost: envVars.DB_HOST,
  dbPort: envVars.DB_PORT,
  dbName: envVars.DB_NAME,
  dbUser: envVars.DB_USER,
  dbPassword: envVars.DB_PASSWORD,
  //NATS SERVICE
  natsServers: envVars.NATS_SERVERS,
};
