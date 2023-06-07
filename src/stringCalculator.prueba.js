import { stringCalculator } from "./stringCalculator.js";
import { strictEqual } from "node:assert";

strictEqual(stringCalculator("6,9"), 15);
strictEqual(stringCalculator("10,9"), 19);
strictEqual(stringCalculator("320,8"), 328);
