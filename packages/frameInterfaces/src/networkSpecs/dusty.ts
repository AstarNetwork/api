import { RegistryTypes } from '@polkadot/types/types';

import { dappsStaking, operator, ovm, plasmRewards, trading } from '@plasm/types/interfaces/definitions';

// todo: convert the frames array in the `network-config.json` file to types object properties for dynamic importing

const types = Object.values({ dappsStaking, operator, ovm, plasmRewards, trading }).reduce(
    (res, { types }): object => ({ ...res, ...types }),
    {},
);

const dustyRegistry: RegistryTypes = { ...types };

export default dustyRegistry;
