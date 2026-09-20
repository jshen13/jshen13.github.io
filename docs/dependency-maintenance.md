# Dependency maintenance — September 2026

## What changed

- Updated Gatsby to 5.16.1 and its maintained plugins to their latest releases.
- Updated React to 18.3.1, React Icons to 5.7.0,
  gh-pages to 6.3.0, and Prettier to 3.9.8.
- Replaced deprecated `gatsby-image` with `gatsby-plugin-image`.
- Removed unused PDF parsing, font-preload tooling, the duplicate gtag plugin,
  the unused icon package, and the unused direct TypeScript dependency.
- Added Node 24 configuration, a production-build CI workflow, and grouped
  Dependabot updates. The existing static PDF downloads are preserved.
- Fixed an Analytics ID containing a tab, a Linux-sensitive image import,
  missing CSS module references, a React DOM attribute, and an unused PDF query.

React 19 is intentionally deferred: the current site uses React Helmet and
function-component default props. React 18.3.1 is supported by the installed
Gatsby packages.

## Audit results

The initial lockfile audit reported 85 affected packages: 2 critical, 46 high,
29 moderate, and 8 low. The updated lockfile reports **23 moderate, 0 high,
0 critical, and 0 low**. Counts include packages affected through their
transitive dependencies; these are not 23 distinct root advisories.

The remaining root advisories are:

| Package | Advisory | Context |
| --- | --- | --- |
| `@parcel/reporter-dev-server` | [Origin validation](https://github.com/advisories/GHSA-qm9p-f9j5-w83w) | Gatsby's Parcel build tooling |
| `file-type` | [Malformed ASF parsing](https://github.com/advisories/GHSA-5v7r-6r5c-r473) | Gatsby file sourcing and image tooling |
| `uuid` | [Buffer bounds checking](https://github.com/advisories/GHSA-w5hq-g745-h8pq) | Gatsby dependency |

The site deploys static files to GitHub Pages. That does not make build-tool
advisories irrelevant, but these findings are not evidence of an exposed
production Node server. Replacing these dependencies requires reviewing
Gatsby's API compatibility; `npm audit fix --force` suggests obsolete Gatsby
packages and should not be used as an automatic remedy.

## Targeted overrides

Gatsby pins some dependencies below their patched releases. `site/package.json`
uses explicit overrides for Immutable 3, Lodash, path-to-regexp 0.1, Webpack 5,
Sharp, serialize-javascript, tmp, decode-uri-component, and cookie. These include
changes beyond Gatsby's declared ranges, especially Sharp and
serialize-javascript. Keep production-build and image-generation validation in
place, and remove overrides when Gatsby adopts the patched versions upstream.

## Validation

Use Node 24 and run from `site/`:

```sh
npm ci
npm run clean
npm test
npm audit
```

`npm test` is the full Gatsby production build, including queries, image
processing, and static HTML generation. It is not a browser interaction test
suite. A browser smoke check covers homepage navigation, About, and Notes. All 41 PDF links in the generated Notes page resolve to generated
files. Gatsby still emits an upstream experimental React peer-dependency
warning during installation and React Helmet / punycode deprecation notices.

The unfinished Projects pages, navigation tab, and map dependencies are excluded
from this release and remain local.

The GitHub default/source branch is `develop`; `master` contains deployed
output. Local edits do not close Dependabot PRs or change the live site. Review
and merge the source updates before publishing with `npm run deploy`.
