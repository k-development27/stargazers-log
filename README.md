# stargazers-log

Une page qui présente les dépôts GitHub que j’ai ajoutés à mes favoris.

## Utilisation

Ouvrez `index.html` dans un navigateur. Comme la page charge `events.json` avec
`fetch`, servez les fichiers avec un serveur HTTP local plutôt que d’ouvrir le
fichier directement. Par exemple, avec Python :

```sh
python -m http.server
```

Puis ouvrez <http://localhost:8000>.

## Données

Modifiez `events.json` pour ajouter ou mettre à jour des dépôts. Chaque entrée
contient le nom du dépôt, son URL GitHub, une description et la date d’ajout aux
favoris (`starred_at`, au format `YYYY-MM-DD`). `script.js` charge ces données
et les affiche ; `style.css` définit leur présentation.
