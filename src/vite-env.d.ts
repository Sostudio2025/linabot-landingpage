/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AIRTABLE_API_KEY: string;
  readonly VITE_CRM_API_URL?: string;
  readonly VITE_WOOCOMMERCE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
