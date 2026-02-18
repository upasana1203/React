A simple counter application built using React.
This project helps beginners understand state management, event handling, and styling in React.

Features:-
Increase counter value (+)
Decrease counter value (−)
Minimum limit (0)
Maximum limit (10)
Buttons disabled at limits
Centered UI using CSS Flexbox

Step 1 — State
const [counter, setCounter] = useState(1);

counter → stores value
setCounter → updates value
When state changes → UI re-renders automatically


Step 2 — Limits
const min = 0;
const max = 10;
Prevents counter from going below or above range.

Step 3 — Increment
setCounter(prev => Math.min(prev + 1, max));
Increases value but never crosses max.

Step 4 — Decrement
setCounter(prev => Math.max(prev - 1, min));
Decreases value but never goes below min.

<!-- <button disabled={counter === max}>+</button>
<button disabled={counter === min}>-</button> -->
Buttons get disabled at limits for better user experience.