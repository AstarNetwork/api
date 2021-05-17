import './interfaces/augment-api';
import './interfaces/augment-types';

import { RegistryTypes } from '@polkadot/types/types';

import * as PlasmTypes from '@plasm/types/interfaces/definitions';

const types = Object.values(PlasmTypes).reduce((res, { types }): object => ({ ...res, ...types }), {});

const typeRegistry: RegistryTypes = { ...types };

// export all types by default
export default typeRegistry;
