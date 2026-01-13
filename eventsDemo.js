import { error } from 'console';
import { EventEmitter } from 'events';

const myEmitter = new EventEmitter();

function greetHandler(name) {
    console.log('Hello ' + name);
}

function goodbyeHandler(name, age) {
    console.log('Goodbye ' + name, age, "years old");
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('goodbye', goodbyeHandler);

// Emit events
myEmitter.emit('greet', 'John');
myEmitter.emit('goodbye', 'John', 27);

// Error landing
myEmitter.on('error', (err) => {
    console.log('An Error Occurred:', err);
});

// Simulate error
myEmitter.emit('error', new Error('Something went wrong'));