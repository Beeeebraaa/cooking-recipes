import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { render } from 'preact'

import { App } from './app'

render(<App />, document.getElementById('app')!)
