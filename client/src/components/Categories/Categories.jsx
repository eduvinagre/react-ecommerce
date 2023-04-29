import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="mulher preta de chapeu posando para a foto com sapato de salto"
          />
          <button>
            <Link className="link" to="/products/1">
              Promoção
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="mulher branca com xale preto"
          />
          <button>
            <Link className="link" to="/products/1">
              Feminino
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="homem preto agachado com um skate nas mãos"
          />
          <button>
            <Link className="link" to="/products/1">
              Nova Coleção
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="homem branco com óculos escuros"
              />
              <button>
                <Link className="link" to="/products/1">
                  Masculino
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="mulher preta tapando os olhos com a mão direita"
              />
              <button>
                <Link className="link" to="/products/1">
                  Acessórios
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="mulher preta tapando os olhos com a mão direita"
          />
          <button>
            <Link className="link" to="/products/1">
              Calçados
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
