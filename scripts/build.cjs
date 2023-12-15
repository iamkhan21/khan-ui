const fs = require("node:fs");
const path = require("node:path");

const distPath = "./dist";
const packageJsonPath = "./package.json";

function createPackageJson() {
	const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
	const distPackageJson = {
		name: packageJson.name,
		description: packageJson.description,
		version: packageJson.version,
		main: "index.js",
		types: "index.d.ts",
		license: packageJson.license,
		author: packageJson.author,
		keywords: packageJson.keywords,
		homepage: packageJson.homepage,
		repository: packageJson.repository,
		bugs: packageJson.bugs,
		dependencies: packageJson.dependencies,
	};

	fs.writeFileSync(
		path.join(distPath, "package.json"),
		JSON.stringify(distPackageJson, null, 2),
	);
}

function copyReadme() {
	fs.copyFileSync("./README.md", path.join(distPath, "README.md"));
}

function build() {
	createPackageJson();
	copyReadme();
}

build();
