/*
 * STEP 1: Testing Webpack bundle create
 * 
 * require('./alert.js');
 * 
 */


/*
 * STEP 2: Testing Babel loaders
 * 
 * import greetings from './robot.js'
 * document.write(greetings('Affirmative', 'Dave'));
 * 
 */


/*
 * STEP 3: Loading CSS
 * 
 */
import styles from './app.css'

let element = `
    <div class="${styles.element}"> 
        <p>Let's take stock of what just happened. <strong>We made a JavaScript file that requested another CSS file and that code was then embedded within a web page.</strong></p>
    </div>    
`

document.write(element);
