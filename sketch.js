let treeSizeA = 10
let treeSizeB = 10
let treeSizeC = 10
let treeSizeD = 10
let treeSizeE = 10
let treeSizeF = 10
let treeSizeG = 10
let treeSizeH = 10
let treeSizeI = 10
let treeSizeJ = 10
let treeSizeK = 10
let treeSizeL = 10
let treeSizeM = 10
let treeSizeN = 10
let treeSizeO = 10
let treeSizeP = 10
let treeSizeQ = 10
let treeSizeR = 10
let treeSizeS = 10
let treeSizeT = 10
let treeSizeU = 10
let treeSizeV = 10
let treeSizeW = 10
let treeSizeX = 10
let treeSizeY = 10
let treeSizeZ = 10

let growingA = false
let growingB = false
let growingC = false
let growingD = false
let growingE = false
let growingF = false
let growingG = false
let growingH = false
let growingI = false
let growingJ = false
let growingK = false
let growingL = false
let growingM = false
let growingN = false
let growingO = false
let growingP = false
let growingQ = false
let growingR = false
let growingS = false
let growingT = false
let growingU = false
let growingV = false
let growingW = false
let growingX = false
let growingY = false
let growingZ = false

let sentence = 'click any combination of alphabet keys to begin accumulating time'

//this runs once on page load.
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(13, 20, 191);
}

//this runs 60 times a second.
function draw() {
  background(13, 20, 191);

textSize(15);
fill(236, 242, 44);
stroke(0);
strokeWeight(3);
text(sentence, 515, 800)

//line1

//treeA
  noFill()
  stroke(236, 242, 44)
  strokeWeight(1)
  circle(100, 100, treeSizeA)

  //treeB
  noFill()
  stroke(236, 242, 44)
  strokeWeight(1)
  circle(350, 100, treeSizeB)

//treeC
noFill()
stroke(236, 242, 44)
strokeWeight(1)
circle(600, 100, treeSizeC)

//treeD
noFill()
stroke(236, 242, 44)
strokeWeight(1)
circle(850, 100, treeSizeD)

//treeE
noFill()
stroke(236, 242, 44)
strokeWeight(1)
circle(1100, 100, treeSizeE)

//treeF
noFill()
stroke(236, 242, 44)
strokeWeight(1)
circle(1350, 100, treeSizeF)

//line2

//treeG
noFill()
stroke(236, 242, 44)
strokeWeight(1)
circle(100, 300, treeSizeG)

//treeH
noFill()
stroke(236, 242, 44)
strokeWeight(1)
circle(350, 300, treeSizeH)

//treeI
noFill()
stroke(236, 242, 44)
strokeWeight(1)
circle(600, 300, treeSizeI)

//treeJ
noFill()
stroke(236, 242, 44)
strokeWeight(1)
circle(850, 300, treeSizeJ)

//treeK
noFill()
stroke(236, 242, 44)
strokeWeight(1)
circle(1100, 300, treeSizeK)

//treeL
noFill()
stroke(236, 242, 44)
strokeWeight(1)
circle(1350, 300, treeSizeL)

//line3

//treeM
noFill()
stroke(236, 242, 44)
strokeWeight(1)
circle(100, 500, treeSizeM)

//treeN
noFill()
stroke(236, 242, 44)
strokeWeight(1)
circle(350, 500, treeSizeN)

//treeO
noFill()
stroke(236, 242, 44)
strokeWeight(1)
circle(600, 500, treeSizeO)

//treeP
noFill()
stroke(236, 242, 44)
strokeWeight(1)
circle(850, 500, treeSizeP)

//treeQ
noFill()
stroke(236, 242, 44)
strokeWeight(1)
circle(1100, 500, treeSizeQ)

//treeR
noFill()
stroke(236, 242, 44)
strokeWeight(1)
circle(1350, 500, treeSizeR)

//line4

//treeS
noFill()
stroke(236, 242, 44)
strokeWeight(1)
circle(100, 700, treeSizeS)

//treeT
noFill()
stroke(236, 242, 44)
strokeWeight(1)
circle(350, 700, treeSizeT)

//treeU
noFill()
stroke(236, 242, 44)
strokeWeight(1)
circle(600, 700, treeSizeU)

//treeV
noFill()
stroke(236, 242, 44)
strokeWeight(1)
circle(850, 700, treeSizeV)

//treeW
noFill()
stroke(236, 242, 44)
strokeWeight(1)
circle(1100, 700, treeSizeW)

//treeX
noFill()
stroke(236, 242, 44)
strokeWeight(1)
circle(1350, 700, treeSizeX)

  // continuously growing tree if triggered
  //line1
  if (growingA) {
    treeSizeA += 0.06;
  }
  if (growingB) {
    treeSizeB += 0.06;
  }
  if (growingC) {
    treeSizeC += 0.06;
  }
  if (growingD) {
    treeSizeD += 0.06;
  }
  if (growingE) {
    treeSizeE += 0.06;
  }
  if (growingF) {
    treeSizeF += 0.06;
  }
// line2
if (growingG) {
  treeSizeG += 0.06;
}
if (growingH) {
  treeSizeH += 0.06;
}
if (growingI) {
  treeSizeI += 0.06;
}
if (growingJ) {
  treeSizeJ += 0.06;
}
if (growingK) {
  treeSizeK += 0.06;
}
if (growingL) {
  treeSizeL += 0.06;
}
//line3
if (growingM) {
  treeSizeM += 0.06;
}
if (growingN) {
  treeSizeN += 0.06;
}
if (growingO) {
  treeSizeO += 0.06;
}
if (growingP) {
  treeSizeP += 0.06;
}
if (growingQ) {
  treeSizeQ += 0.06;
}
if (growingR) {
  treeSizeR += 0.06;
}
//line4
if (growingS) {
  treeSizeS += 0.06;
}
if (growingT) {
  treeSizeT += 0.06;
}
if (growingU) {
  treeSizeU += 0.06;
}
if (growingV) {
  treeSizeV += 0.06;
}
if (growingW) {
  treeSizeW += 0.06;
}
if (growingX) {
  treeSizeX += 0.06;
}
}

// keyboard pressed
//line1
function keyPressed() {
  if (keyCode === 65) {
    growingA = true
  }
  if (keyCode === 66) {
    growingB = true
  }
  if (keyCode === 67) {
    growingC = true
  }
  if (keyCode === 68) {
    growingD = true
  }
  if (keyCode === 69) {
    growingE = true
  }
  if (keyCode === 70) {
    growingF = true
  }
//line2
if (keyCode === 71) {
  growingG = true
}
if (keyCode === 72) {
  growingH = true
}
if (keyCode === 73) {
  growingI = true
}
if (keyCode === 74) {
  growingJ = true
}
if (keyCode === 75) {
  growingK = true
}
if (keyCode === 76) {
  growingL = true
}
//line3
if (keyCode === 77) {
  growingM = true
}
if (keyCode === 78) {
  growingN = true
}
if (keyCode === 79) {
  growingO = true
}
if (keyCode === 80) {
  growingP = true
}
if (keyCode === 81) {
  growingQ = true
}
if (keyCode === 82) {
  growingR = true
}
//line4
if (keyCode === 83) {
  growingS = true
}
if (keyCode === 84) {
  growingT = true
}
if (keyCode === 85) {
  growingU = true
}
if (keyCode === 86) {
  growingV = true
}
if (keyCode === 87) {
  growingW = true
}
if (keyCode === 88) {
  growingX = true
}
}