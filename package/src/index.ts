#!/usr/bin/env node

import { cosmiconfigSync } from "cosmiconfig";
import { PrismaSchemaMergeConfig, Config } from "./type";
import { mergeSchemas } from "./merge-schema";
import { validateMergedSchema } from "./validate-schema";
import { formatMergedSchema } from "./format-schema";

// Load configuration
const explorerSync = cosmiconfigSync("merge-prisma-schema");
const result = explorerSync.search();

// Handle cases where the config is not found
if (!result || !result.config) {
  console.error("Configuration file not found!");
  process.exit(1);
}

const defaultConfig: PrismaSchemaMergeConfig = {
  schemas: [],
  output: "prisma/schema.prisma",
  schemaSearchFolders: ["prisma"],
  prismaCli: "npx prisma",
};

const config: PrismaSchemaMergeConfig = { ...defaultConfig, ...result.config };

// Execute the merge operation
mergeSchemas(config);

// Execute the validation operation
validateMergedSchema(config);

// Execute the format operation
formatMergedSchema(config);

export { Config };
