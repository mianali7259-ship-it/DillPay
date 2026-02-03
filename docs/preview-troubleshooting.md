# DillPay Preview Troubleshooting

If the mobile preview cannot start because `npm install` fails with a `403 Forbidden`, it means the environment is blocking access to the npm registry. The Expo app depends on packages hosted on npm, so installation must succeed before the preview can run.

## How to fix registry access

1. **Verify registry access**
   ```bash
   npm config get registry
   npm view expo version
   ```
   If `npm view` returns `403`, the registry is blocked.

2. **Clear proxy overrides** (if your environment injects them)
   ```bash
   npm config delete proxy
   npm config delete https-proxy
   ```

3. **Use your allowed registry**
   If your organization mirrors npm, point npm to it:
   ```bash
   npm config set registry <YOUR_ALLOWED_REGISTRY_URL>
   ```

4. **Retry install + preview**
   ```bash
   cd mobile
   npm install
   npm run start
   ```

## Notes

- The preview requires npm registry access because Expo and React Native dependencies are hosted on npm.
- If you are running inside a locked-down CI or sandbox, you may need to whitelist `registry.npmjs.org` (or your internal mirror) to allow installs.
