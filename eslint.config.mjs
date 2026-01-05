import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // Custom rules for Tailwind v4 compatibility
  {
    rules: {
      "no-restricted-syntax": [
        "error",
        {
          selector: "JSXAttribute[name.name='className'] Literal[value=/space-[xy]-/]",
          message: "Use gap-* instead of space-x-*/space-y-* for Tailwind v4 compatibility"
        },
        {
          selector: "TemplateElement[value.raw=/space-[xy]-/]",
          message: "Use gap-* instead of space-x-*/space-y-* for Tailwind v4 compatibility"
        }
      ]
    }
  }
]);

export default eslintConfig;
