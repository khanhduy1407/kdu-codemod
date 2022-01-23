import { createApp } from 'kdu'
import App from './App.kdu'
import './main.postcss'
import Editor from './components/Editor.kdu'
import Navbar from './components/Navbar.kdu'
import TransformationSelect from './components/TransformationSelect.kdu'
import CodeMirror from './components/CodeMirror.kdu'
import Panels from './components/Panels.kdu'
import TransformView from './components/TransformView.kdu'
import OpenInEditor from './components/OpenInEditor.kdu'
import FixtureSelect from './components/FixtureSelect.kdu'
import { initStore } from './store'

const app = createApp(App)

app.component('Editor', Editor)
app.component('Navbar', Navbar)
app.component('TransformationSelect', TransformationSelect)
app.component('CodeMirror', CodeMirror)
app.component('Panels', Panels)
app.component('TransformView', TransformView)
app.component('OpenInEditor', OpenInEditor)
app.component('FixtureSelect', FixtureSelect)

app.mount('#app')

initStore()
