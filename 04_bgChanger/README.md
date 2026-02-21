A simple background color changer built using React and Tailwind CSS.

This project helps beginners understand React state, event handling, and dynamic styling.

Features:
Change background color with buttons
Red, Green, Blue color options
Smooth transition effect
Responsive layout
Centered button panel
Instant UI update using React state


important point to remeber:
Correct:
onClick={() => setColor("red")}

onClick → runs when button is clicked
() => → arrow function (runs only on click)
setColor("red") → updates state to red

Wrong:
onClick={setColor("red")}

If we write the second one, the function runs immediately when page loads, not on click.

So we wrap it inside an arrow function.