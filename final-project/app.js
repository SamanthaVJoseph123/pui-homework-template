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

//colors associated with each genre/topic
const topicColorMap = {
    "Fantasy": "#238db0",
    "Science Fiction": "#d9713d",
    "Romance": "#de7ec9",
    "Historical Fiction": "#1dc241",
    "Horror": "#d93f21",
    "Thriller": "#A52A2A",
    "Mystery": "#8621d9",
    "Literature": "#2a477a",
};

//translating local storage (string) into object
let x = localStorage.getItem('storedNotes');
let notecardDictionary = JSON.parse(x);

let topicCounts = [];

//(outer) loop through each topic, such as Romance
//(inner) loop through all notes/posts in dictionary to count how many posts have the topic of "Romance"
for (let i=0; i < topics.length; i++) {
    const currentTopic = topics[i];
    let count = 0;

    for (const key in notecardDictionary) {
        const note = notecardDictionary[key];
        if (note.noteTopic === currentTopic){
            count++;
        }
    }

    topicCounts.push({topic: currentTopic, count: count });
    }

//setting up variables to use later in the SVG
// Setting up the weidth, height, and padding between bars for the SVG
const svgWidth = 900, svgHeight = 120, barPadding = 2;
const barWidth = (svgWidth / topicCounts.length);

// d3.select() selects the SVG element in index.html
// then we set the height and width establised
const svg = d3.select('#bar-chart')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

// This function clears all existing elements inside the SVG
svg.selectAll("*").remove();

// svg.selectAll("rect") creates rects
svg.selectAll("rect")
    .data(topicCounts)
    // .data(topicCounts) brings in the topiCounts data
    // for each item in topicCounts, D3 creates a rect element
    .enter()
    .append("rect")
    // appends rects element to each data point
    .attr("y", d => svgHeight - d.count * 20)
    // "y" is the y attribute of each rectange
    // determines where the bar starts vertically
    .attr("height", d => d.count * 20)
    .attr("width", barWidth - barPadding)
    .attr("x", (d,i) => i * barWidth)
    .attr("fill", d => topicColorMap[d.topic]);

svg.selectAll("text")
    .data(topicCounts)
    .enter()
    .append("text")
    .attr("x", (d,i) => i * barWidth + (barWidth / 2))
    .attr("y", svgHeight - 5)
    .attr("text-anchor", "middle")
    .text(d => d.topic)
    .style("font-size", "12px")
    .style("font-family", "'Source Serif 4', serif")
    .style("font-weight", "600")
    .attr("fill", d=> d.count === 0 ? "black" :"white");