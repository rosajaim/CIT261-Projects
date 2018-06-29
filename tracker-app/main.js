document.getElementById('issueInputForm').addEventListener('submit', saveIssue);

function saveIssue(e) {
  const issueDesc = document.getElementById('issueDescInput').value;
  const issueSeverity = document.getElementById('issueSeverityInput').value;
  const issueAssignedTo = document.getElementById('issueAssignedToInput').value;
  const issueId = chance.bb_pin();
  const issueStatus = 'Open';

  let issueDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    // timeZoneName: 'short'
  })

  const issue = {
    id: issueId,
    date: issueDate,
    description: issueDesc,
    severity: issueSeverity,
    assignedTo: issueAssignedTo,
    status: issueStatus
  }


  if (localStorage.getItem('issues') == null) {
    const issues = [];
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
  } else {
    const issues = JSON.parse(localStorage.getItem('issues'));
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
  }

  document.getElementById('issueInputForm').reset();

  fetchIssues();
  e.preventDefault();
}

function setStatusClosed(e, id) {
  const issues = JSON.parse(localStorage.getItem('issues'));

  for (let i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues[i].status = 'Closed';
    }
  }

  localStorage.setItem('issues', JSON.stringify(issues));

  e.preventDefault();
  fetchIssues();
}

function deleteIssue(e, id) {
  const issues = JSON.parse(localStorage.getItem('issues'));

  for (let i = 0; i < issues.length; i++) {
    if (issues[i].id == id) {
      issues.splice(i, 1);
    }
  }

  localStorage.setItem('issues', JSON.stringify(issues));

  e.preventDefault();
  fetchIssues();
}

function fetchIssues() {
  const issues = JSON.parse(localStorage.getItem('issues'));
  const issuesList = document.getElementById('issuesList');

  issuesList.innerHTML = '';

  for (let i = 0; i < issues.length; i++) {
    const id = issues[i].id;
    const date = issues[i].date;
    const desc = issues[i].description;
    const severity = issues[i].severity;
    const assignedTo = issues[i].assignedTo;
    const status = issues[i].status;

    issuesList.innerHTML += '<div id="reveal" class="well">' +
      '<h6>Date: ' + date + '</h6>' +
      '<h6>Issue ID: ' + id + '</h6>' +
      '<p><span class="label label-info">' + status + '</span></p>' +
      '<h3>' + desc + '</h3>' +
      '<p><span class="glyphicon glyphicon-time"></span> ' + severity + '</p>' +
      '<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>' +
      '<a href="#" onclick="setStatusClosed(event,\'' + id + '\')" class="btn btn-warning">Close</a> ' +
      '<a href="#" onclick="deleteIssue(event,\'' + id + '\')" class="btn btn-danger">Delete</a>' +
      '</div>'; 
      
  }
  
}



