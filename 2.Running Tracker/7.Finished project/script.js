const goal = 25
let entries = []
const entriesWrapper = document.querySelector('#entries')
document.querySelector('#target').innerText = goal

function addNewEntry(newEntry) {
  entriesWrapper.removeChild(entriesWrapper.firstElementChild)

  const listItem = document.createElement('li')
  const listValue = document.createTextNode(newEntry.toFixed(1))
  listItem.appendChild(listValue)
  entriesWrapper.appendChild(listItem)
}

function reducer(total, currentValue) {
  return total + currentValue
}

function calcTotal() {
  const totalValue = entries.reduce(reducer).toFixed(1)
  document.getElementById('total').innerText = totalValue
  document.getElementById('progressTotal').innerText = totalValue
}

function calcAverage() {
  const average = (entries.reduce(reducer) / entries.length).toFixed(1)
  document.getElementById('average').innerText = average
}

function weeklyHigh() {
  const high = Math.max(...entries)
  document.getElementById('high').innerText = high
}

function calcGoal() {
  const totalValue = entries.reduce(reducer).toFixed(1)
  const completedPercent = totalValue / (goal / 100)
  const progressCircle = document.querySelector('#progressCircle')

  if (completedPercent > 100) completedPercent === 100
  progressCircle.style.background = `conic-gradient(
    #70db70 ${completedPercent}%, #2d3740 ${completedPercent}% 100%`
}

function handleSubmit(event) {
  event.preventDefault()
  const entry = Number(document.querySelector('#entry').value)
  if (!entry) return
  entries.push(entry)
  document.querySelector('form').reset()
  addNewEntry(entry)
  calcTotal()
  calcAverage()
  weeklyHigh()
  calcGoal()
}

const form = document
  .querySelector('form')
  .addEventListener('submit', handleSubmit)
