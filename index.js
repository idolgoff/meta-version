const getRepoInfo = require('git-repo-info');

const { filterObject } = require('./filter-object');
const { getPackageJsonFromPath } = require('./get-package-json');

const { branch, sha, tag, lastTag, committer, commitMessage, committerDate } = getRepoInfo();

/**
 * This module exports a function that returns metadata about the git repository, build, and package.
 * @module metaVersion
 */
module.exports = {
    /**
     * Returns an object containing metadata about the git repository, build, and package.
     * @param {string} [projectRoot=process.cwd()] - The root directory with your package.json and git.
     * @returns {Object} An object containing the git, build, and package metadata.
     */
    metaVersion: (projectRoot = process.cwd()) => {
        const packageJson = getPackageJsonFromPath(projectRoot);

        return ({
            git: { branch, sha, tag, lastTag, committer, commitMessage, committerDate },
            build: {
                date: new Date(),
            },
            package: filterObject(require(packageJson), (key, _) => {
                return ['name', 'version', 'dependencies'].includes(key);
            }),
        });
    }
}