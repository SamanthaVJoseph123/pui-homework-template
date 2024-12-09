const topics = [
    "Fantasy", 
    "Science Fiction", 
    "Romance", 
    "Historical Fiction",
    "Horror",
    "Thriller",
    "Mystery",
    "Literature"
];

let x = localStorage.getItem('storedNotes');
let notecardDictionaryString = JSON.parse(x);

let topicCounts = [];

for (let i=0; i < topics.length; i++) {
    const currentTopic = topics[i];
    let count = 0;

    for (const key in notecardDictionaryString) {
        const note = notecardDictionaryString[key];
        if (note.noteTopic === currentTopic){
            count++;
        }
    }

    topicCounts.push({topic: currentTopic, count: count });
    }

// var dataset = [80,100,56,120,180,30,40,120,160];

const svgWidth = 900, svgHeight = 250, barPadding = 2;

console.log("I AM HERE NOW!!");
console.log(topicCounts);
console.log(topicCounts.length);
const barWidth = (svgWidth / topicCounts.length);

// if (topicCounts.length > 0){
//     barWidth = svgWidth / topicCounts.length;
// } else {
//     barWidth = 0;
// }

const svg = d3.select('#bar-chart')
    .attr("width", svgWidth)
    .attr("height", svgHeight);


svg.selectAll("*").remove();


svg.selectAll("rect")
    .data(topicCounts)
    .enter()
    .append("rect")
    .attr("y", d => svgHeight - d.count * 20)
    .attr("height", d => d.count * 20)
    .attr("width", barWidth - barPadding)
    .attr("x", (d,i) => i * barWidth)
    .attr("fill", "#69b3a2");

svg.selectAll("text")
    .data(topicCounts)
    .enter()
    .append("text")
    .attr("x", (d,i) => i * barWidth + (barWidth / 2))
    .attr("y", svgHeight - 5)
    .attr("text-anchor", "middle")
    .text(d => d.topic)
    .style("font-size", "12px")
    .style("font-family", "'Source Serif 4', serif");