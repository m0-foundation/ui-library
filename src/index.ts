import { App } from 'vue'

// ─── Layout ──────────────────────────────────────────────────────────────────
import MHeader from './components/layout/MHeader.vue'
import MFooter from './components/layout/MFooter.vue'
import MCard from './components/layout/MCard.vue'
import MPageTitle from './components/layout/MPageTitle.vue'
import MSection from './components/layout/MSection.vue'

// ─── Inputs ──────────────────────────────────────────────────────────────────
import MButton from './components/inputs/MButton.vue'
import MInput from './components/inputs/MInput.vue'
import MCheckbox from './components/inputs/MCheckbox.vue'
import MButtonRadio from './components/inputs/MButtonRadio.vue'
import MInputMultiSelect from './components/inputs/MInputMultiSelect.vue'
import MDatePicker from './components/inputs/MDatePicker.vue'
import MTextarea from './components/inputs/MTextarea.vue'
import MTextareaMarkdown from './components/inputs/MTextareaMarkdown.vue'

// ─── Overlay ─────────────────────────────────────────────────────────────────
import MDropdown from './components/overlay/MDropdown.vue'
import MDrawer from './components/overlay/MDrawer.vue'
import MModal from './components/overlay/MModal.vue'
import MModalWeb3Connect from './components/overlay/MModalWeb3Connect.vue'

// ─── Display ─────────────────────────────────────────────────────────────────
import MBadge from './components/display/MBadge.vue'
import MAddressAvatar from './components/display/MAddressAvatar.vue'
import MAddressCopy from './components/display/MAddressCopy.vue'
import MAddressDisplay from './components/display/MAddressDisplay.vue'
import MKeyMetric from './components/display/MKeyMetric.vue'
import MProgressBar from './components/display/MProgressBar.vue'
import MProgressBarThreshold from './components/display/MProgressBarThreshold.vue'
import MTransactionsStepper from './components/display/MTransactionsStepper.vue'

// ─── Icons / UI ──────────────────────────────────────────────────────────────
import MIconAlert from './components/icons/ui/MIconAlert.vue'
import MIconInfo from './components/icons/ui/MIconInfo.vue'
import MIconLoading from './components/icons/ui/MIconLoading.vue'
import MIconCopy from './components/icons/ui/MIconCopy.vue'
import MIconArrowRight from './components/icons/ui/MIconArrowRight.vue'
import MIconCheck from './components/icons/ui/MIconCheck.vue'
import MIconCheckCircle from './components/icons/ui/MIconCheckCircle.vue'
import MIconCopyAlt from './components/icons/ui/MIconCopyAlt.vue'
import MIconEye from './components/icons/ui/MIconEye.vue'
import MIconVote from './components/icons/ui/MIconVote.vue'
import MIconWeth from './components/icons/ui/MIconWeth.vue'

// ─── Icons / Compound ────────────────────────────────────────────────────────
import MIconCompoundTokenChain from './components/icons/MIconCompoundTokenChain.vue'
export type { TokenName, ChainName } from './components/icons/MIconCompoundTokenChain.vue'

// ─── Icons / Tokens ──────────────────────────────────────────────────────────
import MIconTokenUsdc from './components/icons/tokens/MIconTokenUsdc.vue'
import MIconTokenUsdai from './components/icons/tokens/MIconTokenUsdai.vue'
import MIconTokenMusd from './components/icons/tokens/MIconTokenMusd.vue'
import MIconTokenUsdPlus from './components/icons/tokens/MIconTokenUsdPlus.vue'
import MIconTokenUsdk from './components/icons/tokens/MIconTokenUsdk.vue'
import MIconTokenUsdky from './components/icons/tokens/MIconTokenUsdky.vue'
import MIconTokenUsdhl from './components/icons/tokens/MIconTokenUsdhl.vue'
import MIconTokenUsdz from './components/icons/tokens/MIconTokenUsdz.vue'
import MIconTokenMantraUsd from './components/icons/tokens/MIconTokenMantraUsd.vue'
import MIconTokenGrid from './components/icons/tokens/MIconTokenGrid.vue'
import MIconTokenAusd from './components/icons/tokens/MIconTokenAusd.vue'
import MIconTokenUsdsc from './components/icons/tokens/MIconTokenUsdsc.vue'
import MIconTokenUsdt0 from './components/icons/tokens/MIconTokenUsdt0.vue'
import MIconTokenWmEth from './components/icons/tokens/MIconTokenWmEth.vue'

// ─── Icons / Chains ──────────────────────────────────────────────────────────
import MIconChainEthereum from './components/icons/chains/MIconChainEthereum.vue'
import MIconChainSolana from './components/icons/chains/MIconChainSolana.vue'
import MIconChainArbitrum from './components/icons/chains/MIconChainArbitrum.vue'
import MIconChainOptimism from './components/icons/chains/MIconChainOptimism.vue'
import MIconChainBase from './components/icons/chains/MIconChainBase.vue'
import MIconChainLinea from './components/icons/chains/MIconChainLinea.vue'
import MIconChainHyperEvm from './components/icons/chains/MIconChainHyperEvm.vue'
import MIconChainBsc from './components/icons/chains/MIconChainBsc.vue'
import MIconChainMantra from './components/icons/chains/MIconChainMantra.vue'
import MIconChainPlasma from './components/icons/chains/MIconChainPlasma.vue'
import MIconChainSoneium from './components/icons/chains/MIconChainSoneium.vue'

