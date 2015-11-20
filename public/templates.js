module.exports = {
  project: [
      // "<div class='<%= \"row\" %>'>",
      // "<div class='<%= \"col-sm-6 col-md-4\" %>'>",
      "<div class='<%= \"thumbnail\" %>'>",
      // "<img src='<%= photo %>'>",
      "<div class='<%= \"title\" %>'>",
      "<h3><%= title %></h3>",
      "<h4><%= startDate %></h4>",
      "<h4><%= finishDate %></h4>",
      "<p><%= description %></p>",
      // "<h4><%= balance %></h4>",
      "<h4><%= goal %></h4>",
      "<div class='<%= \"progress\" %>'>",
      "<div class='<%= \"progress-bar progress-bar-success progress-bar-striped\"%>' role='<%= \"progressbar\"%>' aria-valuenow='<%= \"40\"%>' aria-valuemin='<%=\"0\"%>' aria-valuemax='<%= \"100\"%>' style='<%= \"width:40%\"%>'> <%= \"40%\"%></div>",
      "</div>",

      "<form class='<%= \"form-inline\" %>'>",
      "<div class='<%= \"form-group\"%>'>",
      "<button class='<%= \"btn btn-primary editProject\" %>' role='<%= \"button\"%>' type='<%= \"submit\"%>' name='<%= \"edit\"%>'> <%= \"Edit\" %></button>",
      "</div>",
      "<div class='<%= \"form-group\"%>'>",
      "<button class='<%= \"btn btn-danger deleteProject\" %>' role='<%= \"button\"%>' type='<%= \"submit\"%>' name='<%= \"delete\"%>'> <%= \"Delete\" %></button>",
      "</div>",
      // "<form class='<%= \"form-inline\" %>'>",
      "<div class='<%= \"form-group donateNow\"%>'>",
      "<input type='<%= \"text\" %>' class='<%= \"form-control btn\" %>' id='<%= \"title\" %>' id='<%= \"donationAmount\" %>' placeholder='<%= \"$100\" %>'>",
      "<button class='<%= \"btn btn-primary donateNow\" %>' role='<%= \"button\"%>' type='<%= \"submit\"%>' id='<%= \"donateNow\"%>'> <%= \"Donate Now\" %>",
      "</button>",

      "</div>",
      "</form>",
      "</div>",
      "</div>",
      // "</div>",
      // "</div>",

  ].join(""),
 form: [
      '<form class = "first-form" role="form">',
      '<div class="form-group">',
      '<label for="title">Fund Title:</label>',
      '<input type="text" class="form-control" id="title">',
      '</div>',
      '<div class="form-group description">',
      '<label for="release">Description:</label>',
      '<input type="text" class="form-control description" id="description">',
      '</div>',
      '<div class="form-group">',
      '<label for="plot">Finish Date:</label>',
      '<input type="text" value = "09/01/2015"class="form-control" id="finishDate">',
      '</div>',
      '<div class="form-group">',
      '<label for="rating">Funding Goal:</label>',
      '<input type="text" class="form-control" id="Goal">',
      '</div>',
      '<label for="cover">Cover Img:</label>',
      '<input class = "form-group" type="file" name="pic" id="image" accept="image/*">',
      '<button  id= "submitted"class="btn btn-default">Create New Fund</button>',
      '</form>',
      '<body>',
 ].join(""),
  header: [
    "<h2>Iron Fund</h2>",
    // "<nav>",
    // "<ul>",
    // "<li>home</li>",
    // "</ul>",
    // "</nav>"
  ].join(""),
  footer: [
    "<div class='<%= \"footer-links\" %>'>",
    "<a href='<%= \"#\" %>'><%= \"Home\" %></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;",
    "<a href='<%= \"#\" %>'><%= \"Add a Project\" %></a>",
    // "<h2>Footer</h2>",
    // "<nav>",
    // "<ul>",
    // "<li>home</li>",
    // "</ul>",
    // "</nav>"
  ].join(""),
};
