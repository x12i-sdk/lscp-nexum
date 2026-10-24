# @x12i/lscp-nexum usage example

Mandatory Nexum compiler bridge for LSCP Context Graph, with configurable FuncX semantics.

This consuming application demonstrates **prepare tenant-scoped content and record inputs for nexum** using the published npm package, pinned to `0.4.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Compile the LSCP context graph through its required Nexum bridge.
- Supply configurable FuncX semantics for a context-graph transformation.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/lscp-nexum)
- [Implementation monorepo](https://github.com/x12i-saas/thalux)
- [Reviewed package source](https://github.com/x12i-saas/thalux/tree/0a178e7f1e5ed6dcb6669fbd4488b750dfa67d09/packages/lscp-nexum)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

## Validation scope

This example consumes bundled assets or deterministic local fixtures. It does not contact providers, acquire real records, seed a database, or persist a production graph. Report examples check HTML generation only. Theme examples generate `preview.html`; visual appearance still needs browser review.
