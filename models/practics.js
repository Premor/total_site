exports.id = 'practics';
exports.version = '1.00';

exports.install = (options) => {};

exports.create = (user) => {
    // NoSQL embedded database
    NOSQL('practics').insert(user);
};

exports.load = (id, callback) => {
    // NoSQL embedded database
    NOSQL('practics').one().where('id', id).callback(callback);
}

exports.save = (practics, callback) => {
    const upd = {id:1,practics:practics};
    NOSQL('practics').update(upd).callback(callback);
}