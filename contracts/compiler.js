const shell = require('shelljs');

shell.cd(__dirname);
const files = shell.ls('*.sol').join(' ');
const flags = {
  'optimize-runs': '200',
  'overwrite': true,
  'bin-runtime': true,
  'abi': true,
  'bin': true,
  'output': './build',
  'files': files
}
const command = Object.keys(flags).map(k=>{
  let output = '';
  if(typeof flags[k] == "boolean" && flags[k] === true) {
    output += '--'+k;
  }else{
    if(k==='output') {
      output += '-o'+' '+flags[k];
    }else if(k==='files'){
      output += flags[k];
    }else{
      output += '--'+k+' '+flags[k];
    }
  }
  return output;
}).join(' ');
console.log(`solcjs ${command}`);
console.log('compiling...');
shell.exec(`solcjs ${command}`, (err, stdOut, stdErr) => {
  if(err) return console.log(err);
  console.log('compile completed!')
})