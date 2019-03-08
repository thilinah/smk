# Smk
Formatted output generator using JavaScript. Smk can be used  read piped output from a command and
format it using JavaScript and pipe it to another command for further processing.

You would prefer smk over awk for some tasks if you are more familiar with JavaScript 

## Install

Install with npm:

```bash
npm install -g smk
```

## Usage
##### -e: Javascript expression to transform input
```bash
ls / | smk -e"'\"' + data + '\"'"
```
##### -f: Javascript function to transform input 
```bash
ls / | smk -f"(data) => '\"' + data + '\"'"
```

##### -a: will pass the lines as an array to the function. The function will only be called once
```bash
ls / | smk -a -f"(a) => JSON.stringify(a)"
```

## Examples

### All file names under root enclosed in double quotes
```bash
ls / | smk "'\"' + data + '\"'"

```

### All files under the root as a JSON array
```bash
ls / | smk -a -f"(a) => JSON.stringify(a)"

```

### List all commit messages of a github repo
```bash
curl https://api.github.com/repos/gamonoid/icehrm/commits | smk -a -f"(data) => JSON.parse(data.join('')).map((commit) => commit.commit.message)"

```
