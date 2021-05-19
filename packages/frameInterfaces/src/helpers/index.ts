import * as AllTypes from '@plasm/types/interfaces/definitions';
import { RegistryTypes } from '@polkadot/types/types';

interface ModuleTypeDef {
    [key: string]: {
        types: Object;
    };
}

export const typeDefsFromModuleName = (chainFrames: string[], typeOverride?: RegistryTypes) => {
    const nodeTypes = Object.fromEntries(
        Object.entries(AllTypes).filter((i) => {
            const frameName = i[0];

            // check if the object contains the property name
            if (chainFrames.includes(frameName)) {
                return true;
            } else {
                // note that this will skip the check if the frame name is incorrect
                return false;
            }
        }),
    );

    const types = regTypesFromObject(nodeTypes);

    // const bundleDef: OverrideBundleDefinition = {
    //     types: [
    //         {
    //             minmax: [0, undefined],
    //             types: { ...types, ...typeOverride },
    //         },
    //     ],
    // };

    // return bundleDef;

    return { ...types, ...typeOverride } as RegistryTypes;
};

export const regTypesFromObject = (moduleDef: ModuleTypeDef) => {
    const types = Object.values(moduleDef).reduce((res, { types }): object => ({ ...res, ...types }), {});
    return { ...types } as RegistryTypes;
};
