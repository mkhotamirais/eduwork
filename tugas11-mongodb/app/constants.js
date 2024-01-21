import "dotenv/config";

export const { MONGODB_URL: mongodbUrl, PORT: port, MONGOOSE_URL: mongooseUrl } = process.env;
