// blockchain definition

var u = require('monoeci-util')

// definition of the genesis block's header
var genesisHeader = {
  version: 1,
  prevHash: u.nullHash,
  merkleRoot: u.toHash('369cd6caea22707ca0138a7ec3bda719bdfe0b0a107312c7c873b5073e1b99aa'),
  time: 1495455495,
  bits: 0x1e0ffff0,
  nonce: 606699
}

// selected block headers for verifying initial sync
var checkpoints = [
  {
    height: 100000,
    header: {
      version: 3,
      prevHash: u.toHash('00000000000030e3684b9d9b286c7b3448b8abb9a74e2872f7a76d423d661142'),
      merkleRoot: u.toHash('6360033c89427f0a767c7d9e10753d9b6aff51ee2d779d7a3e9ea568de25c6d3'),
      time: 1512330429,
      bits: 0x1a3b9734,
      nonce: 2013304195
    }
  }
]

// settings passed to Blockchain objects
// (see https://github.com/mappum/blockchain-spv)
module.exports = {
  genesisHeader,
  checkpoints
}
