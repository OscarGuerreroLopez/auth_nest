declare namespace Express {
  export interface Request {
    dbService: {
      db: string;
      getInfo: () => string;
    };
  }
}
