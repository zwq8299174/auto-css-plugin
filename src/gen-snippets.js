import * as rules from './rules/index';
import { readConfigFile } from './index';
const fs = require('fs');
const path = require('path');
const config = readConfigFile();
const ruleList = Object.values({ ...rules, ...config.modifyRules });
let snippetObj = {};

for (const r of ruleList) {
	if (r.snippets) {
		if (Object.prototype.toString.call(r.snippets) === '[object Function]') {
			snippetObj = Object.assign(snippetObj, r.snippets(config));
		} else {
			snippetObj = Object.assign(snippetObj, r.snippets);
		}
	}
}

function fwFile(str, flag) {
	if (!fs.existsSync('./.vscode')) {
		fs.mkdirSync('./.vscode');
	}
	fs.writeFileSync(path.resolve(process.cwd(), './.vscode/auto-css-snippets.code-snippets'), str, {
		flag,
	});
}
fwFile('', 'w');
const snippetStr = JSON.stringify(snippetObj, null, 4);
fwFile(snippetStr, 'w');
