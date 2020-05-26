// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
//import './src/assets/style.scss'
module.exports = {
  siteName: 'MWebWare',
  plugins: [
    {
      use: 'gridsome-plugin-sass-resources-loader',
      options: {
        // provide path to the file with resources
        
        resources: './src/assets/style.scss'
      }
    }
  ]
}
