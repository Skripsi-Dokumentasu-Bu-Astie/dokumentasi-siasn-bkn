const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Siasn Bkn Dokumentasi',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root:
          'A:\\Privacy\\Collage Stuffs\\Documents\\Kuliah S8\\Skripsi\\project dokumentasi\\siasn-bkn-dokumentasi\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Siasn Bkn Dokumentasi',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root:
            'A:\\Privacy\\Collage Stuffs\\Documents\\Kuliah S8\\Skripsi\\project dokumentasi\\siasn-bkn-dokumentasi',
          templates:
            'A:\\Privacy\\Collage Stuffs\\Documents\\Kuliah S8\\Skripsi\\project dokumentasi\\siasn-bkn-dokumentasi\\node_modules\\docz-core\\dist\\templates',
          docz:
            'A:\\Privacy\\Collage Stuffs\\Documents\\Kuliah S8\\Skripsi\\project dokumentasi\\siasn-bkn-dokumentasi\\.docz',
          cache:
            'A:\\Privacy\\Collage Stuffs\\Documents\\Kuliah S8\\Skripsi\\project dokumentasi\\siasn-bkn-dokumentasi\\.docz\\.cache',
          app:
            'A:\\Privacy\\Collage Stuffs\\Documents\\Kuliah S8\\Skripsi\\project dokumentasi\\siasn-bkn-dokumentasi\\.docz\\app',
          appPackageJson:
            'A:\\Privacy\\Collage Stuffs\\Documents\\Kuliah S8\\Skripsi\\project dokumentasi\\siasn-bkn-dokumentasi\\package.json',
          appTsConfig:
            'A:\\Privacy\\Collage Stuffs\\Documents\\Kuliah S8\\Skripsi\\project dokumentasi\\siasn-bkn-dokumentasi\\tsconfig.json',
          gatsbyConfig:
            'A:\\Privacy\\Collage Stuffs\\Documents\\Kuliah S8\\Skripsi\\project dokumentasi\\siasn-bkn-dokumentasi\\gatsby-config.js',
          gatsbyBrowser:
            'A:\\Privacy\\Collage Stuffs\\Documents\\Kuliah S8\\Skripsi\\project dokumentasi\\siasn-bkn-dokumentasi\\gatsby-browser.js',
          gatsbyNode:
            'A:\\Privacy\\Collage Stuffs\\Documents\\Kuliah S8\\Skripsi\\project dokumentasi\\siasn-bkn-dokumentasi\\gatsby-node.js',
          gatsbySSR:
            'A:\\Privacy\\Collage Stuffs\\Documents\\Kuliah S8\\Skripsi\\project dokumentasi\\siasn-bkn-dokumentasi\\gatsby-ssr.js',
          importsJs:
            'A:\\Privacy\\Collage Stuffs\\Documents\\Kuliah S8\\Skripsi\\project dokumentasi\\siasn-bkn-dokumentasi\\.docz\\app\\imports.js',
          rootJs:
            'A:\\Privacy\\Collage Stuffs\\Documents\\Kuliah S8\\Skripsi\\project dokumentasi\\siasn-bkn-dokumentasi\\.docz\\app\\root.jsx',
          indexJs:
            'A:\\Privacy\\Collage Stuffs\\Documents\\Kuliah S8\\Skripsi\\project dokumentasi\\siasn-bkn-dokumentasi\\.docz\\app\\index.jsx',
          indexHtml:
            'A:\\Privacy\\Collage Stuffs\\Documents\\Kuliah S8\\Skripsi\\project dokumentasi\\siasn-bkn-dokumentasi\\.docz\\app\\index.html',
          db:
            'A:\\Privacy\\Collage Stuffs\\Documents\\Kuliah S8\\Skripsi\\project dokumentasi\\siasn-bkn-dokumentasi\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
