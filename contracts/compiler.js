var exec = require('child_process').exec;
var execSync = require('child_process').execSync;
const files = execSync('ls *.sol', { encoding: 'utf-8' }).split('\n').join(' ');
const flags = {
  'optimize-runs': '200',
  'overwrite': true,
  'bin-runtime': true,
  'abi': true,
  'output': './compiled',
  'files': files
}
const command = Object.keys(flags).map(k=>{
  let output = '';
  if(typeof flags[k] == "boolean") {
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
exec(`solcjs ${command}`, (err, stdOut, stdErr) => {
  if(err) return console.log(err);
  console.log('compile completed!')
})