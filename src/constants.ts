import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | number | string;
export declare enum ChainId {
    MAINNET = 56,
    TESTNET = 97,
    LOCALNET = 1337
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "0x2f4A4b8DcCDbE1e3eeF08f52C81627C8DB009276";
export declare const FACTORY_ADDRESS_TESTNET = "0x14180EE2De5bfF3bA55950Fc705fcB5b0A499579";
export declare const FACTORY_ADDRESS_LOCALNET = "0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE";
export declare const FACTORY_ADDRESS_MAP: {
    56: string;
    97: string;
    1337: string;
};
export declare const INIT_CODE_HASH = '0x55012345d40e58e171a68c23e25a9d1cac4eff50d04ee9bcd6857f02522f26a7';
export declare const INIT_CODE_HASH_TESTNET = '0x9d69e8b558718d746c8e562f701ccdf41818502e166b449b0bc371a3e2b18b01';
export declare const INIT_CODE_HASH_LOCALNET = '0x9d69e8b558718d746c8e562f701ccdf41818502e166b449b0bc371a3e2b18b01';
export declare const INIT_CODE_HASH_MAP: {
    56: string;
    97: string;
    1337: string;
};
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const FEES_NUMERATOR: JSBI;
export declare const FEES_DENOMINATOR: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
