const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(xhttp.responseText);
      const data = response.data;
      let allGrid = document.querySelectorAll(".belonging, .mentoring, .social, .cognitive, .behavioural, .physical, .preventing,.primary,.middle,.secondary,.combined,.other,.direct,.indir,.short,.moderate,.long,.one,.classroom,.small,.medium,.large,.academicrisk,.disadvantaged,.specialneeds,.universal");
      let allGridArray = Array.from(allGrid);

        for (i=0; i < allGridArray.length; i++) {
          let y = allGridArray[i].classList[0];
          let z = allGridArray[i].classList[1];
          // console.log(allGridArray[i].classList[0]);
          // console.log(allGridArray[i].classList[1]);
          
          
          //console.log(data.filter(it => it.intervention.includes(y) && it.outcome.includes(z)));
          //console.log(pip);
          let pip = data.filter(it => it.intervention.includes(y) && it.outcome.includes(z));
          //let growth = pip[0].growth;
          // console.log(pip[0]);
        // console.log(allGridArray[i]);
          
          //allGrid[i].innerHTML = data.filter(it => it.Intervention.includes(y) && it.Outcomes.includes(z)).length;
          //&& data.filter(it => it.intervention.includes("academic" || "numeracy" || "literacy" || "gpa")
          if(pip[0].effect != "n/a")
          allGrid[i].innerHTML += '<svg class="circle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"> <circle r=' + pip[0].growth * 5 + ' cx="50%" cy="80%" stroke="FF5F33" stroke-width="2" fill=""/><text x="50%" y="50%" text-anchor="middle" fill="black" font-weight="bold" font-size="2.5em" font-family="" dy=" ">' + '&#43;' + pip[0].growth + '</text></svg>';
          

            //This adds a black circle svg offset as a shadow
            // allGrid[i].innerHTML += '<svg class="circle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><defs>'+
            // '<filter id="shadow" x="-20%" y="-20%" width="200%" height="200%">'+
            // '<feGaussianBlur stdDeviation="2 2" result="shadow"/>'+
            // '<feOffset dx="6" dy="6"/>'+
            // '</filter>'+
            // '</defs> <circle r=' + pip[0].growth * 5 + ' style="filter: url(#shadow); fill: black" cx="50%" cy="80%" stroke="black" stroke-width="2"/><circle r=' + pip[0].growth * 5 + ' cx="50%" cy="80%" stroke="FF5F33" stroke-width="2" fill=""/><text x="50%" y="50%" text-anchor="middle" fill="black" font-weight="bold" font-size="2.5em" font-family="" dy=" ">' + '&#43;' + pip[0].growth + '</text></svg>';




          
          
            // console.log("done" + i);
          if(pip[0].effect != "n/a")
            tippy("#" + allGridArray[i].id, {
            maxWidth: '',
            content:   pip[0].effect,
            allowHTML: true,
            followCursor: 'default',
            boundary: 'parent',
            appendTo: document.body
          });
        };
}};
xhttp.open("GET", "data.json", true);
xhttp.send();

tippy('#setting', {
  maxWidth: 500,
  content: '<p style="font-size:110%;">Studies were categorised into five groups that aligned with participant’s grade level. These resulting groups were - Primary, Middle, Secondary, Combined K-12 and Other (included Special schools).</p>',
  interactive: true,
  allowHTML: true,
  appendTo: document.body
});
tippy('#mode', {
  maxWidth: 500,
  content: '<p style="font-size:110%;">Studies were categorised into two modes of implementation, depending on whether students were directly involved in the program, or indirectly (e.g. a teacher development program designed to improve classroom climate, supported by resources for students).</p>',
  interactive: true,
  allowHTML: true,
  appendTo: document.body
});
tippy('#duration', {
  maxWidth: 500,
  content: '<p style="font-size:110%;">Studies were categorised as being of short, moderate, or long duration depending on whether they ran for three months or less, up to one year, or more than one year in duration.</p>',
  interactive: true,
  allowHTML: true,
  appendTo: document.body
});
tippy('#grouping', {
  maxWidth: 500,
  content: '<p style="font-size:110%;">Studies were categorised into groups ranging from individual programs to whole-school activities done through the curriculum at the classroom level. There were also interventions that involved selective groups of students. These groups were defined as small (10 or fewer students), medium (11 to 20 students), and large (more than 20 students).</p>',
  interactive: true,
  allowHTML: true,
  appendTo: document.body
});
tippy('#approach', {
  maxWidth: 500,
  content: '<p style="font-size:110%;">Studies were categorised based on their approach into the following categories - Targeted: Academic risk, Targeted: Disadvantaged, Targeted: Special needs and Universal.</p>',
  interactive: true,
  allowHTML: true,
  appendTo: document.body
});

//https://www.d3-graph-gallery.com/graph/custom_legend.html#cat1
var svg = d3.select("#my_dataviz")
svg.append("circle").attr("cx",25).attr("cy",60).attr("r", 20).style("fill", "#FF5F33")
// svg.append("circle").attr("cx",20).attr("cy",50).attr("r", 6).style("fill", "#404080")
svg.append("text").attr("x", 5).attr("y", 13).text("Legend").attr("font-weight", "bold").style("font-size", "").attr("alignment-baseline","middle")
svg.append("text").attr("x", 15).attr("y", 33).text("+2").attr("font-weight", "bold").style("font-size", "1.5em").attr("alignment-baseline","middle")
svg.append("text").attr("x", 55).attr("y", 33).text(" = number of months of growth compared with control group").style("font-size", "").attr("alignment-baseline","middle")
svg.append("text").attr("x", 55).attr("y", 50).text("** = significance at < .001; * = significance at < .05").style("font-size", "").attr("alignment-baseline","middle")
// svg.append("text").attr("x", 50).attr("y", 50).text("variable B").style("font-size", "").attr("alignment-baseline","middle")



// const rows = ["belonging","mentoring","social","behavioural","physical","preventing"];
// const columns = ["setting","mode","duration","grouping","approach"];
// let gapGrid = document.querySelectorAll(".belonging, .mentoring, .social, .cognitive, .behavioural, .physical, .preventing,.primary,.middle,.secondary,.combined,.other,.direct,.indirect,.short,.moderate,.long,.one,.classroom,.small,.medium,.large,.academicrisk,.disadvantaged,.specialneeds,.universal")
// let gapGridArray = Array.from(gapGrid);

// for(h=0; h<gapGrid.length; h++) {
//     let el = gapGridArray[h]
//     console.log(gapGridArray[h]);

    

//     for(i=0; i<columns.length; i++) {
//         el.classList.add(columns[i]);
//             for (j=0; j<rows.length; j++) {
//               el.classList.add(rows[j]);
//             }
//     }
// }
// console.log(gapGridArray)