
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      ORIGINS: string;
      URL: string;
      PORT: `${number}`;
    }
  }
  namespace Express {
    interface Request {
      user: {
        name: string;
        permission: string
      };
    }
  }
}


export {};