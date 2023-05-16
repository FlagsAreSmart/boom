

import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom()

// load assets
loadSprite("bean", "sprites/bean.png")

// add a character to screen
add([
	// list of components
	sprite("bean"),
	pos(80, 40),
	area(),
])

// add a kaboom on mouse click
onClick(() => {
	addKaboom(mousePos())
})

// burp on "b"
onKeyPress("b", burp)