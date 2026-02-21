import { index, route, type RouteConfig } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('visualizer/:id', './routes/visualizer.$id.tsx'),
] satisfies RouteConfig;
