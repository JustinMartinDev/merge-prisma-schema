export type PrismaSchemaMergeConfig = {
  schemas: string[];
  schemaSearchFolders: string[];
  output: string;
  prismaCli: string;
};

export type Config = {
  schemas: string[];
  schemaSearchFolders?: string[];
  output: string;
  prismaCli?: string;
};
