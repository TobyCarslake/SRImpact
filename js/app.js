const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(xhttp.responseText);
      const data = response.data;
      let allGrid = document.querySelectorAll(".belonging, .mentoring, .social, .cognitive, .behavioural, .physical, .preventing,.primary,.middle,.secondary,.combined,.other,.direct,.indirect,.short,.moderate,.long,.one,.classroom,.small,.medium,.large,.academicrisk,.disadvantaged,.specialneeds,.universal");
      let allGridArray = Array.from(allGrid);
      // console.log(allGrid);
      // console.log(allGridArray);
      //console.log(data[1].learninggrowth);
      


      
    for (i=0; i < allGridArray.length; i++) {
      let y = allGridArray[i].classList[0];
      let z = allGridArray[i].classList[1];
      // console.log(allGridArray[i].classList[0]);
      // console.log(allGridArray[i].classList[1]);
      
      
      //console.log(data.filter(it => it.intervention.includes(y) && it.outcome.includes(z)));
      //console.log(pip);
      let pip = data.filter(it => it.intervention.includes(y) && it.outcome.includes(z));
      let growth = pip[0].growth;
      // console.log(pip[0]);
     // console.log(allGridArray[i]);
      
      //allGrid[i].innerHTML = data.filter(it => it.Intervention.includes(y) && it.Outcomes.includes(z)).length;
      allGrid[i].innerHTML += '<svg class="circle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"> <circle r=' + pip[0].growth * 5 + ' cx="50%" cy="80%" stroke="FF5F33" stroke-width="2" fill=""/><text x="50%" y="50%" text-anchor="middle" fill="black" font-weight="bold" font-size="2.5em" font-family="" dy=" ">' + '&#43;' + pip[0].growth + '</text></svg>';
      // console.log("done" + i);
      
        tippy("#" + allGridArray[i].id, {
        maxWidth: '',
        content:   pip[0].effect,
        allowHTML: true,
        // flip: true,
        followCursor: 'default',
        boundary: 'parent',
        appendTo: document.body
        // interactive: true
      });
    pop = '';
    };
}};
xhttp.open("GET", "data.json", true);
xhttp.send();



// tippy('#type', {
//   maxWidth: '',
//   content: 'This category includes interventions which aim to improve children\'s learning through direct injections of funds into the home environment.',
//   interactive: true,
//   appendTo: document.body
// });
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
// tippy('#newborn', {
//   maxWidth: '',
//   content: 'Newborn - 0-4 weeks of age',
//   interactive: true,
//   appendTo: document.body
// });
// tippy('#infant', {
//   maxWidth: '',
//   content: 'Infant - 5 weeks - 12 months (i.e. up to 12 months of age)',
//   interactive: true,
//   appendTo: document.body
// });
// tippy('#toddler', {
//   maxWidth: '',
//   content: 'Toddler - 1–3 years (over 12 months and up to 3 years)',
//   interactive: true,
//   appendTo: document.body
// });
// tippy('#preschooler', {
//   maxWidth: '',
//   content: 'Preschooler - 3-6 years  (over 3 years and up to 6 years)',
//   interactive: true,
//   appendTo: document.body
// });