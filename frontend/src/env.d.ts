interface ImportMetaEnv {
  readonly M_SERVER_URL: string;
  readonly M_APP_ID: string;
  readonly M_MASTER_KEY: string;

}

interface ImportMeta {
  readonly env: ImportMetaEnv
}