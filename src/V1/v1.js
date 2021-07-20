

import './v1.scss';
import  waitFor  from '../Helpers/waitFor'

waitFor('body', initT01)

function initT01() {
    if (document.body.className.indexOf('test01_loaded') === -1) {
        t01Changes();
    } else {
        console.warn('Experiment not loaded');
    }
}

function t01Changes() {
    document.body.classList.add('test01_loaded');
    
    // add your changes here
    console.log('hello')

}
