<script setup lang="ts">
import { computed } from 'vue'
import type { TokenName, ChainName } from '../../types'

import MIconTokenUsdc from './tokens/MIconTokenUsdc.vue'
import MIconTokenUsdai from './tokens/MIconTokenUsdai.vue'
import MIconTokenMusd from './tokens/MIconTokenMusd.vue'
import MIconTokenUsdPlus from './tokens/MIconTokenUsdPlus.vue'
import MIconTokenUsdk from './tokens/MIconTokenUsdk.vue'
import MIconTokenUsdky from './tokens/MIconTokenUsdky.vue'
import MIconTokenUsdhl from './tokens/MIconTokenUsdhl.vue'
import MIconTokenUsdz from './tokens/MIconTokenUsdz.vue'
import MIconTokenMantraUsd from './tokens/MIconTokenMantraUsd.vue'
import MIconTokenGrid from './tokens/MIconTokenGrid.vue'
import MIconTokenAusd from './tokens/MIconTokenAusd.vue'
import MIconTokenUsdsc from './tokens/MIconTokenUsdsc.vue'
import MIconTokenUsdt0 from './tokens/MIconTokenUsdt0.vue'
import MIconTokenWmEth from './tokens/MIconTokenWmEth.vue'

import MIconChainEthereum from './chains/MIconChainEthereum.vue'
import MIconChainSolana from './chains/MIconChainSolana.vue'
import MIconChainArbitrum from './chains/MIconChainArbitrum.vue'
import MIconChainOptimism from './chains/MIconChainOptimism.vue'
import MIconChainBase from './chains/MIconChainBase.vue'
import MIconChainLinea from './chains/MIconChainLinea.vue'
import MIconChainHyperEvm from './chains/MIconChainHyperEvm.vue'
import MIconChainBsc from './chains/MIconChainBsc.vue'
import MIconChainMantra from './chains/MIconChainMantra.vue'
import MIconChainPlasma from './chains/MIconChainPlasma.vue'
import MIconChainSoneium from './chains/MIconChainSoneium.vue'

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

const props = defineProps<{
  token: TokenName
  chain: ChainName
  size?: number
}>()

const size = computed(() => props.size ?? 32)
const tokenComponent = computed(() => tokenComponents[props.token])
const chainComponent = computed(() => chainComponents[props.chain])

const badgeSize = computed(() => Math.round(size.value * 0.44))
const badgeOffset = computed(() => -Math.round(size.value * 0.06))
const badgeBorder = computed(() => Math.max(1, Math.round(size.value * 0.06)))
</script>

<template>
  <span
    class="m-compound-icon"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <span class="m-compound-icon__token overflow-hidden rounded-full inline-flex">
      <component :is="tokenComponent" :size="size" />
    </span>

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
