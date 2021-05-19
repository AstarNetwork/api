import './interfaces/augment-api';
import './interfaces/augment-types';

import * as AllTypes from '@plasm/types/interfaces/definitions';
import { regTypesFromObject } from './helpers';

export * from './networkSpecs';

export const allDefinitions = regTypesFromObject(AllTypes);

// export all the type definitions by default
export default { types: allDefinitions };
