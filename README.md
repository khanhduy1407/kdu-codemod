# kdu-codemod

Inspired by [react-codemod](https://github.com/reactjs/react-codemod).

## Command Line Usage

`npx kdu-codemod <path> -t <transformation> --params [transformation params] [...additional options]`

- `transformation` (required) - name of transformation, see available transformations below; or you can provide a path to a custom transformation module.
- `path` (required) - files or directory to transform.
- `--params` (optional) - additional transformation specific args.
<!-- - use the `--dry` options for a dry-run. -->

## Programmatic API

- `runTransformation(fileInfo, transformation, params)`

## Roadmap

- [x] Basic testing setup and a dummy CLI
- [x] Support applying `jscodeshift` codemods to `.kdu` files
- [x] Provide a programmatic interface for usage in `kdu-cli-plugin-kdu-next`
- [x] Set up tests
- [ ] (WIP) Implement the transformations described below for migration usage
- [ ] Built-in transformations need to support TypeScript
- [ ] Built-in transformations need to support module systems other than ES module, and those without modules
- [ ] Define an interface for transformation of template blocks (may use [`kdu-eslint-parser`](https://github.com/khanhduy1407/kdu-eslint-parser/) for this)
- [x] A playground for writing transformations - `yarn playground` and visit http://localhost:3000
