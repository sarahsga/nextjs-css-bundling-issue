This repo reproduces the issue in https://github.com/vercel/next.js/issues/16630

- `git checkout 7d1bd9a` and `git checkout 375e32c` (this is the commit that reproduces the issue)
- `yarn` to install the older version of nextjs specified in package.json
Compare the output of / path in 
- yarn dev
- yarn build && yarn start

since Home.module.css is imported last in index.ts, its color (blue) should win.

`yarn dev` uses color blue (correct)
`yarn build && yarn start` uses color red (incorrect) because the .module.css files are imported in the wrong order.
