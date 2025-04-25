import { ref } from 'vue'

export function useGameLogic() {
  const money = ref(0)
  const konoeCost = ref(10)
  const konoeLevel = ref(0)
  const damageIncrease = ref(0)
  const dps = ref(0)

  let interval = null

  function moneyIncrement() {
    money.value += 1
  }

  function buyUpgrade() {
    if (money.value >= konoeCost.value) {
      money.value -= konoeCost.value
      konoeLevel.value++
      damageIncrease.value++
      dps.value += 1
      konoeCost.value = Math.round(konoeCost.value * 1.2)
    }
  }

  function startDpsLoop() {
    interval = setInterval(() => {
      money.value += dps.value / 10
    }, 100)
  }

  function stopDpsLoop() {
    clearInterval(interval)
  }

  return {
    money,
    konoeCost,
    konoeLevel,
    damageIncrease,
    dps,
    moneyIncrement,
    buyUpgrade,
    startDpsLoop,
    stopDpsLoop
  }
}
