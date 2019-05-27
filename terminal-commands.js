const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
  }, '');

  console.log(filesToString);
});
};


module.exports.touch = (fileName) => {
  fs.writeFile(fileName,'',
  {
    encoding: 'utf8',
    flag: 'wx'
  } , (err) => {
  if (err) {console.log('file already exists')};
});
};

module.exports.mkdir = (dirName) => {
  fs.mkdir(`/Users/Nritya/bloc/terminal-command/${dirName}`, (err) => {
  if (err) {
    console.log(`cannot create directory ${dirName}: ${err}`);
  }});
};
