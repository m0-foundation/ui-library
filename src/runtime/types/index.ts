export type TokenName =
  | 'usdc' | 'usdai' | 'musd' | 'usd-plus' | 'usdk' | 'usdky'
  | 'usdhl' | 'usdz' | 'mantrausd' | 'grid' | 'ausd' | 'usdsc'
  | 'usdt0' | 'wm-eth' | 'usdat' | 'usdx' | 'usd8' | 'citrea'
  | 'xo' | 'usd-tel' | 'mrusd'

export type ChainName =
  | 'ethereum' | 'solana' | 'arbitrum' | 'optimism' | 'base'
  | 'linea' | 'hyperevm' | 'bsc' | 'mantra' | 'plasma' | 'soneium' | 'polygon'

export interface Wallet {
  name: string
  id: string
}
