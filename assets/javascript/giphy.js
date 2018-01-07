const topics = {

	"Beaches in Negril"
	"Beachesin Tulum"
	"Beaches in Cartegena"
	"Beaches in Maui"
	"Beaches in Punta Cana"
	"Beaches in Saint Tropez"
}

for (let i = 0; i < topics.length; i ++) {
	let buttons = $('<button>' + topics.text + '</button>')
	buttons.append('topics');
}