# doc-it

a generator to doc your custom components.

**WIP** this is still in working.

##  How it looks like

## Usage

`npm install --save doc-it`

`doc-it --config .docit.js --dist example`

```js
// your .docit.js files
module.exports = {
    Header: CustomHeaderComponent,
    Footer: CustomFooterComponent,
    configs: [
        {
            title: 'button',
            desc: 'button desc',
            code: 'button code',
            demo: ButtonDemo
        }
    ]
}
```

## Configs

## doc-it cli

| option | meaning |
|---------|-------|
|--config | specify config file location, default to `.docit.js` |
|--dist | specify outout directory, default to `example` |

## .docit.js 
| option | meaning |
|--------|---------|

