// @ts-ignore
import hljs from 'highlight.js/lib/core.js'
//升级了highlight
export default hljs
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)
import typescript from 'highlight.js/lib/languages/typescript'
hljs.registerLanguage('typescript', typescript)
import json from 'highlight.js/lib/languages/json'
hljs.registerLanguage('json', json)
import xml from 'highlight.js/lib/languages/xml'
hljs.registerLanguage('xml', xml)
import css from 'highlight.js/lib/languages/css'
hljs.registerLanguage('css', css)
