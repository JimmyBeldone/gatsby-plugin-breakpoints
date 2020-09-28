<h1 align="center" style="border-bottom: none;">gatsby-plugin-breakpoints</h1>
<h3 align="center">Gatsby plugin providing breakpoints using React Hooks</h3>

<p align="center">
    <a href="https://github.com/JimmyBeldone/gatsby-plugin-breakpoints">
        <img alt="travis build" src="https://github.com/JimmyBeldone/gatsby-plugin-breakpoints/workflows/TESTING/badge.svg">
    </a>
    <a href="https://github.com/JimmyBeldone/gatsby-plugin-breakpoints">
        <img alt="travis build" src="https://github.com/JimmyBeldone/gatsby-plugin-breakpoints/workflows/PUBLISH/badge.svg">
    </a>
    <a href="https://www.npmjs.com/package/gatsby-plugin-breakpoints">
        <img alt="npm version" src="https://badgen.net/npm/v/gatsby-plugin-breakpoints">
    </a>
    <a href="http://npm-stat.com/charts.html?package=gatsby-plugin-breakpoints">
        <img src="https://img.shields.io/npm/dm/gatsby-plugin-breakpoints.svg" alt="NPM downloads">
    </a>
    <a href="#badge">
        <img alt="dependencies status" src="https://badgen.net/david/dep/JimmyBeldone/gatsby-plugin-breakpoints">
    </a>
    <a href="#badge">
        <img alt="dev dependencies status" src="https://badgen.net/david/dev/JimmyBeldone/gatsby-plugin-breakpoints">
    </a>
</p>
<p align="center">
    <a href="http://commitizen.github.io/cz-cli/">
        <img alt="commitizen" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
    </a>
    <a href="https://github.com/semantic-release/semantic-release">
        <img alt="semantic-release" src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg">
    </a>
    <a href="https://github.com/prettier/prettier">
        <img alt="prettier" src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg">
    </a>
    <a href="https://github.com/JimmyBeldone/gatsby-plugin-breakpoints/blob/master/LICENSE">
        <img alt="license" src="https://badgen.net/github/license/JimmyBeldone/gatsby-plugin-breakpoints">
    </a>
</p>

## Install

`npm i gatsby-plugin-breakpoints`

or

`yarn add gatsby-plugin-breakpoints`

Include the plugin in your `gatsby-config.js` file :

```javascript
/* gatsby-config.js */

module.exports = {
  plugins: [
      "gatsby-plugin-breakpoints"
  ]
}
```

## Usage

### Functional Components

Import the `useBreakpoint` hook anywhere in your app.

This hook provides four default breakpoints as **boolean** :

| name  | breakpoints       |
|---    |---                |
| xs    | max-width: 320px  |
| sm    | max-width: 720px  |
| md    | max-width: 1024px |
| l     | max-width: 1536px |

```javascript
/* yourFunctionalComponentOrPage.js */

import { useBreakpoint } from 'gatsby-plugin-breakpoints';

import MobileOnlyComponent from './your/component/path'
// ...

const MyComponent = () => {
  const breakpoints = useBreakpoint();

  return (
    <AnyComponent>
      {/* Anything */}

      {/* <MobileOnlyComponent /> will only be displayed if max-width <= 320px  */}
      {breakpoints.xs ? <MobileOnlyComponent /> : null}

    </AnyComponent>
  )
}

export default MyComponent;
```

### Class Components

Import the `withBreakpoints` Higher Order Component anywhere in your app.

This HOC adds a `breakpoints` props to your component, providing four default breakpoints as **boolean** :

| name  | breakpoints       |
|---    |---                |
| xs    | max-width: 320px  |
| sm    | max-width: 720px  |
| md    | max-width: 1024px |
| l     | max-width: 1536px |

```javascript
/* yourClassComponent.js */

import { withBreakpoints } from 'gatsby-plugin-breakpoints';

import MobileOnlyComponent from './your/component/path'
// ...

class Test extends React.Component {
    render() {
        const { breakpoints } = this.props;
        {/* <MobileOnlyComponent /> will only be displayed if max-width <= 320px  */}
        return breakpoints.xs ? (
            <MobileOnlyComponent />
        ) : (
            <div>Content hidden only on mobile</div>
        );
    }
}

export default withBreakpoints(Test);
```

## Options

You can set your own queries like this :

```javascript
// in gatsby-config.js

const myCustomQueries = {
    xs: '(max-width: 320px)',
    sm: '(max-width: 720px)',
    md: '(max-width: 1024px)',
    l: '(max-width: 1536px)',
    xl: ...,
    portrait: '(orientation: portrait)',
};

module.exports = {
    plugins: [
        {
            resolve: "gatsby-plugin-breakpoints",
            options: {
                queries: myCustomQueries,
            },
        },
    ],
}
```

### Default values

```javascript
const defaultQueries = {
    xs: '(max-width: 320px)',
    sm: '(max-width: 720px)',
    md: '(max-width: 1024px)',
    l: '(max-width: 1536px)',
};
```

### Note (only for test)

If you need to import `<BreakpointProvider />` for testing you can do it like so :

```javascript
import { BreakpointProvider } from 'gatsby-plugin-breakpoints'
```

## Contributing

Contributions are welcome ! See [contributing guidelines](https://github.com/JimmyBeldone/gatsby-plugin-breakpoints/blob/master/CONTRIBUTING.md)

## License

MIT

Copyright (c) 2019 Jimmy Beldone
