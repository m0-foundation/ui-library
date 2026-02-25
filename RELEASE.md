# Release Process

## 1. Update Version

Increment the version in `package.json` following [Semantic Versioning](https://semver.org/):

- **Patch** (0.0.x): Bug fixes, icon updates
- **Minor** (0.x.0): New components, new tokens/chains
- **Major** (x.0.0): Breaking API changes

## 2. Build

```bash
bun run build
```

This runs `nuxt-module-build build` which:
- Compiles Vue SFCs and TypeScript
- Generates per-file ESM output (tree-shakeable)
- Creates TypeScript declarations
- Copies runtime assets (icons, CSS)
- Outputs to `dist/`

## 3. Verify

```bash
# Check dist output exists
ls dist/module.mjs dist/runtime/

# Test in playground
bun run dev
```

## 4. Publish

```bash
npm whoami          # Ensure logged in
npm publish         # Publishes (runs prepublishOnly → build)
```

## 5. Commit and Push

```bash
git add .
git commit -m "chore: release v1.x.x"
git push origin master
```

## Troubleshooting

- **Build fails**: `rm -rf dist/ .nuxt/ playground/.nuxt/` then rebuild
- **Types missing**: Run `npx nuxi prepare` before build
- **Publish fails**: Check npm login and version uniqueness
