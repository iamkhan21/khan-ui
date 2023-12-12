const fs = require("fs");
const path = require("path");

const distPath = "./dist";
const packageJsonPath = "./package.json";

function createDistPackageJson() {
	const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
	const distPackageJson = {
		name: packageJson.name,
		description: packageJson.description,
		version: packageJson.version,
		author: packageJson.author,
		license: packageJson.license,
		main: "index.js",
		types: "index.d.ts",
		dependencies: packageJson.dependencies,
	};
	fs.writeFileSync(
		path.join(distPath, "package.json"),
		JSON.stringify(distPackageJson, null, 2),
	);
}

function build() {
	createDistPackageJson();
}

build();
