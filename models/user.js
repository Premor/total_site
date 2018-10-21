exports.id = 'user';
exports.version = '1.00';

exports.install = (options) => {};

exports.create = (user) => {
    // NoSQL embedded database
    NOSQL('users').insert(user);
};

exports.load = (id, callback) => {
    // NoSQL embedded database
    NOSQL('users').one().where('id', id).callback(callback);
}

exports.find_u = (login, psw, callback) => {
    NOSQL('users').one().where('login', login).where('password', psw).callback(callback);
}