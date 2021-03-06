// var url = "./result.json"
// var url = "./results_details.json"
var url = "/json"
console.log(url)
var csv = "../Daily-Values.csv"
var prediction = document.getElementById("prediction");
console.log(prediction)
// d3.select("#selDataset").on("change", function(summaryd) {
//   // Weather()
  
//   selectedOption = d3.select(this).node().value

d3.json(url).then((jsonData) => {
    d3.csv(csv).then((daily) => {
        console.log(jsonData)
        console.log(daily)
      
        // selectedOption = d3.select(this).node().value
        text = "Apple"
        selectedOption = text.toLowerCase()
        console.log(selectedOption)

        // Filter fruit from jsonData
        summary = jsonData.filter(d => d.description.toLowerCase() == selectedOption)
        console.log("summary", summary)

        // Portions Data
        fruitDesc=[]
        fruitWeight=[]
        for (var j=0; j<summary.map(row => row.foodPortions)[0].length; j++) {
          var portDesc = summary.map(row => row.foodPortions[j].portionDescription)
          if (String(portDesc).includes("1 small")){
            fruitDesc = summary.map(row => row.foodPortions[j].portionDescription)
            fruitWeight = summary.map(row => row.foodPortions[j].gramWeight)
            break;
          }
          else {
            fruitDesc = summary.map(row => row.foodPortions[0].portionDescription)
            fruitWeight = summary.map(row => row.foodPortions[0].gramWeight)
          }
        }
        console.log(fruitDesc)
        console.log(fruitWeight)

        // Base value of 100 g that the nutrition information uses
        var baseWeight = 100

        // Calculate the factor based off the serving size and base value
        var fruitFactor = fruitWeight/baseWeight
        console.log(fruitFactor)

        // Fruit name
        var fruitName = summary.map(row => row.description)

        // Energy
        var calAmt = (summary.map(row => row.foodNutrients[3].amount) * fruitFactor).toFixed(2)
        var calUnit = summary.map(row => row.foodNutrients[3].nutrient.unitName)
        
        // Total lipid (fat)
        var lipfatAmt = (summary.map(row => row.foodNutrients[1].amount) * fruitFactor).toFixed(2)
        var lipfatUnit = summary.map(row => row.foodNutrients[1].nutrient.unitName)
        var lipfatDVAdult = isNaN((lipfatAmt/daily[27].Adults*100).toFixed(1)) ?0+"."+0+"%": (lipfatAmt/daily[27].Adults*100).toFixed(1) + "%"

        // Fatty acids, total saturated
        var satfatAmt = (summary.map(row => row.foodNutrients[43].amount) * fruitFactor).toFixed(2)
        var satfatUnit = summary.map(row => row.foodNutrients[43].nutrient.unitName)
        var satfatDVAdult = isNaN((satfatAmt/daily[28].Adults*100).toFixed(1)) ?0+"."+0+"%": (satfatAmt/daily[28].Adults*100).toFixed(1) + "%"

        // Cholesterol
        var cholAmt = (summary.map(row => row.foodNutrients[42].amount) * fruitFactor).toFixed(2)
        var cholUnit = summary.map(row => row.foodNutrients[42].nutrient.unitName)
        var cholDVAdult = isNaN((cholAmt/daily[29].Adults*100).toFixed(1)) ?0+"."+0+"%": (cholAmt/daily[29].Adults*100).toFixed(1) + "%"

        // Sodium, Na
        var naAmt = (summary.map(row => row.foodNutrients[15].amount) * fruitFactor).toFixed(2)
        var naUnit = summary.map(row => row.foodNutrients[15].nutrient.unitName)
        var naDVAdult = isNaN((naAmt/daily[31].Adults*100).toFixed(1)) ?0+"."+0+"%": (naAmt/daily[31].Adults*100).toFixed(1) = "%"

        // Carbohydrate, by difference
        var carbAmt = (summary.map(row => row.foodNutrients[2].amount) * fruitFactor).toFixed(2)
        var carbUnit = summary.map(row => row.foodNutrients[2].nutrient.unitName)
        var carbDVAdult = isNaN((carbAmt/daily[30].Adults*100).toFixed(1)) ?0+"."+0+"%": (carbAmt/daily[30].Adults*100).toFixed(1) + "%"

        // Fiber, total dietary
        var fiberAmt = (summary.map(row => row.foodNutrients[9].amount) * fruitFactor).toFixed(2)
        var fiberUnit = summary.map(row => row.foodNutrients[9].nutrient.unitName)
        var fiberDVAdult = isNaN((fiberAmt/daily[32].Adults*100).toFixed(1)) ?0+"."+0+"%": (fiberAmt/daily[32].Adults*100).toFixed(1) + "%"

        // Sugars, total including NLEA
        var sugarAmt = (summary.map(row => row.foodNutrients[8].amount) * fruitFactor).toFixed(2)
        var sugarUnit = summary.map(row => row.foodNutrients[8].nutrient.unitName)
        var sugarDVAdult = isNaN((sugarAmt/daily[34].Adults*100).toFixed(1)) ?0+"."+0+"%": (sugarAmt/daily[34].Adults*100).toFixed(1) + "%"

        // Protein
        var proteinAmt = (summary.map(row => row.foodNutrients[0].amount) * fruitFactor).toFixed(2)
        var proteinUnit = summary.map(row => row.foodNutrients[0].nutrient.unitName)
        var proteinDVAdult = isNaN((proteinAmt/daily[33].Adults*100).toFixed(1)) ?0+"."+0+"%": (proteinAmt/daily[33].Adults*100).toFixed(1) + "%"
        console.log(proteinDVAdult)

        // Vitamin A, RAE
        var vitAAmt = (summary.map(row => row.foodNutrients[20].amount) * fruitFactor).toFixed(2)
        var vitAUnit = summary.map(row => row.foodNutrients[20].nutrient.unitName)
        var vitAVAdult = isNaN((vitAAmt/daily[0].Adults*100).toFixed(1)) ?0+"."+0+"%": (vitAAmt/daily[0].Adults*100).toFixed(1) + "%"

        // Vitamin B-6
        var vitBAmt = (summary.map(row => row.foodNutrients[32].amount) * fruitFactor).toFixed(2)
        var vitBUnit = summary.map(row => row.foodNutrients[32].nutrient.unitName)
        var vitBDVAdult = isNaN((vitBAmt/daily[10].Adults*100).toFixed(1)) ?0+"."+0+"%": (vitBAmt/daily[10].Adults*100).toFixed(1) + "%"

        // Vitamin C, total ascorbic acid
        var vitCAmt = (summary.map(row => row.foodNutrients[28].amount) * fruitFactor).toFixed(2)
        var vitCUnit = summary.map(row => row.foodNutrients[28].nutrient.unitName)
        var vitCDVAdult = isNaN((vitCAmt/daily[1].Adults*100).toFixed(1)) ?0+"."+0+"%": (vitCAmt/daily[1].Adults*100).toFixed(1) + "%"

        // Vitamin D (D2 + D3)
        var vitDAmt = (summary.map(row => row.foodNutrients[24].amount) * fruitFactor).toFixed(2)
        var vitDUnit = summary.map(row => row.foodNutrients[24].nutrient.unitName)
        var vitDDVAdult = isNaN((vitDAmt/daily[4].Adults*100).toFixed(1)) ?0+"."+0+"%": (vitDAmt/daily[4].Adults*100).toFixed(1) + "%"

        // Vitamin E (alpha-tocopherol)
        var vitEAmt = (summary.map(row => row.foodNutrients[23].amount) * fruitFactor).toFixed(2)
        var vitEUnit = summary.map(row => row.foodNutrients[23].nutrient.unitName)
        var vitEDVAdult = isNaN((vitEAmt/daily[5].Adults*100).toFixed(1)) ?0+"."+0+"%": (vitEAmt/daily[5].Adults*100).toFixed(1) + "%"

        // Calcium, Ca
        var calciumAmt = (summary.map(row => row.foodNutrients[10].amount) * fruitFactor).toFixed(2)
        var calciumUnit = summary.map(row => row.foodNutrients[10].nutrient.unitName)
        var calciumDVAdult = isNaN((calciumAmt/daily[2].Adults*100).toFixed(1)) ?0+"."+0+"%": (calciumAmt/daily[2].Adults*100).toFixed(1) + "%"

        // Iron, Fe
        var ironAmt = (summary.map(row => row.foodNutrients[11].amount) * fruitFactor).toFixed(2)
        var ironUnit = summary.map(row => row.foodNutrients[11].nutrient.unitName)
        var ironDVAdult = isNaN((ironAmt/daily[3].Adults*100).toFixed(1)) ?0+"."+0+"%": (ironAmt/daily[3].Adults*100).toFixed(1) + "%"

        // Potassium, K
        var kAmt = (summary.map(row => row.foodNutrients[14].amount) * fruitFactor).toFixed(2)
        var kUnit = summary.map(row => row.foodNutrients[14].nutrient.unitName)
        var kDVAdult = isNaN((kAmt/daily[25].Adults*100).toFixed(1)) ?0+"."+0+"%": (kAmt/daily[25].Adults*100).toFixed(1) + "%"

        // Magnesium, Mg
        var mgAmt = (summary.map(row => row.foodNutrients[12].amount) * fruitFactor).toFixed(2)
        var mgUnit = summary.map(row => row.foodNutrients[12].nutrient.unitName)
        var mgDVAdult = isNaN((mgAmt/daily[17].Adults*100).toFixed(1)) ?0+"."+0+"%": (mgAmt/daily[17].Adults*100).toFixed(1) + "%"

        // Phosphorus, P
        var pAmt = (summary.map(row => row.foodNutrients[13].amount) * fruitFactor).toFixed(2)
        var pUnit = summary.map(row => row.foodNutrients[13].nutrient.unitName)
        var pDVAdult = isNaN((pAmt/daily[15].Adults*100).toFixed(1)) ?0+"."+0+"%": (pAmt/daily[15].Adults*100).toFixed(1) + "%"

        // Zinc, Zn
        var znAmt = (summary.map(row => row.foodNutrients[16].amount) * fruitFactor).toFixed(2)
        var znUnit = summary.map(row => row.foodNutrients[16].nutrient.unitName)
        var znDVAdult = isNaN((znAmt/daily[18].Adults*100).toFixed(1)) ?0+"."+0+"%": (znAmt/daily[18].Adults*100).toFixed(1) + "%"

        // Copper, Cu
        var cuAmt = (summary.map(row => row.foodNutrients[17].amount) * fruitFactor).toFixed(2)
        var cuUnit = summary.map(row => row.foodNutrients[17].nutrient.unitName)
        var cuDVAdult = isNaN((cuAmt/daily[20].Adults*100).toFixed(1)) ?0+"."+0+"%": (cuAmt/daily[20].Adults*100).toFixed(1) + "%"

        // Carotene, beta
        var bcAmt = (summary.map(row => row.foodNutrients[21].amount) * fruitFactor).toFixed(2)
        var bcUnit = summary.map(row => row.foodNutrients[21].nutrient.unitName)
        var bcDVAdult = "N/A"

        // Thiamin
        var thiaminAmt = (summary.map(row => row.foodNutrients[29].amount) * fruitFactor).toFixed(2)
        var thiaminUnit = summary.map(row => row.foodNutrients[29].nutrient.unitName)
        var thiaminDVAdult = isNaN((thiaminAmt/daily[7].Adults*100).toFixed(1)) ?0+"."+0+"%": (thiaminAmt/daily[7].Adults*100).toFixed(1) + "%"

        // Riboflavin
        var riboAmt = (summary.map(row => row.foodNutrients[30].amount) * fruitFactor).toFixed(2)
        var riboUnit = summary.map(row => row.foodNutrients[30].nutrient.unitName)
        var riboDVAdult = isNaN((riboAmt/daily[8].Adults*100).toFixed(1)) ?0+"."+0+"%": (riboAmt/daily[8].Adults*100).toFixed(1) + "%"

        // Niacin
        var niacinAmt = (summary.map(row => row.foodNutrients[31].amount) * fruitFactor).toFixed(2)
        var niacinUnit = summary.map(row => row.foodNutrients[31].nutrient.unitName)
        var niacinDVAdult = isNaN((niacinAmt/daily[9].Adults*100).toFixed(1)) ?0+"."+0+"%": (niacinAmt/daily[9].Adults*100).toFixed(1) + "%"

        // Fatty acids, total monounsaturated
        var monofatAmt = (summary.map(row => row.foodNutrients[63].amount) * fruitFactor).toFixed(2)
        var monofatUnit = summary.map(row => row.foodNutrients[63].nutrient.unitName)
        var monofatDVAdult = "N/A"

        // Fatty acids, total polyunsaturated
        var polyfatAmt = (summary.map(row => row.foodNutrients[64].amount) * fruitFactor).toFixed(2)
        var polyfatUnit = summary.map(row => row.foodNutrients[64].nutrient.unitName)
        var polyfatDVAdult = "N/A"

        // Water
        var waterAmt = (summary.map(row => row.foodNutrients[5].amount) * fruitFactor).toFixed(2)
        var waterUnit = summary.map(row => row.foodNutrients[5].nutrient.unitName)
        var waterDVAdult = "N/A"

        // Append to Table
        var serve = d3.select("#heading-nutrition")
        serve.html("")
        serve.append().text(`Nutrition Facts: ${fruitName}`)

        var serve = d3.select("#row-serve")
        serve.html("")
        serve.append().text(`Serving Size: ${fruitDesc} (${fruitWeight} g)`)

        var serve = d3.select("#row-cal")
        serve.html("")
        serve.append().text(`Calories: ${calAmt} ${calUnit}`)

        var cell = d3.select("#row-1")
        cell.html("")
        cell.append("td").text(`Total Fats`)
        cell.append("td").text(`${lipfatAmt} ${lipfatUnit}`)
        cell.append("td").text(`${lipfatDVAdult}`)

        var cell = d3.select("#row-2")
        cell.html("")
        cell.append("td").text(`Saturated Fat`)
        cell.append("td").text(`${satfatAmt} ${satfatUnit}`)
        cell.append("td").text(`${satfatDVAdult}`)

        var cell = d3.select("#row-3")
        cell.html("")
        cell.append("td").text(`Cholesterol`)
        cell.append("td").text(`${cholAmt} ${cholUnit}`)
        cell.append("td").text(`${cholDVAdult}`)

        var cell = d3.select("#row-4")
        cell.html("")
        cell.append("td").text(`Sodium`)
        cell.append("td").text(`${naAmt} ${naUnit}`)
        cell.append("td").text(`${naDVAdult}`)

        var cell = d3.select("#row-5")
        cell.html("")
        cell.append("td").text(`Total Carbohydrate`)
        cell.append("td").text(`${carbAmt} ${carbUnit}`)
        cell.append("td").text(`${carbDVAdult}`)

        var cell = d3.select("#row-6")
        cell.html("")
        cell.append("td").text(`Dietary Fiber`)
        cell.append("td").text(`${fiberAmt} ${fiberUnit}`)
        cell.append("td").text(`${fiberDVAdult}`)

        var cell = d3.select("#row-7")
        cell.html("")
        cell.append("td").text(`Sugars`)
        cell.append("td").text(`${sugarAmt} ${sugarUnit}`)
        cell.append("td").text(`${sugarDVAdult}`)

        var cell = d3.select("#row-8")
        cell.html("")
        cell.append("td").text(`Protein`)
        cell.append("td").text(`${satfatAmt} ${proteinUnit}`)
        cell.append("td").text(`${satfatDVAdult}`)

        var cell = d3.select("#row-9")
        cell.html("")
        cell.append("td").text(`Vitamin A`)
        cell.append("td").text(`${vitAAmt} ${vitAUnit}`)
        cell.append("td").text(`${vitAVAdult}`)

        var cell = d3.select("#row-10")
        cell.html("")
        cell.append("td").text(`Vitamin B6`)
        cell.append("td").text(`${vitBAmt} ${vitBUnit}`)
        cell.append("td").text(`${vitBDVAdult}`)

        var cell = d3.select("#row-11")
        cell.html("")
        cell.append("td").text(`Vitamin C`)
        cell.append("td").text(`${vitCAmt} ${vitCUnit}`)
        cell.append("td").text(`${vitCDVAdult}`)

        var cell = d3.select("#row-12")
        cell.html("")
        cell.append("td").text(`Vitamin D`)
        cell.append("td").text(`${vitDAmt} ${vitDUnit}`)
        cell.append("td").text(`${vitDDVAdult}`)

        var cell = d3.select("#row-13")
        cell.html("")
        cell.append("td").text(`Vitamin E`)
        cell.append("td").text(`${vitEAmt} ${vitEUnit}`)
        cell.append("td").text(`${vitEDVAdult}`)

        var cell = d3.select("#row-14")
        cell.html("")
        cell.append("td").text(`Calcium`)
        cell.append("td").text(`${calciumAmt} ${calciumUnit}`)
        cell.append("td").text(`${calciumDVAdult}`)

        var cell = d3.select("#row-15")
        cell.html("")
        cell.append("td").text(`Iron`)
        cell.append("td").text(`${ironAmt} ${ironUnit}`)
        cell.append("td").text(`${ironDVAdult}`)

        var cell = d3.select("#row-16")
        cell.html("")
        cell.append("td").text(`Potassium`)
        cell.append("td").text(`${kAmt} ${kUnit}`)
        cell.append("td").text(`${kDVAdult}`)

        var cell = d3.select("#row-17")
        cell.html("")
        cell.append("td").text(`Magnesium`)
        cell.append("td").text(`${mgAmt} ${mgUnit}`)
        cell.append("td").text(`${mgDVAdult}`)

        var cell = d3.select("#row-18")
        cell.html("")
        cell.append("td").text(`Phosporus`)
        cell.append("td").text(`${pAmt} ${pUnit}`)
        cell.append("td").text(`${pDVAdult}`)

        var cell = d3.select("#row-19")
        cell.html("")
        cell.append("td").text(`Zinc`)
        cell.append("td").text(`${znAmt} ${znUnit}`)
        cell.append("td").text(`${znDVAdult}`)

        var cell = d3.select("#row-20")
        cell.html("")
        cell.append("td").text(`Copper`)
        cell.append("td").text(`${cuAmt} ${cuUnit}`)
        cell.append("td").text(`${cuDVAdult}`)

        var cell = d3.select("#row-21")
        cell.html("")
        cell.append("td").text(`Beta Carotene`)
        cell.append("td").text(`${bcAmt} ${bcUnit}`)
        cell.append("td").text(`${bcDVAdult}`)

        var cell = d3.select("#row-22")
        cell.html("")
        cell.append("td").text(`Thiamin`)
        cell.append("td").text(`${thiaminAmt} ${thiaminUnit}`)
        cell.append("td").text(`${thiaminDVAdult}`)

        var cell = d3.select("#row-23")
        cell.html("")
        cell.append("td").text(`Riboflavin`)
        cell.append("td").text(`${riboAmt} ${riboUnit}`)
        cell.append("td").text(`${riboDVAdult}`)

        var cell = d3.select("#row-24")
        cell.html("")
        cell.append("td").text(`Niacin`)
        cell.append("td").text(`${niacinAmt} ${niacinUnit}`)
        cell.append("td").text(`${niacinDVAdult}`)

        var cell = d3.select("#row-25")
        cell.html("")
        cell.append("td").text(`Monounsaturated Fat`)
        cell.append("td").text(`${monofatAmt} ${monofatUnit}`)
        cell.append("td").text(`${monofatDVAdult}`)

        var cell = d3.select("#row-26")
        cell.html("")
        cell.append("td").text(`Polyunsaturated Fat`)
        cell.append("td").text(`${polyfatAmt} ${polyfatUnit}`)
        cell.append("td").text(`${polyfatDVAdult}`)

        var cell = d3.select("#row-27")
        cell.html("")
        cell.append("td").text(`Water`)
        cell.append("td").text(`${waterAmt} ${waterUnit}`)
        cell.append("td").text(`${waterDVAdult}`)

    })
})