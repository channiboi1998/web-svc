import { createProxyMiddleware } from 'http-proxy-middleware';

const socketProxy = createProxyMiddleware('/socket', {
  target: 'http://localhost:5000', // Replace with the URL of your order-svc
  ws: true,
  changeOrigin: true,
});

export default socketProxy;
