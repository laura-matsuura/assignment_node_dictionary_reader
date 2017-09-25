const fileLister = require('./file_lister')

start();
function start () {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');

    let directorySize; 

    // Inline function to handle
    // message output
    var showMessage = (err) => {
        console.log('Welcome to the Node Dictionary!');
        console.log('======================================');
        console.log('Enter Q to Quit!');
        console.log('Select a Dictionary to Load:')
        const readNumberofFiles = fileLister.listFiles();
        directorySize = readNumberofFiles.length; 
        readNumberofFiles.forEach(function(file,index){
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

        //If user inputs 'q' 
        //Quit application 
        if (data.toLowerCase() === 'q') {
            console.log('Goodbye!')
            process.exit(); 
        }

        if (Number.isInteger(Number(data))) {
            const index = Number(data) - 1; 
            if (index > directorySize) {
                console.log('Files Does Not Exist')
            } else {
                const fileName = fileLister.getFileName(index); 
                const fileContents = fileLister.readFile(fileName);
                console.log(`Successfully Loaded: ${fileName}`);
            }


        }

        // // If user input "next"
        // // let's go to the next
        // // state
        // if (data === 'next') {
        //     process.stdin.pause();
        //     process.stdin.removeListener('data', onData);
        //     two();

        //     // ----------------------------------------
        //     // Go to next view here
        //     // ----------------------------------------

        // } else {

        //     // All other input is invalid
        //     showMessage(`Invalid: ${ data }`);
        // }
    };

    // Set the listenerp
    process.stdin.on('data', onData);

}


