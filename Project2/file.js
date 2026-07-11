const  fs = require('fs');


// // Sync...Blocking
// fs.writeFileSync('hello.txt', 'Hello World!');

// // Async...Non-Blocking
// fs.writeFile('hello.txt', 'Hello World!', (err) => {
//     if (err) throw err;
//     console.log('File has been saved!');
// });

// const data = fs.readFileSync('contacts.txt', 'utf8');
// console.log(data);

// fs.readFile('contacts.txt', 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

fs.appendFileSync('contacts.txt', `\nNew contact added! on ${new Date()}`, (err) => {
    if (err) throw err;
    console.log('Contact has been added!');
});

//fs.cpSync('contacts.txt', 'backup/contacts_backup.txt')


//fs.unlinkSync('backup/contacts_backup.txt')
console.log(fs.statSync('contacts.txt'))

//fs.mkdirSync('backup/a/b/c', { recursive: true });

//Default thread pool size is 4, but you can change it by setting 
// the UV_THREADPOOL_SIZE environment variable. The maximum value is 128. 
// The default value is 4. You can set it to a higher value if you have a lot of 
// CPU-bound tasks that need to be executed in parallel.
const os = require('os');

console.log(os.cpus().length)