"use strict";

function notice() {

	console.log("\x1b[34m%s\x1b[0m", `
	Hey you... yeah you, listen. On the 1st of October, the
	1st version of KlonexJS will be released. It is going
	to be a game changer in web development! Stay tuned...
	`);
}

notice();

module.exports = notice;