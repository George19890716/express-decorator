import fse from 'fs-extra';

export function getFileInfo(filePath) {
  try {
    const exist = fse.existsSync(filePath);
    if (exist) {
      const fileInfo = fse.statSync(filePath);
      return { exist, empty: fileInfo.size === 0, directory: fileInfo.isDirectory() };
    }
    return { exist, empty: true, directory: false };
  } catch (e) {
    console.error(`Failed to check file: ${filePath}`);
    console.error(e?.message ?? e);
    throw e;
  }
}