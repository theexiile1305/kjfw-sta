import nextConfig from "eslint-config-next";

const eslintConfig = [
  ...nextConfig,
  {
    ignores: ["out/", ".next/"],
  },
];

export default eslintConfig;
