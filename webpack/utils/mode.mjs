import { getParsedArguments } from './get-parsed-arguments.mjs';

const parsedArguments = getParsedArguments();

export const mode = parsedArguments.mode ?? 'production';
