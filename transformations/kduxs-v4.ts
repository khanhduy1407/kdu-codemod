import wrap from '../src/wrapAstTransformation'
import type { ASTTransformation } from '../src/wrapAstTransformation'

import { transformAST as addImport } from './add-import'
import { transformAST as removeExtraneousImport } from './remove-extraneous-import'

// new Store() -> createStore()
export const transformAST: ASTTransformation = (context) => {
  const { j, root } = context

  const kduxsImportDecls = root.find(j.ImportDeclaration, {
    source: {
      value: 'kduxs',
    },
  })

  const importedKduxs = kduxsImportDecls.find(j.ImportDefaultSpecifier)
  const importedStore = kduxsImportDecls.find(j.ImportSpecifier, {
    imported: {
      name: 'Store',
    },
  })

  if (importedKduxs.length) {
    const localKduxs = importedKduxs.get(0).node.local.name
    const newKduxsDotStore = root.find(j.NewExpression, {
      callee: {
        type: 'MemberExpression',
        object: {
          type: 'Identifier',
          name: localKduxs,
        },
        property: {
          name: 'Store',
        },
      },
    })

    newKduxsDotStore.replaceWith(({ node }) => {
      return j.callExpression(
        j.memberExpression(
          j.identifier(localKduxs),
          j.identifier('createStore')
        ),
        node.arguments
      )
    })
  }

  if (importedStore.length) {
    const localStore = importedStore.get(0).node.local.name
    const newStore = root.find(j.NewExpression, {
      callee: {
        type: 'Identifier',
        name: localStore,
      },
    })

    addImport(context, {
      specifier: {
        type: 'named',
        imported: 'createStore',
      },
      source: 'kduxs',
    })
    newStore.replaceWith(({ node }) => {
      return j.callExpression(j.identifier('createStore'), node.arguments)
    })
    removeExtraneousImport(context, { localBinding: localStore })
  }
}

export default wrap(transformAST)
export const parser = 'babylon'
