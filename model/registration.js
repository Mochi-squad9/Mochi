import mongoose from 'mongoose';

//Modelagem dos dados no DB
let schema = mongoose.Schema({
    guardian_name: {
        type: String,
        require: true,
    },
    guardian_lastname: {
        type: String,
        require: true,
    },
    cpf: {
        type: String,
        require: true,
    },
    phone_number: {
        type: String,
        require: true,
    },
    lastModified: {
        type: Date,
        default: Date.now,
    },
    donation: {
        type: Boolean,
        default: false,
    },
    cep: {
        type: String,
        require: true,
    },
    street: {
        type: String,
        require: true,
    },
    number: {
        type: String,
        require: true,
    },
    city: {
        type: String,
        require: true,
    },
    city_id: {
        type: String,
        require: true,
    },
    state: {
        type: String,
        require: true,
    },
    std_name: {
        type: String,
        require: true,
    },
    std_lastname: {
        type: String,
        require: false,
    },
    std_age: {
        type: String,
        require: false,
    },
    std_grade: {
        type: String,
        require: false,
    },
    school_name: {
        type: String,
        require: true,
    },
    school_id: {
        type: String,
        require: true,
    },
    school_address: {
        type: String,
        require: false,
    },
    school_add_number: {
        type: String,
        require: false,
    },
    school_cep: {
        type: String,
        require: false,
    },
    products_list: [{
        type: String,
        require: true,
    }]
});
// Criando o modelo
const registration = mongoose.model('mochi', schema, 'mochi');

export default registration;
