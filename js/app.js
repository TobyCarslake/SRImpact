const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(xhttp.responseText);
      const data = response.data;

      let allGrid = document.querySelectorAll(".belonging, .mentoring, .social, .cognitive, .behavioural, .physical, .preventing,.primary,.middle,.secondary,.combined,.other,.direct,.indir,.short,.moderate,.longest,.one,.classroom,.small,.medium,.large,.academicrisk,.disadvantaged,.specialneeds,.universal");
      let allGridArray = Array.from(allGrid);
      let acGrids = document.querySelectorAll(".academic,.numeracy,.literacy,.gpa");
      let acGridsArray = Array.from(acGrids);
      let welGrids = document.querySelectorAll(".wellbeing,.socialemotional,.behaviouralskills,.cognitiveskills,.internalising");
      let welGridsArray = Array.from(welGrids);

      let acAllColumns = document.querySelectorAll(".academic,.numeracy,.literacy,.gpa,.academicCol,.numeracyCol,.literacyCol,.gpaCol");
      let welAllColumns = document.querySelectorAll(".wellbeing,.socialemotional,.behaviouralskills,.cognitiveskills,.internalising,.wellbeingCol,.socialemotionalCol,.behaviouralCol,.cognitiveCol,.internalisingCol");
      
      for (var a = 0; a < acAllColumns.length; a++) {
        acAllColumns[a].className += ' ac ';
      }
      for (var b = 0; b < welAllColumns.length; b++) {
        welAllColumns[b].className += ' wel ';
      }

      //for array of academic outcomes grid to populate hover for academic grids
      for (k=0; k < acGridsArray.length; k++) {
        let w = acGridsArray[k].classList[0];
        let x = acGridsArray[k].classList[1];
        let acFilter = data.filter(it => it.intervention.includes(w) && it.outcome.includes(x));
        
        if(acFilter[0].effect != "n/a")
        tippy("#" + acGridsArray[k].id, {
        maxWidth: '',
        content:  '&#43;' + acFilter[0].growth + ' months learning <br>' + acFilter[0].effect,
        allowHTML: true,
        followCursor: 'default',
        boundary: 'parent',
        appendTo: document.body
      });
      }

        //for all outcomes g value in grid and svg circle
        for (j=0; j < welGridsArray.length; j++) {
          let u = welGridsArray[j].classList[0];
          let v = welGridsArray[j].classList[1];
          let welFilter = data.filter(it => it.intervention.includes(u) && it.outcome.includes(v));
         
          if(welFilter[0].effect != "n/a")
            tippy("#" + welGridsArray[j].id, {
            maxWidth: '',
            content:   welFilter[0].effect,
            allowHTML: true,
            followCursor: 'default',
            boundary: 'parent',
            appendTo: document.body
          });
        };

        //for all outcomes g value in grid and svg circle
        for (i=0; i < allGridArray.length; i++) {
          let y = allGridArray[i].classList[0];
          let z = allGridArray[i].classList[1];
          let pip = data.filter(it => it.intervention.includes(y) && it.outcome.includes(z));
          if(pip[0].effect != "n/a")
            allGrid[i].innerHTML += '<svg class="circle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"> <circle r=' + pip[0].growth * 5 + ' cx="50%" cy="80%" stroke="FF5F33" stroke-width="2" fill=""/><text x="50%" y="50%" text-anchor="middle" fill="black" font-weight="bold" font-size="2.5em" font-family="" dy=" ">' + pip[0].g + '</text></svg>';
        };
}};
xhttp.open("GET", "data.json", true);
xhttp.send();

tippy('#setting', {
  maxWidth: 500,
  content: '<p style="font-size:110%;">Studies were categorised into five groups that aligned with participant’s grade level. These resulting groups were - Primary, Middle, Secondary, Combined K-12 and Other (included Special schools).</p>',
  
  allowHTML: true,
  appendTo: document.body
});
tippy('#mode', {
  maxWidth: 500,
  content: '<p style="font-size:110%;">Studies were categorised into two modes of implementation, depending on whether students were directly involved in the program, or indirectly (e.g. a teacher development program designed to improve classroom climate, supported by resources for students).</p>',
  allowHTML: true,
  appendTo: document.body
});
tippy('#duration', {
  maxWidth: 500,
  content: '<p style="font-size:110%;">Studies were categorised as being of short, moderate, or long duration depending on whether they ran for three months or less, up to one year, or more than one year in duration.</p>',
  allowHTML: true,
  appendTo: document.body
});
tippy('#grouping', {
  maxWidth: 500,
  content: '<p style="font-size:110%;">Studies were categorised into groups ranging from individual programs to whole-school activities done through the curriculum at the classroom level. There were also interventions that involved selective groups of students. These groups were defined as small (10 or fewer students), medium (11 to 20 students), and large (more than 20 students).</p>',
  allowHTML: true,
  appendTo: document.body
});
tippy('#approach', {
  maxWidth: 500,
  content: '<p style="font-size:110%;">Studies were categorised based on their approach into the following categories - Targeted: Academic risk, Targeted: Disadvantaged, Targeted: Special needs and Universal.</p>',
  allowHTML: true,
  appendTo: document.body
});
//https://www.d3-graph-gallery.com/graph/custom_legend.html#cat1
var svg = d3.select("#legend")
svg.append("circle").attr("cx",25).attr("cy",60).attr("r", 15).style("fill", "#FF5F33")
svg.append("text").attr("x", 5).attr("y", 13).text("Legend").attr("font-weight", "bold").style("font-size", "").attr("alignment-baseline","middle")
svg.append("text").attr("x", 5).attr("y", 33).text("0.31**").attr("font-weight", "bold").style("font-size", "1.5em").attr("alignment-baseline","middle")
svg.append("text").attr("x", 65).attr("y", 33).text(" = Hedge’s g").style("font-size", "").attr("alignment-baseline","middle")
svg.append("text").attr("x", 65).attr("y", 50).text("** = significance at < .001").style("font-size", "").attr("alignment-baseline","middle")
svg.append("text").attr("x", 65).attr("y", 67).text("* = significance at < .05").style("font-size", "").attr("alignment-baseline","middle")

function showWel() {
  document.getElementById("grid").style.gridTemplateColumns = "repeat(6, 16.666666667vmin)";
  Array.from(document.querySelectorAll(".wel"))
  .forEach(function(val) {
      val.style.display = 'grid';
  });
  Array.from(document.querySelectorAll(".ac"))
  .forEach(function(val) {
      val.style.display = 'none';
  });
}
function showAc() {
  document.getElementById("grid").style.gridTemplateColumns = "repeat(5, 20vmin)";
  Array.from(document.querySelectorAll(".wel"))
  .forEach(function(val) {
      val.style.display = 'none';
  });
  Array.from(document.querySelectorAll(".ac"))
  .forEach(function(val) {
      val.style.display = 'grid';
  });
} 
function showAll() {
  document.getElementById("grid").style.gridTemplateColumns = "100px repeat(9, minmax(min-content, 100px))";
  Array.from(document.querySelectorAll(".wel"))
  .forEach(function(val) {
      val.style.display = 'grid';
  });
  Array.from(document.querySelectorAll(".ac"))
  .forEach(function(val) {
      val.style.display = 'grid';
  });
}
