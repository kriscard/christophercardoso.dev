import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema:
    "https://api-us-east-1.hygraph.com/v2/clb5sedeo08ls01uq28t6hr8y/master",
  documents: ["src/**/*.ts"],
  generates: {
    "./src/graphql/generated/schema.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
    "./graphql/generated/schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
