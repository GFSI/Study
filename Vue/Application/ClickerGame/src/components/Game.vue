<template>
  <section>
    <div class="main">
      <div class="left">
        <div class="upgrade" @click="buyUpgrade">
          <div class="leftUpgrade">
            <img src="../assets/upgrades/upgrade01.jpg" alt="" class="upgradeKonoe" />
          </div>
          <div class="middleUpgrade">
            <h3 class="upgradeName">Konoe</h3>
            <div class="costUpgrade">
              <img src="../assets/icons/coin.png" alt="" class="upgradeCoin" />
              <p><span>{{ konoeCost }}</span></p>
              <img src="../assets/icons/sword.png" alt="" class="upgradeSword" />
              <p><span>+1/s</span></p>
            </div>
          </div>
          <div class="rightUpgrade">
            Level<span>{{ konoeLevel }}</span>
          </div>
          <div class="nextLevelInfo">
            <p>+<span>{{ damageIncrease }}</span> damage<br />per second</p>
          </div>
        </div>
      </div>
      <div class="middle">
        <h1>Money: <span>{{ Math.floor(money) }}</span></h1>
        <img
          class="figureImage"
          src="../assets/enemies/enemy01.png"
          @click="moneyIncrement"
          draggable="false"
        />
        <p>DPS actual: {{ dps }}</p>
      </div>
      <div class="right"></div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useGameLogic } from '../composables/game'

const {
  money,
  konoeCost,
  konoeLevel,
  damageIncrease,
  dps,
  moneyIncrement,
  buyUpgrade,
  startDpsLoop,
  stopDpsLoop
} = useGameLogic()

onMounted(() => {
  startDpsLoop()
})

onUnmounted(() => {
  stopDpsLoop()
})
</script>