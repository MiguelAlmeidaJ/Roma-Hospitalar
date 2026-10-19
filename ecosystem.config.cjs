module.exports = {
  apps: [{
    name: 'roma-hospitalar',
    cwd: __dirname,
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 4700 -H 0.0.0.0',
    instances: 1,
    exec_mode: 'fork',
    autorestart: true,
    max_memory_restart: '400M',
    env: { NODE_ENV: 'production', PORT: '4700' },
  }],
};
