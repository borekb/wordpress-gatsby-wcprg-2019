# WordCamp Prague 2019: WordPress + Gatsby

Slides and demo project for WordCamp Prague 2019 talk "WordPress + Gatsby".

- [SlideShare](https://www.slideshare.net/borekb/wordpress-gatsby)
- Other attachments: [#1](https://github.com/borekb/wordpress-gatsby-wcprg-2019/issues/1)

## Setup

> ⚠️ It's not very polished yet, for example, there are some weird issue when trying to combine Gatsby.js and Reveal.js, it barely works :) I also didn't verify that restoring WP site works exactly as described below, feel free to send PRs.

Have these on your computer:

- Node.js / Yarn
- Docker
- POSIX environment (`start.sh` calls things like `curl` and `unzip`)

Clone the repo:

```
git clone --recurse-submodules https://github.com/borekb/wordpress-gatsby-wcprg-2019
```

Restore WordPress site (it is version-controlled by VersionPress in a `wordpress` submodule):

Create `wordpress/wp-config.php` with these DB connection values:

```php
define('DB_NAME', 'wordpress');
define('DB_USER', 'root');
define('DB_PASSWORD', 'r00tpwd');
define('DB_HOST', 'mysql');
```

Run `./start.sh` and wait until the WordPress site starts.

Run WP-CLI to [restore the site](https://docs.versionpress.net/en/feature-focus/wp-cli/#vp-restore-site) (it is assumed that `wp.demo` resolves to `127.0.0.1`):

```
docker run -it --rm \
    --volumes-from wordcamp-prague-2019_wordpress_1 \
    --network container:wordcamp-prague-2019_wordpress_1 \
    wordpress:cli vp restore-site \
        --siteurl='http://wp.demo/' \
        --require=wp-content/plugins/versionpress/src/Cli/vp.php
```

If this doesn't work, [#1](https://github.com/borekb/wordpress-gatsby-wcprg-2019/issues/1) contains WordPress export file which you can use to import a post.

Now, WordPress is running and we can proceed to Gatsby:

```
cd gatsby
yarn
```

To start the dev mode:

```
yarn start
```

This should:

- Render a Reveal.js presentation at <http://localhost:8000>
- Render a raw representation at <http://localhost:8000/raw>
- Provide GraphiQL instance at <http://localhost:8000/___graphql>

## Things to try

- Edit styles in `gatsby/src/styles/global.css` – it should immediately hot-reload in the browser.
- Visit `http://wp.demo` in the browser – the presentation should render there inside a Twenty Nineteen theme.
- On updating presentation (**NOTE**: my account is currently there, use WP-CLI to change the password for yourself), stop the Yarn script and `yarn start` again.
