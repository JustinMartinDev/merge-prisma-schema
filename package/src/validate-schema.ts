import { execSync } from "child_process";
import { PrismaSchemaMergeConfig } from "./type";

export const validateMergedSchema = ({
  output,
  prismaCli,
}: PrismaSchemaMergeConfig): void => {
  console.log(`Validating schema ${output}...`);

  try {
    execSync(`${prismaCli} validate --schema ${output}`);
  } catch (error: any) {
    console.error("Schema validation failed!");
    console.error(error.stdout.toString());
    process.exit(1);
  }

  console.log("Schema validated successfully!");
};
