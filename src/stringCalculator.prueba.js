import { stringCalculator } from "./stringCalculator.js";
import { strictEqual } from "node:assert";

strictEqual(stringCalculator("6,9"), 15);
