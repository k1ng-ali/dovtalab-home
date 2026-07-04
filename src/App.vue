<script setup lang="ts">
import { useLenis } from './composables/useLenis'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import DailyQuiz from './components/DailyQuiz.vue'
import FeaturesSection from './components/FeaturesSection.vue'
import PopularQuiz from './components/PopularQuiz.vue'
import HowItWorks from './components/HowItWorks.vue'
import CreatorsSection from './components/CreatorsSection.vue'
import StatsCounter from './components/StatsCounter.vue'
import FooterSection from './components/FooterSection.vue'

useLenis()
</script>

<template>
  <NavBar />
  <HeroSection />
  <DailyQuiz />
  <FeaturesSection />
  <PopularQuiz />
  <HowItWorks />
  <CreatorsSection />
  <StatsCounter />
  <FooterSection />
</template>
