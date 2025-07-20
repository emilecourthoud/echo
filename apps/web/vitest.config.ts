import { loadEnv } from 'vite';
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths'; // Correct import

export default defineConfig({
  // @ts-ignore
  plugins: [tsconfigPaths()],
  test: {
    dir: './tests',
    reporters: ['verbose'],
    globals: true,
    testTimeout: 50000,
    env: loadEnv('', process.cwd(), ''),
  },
});
