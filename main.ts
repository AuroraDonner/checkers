namespace SpriteKind {
    export const stationary = SpriteKind.create()
}
/**
 * - move active piece
 */
/**
 * - Cycles through pieces
 * 
 * - Loops only within set player
 */
// move token up and to the left
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    currentPiece.x += -10
    currentPiece.y += -10
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let value of player1Pieces) {
        if (currentPiece.x == value.x && currentPiece.y == value.y) {
            team = false
        }
    }
    for (let value of player2Pieces) {
        if (currentPiece.x == value.x && currentPiece.y == value.y) {
            team = true
        }
    }
    if (team == true) {
        for (let value of player1Pieces) {
            if (currentPiece.x == value.x && currentPiece.y == value.y) {
                value.setPosition(25, 25)
            }
        }
    } else if (team == false) {
        for (let value of player2Pieces) {
            if (currentPiece.x == value.x && currentPiece.y == value.y) {
                value.setPosition(25, 90)
            }
        }
    }
    switchPlayers()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    playerIndex += 1
    if (buttonIndex == 0) {
        // return to beginning of rotation for player 1
        if (playerIndex == 12) {
            playerIndex = 0
        }
    } else if (buttonIndex == 1) {
        // return to beginning of player 2's pieces
        if (playerIndex == 24) {
            playerIndex = 12
        }
    }
})
function setUpPlayer2 () {
    player2Pieces = []
    player21 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player21.setPosition(86, 28)
    player2Pieces.push(player21)
    player22 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player22.setPosition(106, 28)
    player2Pieces.push(player22)
    player23 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player23.setPosition(126, 28)
    player2Pieces.push(player23)
    player24 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player24.setPosition(146, 28)
    player2Pieces.push(player24)
    player25 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player25.setPosition(76, 38)
    player2Pieces.push(player25)
    player26 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player26.setPosition(96, 38)
    player2Pieces.push(player26)
    player27 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player27.setPosition(116, 38)
    player2Pieces.push(player27)
    player28 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player28.setPosition(136, 38)
    player2Pieces.push(player28)
    player29 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player29.setPosition(86, 48)
    player2Pieces.push(player29)
    player210 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player210.setPosition(106, 48)
    player2Pieces.push(player210)
    player211 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player211.setPosition(126, 48)
    player2Pieces.push(player211)
    player212 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player212.setPosition(146, 48)
    player2Pieces.push(player212)
}
function setUpPlayer1 () {
    player1Pieces = []
    player11 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player11.setPosition(76, 98)
    player1Pieces.push(player11)
    player12 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player12.setPosition(96, 98)
    player1Pieces.push(player12)
    player13 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player13.setPosition(116, 98)
    player1Pieces.push(player13)
    player14 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player14.setPosition(136, 98)
    player1Pieces.push(player14)
    player15 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player15.setPosition(86, 88)
    player1Pieces.push(player15)
    player16 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player16.setPosition(106, 88)
    player1Pieces.push(player16)
    player17 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player17.setPosition(126, 88)
    player1Pieces.push(player17)
    player18 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player18.setPosition(146, 88)
    player1Pieces.push(player18)
    player19 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player19.setPosition(76, 78)
    player1Pieces.push(player19)
    player110 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player110.setPosition(96, 78)
    player1Pieces.push(player110)
    player111 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player111.setPosition(116, 78)
    player1Pieces.push(player111)
    player112 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player112.setPosition(136, 78)
    player1Pieces.push(player112)
}
// move token down and to the left
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    currentPiece.x += -10
    currentPiece.y += 10
})
// move token up and to the right
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    currentPiece.x += 10
    currentPiece.y += -10
})
// move token down and to the right
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    currentPiece.x += 10
    currentPiece.y += 10
})
/**
 * - Sets background image
 * 
 * - sets up pieces on board
 * 
 * - sets to player 1's first piece
 * 
 * - makes arrays of p1 and p2
 */
function start () {
    scene.setBackgroundImage(assets.image`checkerBoard`)
    setUpPlayer1()
    setUpPlayer2()
    playerIndex = 0
    buttonIndex = 0
    blink = true
}
function pieceSelect () {
    if (playerIndex == 0) {
        currentPiece = player112
    } else if (playerIndex == 1) {
        currentPiece = player111
    } else if (playerIndex == 2) {
        currentPiece = player110
    } else if (playerIndex == 3) {
        currentPiece = player19
    } else if (playerIndex == 4) {
        currentPiece = player18
    } else if (playerIndex == 5) {
        currentPiece = player17
    } else if (playerIndex == 6) {
        currentPiece = player16
    } else if (playerIndex == 7) {
        currentPiece = player15
    } else if (playerIndex == 8) {
        currentPiece = player14
    } else if (playerIndex == 9) {
        currentPiece = player13
    } else if (playerIndex == 10) {
        currentPiece = player12
    } else if (playerIndex == 11) {
        currentPiece = player11
    } else if (playerIndex == 12) {
        currentPiece = player212
    } else if (playerIndex == 13) {
        currentPiece = player211
    } else if (playerIndex == 14) {
        currentPiece = player210
    } else if (playerIndex == 15) {
        currentPiece = player29
    } else if (playerIndex == 16) {
        currentPiece = player28
    } else if (playerIndex == 17) {
        currentPiece = player27
    } else if (playerIndex == 18) {
        currentPiece = player26
    } else if (playerIndex == 19) {
        currentPiece = player25
    } else if (playerIndex == 20) {
        currentPiece = player24
    } else if (playerIndex == 21) {
        currentPiece = player23
    } else if (playerIndex == 22) {
        currentPiece = player22
    } else if (playerIndex == 23) {
        currentPiece = player21
    }
}
function switchPlayers () {
    if (playerIndex <= 11) {
        playerIndex = 12
        buttonIndex = 1
    } else if (playerIndex >= 12) {
        playerIndex = 0
        buttonIndex = 0
    }
}
let blink = false
let player112: Sprite = null
let player111: Sprite = null
let player110: Sprite = null
let player19: Sprite = null
let player18: Sprite = null
let player17: Sprite = null
let player16: Sprite = null
let player15: Sprite = null
let player14: Sprite = null
let player13: Sprite = null
let player12: Sprite = null
let player11: Sprite = null
let player212: Sprite = null
let player211: Sprite = null
let player210: Sprite = null
let player29: Sprite = null
let player28: Sprite = null
let player27: Sprite = null
let player26: Sprite = null
let player25: Sprite = null
let player24: Sprite = null
let player23: Sprite = null
let player22: Sprite = null
let player21: Sprite = null
let buttonIndex = 0
let playerIndex = 0
let player2Pieces: Sprite[] = []
let team = false
let player1Pieces: Sprite[] = []
let currentPiece: Sprite = null
start()
/**
 * - constantly accounts for selected pieces
 * 
 * - monitors scoreboard (hopefully)
 */
forever(function () {
    let deleted: Sprite[] = []
    pieceSelect()
    if (player1Pieces == deleted) {
        info.player2.changeScoreBy(1)
    }
    if (player2Pieces == deleted) {
        info.player1.changeScoreBy(1)
    }
})
