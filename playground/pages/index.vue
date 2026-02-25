<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header demo -->
    <MHeader title="UI Library Playground" />

    <div class="p-8 max-w-5xl mx-auto space-y-16">

      <!-- Token Icons -->
      <section>
        <h2 class="text-xl font-semibold mb-2">Token Icons</h2>
        <p class="text-sm text-gray-500 mb-4">14 token icons — compound with Ethereum chain badge</p>
        <div class="grid grid-cols-7 gap-6">
          <div v-for="token in tokens" :key="token" class="flex flex-col items-center gap-2">
            <MIconCompoundTokenChain :token="token" chain="ethereum" :size="40" />
            <span class="text-[11px] text-gray-500 text-center">{{ token }}</span>
          </div>
        </div>
      </section>

      <!-- Chain Icons -->
      <section>
        <h2 class="text-xl font-semibold mb-2">Chain Icons</h2>
        <p class="text-sm text-gray-500 mb-4">11 chain icons — compound with USDC token</p>
        <div class="grid grid-cols-6 gap-6">
          <div v-for="chain in chains" :key="chain" class="flex flex-col items-center gap-2">
            <MIconCompoundTokenChain token="usdc" :chain="chain" :size="40" />
            <span class="text-[11px] text-gray-500 text-center">{{ chain }}</span>
          </div>
        </div>
      </section>

      <!-- Brand Icons -->
      <section>
        <h2 class="text-xl font-semibold mb-2">Brand Icons</h2>
        <p class="text-sm text-gray-500 mb-4">M0 protocol token icons — inline SVG, scales to any size</p>
        <div class="flex gap-12 items-end">
          <div class="flex flex-col items-center gap-2">
            <div class="flex items-end gap-3">
              <MIconTokenM :size="24" />
              <MIconTokenM :size="36" />
              <MIconTokenM :size="48" />
            </div>
            <span class="text-[11px] text-gray-500">M</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="flex items-end gap-3">
              <MIconTokenWM :size="24" />
              <MIconTokenWM :size="36" />
              <MIconTokenWM :size="48" />
            </div>
            <span class="text-[11px] text-gray-500">wM</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="flex items-end gap-3">
              <MIconTokenPower :size="24" />
              <MIconTokenPower :size="36" />
              <MIconTokenPower :size="48" />
            </div>
            <span class="text-[11px] text-gray-500">POWER</span>
          </div>
          <div class="flex flex-col items-center gap-2">
            <div class="flex items-end gap-3">
              <MIconTokenZero :size="24" />
              <MIconTokenZero :size="36" />
              <MIconTokenZero :size="48" />
            </div>
            <span class="text-[11px] text-gray-500">ZERO</span>
          </div>
        </div>
      </section>

      <!-- Icon Sizing -->
      <section>
        <h2 class="text-xl font-semibold mb-2">Icon Scaling</h2>
        <p class="text-sm text-gray-500 mb-4">Compound icons at 16, 24, 32, 48, 64px</p>
        <div class="flex items-end gap-6">
          <div v-for="s in [16, 24, 32, 48, 64]" :key="s" class="flex flex-col items-center gap-2">
            <MIconCompoundTokenChain token="usdc" chain="ethereum" :size="s" />
            <span class="text-[11px] text-gray-500">{{ s }}px</span>
          </div>
        </div>
      </section>

      <!-- Address Components -->
      <section>
        <h2 class="text-xl font-semibold mb-2">Address Components</h2>
        <p class="text-sm text-gray-500 mb-4">Shared composables: useShortenAddress, useAvatarColor, useCopyToClipboard</p>
        <div class="bg-white rounded-lg border border-gray-200 divide-y divide-gray-100">
          <div class="p-4 flex items-center justify-between">
            <code class="text-xs text-gray-400 w-40">MAddressAvatar</code>
            <MAddressAvatar address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" />
          </div>
          <div class="p-4 flex items-center justify-between">
            <code class="text-xs text-gray-400 w-40">MAddressCopy</code>
            <MAddressCopy address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" />
          </div>
          <div class="p-4 flex items-center justify-between">
            <code class="text-xs text-gray-400 w-40">MAddressDisplay</code>
            <MAddressDisplay address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" short />
          </div>
          <div class="p-4 flex items-center justify-between">
            <code class="text-xs text-gray-400 w-40">MAddressDisplay (named)</code>
            <MAddressDisplay address="0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045" display-name="vitalik.eth" short show-tag tag="Deployer" />
          </div>
        </div>
      </section>

      <!-- Web3 Connect -->
      <section>
        <h2 class="text-xl font-semibold mb-2">Web3 Connect Modal</h2>
        <p class="text-sm text-gray-500 mb-4">Click to open — scoped backdrop click-outside dismiss</p>
        <MModalWeb3Connect @connect="onConnect" />
      </section>

      <!-- Footer demo -->
      <MFooter />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TokenName, ChainName, Wallet } from '../../src/runtime/types'

const tokens: TokenName[] = [
  'usdc', 'usdai', 'musd', 'usd-plus', 'usdk', 'usdky',
  'usdhl', 'usdz', 'mantrausd', 'grid', 'ausd', 'usdsc',
  'usdt0', 'wm-eth',
]

const chains: ChainName[] = [
  'ethereum', 'solana', 'arbitrum', 'optimism', 'base',
  'linea', 'hyperevm', 'bsc', 'mantra', 'plasma', 'soneium',
]

function onConnect(wallet: Wallet) {
  console.log('Connected:', wallet)
}
</script>
