export function getFullPath({ rootPath, requestPath }): string {
  if (!rootPath || rootPath === '/') {
    return handlePathVariable(requestPath);
  }
  return handlePathVariable(`${rootPath}${requestPath}`);
}

export function handlePathVariable(fullPath: string): string {
  if (!fullPath || fullPath === '/') return '/';
  const pathArray = fullPath.split('/');
  pathArray.forEach((item, index) => {
    if (item.match(/^\{(.+?)\}$/g)) {
      pathArray[index] = `:${item.replace(/^\{/g, '').replace(/\}/g, '')}`;
    }
  });
  return pathArray.join('/');
}