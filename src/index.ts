import { App } from 'vue'

// ─── Layout ──────────────────────────────────────────────────────────────────
import MHeader from './components/Layout/MHeader.vue'
import MFooter from './components/Layout/MFooter.vue'
import MCard from './components/Layout/MCard.vue'
import MPageTitle from './components/Layout/MPageTitle.vue'
import MSection from './components/Layout/MSection.vue'

// ─── Inputs ──────────────────────────────────────────────────────────────────
import MButton from './components/Inputs/MButton.vue'
import MInput from './components/Inputs/MInput.vue'
import MCheckbox from './components/Inputs/MCheckbox.vue'
import MButtonRadio from './components/Inputs/MButtonRadio.vue'
import MInputMultiSelect from './components/Inputs/MInputMultiSelect.vue'
import MDatePicker from './components/Inputs/MDatePicker.vue'
import MTextarea from './components/Inputs/MTextarea.vue'
import MTextareaMarkdown from './components/Inputs/MTextareaMarkdown.vue'

// ─── Overlay ─────────────────────────────────────────────────────────────────
import MDropdown from './components/Overlay/MDropdown.vue'
import MDrawer from './components/Overlay/MDrawer.vue'
import MModal from './components/Overlay/MModal.vue'
import MModalWeb3Connect from './components/Overlay/MModalWeb3Connect.vue'

// ─── Display ─────────────────────────────────────────────────────────────────
import MBadge from './components/Display/MBadge.vue'
import MAddressAvatar from './components/Display/MAddressAvatar.vue'
import MAddressCopy from './components/Display/MAddressCopy.vue'
import MAddressDisplay from './components/Display/MAddressDisplay.vue'
import MKeyMetric from './components/Display/MKeyMetric.vue'
import MProgressBar from './components/Display/MProgressBar.vue'
import MProgressBarThreshold from './components/Display/MProgressBarThreshold.vue'
import MTransactionsStepper from './components/Display/MTransactionsStepper.vue'

// ─── Icons / UI ──────────────────────────────────────────────────────────────
import MIconAlert from './components/Icons/UI/MIconAlert.vue'
import MIconInfo from './components/Icons/UI/MIconInfo.vue'
import MIconLoading from './components/Icons/UI/MIconLoading.vue'
import MIconCopy from './components/Icons/UI/MIconCopy.vue'
import MIconArrowRight from './components/Icons/UI/MIconArrowRight.vue'
import MIconCheck from './components/Icons/UI/MIconCheck.vue'
import MIconCheckCircle from './components/Icons/UI/MIconCheckCircle.vue'
import MIconCopyAlt from './components/Icons/UI/MIconCopyAlt.vue'
import MIconEye from './components/Icons/UI/MIconEye.vue'
import MIconVote from './components/Icons/UI/MIconVote.vue'
import MIconWeth from './components/Icons/UI/MIconWeth.vue'

// ─── Icons / Compound ────────────────────────────────────────────────────────
import MIconCompoundTokenChain from './components/Icons/MIconCompoundTokenChain.vue'
export type { TokenName, ChainName } from './components/Icons/MIconCompoundTokenChain.vue'

// ─── Icons / Tokens ──────────────────────────────────────────────────────────
import MIconTokenUsdc from './components/Icons/Tokens/MIconTokenUsdc.vue'
import MIconTokenUsdai from './components/Icons/Tokens/MIconTokenUsdai.vue'
import MIconTokenMusd from './components/Icons/Tokens/MIconTokenMusd.vue'
import MIconTokenUsdPlus from './components/Icons/Tokens/MIconTokenUsdPlus.vue'
import MIconTokenUsdk from './components/Icons/Tokens/MIconTokenUsdk.vue'
import MIconTokenUsdky from './components/Icons/Tokens/MIconTokenUsdky.vue'
import MIconTokenUsdhl from './components/Icons/Tokens/MIconTokenUsdhl.vue'
import MIconTokenUsdz from './components/Icons/Tokens/MIconTokenUsdz.vue'
import MIconTokenMantraUsd from './components/Icons/Tokens/MIconTokenMantraUsd.vue'
import MIconTokenGrid from './components/Icons/Tokens/MIconTokenGrid.vue'
import MIconTokenAusd from './components/Icons/Tokens/MIconTokenAusd.vue'
import MIconTokenUsdsc from './components/Icons/Tokens/MIconTokenUsdsc.vue'
import MIconTokenUsdt0 from './components/Icons/Tokens/MIconTokenUsdt0.vue'
import MIconTokenWmEth from './components/Icons/Tokens/MIconTokenWmEth.vue'

// ─── Icons / Chains ──────────────────────────────────────────────────────────
import MIconChainEthereum from './components/Icons/Chains/MIconChainEthereum.vue'
import MIconChainSolana from './components/Icons/Chains/MIconChainSolana.vue'
import MIconChainArbitrum from './components/Icons/Chains/MIconChainArbitrum.vue'
import MIconChainOptimism from './components/Icons/Chains/MIconChainOptimism.vue'
import MIconChainBase from './components/Icons/Chains/MIconChainBase.vue'
import MIconChainLinea from './components/Icons/Chains/MIconChainLinea.vue'
import MIconChainHyperEvm from './components/Icons/Chains/MIconChainHyperEvm.vue'
import MIconChainBsc from './components/Icons/Chains/MIconChainBsc.vue'
import MIconChainMantra from './components/Icons/Chains/MIconChainMantra.vue'
import MIconChainPlasma from './components/Icons/Chains/MIconChainPlasma.vue'
import MIconChainSoneium from './components/Icons/Chains/MIconChainSoneium.vue'

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
