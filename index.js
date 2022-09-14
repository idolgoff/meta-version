const getRepoInfo = require('git-repo-info');

const { filterObject } = require('./filter-object');
const { getPackageJsonFromPath } = require('./get-package-json');

const { branch, sha, tag, lastTag, committer, commitMessage, committerDate } = getRepoInfo();

module.exports = {
    metaVersion: () => {
        const { path } = module.parent;
        const packageJson = getPackageJsonFromPath(path);

        return ({
            git: { branch, sha, tag, lastTag, committer, commitMessage, committerDate },
            build: {},
            package: filterObject(require(packageJson), (key, _) => {
                return ['name', 'version', 'dependencies'].includes(key);
            }),
        });
    }
}