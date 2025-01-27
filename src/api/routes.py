"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import create_access_token
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_bcrypt import Bcrypt

api = Blueprint('api', __name__)
bcrypt = Bcrypt()

# Allow CORS requests to this API
CORS(api)


@api.route('/register', methods=['POST'])
def register_user():
    data = request.get_json()

    if User.query.filter_by(email=data['email']).first():
        return jsonify({"message": "El correo electrónico ya está en uso"}), 400

    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(
        name=data['name'],
        email=data['email'],
        password=hashed_password
        )

    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "Usuario registrado exitosamente"}), 201
    


@api.route('/login', methods=['POST'])
def login_user():
    user_data = request.get_json()
    user = User.query.filter_by(email=user_data['email']).first()
    if user is None:
        return jsonify({"msg": "Usuario no encontrado"}), 404
    if bcrypt.check_password_hash(user.password, user_data['password']):
        token = create_access_token(identity=str(user.id), additional_claims={"name": user.name})

        return jsonify({"msg": "Login correcto", "token": token, "user": user.serialize()}), 200
    
    return jsonify({"msg": "Contraseña incorrecta"}), 401



@api.route('/')
def sitemap():
    return generate_sitemap(api)

# Manejo de errores
@api.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code


