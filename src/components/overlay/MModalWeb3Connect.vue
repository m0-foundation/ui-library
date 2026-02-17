<template>
  <slot :connect="openModal">
    <button
      id="button-connect-wallet"
      data-test="modal-web3-button-connect-wallet"
      class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      @click="openModal">
      Connect wallet
    </button>
  </slot>

  <Teleport to="body">
    <div
      v-if="open"
      id="modal-backdrop"
      ref="modal-backdrop"
      class="fixed z-50 lg:z-40 inset-0 overflow-y-auto bg-grey-1000">
      <div class="flex items-center justify-center min-h-screen">
        <div ref="connectModal" class="w-full max-w-xl">
          <div class="flex flex-wrap flex-col">
            <div class="bg-grey-900 text-white p-3 lg:p-6">
              <p class="text-3xl text-center font-ppformula">Connect Wallet</p>
              <p
                class="font-inter text-center text-grey-500 leading-normal mt-2 max-sm:text-sm">
                Connect with one of our available wallet providers.
              </p>

              <div class="my-6 flex flex-wrap flex-col items-start">
                <button
                  v-for="wallet in wallets"
                  :key="wallet.name"
                  class="flex justify-between hover:underline border-grey-700 border-t last:border-y border-dashed border-spacing-4 py-4 w-full text-left text-xl"
                  @click="onWalletClick(wallet)">
                  <div class="flex justify-between items-center gap-4">
                    <div class="w-6 h-6 rounded bg-gray-600 flex items-center justify-center text-xs">
                      {{ wallet.name.charAt(0) }}
                    </div>
                    <span class="font-inter">{{ wallet.name }}</span>
                  </div>
                </button>
              </div>

              <div class="flex justify-center">
                <button
                  class="text-grey-200 self-end text-3xl p-2"
                  data-test="modal-web3-connect-button-close"
                  @click="open = false">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'

export interface Wallet {
  name: string
  id: string
}

export interface MModalWeb3ConnectProps {
  wallets?: Wallet[]
}

const props = withDefaults(defineProps<MModalWeb3ConnectProps>(), {
  wallets: () => [
    { name: 'MetaMask', id: 'metamask' },
    { name: 'WalletConnect', id: 'walletconnect' },
    { name: 'Coinbase Wallet', id: 'coinbase' },
  ],
})

const emit = defineEmits<{
  (e: 'connect', wallet: Wallet): void
  (e: 'open'): void
  (e: 'close'): void
}>()

const open = ref(false)
const connectModal = ref<HTMLElement | null>(null)

const openModal = () => {
  open.value = true
  emit('open')
}

const closeModal = () => {
  open.value = false
  emit('close')
}

const onWalletClick = (wallet: Wallet) => {
  emit('connect', wallet)
  closeModal()
}

// Simple click outside handler
if (typeof window !== 'undefined') {
  window.addEventListener('click', (e) => {
    if (open.value && connectModal.value && !connectModal.value.contains(e.target as Node)) {
      const backdrop = document.getElementById('modal-backdrop')
      if (backdrop && e.target === backdrop) {
        closeModal()
      }
    }
  })
}
</script>
