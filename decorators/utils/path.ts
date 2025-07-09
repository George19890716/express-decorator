export function getFullPath({ rootPath, requestPath }): string {
  if (rootPath == '/') {
    return requestPath;
  }
  return `${rootPath}${requestPath}`;
}