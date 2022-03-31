<template>
  <div class="mx-auto">
    <div class="flex flex-col bg-sky-700 w-max p-8 items-center">
      <div><h1 class="text-white border-b-4">BMI Calculator</h1></div>
      <div class="mt-4">
        <label for="personHeight" class="block text-white">Height[cm]</label>
        <input type="number" min="0" max="250" id="personHeight" name="personHeight" class="rounded-md p-1" v-model="height"/>
      </div>
      <div class="mt-4">
        <label for="personWeight" class="block text-white">Weight[kg]</label>
        <input type="number" min="0" max="250" id="personWeight" name="personWeight" class="rounded-md p-1" v-model="weight"/>
      </div>
      <div v-if="error!=''" class="p-2 text-white bg-red-900 my-4">{{ error }}</div>
      <button class="mt-4 bg-amber-600 text-white text-xl w-44 rounded-xl h-12" @click="calculateBMI()">Calculate
      </button>
      <div v-if="bmi >=0" class="my-4">
        <div :class="[infoColor,'p-4']">{{ info }}: {{ bmi }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BMICalculator",
  data() {
    return {
      weight: 1,
      height: 1,
      bmi: -1,
      info: '',
      infoColor: '',
      error: '',
    }
  },
  methods: {
    calculateBMI() {
      this.error="";
      if (this.height === "" || isNaN(this.height)) {
        this.error = "Provide a valid Height!";
      } else if (this.weight === "" || isNaN(this.weight)) {
        this.error = "Provide a valid Weight!";
      } else {
        const height = +this.height / 100;
        this.bmi = +(this.weight / Math.pow(height, 2)).toFixed(2);
        console.log(typeof this.bmi)
        //   Categorize result

        if (this.bmi < 18.5) {
          this.infoColor = "bg-amber-500"
          this.info = 'Underweight'
        } else if (this.bmi >= 18.5 && this.bmi < 25.0) {
          this.infoColor = "bg-green-500"
          this.info = 'Normal'
          //showResult(`Normal: <span>${bmi}</span>`, "green");
        } else if (this.bmi >= 25.0 && this.bmi < 29.9) {
          this.infoColor = "bg-blue-500"
          this.info = 'Overweight'
        } else {
          this.infoColor = "bg-red-500"
          this.info = 'Obese'
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
