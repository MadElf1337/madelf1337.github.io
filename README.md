# Pranav Kulkarni

Personal Jekyll site at <https://madelf1337.github.io/>.

Edit `_data/profile.yml` to update the biography, experience, education, and project links. The home page and resume share this data.

Use Ruby and Bundler to install the GitHub Pages dependencies and preview locally:

```sh
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve --host 127.0.0.1
```

Open <http://127.0.0.1:4000/>. To generate the site without starting a server:

```sh
bundle exec jekyll build
```

GitHub Pages currently publishes the repository root on `master`. Changes become public after they are merged and pushed to that branch; the feature branch does not change the live site.

The original template's license is preserved in `LICENSE`.
