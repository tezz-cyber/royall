# royall (Vollversion, alle 4 Sparten)

## Git-Initialisierung

```
cd royall
git init
git add .
git commit -m "Initial commit: royall (Vollversion, alle 4 Sparten)"
git branch -M main
git remote add origin git@github.com:DEIN-USER/royall.git
git push -u origin main
```

## GitHub Secrets für dieses Repo

| Secret Name       | Wert                                  |
|--------------------|----------------------------------------|
| DEPLOY_HOST        | 123.456.789.123                        |
| DEPLOY_USER        | root                                   |
| DEPLOY_SSH_KEY     | Privater SSH-Key                       |
| DEPLOY_PATH        | /var/www/royall.meinedomain.com/app                                 |

## Server-Vorbereitung (einmalig)

```
mkdir -p /var/www/royall.meinedomain.com/app
```

Node.js + PM2 installieren, nginx Reverse-Proxy einrichten: siehe
`nginx-reverse-proxy-snippet.conf` und allgemeine Hinweise in DEPLOY-README.md.
