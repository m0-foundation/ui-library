<script setup lang="ts">
import { computed } from 'vue'

// Token icons
import MIconTokenUsdc from './Tokens/MIconTokenUsdc.vue'
import MIconTokenUsdai from './Tokens/MIconTokenUsdai.vue'
import MIconTokenMusd from './Tokens/MIconTokenMusd.vue'
import MIconTokenUsdPlus from './Tokens/MIconTokenUsdPlus.vue'
import MIconTokenUsdk from './Tokens/MIconTokenUsdk.vue'
import MIconTokenUsdky from './Tokens/MIconTokenUsdky.vue'
import MIconTokenUsdhl from './Tokens/MIconTokenUsdhl.vue'
import MIconTokenUsdz from './Tokens/MIconTokenUsdz.vue'
import MIconTokenMantraUsd from './Tokens/MIconTokenMantraUsd.vue'
import MIconTokenGrid from './Tokens/MIconTokenGrid.vue'
import MIconTokenAusd from './Tokens/MIconTokenAusd.vue'
import MIconTokenUsdsc from './Tokens/MIconTokenUsdsc.vue'
import MIconTokenUsdt0 from './Tokens/MIconTokenUsdt0.vue'
import MIconTokenWmEth from './Tokens/MIconTokenWmEth.vue'

// Chain icons
import MIconChainEthereum from './Chains/MIconChainEthereum.vue'
import MIconChainSolana from './Chains/MIconChainSolana.vue'
import MIconChainArbitrum from './Chains/MIconChainArbitrum.vue'
import MIconChainOptimism from './Chains/MIconChainOptimism.vue'
import MIconChainBase from './Chains/MIconChainBase.vue'
import MIconChainLinea from './Chains/MIconChainLinea.vue'
import MIconChainHyperEvm from './Chains/MIconChainHyperEvm.vue'
import MIconChainBsc from './Chains/MIconChainBsc.vue'
import MIconChainMantra from './Chains/MIconChainMantra.vue'
import MIconChainPlasma from './Chains/MIconChainPlasma.vue'
import MIconChainSoneium from './Chains/MIconChainSoneium.vue'

export type TokenName =
  | 'usdc' | 'usdai' | 'musd' | 'usd-plus' | 'usdk' | 'usdky'
  | 'usdhl' | 'usdz' | 'mantrausd' | 'grid' | 'ausd' | 'usdsc'
  | 'usdt0' | 'wm-eth'

export type ChainName =
  | 'ethereum' | 'solana' | 'arbitrum' | 'optimism' | 'base'
  | 'linea' | 'hyperevm' | 'bsc' | 'mantra' | 'plasma' | 'soneium'

const tokenComponents: Record<TokenName, unknown> = {
  'usdc': MIconTokenUsdc,
  'usdai': MIconTokenUsdai,
  'musd': MIconTokenMusd,
  'usd-plus': MIconTokenUsdPlus,
  'usdk': MIconTokenUsdk,
  'usdky': MIconTokenUsdky,
  'usdhl': MIconTokenUsdhl,
  'usdz': MIconTokenUsdz,
  'mantrausd': MIconTokenMantraUsd,
  'grid': MIconTokenGrid,
  'ausd': MIconTokenAusd,
  'usdsc': MIconTokenUsdsc,
  'usdt0': MIconTokenUsdt0,
  'wm-eth': MIconTokenWmEth,
}

const chainComponents: Record<ChainName, unknown> = {
  'ethereum': MIconChainEthereum,
  'solana': MIconChainSolana,
  'arbitrum': MIconChainArbitrum,
  'optimism': MIconChainOptimism,
  'base': MIconChainBase,
  'linea': MIconChainLinea,
  'hyperevm': MIconChainHyperEvm,
  'bsc': MIconChainBsc,
  'mantra': MIconChainMantra,
  'plasma': MIconChainPlasma,
  'soneium': MIconChainSoneium,
}

const props = defineProps({
  token: {
    type: String as () => TokenName,
    required: true,
  },
  chain: {
    type: String as () => ChainName,
    required: true,
  },
  size: {
    type: Number,
    default: 32,
  },
})

const tokenComponent = computed(() => tokenComponents[props.token])
const chainComponent = computed(() => chainComponents[props.chain])

// Badge is ~44% of the token size (mirrors the liquidity-toolkit pattern: 14px badge on 32px icon)
const badgeSize = computed(() => Math.round(props.size * 0.44))
// Offset so the badge overlaps the bottom-right corner: positioned -25% outside
const badgeOffset = computed(() => -Math.round(props.size * 0.06))
// White ring border width scales with icon size
const badgeBorder = computed(() => Math.max(1, Math.round(props.size * 0.06)))
</script>

<template>
  <span
    class="m-compound-icon"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <!-- Main token icon clipped to circle -->
    <span class="m-compound-icon__token overflow-hidden rounded-full inline-flex">
      <component :is="tokenComponent" :size="size" />
    </span>

    <!-- Chain badge clipped to circle, overlaid bottom-right -->
    <span
      class="m-compound-icon__chain overflow-hidden rounded-full inline-flex"
      :style="{
        width: `${badgeSize}px`,
        height: `${badgeSize}px`,
        bottom: `${badgeOffset}px`,
        right: `${badgeOffset}px`,
        outline: `${badgeBorder}px solid white`,
      }"
    >
      <component :is="chainComponent" :size="badgeSize" />
    </span>
  </span>
</template>

<style scoped>
.m-compound-icon {
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
}

.m-compound-icon__token {
  width: 100%;
  height: 100%;
}

.m-compound-icon__chain {
  position: absolute;
  background: white;
}
</style>
