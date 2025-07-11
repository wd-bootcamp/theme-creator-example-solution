import { argv, $ } from "bun";
import { stat } from "node:fs/promises";

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

const path = "./src/components";

if (!(await exists(path))) {
  await $`mkdir ${path}`;
}

const componentName = argv[2];

if (
  (await exists(`${path}/${componentName}.jsx`)) ||
  (await exists(`${path}/${componentName}.css`))
) {
  console.error(`Component ${componentName} already exists.`);
  process.exit();
}

const jsxTemplate = `import "./${componentName}.css"

export default function ${componentName}() {
  return null
}
`;

const cssTemplate = `.${componentName.toLowerCase()} {

}`;

await $`echo ${jsxTemplate} > ${path}/${componentName}.jsx`;
await $`echo ${cssTemplate} > ${path}/${componentName}.css`;
