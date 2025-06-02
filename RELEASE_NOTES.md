# Release Notes

## v0.1.13
- Added new icon system with base component `MIcon.vue`.
- Added `MIconCopy.vue` for copy functionality.
- Added token-specific icons in a new subfolder `tokens/`:
  - `MIconTokenM.vue`
  - `MIconTokenPower.vue`
  - `MIconTokenWM.vue`
  - `MIconTokenZero.vue`
- Updated `src/index.ts` to export the new icon components.
- Fixed build issues by switching to Bun and ensuring all dependencies are correctly installed. 