const fileLister = require('./file_lister')

start();
function start () {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    // Inline function to handle
    // message output
    var showMessage = (err) => {
        console.log('Welcome to the Node Dictionary!');
        console.log('======================================');
        console.log('Enter Q to Quit!');
        const readFiles = fileLister.listFiles();
        readFiles.forEach(function(file,index){
            console.log(`${index+1}. ${file}`); 
        });
    
        if (err) {
            console.error(err);
        }
    };

    // Display message
    showMessage();

    // Handler for STDIN data
    // event
    var onData = (data) => {
        data = data.trim();

        if (data.toLowerCase() === 'q') {
            console.log('Goodbye!')
            process.exit(); 
        }

        // If user input "next"
        // let's go to the next
        // state
        if (data === 'next') {
            process.stdin.pause();
            process.stdin.removeListener('data', onData);
            two();

            // ----------------------------------------
            // Go to next view here
            // ----------------------------------------

        } else {

            // All other input is invalid
            showMessage(`Invalid: ${ data }`);
        }
    };

    // Set the listener
    process.stdin.on('data', onData);

}