const env = {
  PORT: process.env.PORT as string,
  MONGO_URI: process.env.DATABASE_URL as string,
  JWT_SECRET: process.env.JWT_SECRET as string,
  USERNAME: process.env.USERNAME as string,
  PASSWORD: process.env.PASSWORD as string,
};

export default env;
