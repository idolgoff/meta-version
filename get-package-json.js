const fs = require('fs');

const getPackageJsonFromPath = (path) => {
    if (!path) throw new Error('package.json not found');

    const filename = 'package.json';
    if (fs.existsSync(`${path}/${filename}`)) return `${path}/${filename}`;

    const parentPath = path.split('/').slice(0, -1).join('/');
    return getPackageJsonFromPath(parentPath);
}

module.exports = {
    getPackageJsonFromPath,
}