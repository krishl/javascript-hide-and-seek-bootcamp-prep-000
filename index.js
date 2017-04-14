function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = (parseInt(rankedLists[i].innerHTML) + n)
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nodeNode = node.children[0]
  while (nodeNode) {
    node = nodeNode
    nodeNode = node.children[0]
  }
  return node
}
