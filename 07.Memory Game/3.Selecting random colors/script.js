let colors = [
	"#33ff33",
	"#33ff33",
	"#ff944d",
	"#ff944d",
	"#80ccff",
	"#80ccff",
	"#ffff66",
	"#ffff66",
	"#ff4dff",
	"#ff4dff",
	"#ff1a1a",
	"#ff1a1a",
	"#dddddd",
	"#dddddd",
	"#000099",
	"#000099",
];

function selectColor() {
	const random = Math.floor(Math.random() * colors.length);
	const selected = colors[random];
	colors.splice(random, 1);
	return selected;
}

selectColor();
selectColor();
console.log(colors);

console.log(selectColor());
