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

if (Object.keys(notecardDictionaryString).length > 0){
    for (let i=0; i < topics.length; i++) {
        const currentTopic = topics[i];
        let count = 0;

        for (const key in notecardDictionaryString) {
            const note = notecardDictionaryString[key];
            if (note.noteTopic == currentTopic){
                count++;
            }
        }

        if (count > 0){
            topicCounts.push({topic: currentTopic, count: count});
        }
    }
} else {
    topicCounts = [];
}

// var dataset = [80,100,56,120,180,30,40,120,160];

const svgWidth = 500, svgHeight = 300, barPadding = 5;

if (topicCounts.length > 0){
    barWidth = svgWidth / topicCounts.length;
} else {
    barWidth = 0;
}

const svg = d3.select('#bar-chart')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

svg.selectAll("*").remove();

if (topicCounts.length > 0){
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
        .style("font-size", "10px");
} else {
    svg.append("text")
        .attr("x", svgWidth / 2)
        .attr("y", svgHeight / 2)
        .attr("text-anchor", "middle")
        .text("No posts available")
        .style("font-size", "16px")
        .style("fill", "#666");
}