// ─── Named exports ───────────────────────────────────────────────────────────
export {
  // Layout
  MHeader,
  MFooter,
  MCard,
  MPageTitle,
  MSection,
  // Inputs
  MButton,
  MInput,
  MCheckbox,
  MButtonRadio,
  MInputMultiSelect,
  MDatePicker,
  MTextarea,
  MTextareaMarkdown,
  // Overlay
  MDropdown,
  MDrawer,
  MModal,
  MModalWeb3Connect,
  // Display
  MBadge,
  MAddressAvatar,
  MAddressCopy,
  MAddressDisplay,
  MKeyMetric,
  MProgressBar,
  MProgressBarThreshold,
  MTransactionsStepper,
  // Icons / UI
  MIconAlert,
  MIconInfo,
  MIconLoading,
  MIconCopy,
  MIconArrowRight,
  MIconCheck,
  MIconCheckCircle,
  MIconCopyAlt,
  MIconEye,
  MIconVote,
  MIconWeth,
  // Icons / Compound
  MIconCompoundTokenChain,
  // Icons / Tokens
  MIconTokenUsdc,
  MIconTokenUsdai,
  MIconTokenMusd,
  MIconTokenUsdPlus,
  MIconTokenUsdk,
  MIconTokenUsdky,
  MIconTokenUsdhl,
  MIconTokenUsdz,
  MIconTokenMantraUsd,
  MIconTokenGrid,
  MIconTokenAusd,
  MIconTokenUsdsc,
  MIconTokenUsdt0,
  MIconTokenWmEth,
  // Icons / Chains
  MIconChainEthereum,
  MIconChainSolana,
  MIconChainArbitrum,
  MIconChainOptimism,
  MIconChainBase,
  MIconChainLinea,
  MIconChainHyperEvm,
  MIconChainBsc,
  MIconChainMantra,
  MIconChainPlasma,
  MIconChainSoneium,
}

// ─── Vue Plugin ──────────────────────────────────────────────────────────────
export default {
  install(app: App) {
    // Layout
    app.component('MHeader', MHeader)
    app.component('MFooter', MFooter)
    app.component('MCard', MCard)
    app.component('MPageTitle', MPageTitle)
    app.component('MSection', MSection)
    // Inputs
    app.component('MButton', MButton)
    app.component('MInput', MInput)
    app.component('MCheckbox', MCheckbox)
    app.component('MButtonRadio', MButtonRadio)
    app.component('MInputMultiSelect', MInputMultiSelect)
    app.component('MDatePicker', MDatePicker)
    app.component('MTextarea', MTextarea)
    app.component('MTextareaMarkdown', MTextareaMarkdown)
    // Overlay
    app.component('MDropdown', MDropdown)
    app.component('MDrawer', MDrawer)
    app.component('MModal', MModal)
    app.component('MModalWeb3Connect', MModalWeb3Connect)
    // Display
    app.component('MBadge', MBadge)
    app.component('MAddressAvatar', MAddressAvatar)
    app.component('MAddressCopy', MAddressCopy)
    app.component('MAddressDisplay', MAddressDisplay)
    app.component('MKeyMetric', MKeyMetric)
    app.component('MProgressBar', MProgressBar)
    app.component('MProgressBarThreshold', MProgressBarThreshold)
    app.component('MTransactionsStepper', MTransactionsStepper)
    // Icons / UI
    app.component('MIconAlert', MIconAlert)
    app.component('MIconInfo', MIconInfo)
    app.component('MIconLoading', MIconLoading)
    app.component('MIconCopy', MIconCopy)
    app.component('MIconArrowRight', MIconArrowRight)
    app.component('MIconCheck', MIconCheck)
    app.component('MIconCheckCircle', MIconCheckCircle)
    app.component('MIconCopyAlt', MIconCopyAlt)
    app.component('MIconEye', MIconEye)
    app.component('MIconVote', MIconVote)
    app.component('MIconWeth', MIconWeth)
    // Icons / Compound
    app.component('MIconCompoundTokenChain', MIconCompoundTokenChain)
    // Icons / Tokens
    app.component('MIconTokenUsdc', MIconTokenUsdc)
    app.component('MIconTokenUsdai', MIconTokenUsdai)
    app.component('MIconTokenMusd', MIconTokenMusd)
    app.component('MIconTokenUsdPlus', MIconTokenUsdPlus)
    app.component('MIconTokenUsdk', MIconTokenUsdk)
    app.component('MIconTokenUsdky', MIconTokenUsdky)
    app.component('MIconTokenUsdhl', MIconTokenUsdhl)
    app.component('MIconTokenUsdz', MIconTokenUsdz)
    app.component('MIconTokenMantraUsd', MIconTokenMantraUsd)
    app.component('MIconTokenGrid', MIconTokenGrid)
    app.component('MIconTokenAusd', MIconTokenAusd)
    app.component('MIconTokenUsdsc', MIconTokenUsdsc)
    app.component('MIconTokenUsdt0', MIconTokenUsdt0)
    app.component('MIconTokenWmEth', MIconTokenWmEth)
    // Icons / Chains
    app.component('MIconChainEthereum', MIconChainEthereum)
    app.component('MIconChainSolana', MIconChainSolana)
    app.component('MIconChainArbitrum', MIconChainArbitrum)
    app.component('MIconChainOptimism', MIconChainOptimism)
    app.component('MIconChainBase', MIconChainBase)
    app.component('MIconChainLinea', MIconChainLinea)
    app.component('MIconChainHyperEvm', MIconChainHyperEvm)
    app.component('MIconChainBsc', MIconChainBsc)
    app.component('MIconChainMantra', MIconChainMantra)
    app.component('MIconChainPlasma', MIconChainPlasma)
    app.component('MIconChainSoneium', MIconChainSoneium)
  },
}
