import fs from 'fs';
import path from 'path';
// Ensure directory existence

const ensureDirectoryExistence = (filePath) => {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
      return true;
    }
    fs.mkdirSync(dirname, { recursive: true });
};
export default ensureDirectoryExistence;