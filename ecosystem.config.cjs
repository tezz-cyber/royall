module.exports = {
  apps: [
    {
      name: "royall",
      script: "start.mjs",
      cwd: "/var/www/royall-ssd.de/web/app",
      env: {
        HOST: "127.0.0.1",
        PORT: 4322,
        NODE_ENV: "production"
      },
    },
  ],
};
