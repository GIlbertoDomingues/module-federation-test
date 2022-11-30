declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MF_URL: string;
    }
  }
}

export {};
