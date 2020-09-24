const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(xhttp.responseText);
      const dataGap = response.data;
      let gapGrid = document.querySelectorAll(".primary,.middle,.secondary,.combined,.other,.direct,.indir,.short,.moderate,.long,.one,.classroom,.small,.medium,.large,.risk,.disadvantaged,.special,.universal");
      let gapGridArray = Array.from(gapGrid);


      let schoolColumns = document.querySelectorAll(".primary,.middle,.secondary,.combined,.other");
      let modeColumns = document.querySelectorAll(".direct,.indir");
      let durationColumns = document.querySelectorAll(".short,.moderate,.long");
      let groupingColumns = document.querySelectorAll(".one,.classroom,.small,.medium,.large");
      let approachColumns = document.querySelectorAll(".risk,.disadvantaged,.special,.universal");
      
      
      for (var a = 0; a < schoolColumns.length; a++) {
        schoolColumns[a].className += ' schoolSetting ';
      }
      for (var b = 0; b < modeColumns.length; b++) {
        modeColumns[b].className += ' interventionMode ';
      }
      for (var c = 0; c < durationColumns.length; c++) {
        durationColumns[c].className += ' programDuration ';
      }
      for (var d = 0; d < groupingColumns.length; d++) {
        groupingColumns[d].className += ' groupingSize ';
      }
      for (var e = 0; e < approachColumns.length; e++) {
        approachColumns[e].className += ' interventionApproach ';
      }









        for (i=0; i < gapGridArray.length; i++) {
          let y = gapGridArray[i].classList[0];
          let z = gapGridArray[i].classList[1];


          let pip = dataGap.filter(it => it.intervention.includes(y) && it.outcome.includes(z));


          
          gapGrid[i].innerHTML += '<svg class="circle' + z + '" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 100 100"> <circle r=' + pip.length * 1.5 + ' cx="50%" cy="50%" stroke="FF5F33" stroke-width="2" fill=""/></svg>';
          
          
          let pop = "";
          for(var j = 0; j < dataGap.length; j++){
            
            if(dataGap[j].intervention === y && dataGap[j].outcome.includes(z))
            
            pop += "<a target=_blank" + ' href=' + dataGap[j].link + '>' + dataGap[j].text +'</a>' + '<br>';
              else if(dataGap[j].Link === "" && dataGap[j].intervention === y && dataGap[j].outcome.includes(z))
              pop += dataGap[j].text + '<br>';
          };
          
          
          if(pop != "")
          tippy("#" + gapGridArray[i].id, {
          maxWidth: '',
          content:   '<h3>' + dataGap.filter(it => it.intervention.includes(y) && it.outcome.includes(z)).length + '</h3>' + pop,
          allowHTML: true,
          placement: "right",
          boundary: 'parent',
          appendTo: document.body,
          interactive: true
        });
      pop = '';
      };
    };
};
xhttp.open("GET", "datagap.json", true);
xhttp.send();

tippy('#setting', {
  maxWidth: 500,
  content: '<p style="font-size:110%;">Studies were categorised into five groups that aligned with participant’s grade level. These resulting groups were - Primary, Middle, Secondary, Combined K-12 and Other (included Special schools).</p>',
  //interactive: true,
  allowHTML: true,
  appendTo: document.body
});
tippy('#mode', {
  maxWidth: 500,
  content: '<p style="font-size:110%;">Studies were categorised into two modes of implementation, depending on whether students were directly involved in the program, or indirectly (e.g. a teacher development program designed to improve classroom climate, supported by resources for students).</p>',
  //interactive: true,
  allowHTML: true,
  appendTo: document.body
});
tippy('#duration', {
  maxWidth: 500,
  content: '<p style="font-size:110%;">Studies were categorised as being of short, moderate, or long duration depending on whether they ran for three months or less, up to one year, or more than one year in duration.</p>',
  //interactive: true,
  allowHTML: true,
  appendTo: document.body
});
tippy('#grouping', {
  maxWidth: 500,
  content: '<p style="font-size:110%;">Studies were categorised into groups ranging from individual programs to whole-school activities done through the curriculum at the classroom level. There were also interventions that involved selective groups of students. These groups were defined as small (10 or fewer students), medium (11 to 20 students), and large (more than 20 students).</p>',
  //interactive: true,
  allowHTML: true,
  appendTo: document.body
});
tippy('#approach', {
  maxWidth: 500,
  content: '<p style="font-size:110%;">Studies were categorised based on their approach into the following categories - Targeted: Academic risk, Targeted: Disadvantaged, Targeted: Special needs and Universal.</p>',
  //interactive: true,
  allowHTML: true,
  appendTo: document.body
});

//.schoolSetting,.interventionMode,.programDuration,.groupingSize,.interventionApproach

function setting() {
    
  document.getElementById("grid").style.gridTemplateColumns = "repeat(6, 16.67vmin)";
  Array.from(document.querySelectorAll(".schoolSetting"))
  .forEach(function(val) {
      val.style.display = 'grid';
  });
  Array.from(document.querySelectorAll(".interventionMode,.programDuration,.groupingSize,.interventionApproach"))
  .forEach(function(val) {
      val.style.display = 'none';
  });
}
function mode() {
  document.getElementById("grid").style.gridTemplateColumns = "repeat(3, 33vmin)";
  Array.from(document.querySelectorAll(".interventionMode"))
  .forEach(function(val) {
      val.style.display = 'grid';
  });
  Array.from(document.querySelectorAll(".schoolSetting,.programDuration,.groupingSize,.interventionApproach"))
  .forEach(function(val) {
      val.style.display = 'none';
  });
} 
function duration() {
  document.getElementById("grid").style.gridTemplateColumns = "repeat(4, 25vmin)";
  Array.from(document.querySelectorAll(".programDuration"))
  .forEach(function(val) {
      val.style.display = 'grid';
  });
  Array.from(document.querySelectorAll(".schoolSetting,.interventionMode,.groupingSize,.interventionApproach"))
  .forEach(function(val) {
      val.style.display = 'none';
  });
}
function grouping() {
  document.getElementById("grid").style.gridTemplateColumns = "repeat(6, 16.67vmin)";
  Array.from(document.querySelectorAll(".groupingSize"))
  .forEach(function(val) {
      val.style.display = 'grid';
  });
  Array.from(document.querySelectorAll(".schoolSetting,.interventionMode,.programDuration,.interventionApproach"))
  .forEach(function(val) {
      val.style.display = 'none';
  });
} 
function approach() {
  document.getElementById("grid").style.gridTemplateColumns = "repeat(5, 20vmin)";
  Array.from(document.querySelectorAll(".interventionApproach"))
  .forEach(function(val) {
      val.style.display = 'grid';
  });
  Array.from(document.querySelectorAll(".schoolSetting,.interventionMode,.programDuration,.groupingSize"))
  .forEach(function(val) {
      val.style.display = 'none';
  });
}