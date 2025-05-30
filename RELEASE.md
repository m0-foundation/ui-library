# Release Process

This document outlines the steps to update and publish a new version of the M0 Foundation UI Library.

## 1. Update Version

1. Open `package.json`
2. Increment the version number following [Semantic Versioning](https://semver.org/):
   - Patch (0.0.x): For backwards-compatible bug fixes
   - Minor (0.x.0): For new features that don't break existing functionality
   - Major (x.0.0): For breaking changes

Example:
```json
{
  "version": "0.1.12"  // Increment from previous version
}
```

## 2. Build the Library

Run the build command to generate the latest distribution files:
```bash
npm run build
```

This will:
- Compile TypeScript files
- Generate type definitions
- Create the distribution files in the `/dist` directory

## 3. Publish to npm

1. Make sure you're logged in to npm:
```bash
npm whoami
```

2. If not logged in, run:
```bash
npm login
```

3. Publish the package:
```bash
npm publish
```

## 4. Push to GitHub

1. Stage all changes:
```bash
git add .
```

2. Commit with a descriptive message:
```bash
git commit -m "chore: release v0.1.12"
```

3. Push to the main branch:
```bash
git push origin main
```

## 5. Verify Release

1. Check the published version on npm:
```bash
npm view @m0-foundation/ui-library version
```

2. Verify the package can be installed:
```bash
npm install @m0-foundation/ui-library@latest
```

## Troubleshooting

If you encounter any issues during the release process:

1. **Build fails**: 
   - Clean the build artifacts: `rm -rf dist/`
   - Remove Vite cache: `rm -rf node_modules/.vite`
   - Try building again: `npm run build`

2. **Publish fails**:
   - Ensure you're logged in to npm
   - Check if the version number is unique
   - Verify you have the necessary permissions

3. **Git push fails**:
   - Pull the latest changes first: `git pull origin main`
   - Resolve any conflicts
   - Try pushing again 