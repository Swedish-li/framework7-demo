// import $$ from 'dom7'
import Framework7 from 'framework7/framework7.esm.bundle.js'

// Import F7 Styles
import 'framework7/css/framework7.bundle.css'

// Import Icons and App Custom Styles
import '../css/icons.css'
import '../css/app.scss'

// Import Routes
import routes from './routes.js'

// Import main app component
import App from '../app.f7.html'

new Framework7({
    root: '#app', // App root element
    component: App, // App main component

    name: 'My App', // App name
    theme: 'auto', // Automatic theme detection

    // App routes
    routes: routes,
})
