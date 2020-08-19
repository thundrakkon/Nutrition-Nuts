var fruitsData = 'fruitsdata_transposed.csv'

// console log all the data
d3.csv(fruitsData).then(function(data){
    console.log(data);
});

// put all nutrient names in the dropdown menu
function dropdown() {
    var dropDownMenu = d3.select('#selDataset');
    d3.csv(fruitsData).then((data) => {
        for (var i= 0; i < data.length; i++){
            var nutrient_names = data[i].Nutrient;
            dropDownMenu.append('option').text(nutrient_names).property('value', nutrient_names)
        }
    })
}
// run the dropdown function
dropdown()

// BUILD CHART 
function buildChart(selected){
    d3.csv(fruitsData).then(function(data){
        var fruits = ["Apple","Banana","Blueberries","Lemon","Mango","Orange","Peach","Persimmon","Strawberry","Tomato","Watermelon"]
        for (var i = 0; i < data.length; i++){
            if (selected === data[i].Nutrient){
                console.log(selected)
                
                // for (var j = 0; j < fruits.length; j++){
                //     var yaxis = data[i].fruit[j]
                // }
                var yaxis = [data[i].Apple,
                            data[i].Banana,
                            data[i].Blueberries,
                            data[i].Lemon,
                            data[i].Mango,
                            data[i].Orange,
                            data[i].Peach,
                            data[i].Persimmon,
                            data[i].Strawberry,
                            data[i].Tomato,
                            data[i].Watermelon];
            } 
            console.log(yaxis)
        }
        var trace1 = {
            x: fruits,
            y: yaxis,
            type: 'bar',
            orientation: 'v'
        };

        // data array
        var data = [trace1];

        // layout
        var layout = {
            title: 'Fruit Comparison',
            xaxis: { title: 'Fruits'},
            yaxis: { title: 'Content'}
        };

        // plot chart
        Plotly.newPlot('bar', data, layout)
    })
}

// buildChart('Iron_Fe');


// BUILD NEW CHART WITH EACH OPTION CHANGE 
function optionChange(newSelection){
    if(newSelection !== ""){
        buildChart(newSelection)
    } else {
        var barChart = d3.select('#bar')
        barChart.html("");
    }
};
