import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

const routes = [
  '/about',
  '/about/director',
  '/about/experts',
  '/about/media',
  '/about/partnerships',
  '/services/counseling',
  '/services/education',
  '/services/treatment',
  '/services/legal-collaboration',
  '/program',
  '/cases',
  '/library/notice',
  '/library/column',
  '/library/cases',
  '/online-program',
  '/sentencing',
  '/pricing',
];

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [
      react(),
      tailwindcss(),
      Sitemap({
        hostname: 'https://mhs-dui.mindgate.co.kr/',
        dynamicRoutes: routes,
        generateRobotsTxt: true,
        robots: [
          {
            userAgent: '*',
            allow: '/',
          },
        ],
      }),
    ],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
