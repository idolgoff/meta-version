# MetaVersion

**MetaVersion**: A lightweight, powerful Node.js module that provides real-time metadata about your git repository, build, and package. Enhance your debugging and monitoring experience, making your development process more efficient and informed.

## Installation

Install the module with npm:

```bash
npm install meta-version --save-dev
```

## Usage

First, import the module in your file:

```javascript
const { metaVersion } = require('meta-version');
```

Then, call the metaVersion function:

```javascript
const metadata = metaVersion();
console.log(metadata);
```

## Function

The metaVersion function accepts an optional parameter:

- projectRoot (string): The root directory of the project. Defaults to the current working directory.

## Example

Here’s an example of how to use the module:

```javascript
const { metaVersion } = require('meta-version');

const metadata = metaVersion('/path/to/your/project');
console.log(metadata);
```

In this example, the module will return the metadata about the git repository, build, and package of the project located at ‘/path/to/your/project’.

Happy coding!
