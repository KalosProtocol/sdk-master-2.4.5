import JSBI from 'jsbi'
export type BigintIsh = JSBI | number | string
export enum ChainId {
  MAINNET = 56,
  TESTNET = 97,
  LOCALNET = 1337
}
export enum TradeType {
  EXACT_INPUT = 0,
  EXACT_OUTPUT = 1
}
export enum Rounding {
  ROUND_DOWN = 0,
  ROUND_HALF_UP = 1,
  ROUND_UP = 2
}
export const FACTORY_ADDRESS = '0x2f4A4b8DcCDbE1e3eeF08f52C81627C8DB009276'
export const FACTORY_ADDRESS_TESTNET = '0x14180EE2De5bfF3bA55950Fc705fcB5b0A499579'
export const FACTORY_ADDRESS_LOCALNET = '0x9A9f2CCfdE556A7E9Ff0848998Aa4a0CFD8863AE'
export const FACTORY_ADDRESS_MAP = {
  [ChainId.MAINNET]: FACTORY_ADDRESS,
  [ChainId.TESTNET]: FACTORY_ADDRESS_TESTNET,
  [ChainId.LOCALNET]: FACTORY_ADDRESS_LOCALNET
}
export const INIT_CODE_HASH = '0x55012345d40e58e171a68c23e25a9d1cac4eff50d04ee9bcd6857f02522f26a7'
export const INIT_CODE_HASH_TESTNET = '0x9d69e8b558718d746c8e562f701ccdf41818502e166b449b0bc371a3e2b18b01'
export const INIT_CODE_HASH_LOCALNET = '0x9d69e8b558718d746c8e562f701ccdf41818502e166b449b0bc371a3e2b18b01'
export const INIT_CODE_HASH_MAP = {
  [ChainId.MAINNET]: INIT_CODE_HASH,
  [ChainId.TESTNET]: INIT_CODE_HASH_TESTNET,
  [ChainId.LOCALNET]: INIT_CODE_HASH_LOCALNET
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)
export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}
export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
