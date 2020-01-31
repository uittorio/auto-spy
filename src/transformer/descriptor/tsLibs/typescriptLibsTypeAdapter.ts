import * as ts from 'typescript';
import { Scope } from '../../scope/scope';
import { TypeChecker } from '../../typeChecker/typeChecker';
import { GetDescriptor } from '../descriptor';
import { GetUndefinedDescriptor } from '../undefined/undefined';
import { TypescriptLibsTypes } from './typescriptLibsTypes';

export function TypescriptLibsTypeAdapter(node: ts.TypeReferenceNode, scope: Scope): ts.Node {
  const typeChecker: ts.TypeChecker = TypeChecker();
  const symbol: ts.Symbol = typeChecker.getSymbolAtLocation(node.typeName);
  const typeScriptType: TypescriptLibsTypes = TypescriptLibsTypes[symbol.name];

  switch (typeScriptType) {
  case(TypescriptLibsTypes.Array):
  case(TypescriptLibsTypes.ReadonlyArray):
    return ts.createNode(ts.SyntaxKind.ArrayType);
  case(TypescriptLibsTypes.Number):
    return ts.createNode(ts.SyntaxKind.NumberKeyword);
  case(TypescriptLibsTypes.String):
    return ts.createNode(ts.SyntaxKind.StringKeyword);
  case(TypescriptLibsTypes.Boolean):
    return ts.createNode(ts.SyntaxKind.BooleanKeyword);
  case(TypescriptLibsTypes.Object):
    return ts.createNode(ts.SyntaxKind.ObjectKeyword);
  case(TypescriptLibsTypes.Function):
    const functionNode: ts.Node = ts.createNode(ts.SyntaxKind.VoidKeyword);
    return ts.createFunctionTypeNode([], [], functionNode as ts.TypeNode);
  case(TypescriptLibsTypes.Promise):
    const dataResolved: ts.Expression = node.typeArguments && node.typeArguments[0] ? GetDescriptor(node.typeArguments[0], scope) : GetUndefinedDescriptor();

    const promiseAccess: ts.PropertyAccessExpression = ts.createPropertyAccess(ts.createIdentifier('Promise'), ts.createIdentifier('resolve'));

    return ts.createCall(
      promiseAccess,
      [],
      [dataResolved],
    );
  default:
    return ts.createNode(ts.SyntaxKind.UndefinedKeyword);
  }
}