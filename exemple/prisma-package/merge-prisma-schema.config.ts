const config = {
  schemas: [
    "header.prisma",
    "sub-package1/user.schema.prisma",
    "sub-package2/post.schema.prisma",
  ],
  output: "prisma/schema.prisma",
  schemaSearchFolders: ["node_modules", "prisma"],
  prismaCli: "npx prisma",
};

export default config;
