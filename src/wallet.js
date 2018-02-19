module.exports = {
  messagePrefix: '\x18Monoeci Signed Message:\n',
  bip32: {
    public: 0x0488B21E,
    private: 0x0488ADE4
  },
  pubKeyHash: 0x32,
  scriptHash: 0x49,
  wif: 0x4D,
  dustThreshold: 5460 // https://github.com/yoyae/bitcore-lib-monoeci/blob/master/lib/transaction/transaction.js#L66
}
