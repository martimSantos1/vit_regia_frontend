import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
//import fs from 'fs';

/*export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync('./cert/192.168.0.104-key.pem'),
      cert: fs.readFileSync('./cert/192.168.0.104.pem'),
    },
    host: '192.168.0.104',
  }
});*/

export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.1.132',
    port: 5173             
  }
});