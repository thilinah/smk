# Smk
Formatted output generator using JavaScript. Smk can be used  read piped output from a command and
format it using JavaScript and pipe it to another command for further processing.

## Install

Install with npm:

```bash
npm install -g smk
```

## Examples
### All file names under root enclosed in double quotes
```bash
ls / | smk "'\"' + t + '\"'"

```
