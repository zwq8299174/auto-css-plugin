/**
 * order 300
 */
import { PREFIX, toRegexStr } from '../constant';
import { getConfig } from '../config';
const className = ['position', 'pos'];

export default {
	regExp() {
		const prefix = getConfig(PREFIX);
		return new RegExp(`^${prefix}-((?<position>${toRegexStr(className)})-)?(?<value>static|relative|sticky|unset|absolute|fixed|inherit|initial)$`);
	},
	render({ groups }) {
		const { value } = groups;
		return {
			name: 'position',
			order: 300,
			css: [`position: ${value}`],
		};
	},
	snippets(config) {
		let snippets = {};
		for (const name of [undefined, ...className]) {
			for (const post of ['static', 'relative', 'sticky', 'absolute', 'fixed']) {
				snippets[`${name ? name : post}:${post}`] = {
					prefix: `${config.prefix}-${name ? name + '-' : ''}${post}`,
					body: `${config.prefix}-${name ? name + '-' : ''}${post}`,
				};
			}
		}
		return snippets;
	},
};
