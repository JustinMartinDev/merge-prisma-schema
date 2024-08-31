import { execSync } from "child_process";
import { PrismaSchemaMergeConfig } from "./type";

export const formatMergedSchema = ({
  output,
  prismaCli,
}: PrismaSchemaMergeConfig): void => {
  console.log(`Formatting schema ${output}...`);

  try {
    execSync(`${prismaCli} format --schema ${output}`);
  } catch (error: any) {
    console.error("Schema validation failed!");
    console.error(error.stdout.toString());
    process.exit(1);
  }

  console.log("Schema formated successfully!");
};
