<template>
  <footer class="relative mt-8">
    <div>
      <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1344px] py-8 lg:py-12">
        <div class="mb-8 flex gap-2">
          <a
            v-for="link in socialLinks"
            :key="link.name"
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-none text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
            :aria-label="link.name"
            :href="link.url"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img :src="link.icon" :alt="link.name" class="h-5 w-5" />
          </a>
        </div>
        <div>
          <p class="mb-2 text-sm">© {{ new Date().getFullYear() }} M0 FOUNDATION. All rights reserved.</p>
          <div class="text-xs text-[#728DA5] flex flex-col gap-3">
            <p>
              This website is hosted by the M0 Foundation. The information contained herein is provided solely for informational purposes and the reader should not construe anything contained herein to be a solicitation or an offer of sale of securities. Nor should you construe the contents of this document as legal, tax or financial advice. Any potential participant in the M0 ecosystem is urged to consult their own advisors for any legal, tax or financial questions.
            </p>
            <p>
              Neither the $M token, nor any governance tokens associated with the M0 project, will be offered to US persons (without a valid exemption). Any token described in this document has not been registered or qualified under any state or national securities law or regulation.
            </p>
            <p>
              Participation in the purchase, use, or investment in any digital assets, tokens, or cryptocurrencies involves inherent risks, including but not limited to market volatility, regulatory changes, and technological risks. Prospective users should conduct their own research and seek the advice of a qualified financial advisor or legal counsel before making any decisions. The M0 Foundation makes no representations, warranties or guarantees regarding the accuracy, completeness, or reliability of the information contained on this website or any linked materials. The M0 Foundation disclaims any liability for any direct, indirect, or consequential losses or damages arising from reliance on this information or any errors or omissions in its content.By accessing, reading, or using this website, you acknowledge and agree to the terms outlined in this disclaimer and the Terms and Conditions. You are solely responsible for evaluating the risks and merits associated with any actions you take related to the contents of this document.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1344px] py-8 lg:py-4 lg:flex lg:items-center lg:justify-between lg:gap-x-3">
          <div class="lg:flex-1 flex items-center justify-center lg:justify-end gap-x-1.5 lg:order-3"></div>
          <div class="mt-3 lg:mt-0 lg:order-2 flex items-center justify-center"></div>
          <div class="flex items-center justify-center lg:justify-start lg:flex-1 gap-x-1.5 mt-3 lg:mt-0 lg:order-1"></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import twitterIcon from '../assets/icons/twitter.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'
import githubIcon from '../assets/icons/github.svg'

const socialLinks = [
  {
    name: 'X - Twitter',
    url: 'https://x.com/m0foundation',
    icon: twitterIcon
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/m0-labs/',
    icon: linkedinIcon
  },
  {
    name: 'Github',
    url: 'https://github.com/m0-foundation',
    icon: githubIcon
  }
]
</script> 