//
// ### parser (columns)
// Custom column parser for the `issue.md` also in
// this directory and used for EmpireNode 2014.
//
module.exports = function parser(columns) {
  return {
    title: columns[6],
    audience: columns[7],
    description: columns[11],
    'kitchen-sink': columns[10],
    author: columns[1],
    email: columns[2],
    twitter: columns[3],
    github: columns[4],
    outside: columns[5],
    attend: columns[9],
    company: columns[8]
  };
};