// This program is designed specifically to be run in the terminal
import {createRequire} from "module";
const require = createRequire(import.meta.url)
const langs = require('langs');
import {franc} from "franc";

try {
let result = langs.where("3", franc(process.argv[2]))
console.log(`It looks like the input language is most likely ${result.name}`)
} catch (e) {
    console.log("It looks like it didn't work. Please try a larger sample size")
}
