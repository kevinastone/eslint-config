import config from './index.js';

export default [
  ...config,
  {
    ignores: [
      "coverage/",
      "dist/",
      "node_modules/",
      "bin/",
    ]
  },
]
