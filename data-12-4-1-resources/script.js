d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  var dropdisneyMenu = d3.selectAll("#DisneyOption").node();
  var dropdisneyMenuID = dropdisneyMenu.id;
  var disneyOption = dropdisneyMenu.value;


  console.log(dropdownMenuID);
  console.log(selectedOption);
  console.log(dropdisneyMenuID);
  console.log(disneyOption);
};