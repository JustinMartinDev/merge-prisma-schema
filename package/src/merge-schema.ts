// Example functionality: Merge Prisma schema files

import { join } from "path";
import { PrismaSchemaMergeConfig } from "./type";
import { existsSync, readFileSync, writeFileSync } from "fs";

const findSchemaPath = (
  schemas: PrismaSchemaMergeConfig["schemas"],
  schemaSearchFolders: PrismaSchemaMergeConfig["schemaSearchFolders"]
) => {
  const foundedSchemas = schemas.map((schemaFile) => {
    let foundedSchemaPath = undefined;

    for (const searchFolder of schemaSearchFolders) {
      const schemaPath = join(process.cwd(), searchFolder, schemaFile);
      if (existsSync(schemaPath)) {
        foundedSchemaPath = schemaPath;
        break;
      }
    }

    if (!foundedSchemaPath) {
      console.error(`Schema file not found: ${foundedSchemaPath}`);
      console.error(`Searched folders: ${schemaSearchFolders.join(", ")}`);
      process.exit(1);
    }

    return foundedSchemaPath;
  });

  return foundedSchemas as string[];
};

export const mergeSchemas = ({
  schemas,
  output,
  schemaSearchFolders,
}: PrismaSchemaMergeConfig): void => {
  // Location of schema files
  let mergedContent = "";

  const schemaPaths = findSchemaPath(schemas, schemaSearchFolders);

  schemaPaths.forEach((schemaPath) => {
    const schemaContent = readFileSync(schemaPath, "utf8");
    mergedContent += schemaContent + "\n";
  });

  let prismaMergedSchema = `// Generated at ${new Date().toISOString()} by "merge-prisma-schema"\n\n`;

  writeFileSync(output, prismaMergedSchema + mergedContent, "utf8");
  console.log(`Merged schemas into ${output}`);
};
