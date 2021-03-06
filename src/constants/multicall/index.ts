import { ChainId } from '@nguyenphu27/sdk'
import MULTICALL_ABI from './abi.json'

// const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
//  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb', // TODO
//  [ChainId.TESTNET]: '0x301907b5835a2d723Fe3e9E8C5Bc5375d5c1236A'
// }

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '', // TODO
  [ChainId.TESTNET]: '0x1a4b46512004e983B9f604De9b4A108663247cC3'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
