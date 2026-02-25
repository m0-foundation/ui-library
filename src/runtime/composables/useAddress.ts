import { ref } from 'vue'

export function useShortenAddress() {
  function shortenAddress(address: string, chars = 4): string {
    if (!address || address.length < 10) return address
    return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`
  }
  return { shortenAddress }
}

export function useAvatarColor() {
  function getAvatarColor(address: string): string {
    if (!address) return '#888888'
    let hash = 0
    for (let i = 0; i < address.length; i++) {
      hash = address.charCodeAt(i) + ((hash << 5) - hash)
    }
    const hue = Math.abs(hash % 360)
    return `hsl(${hue}, 65%, 50%)`
  }
  return { getAvatarColor }
}

export function useCopyToClipboard() {
  const copied = ref(false)
  let timeout: ReturnType<typeof setTimeout>

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text)
      copied.value = true
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        copied.value = false
      }, 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return { copied, copy }
}
