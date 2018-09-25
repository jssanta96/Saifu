const db = require('../config/db.config.js');
const Account = db.accounts;
const accountCtrl = {};

accountCtrl.create = (req, res) => {
	Account.create(req.body).then(account => {
		res.json(account);
	}).catch(err => {
		console.log(err);
		res.status(500).json({
			msg: "error", details: err
		});
	});
};

accountCtrl.findAll = (req, res) => {
	Account.findAll().then(accounts => {
		res.json(accounts);
	}).catch(err => {
		console.log(err);
		res.status(500).json({
			msg: "error", details: err
		});
	});
};

accountCtrl.findById = (req, res) => {	
	Account.findById(req.params.id).then(account => {
			res.json(account);
		}).catch(err => {
			console.log(err);
			res.status(500).json({
				msg: "error", details: err
		});
	});
};
 
accountCtrl.update = (req, res) => {
	const id = req.params.id;
	Account.update( req.body, { 
		where: {id: id} }).then(() => {
			res.status(200).json({ 
				mgs: "Actualizacion exitosa" 
			});
		}).catch(err => {
			console.log(err);
			res.status(500).json({
				msg: "error", details: err
		});
	});
};

accountCtrl.delete = (req, res) => {
	const id = req.params.id;
	Account.destroy({
		where: { id: id }
		}).then(() => {
			res.status(200).json({ 
				msg: 'Cuenta eliminada con exito' 
			});
		}).catch(err => {
			console.log(err);
			res.status(500).json({
				msg: "error", details: err
		});
	});
};

module.exports = accountCtrl;