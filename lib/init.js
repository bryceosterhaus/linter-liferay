'use babel'

import path from 'path'
import LinterLiferay from './linter-liferay'

export default {
  config: {
    lintJS: {
      default: true,
      description: 'Check javascript source for errors in addition to formatting',
      title: 'Lint Javascript',
      type: 'boolean'
    },
    checkSFPath: {
      default: path.join(__dirname, '..', 'node_modules', 'check-source-formatting', 'bin', 'index.js'),
      description: 'The absolute path to check-source-formatting\'s main. You generally should have no need to modify this.',
      title: 'Path to check-source-formatting',
      type: 'string'
    }
  },

  activate() {
    this.linter = new LinterLiferay()
  },

  deactivate() {
    this.linter.destroy()
  },

  provideLinter() {
    return this.linter.provideLinter()
  }
}