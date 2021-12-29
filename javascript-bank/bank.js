/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function openAccount(holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) {
    var newAcc = new Account(this.nextAccountNumber, holder);
    newAcc.deposit(balance);
    this.accounts.push(newAcc);
    this.nextAccountNumber++;
  } else if (balance <= 0) {
    return null;
  } else return null;
  return this.nextAccountNumber - 1;

};

Bank.prototype.getAccount = function getAccount(number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  } return null;

};

Bank.prototype.getTotalAssets = function getTotalAssets() {
  var sum = 0;
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].getBalance()) {
      sum += this.accounts[i].getBalance();
    }

  } return sum;
};
