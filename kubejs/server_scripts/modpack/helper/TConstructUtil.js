// priority: 999999
const TConstructUtil = {
  /**
   * 该函数用于添加合金类型的配方
   * @param {Special.Fluid} inputFluid1 输入流体id-1
   * @param {number} inputAmount1 输入流体量-1
   * @param {Special.Fluid} inputFluid2 输入流体id-2
   * @param {number} inputAmount2 输入流体量-2
   * @param {Special.Fluid} resultFluid 输出流体id
   * @param {number} resultAmount 输出流体量
   * @param {number} temperature 合金进行所需温度
   */
  alloys: function (inputFluid1, inputAmount1, inputFluid2, inputAmount2, resultFluid, resultAmount, temperature) {
    ServerEvents.recipes(event => {
      event.custom({
        "type": "tconstruct:alloy",
        "inputs": [
          {
            "amount": inputAmount1,
            "fluid": inputFluid1
          },
          {
            "amount": inputAmount2,
            "fluid": inputFluid2
          }
        ],
        "result": {
          "amount": resultAmount,
          "fluid": resultFluid
        },
        "temperature": temperature
      })
    })
  },
    /**
   * 该函数用于添加合金类型的配方(使用标签)
   * @param {Special.FluidTag} input1 输入流体id-1
   * @param {number} amount1 输入流体量-1
   * @param {Special.FluidTag} input2 输入流体id-2
   * @param {number} amount2 输入流体量-2
   * @param {Special.Fluid} result 输出流体id
   * @param {number} amount 输出流体量
   * @param {number} temperature 合金进行所需温度
   */
    alloysWithTag: function (input1, amount1, input2, amount2, result, amount, temperature) {
      ServerEvents.recipes(event => {
        event.custom({
          "type": "tconstruct:alloy",
          "inputs": [
            {
              "amount": amount1,
              "tag": input1
            },
            {
              "amount": amount2,
              "tag": input2
            }
          ],
          "result": {
            "amount": amount,
            "fluid": result
          },
          "temperature": temperature
        })
      })
    }
}