// File System
const fs = require('fs');


try {
  fs.unlinkSync('/tmp/temp.js');
  console.log('successfully deleted /tmp/temp.js');
} catch (err) {
  console.log(err);
}