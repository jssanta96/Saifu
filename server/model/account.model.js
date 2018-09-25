module.exports = (sequelize, Sequelize) => {
	const Account = sequelize.define('account', {
	  nombre: {
			type: Sequelize.STRING
	  },
	  valor: {
			type: Sequelize.INTEGER
	  },
	  tipo: {
		  type: Sequelize.STRING
	  }
	});
	return Account;
}