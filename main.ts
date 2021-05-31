namespace SpriteKind {
    export const stationary = SpriteKind.create()
}
/**
 * Next Steps:
 * 
 * - Add sound effects ("step") on movement of pieces
 * 
 * - Possibly add auto jump feature after capturing piece
 * 
 * - Possibly add kinged pieces, or just make the game omni-directional checkers
 * 
 * - Add opening text and instructions/rules
 * 
 * - Decide on checkers or a variation thereof (planes and ships or some other figures to allow changes in checker rules)
 * 
 * - Add text between turns?
 * 
 * - Optimize B button
 */
function blinkAction () {
    if (team == 1) {
        for (let value of player1Pieces) {
            if (currentPiece.x == value.x && currentPiece.y == value.y) {
                currentPiece.setImage(assets.image`blink1`)
                pause(500)
                currentPiece.setImage(assets.image`player1`)
                pause(500)
            }
        }
    } else if (team == -1) {
        for (let value of player2Pieces) {
            if (currentPiece.x == value.x && currentPiece.y == value.y) {
                currentPiece.setImage(assets.image`blink2`)
                pause(500)
                currentPiece.setImage(assets.image`player2`)
                pause(500)
            }
        }
    }
}
// move token up and to the right
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    currentPiece.x += -10
    currentPiece.y += -10
    move = 1
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    blocked = false
    if (team == -1) {
        for (let value of player1Pieces) {
            if (currentPiece.x == value.x && currentPiece.y == value.y) {
                if (move == 1) {
                    for (let value of player1Pieces) {
                        if (currentPiece.x - 10 == value.x && currentPiece.y - 10 == value.y) {
                            blocked = true
                        }
                    }
                    if (!(blocked)) {
                        delete1()
                        currentPiece.x += -10
                        currentPiece.y += -10
                        break;
                    }
                } else if (move == 2) {
                    for (let value of player1Pieces) {
                        if (currentPiece.x + 10 == value.x && currentPiece.y - 10 == value.y) {
                            blocked = true
                        }
                    }
                    if (!(blocked)) {
                        delete1()
                        currentPiece.x += 10
                        currentPiece.y += -10
                        break;
                    }
                } else if (move == 3) {
                    for (let value of player1Pieces) {
                        if (currentPiece.x + 10 == value.x && currentPiece.y + 10 == value.y) {
                            blocked = true
                        }
                    }
                    if (!(blocked)) {
                        delete1()
                        currentPiece.x += 10
                        currentPiece.y += 10
                        break;
                    }
                } else if (move == 4) {
                    for (let value of player1Pieces) {
                        if (currentPiece.x - 10 == value.x && currentPiece.y + 10 == value.y) {
                            blocked = true
                        }
                    }
                    if (!(blocked)) {
                        delete1()
                        currentPiece.x += -10
                        currentPiece.y += 10
                        break;
                    }
                }
            }
        }
    } else if (team == 1) {
        for (let value of player2Pieces) {
            if (currentPiece.x == value.x && currentPiece.y == value.y) {
                if (move == 1) {
                    for (let value of player2Pieces) {
                        if (currentPiece.x - 10 == value.x && currentPiece.y - 10 == value.y) {
                            blocked = true
                        }
                    }
                    if (!(blocked)) {
                        delete2()
                        currentPiece.x += -10
                        currentPiece.y += -10
                        break;
                    }
                } else if (move == 2) {
                    for (let value of player2Pieces) {
                        if (currentPiece.x + 10 == value.x && currentPiece.y - 10 == value.y) {
                            blocked = true
                        }
                    }
                    if (!(blocked)) {
                        delete2()
                        currentPiece.x += 10
                        currentPiece.y += -10
                        break;
                    }
                } else if (move == 3) {
                    for (let value of player2Pieces) {
                        if (currentPiece.x + 10 == value.x && currentPiece.y + 10 == value.y) {
                            blocked = true
                        }
                    }
                    if (!(blocked)) {
                        delete2()
                        currentPiece.x += 10
                        currentPiece.y += 10
                        break;
                    }
                } else if (move == 4) {
                    for (let value of player2Pieces) {
                        if (currentPiece.x - 10 == value.x && currentPiece.y + 10 == value.y) {
                            blocked = true
                        }
                    }
                    if (!(blocked)) {
                        delete2()
                        currentPiece.x += -10
                        currentPiece.y += 10
                        break;
                    }
                }
            }
        }
    }
    switchPlayers()
})
function resetSprites () {
    player11.destroy()
    player12.destroy()
    player13.destroy()
    player14.destroy()
    player15.destroy()
    player16.destroy()
    player17.destroy()
    player18.destroy()
    player19.destroy()
    player110.destroy()
    player111.destroy()
    player112.destroy()
    player21.destroy()
    player22.destroy()
    player23.destroy()
    player24.destroy()
    player25.destroy()
    player26.destroy()
    player27.destroy()
    player28.destroy()
    player29.destroy()
    player210.destroy()
    player211.destroy()
    player212.destroy()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    playerIndex += 1
    if (team == 1) {
        // return to beginning of rotation for player 1
        if (playerIndex == 12) {
            playerIndex = 0
        }
    } else if (team == -1) {
        // return to beginning of player 2's pieces
        if (playerIndex == 24) {
            playerIndex = 12
        }
    }
})
function setUpPlayer2 () {
    player2Pieces = []
    player21 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player21.setPosition(85, 27)
    player2Pieces.push(player21)
    player22 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player22.setPosition(105, 27)
    player2Pieces.push(player22)
    player23 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player23.setPosition(125, 27)
    player2Pieces.push(player23)
    player24 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player24.setPosition(145, 27)
    player2Pieces.push(player24)
    player25 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player25.setPosition(75, 37)
    player2Pieces.push(player25)
    player26 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player26.setPosition(95, 37)
    player2Pieces.push(player26)
    player27 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player27.setPosition(115, 37)
    player2Pieces.push(player27)
    player28 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player28.setPosition(135, 37)
    player2Pieces.push(player28)
    player29 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player29.setPosition(85, 47)
    player2Pieces.push(player29)
    player210 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player210.setPosition(105, 47)
    player2Pieces.push(player210)
    player211 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player211.setPosition(125, 47)
    player2Pieces.push(player211)
    player212 = sprites.create(assets.image`player2`, SpriteKind.Player)
    player212.setPosition(145, 47)
    player2Pieces.push(player212)
}
function setUpPlayer1 () {
    player1Pieces = []
    player11 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player11.setPosition(75, 97)
    player1Pieces.push(player11)
    player12 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player12.setPosition(95, 97)
    player1Pieces.push(player12)
    player13 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player13.setPosition(115, 97)
    player1Pieces.push(player13)
    player14 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player14.setPosition(135, 97)
    player1Pieces.push(player14)
    player15 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player15.setPosition(85, 87)
    player1Pieces.push(player15)
    player16 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player16.setPosition(105, 87)
    player1Pieces.push(player16)
    player17 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player17.setPosition(125, 87)
    player1Pieces.push(player17)
    player18 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player18.setPosition(145, 87)
    player1Pieces.push(player18)
    player19 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player19.setPosition(75, 77)
    player1Pieces.push(player19)
    player110 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player110.setPosition(95, 77)
    player1Pieces.push(player110)
    player111 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player111.setPosition(115, 77)
    player1Pieces.push(player111)
    player112 = sprites.create(assets.image`player1`, SpriteKind.Player)
    player112.setPosition(135, 77)
    player1Pieces.push(player112)
}
// move token down and to the left
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    currentPiece.x += -10
    currentPiece.y += 10
    move = 4
})
// move token up and to the right
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    currentPiece.x += 10
    currentPiece.y += -10
    move = 2
})
function delete1 () {
    for (let value of player1Pieces) {
        if (currentPiece.x == value.x && currentPiece.y == value.y) {
            value.setPosition(deleted1, 37)
            info.player1.changeLifeBy(-1)
            deleted1 += 5
        } else if (currentPiece.x == value.x && currentPiece.y == value.y) {
            value.setPosition(deleted1, 37)
            info.player1.changeLifeBy(-1)
            deleted1 += 5
        } else if (currentPiece.x == value.x && currentPiece.y == value.y) {
            value.setPosition(deleted1, 37)
            info.player1.changeLifeBy(-1)
            deleted1 += 5
        } else if (currentPiece.x == value.x && currentPiece.y == value.y) {
            value.setPosition(deleted1, 37)
            info.player1.changeLifeBy(-1)
            deleted1 += 5
        }
    }
}
// move token down and to the right
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    currentPiece.x += 10
    currentPiece.y += 10
    move = 3
})
info.player1.onLifeZero(function () {
    game.splash("Purple Wins!", "Press A to reset")
    resetSprites()
    start()
})
info.player2.onLifeZero(function () {
    game.splash("White Wins!", "Press A to reset")
    resetSprites()
    start()
})
function delete2 () {
    for (let value of player2Pieces) {
        if (currentPiece.x == value.x && currentPiece.y == value.y) {
            value.setPosition(deleted2, 87)
            info.player1.changeLifeBy(-1)
            deleted2 += 5
        } else if (currentPiece.x == value.x && currentPiece.y == value.y) {
            value.setPosition(deleted2, 87)
            info.player1.changeLifeBy(-1)
            deleted2 += 5
        } else if (currentPiece.x == value.x && currentPiece.y == value.y) {
            value.setPosition(deleted2, 87)
            info.player1.changeLifeBy(-1)
            deleted2 += 5
        } else if (currentPiece.x == value.x && currentPiece.y == value.y) {
            value.setPosition(deleted2, 87)
            info.player1.changeLifeBy(-1)
            deleted2 += 5
        }
    }
}
function start () {
    scene.setBackgroundImage(assets.image`checkerBoard`)
    setUpPlayer1()
    setUpPlayer2()
    playerIndex = 0
    buttonBIndex = 0
    team = 1
    deleted1 = 10
    deleted2 = 10
    info.player1.setLife(12)
    info.player2.setLife(12)
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
    } else if (playerIndex >= 12) {
        playerIndex = 0
    }
    team = team * -1
}
let buttonBIndex = 0
let deleted2 = 0
let deleted1 = 0
let playerIndex = 0
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
let blocked = false
let move = 0
let player2Pieces: Sprite[] = []
let currentPiece: Sprite = null
let player1Pieces: Sprite[] = []
let team = 0
start()
forever(function () {
    pieceSelect()
    blinkAction()
})
