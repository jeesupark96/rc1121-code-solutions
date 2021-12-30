/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function deposit(amount) {

  if (amount > 0 && Number.isInteger(amount)) {
    var newAmount = new Transaction('deposit', amount);
    this.transactions.push(newAmount);
    return true;

  } else if (amount <= 0) {
    return false;
  } else return Number.isInteger(amount);

};

Account.prototype.withdraw = function withdraw(amount) {
  if (amount > 0 && Number.isInteger(amount)) {
    var newAmount = new Transaction('withdrawal', amount);
    this.transactions.push(newAmount);
    return true;

  } else if (amount <= 0) {
    return false;
  } else return Number.isInteger(amount);
};

Account.prototype.getBalance = function getBalance() {
  var bank = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      bank += this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      bank -= this.transactions[i].amount;
    }
  } return bank;
};
