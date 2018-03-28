import React, { Component } from 'react';
import './SecondBlock.css';
import glasses from './img/glasses.png'
import plant from './img/plant.png'
class SecondBlock extends Component {
    render() {
      return (
        <div className = "container-fluid secondBlock">
          <div className="row">
            <div className="col-md-12">
                <img className = "glasses" src={glasses} />
                <img className = "plant" src={plant} />
                <div className = "textBlock">
                    <div className = "textHeader">
                        О нас
                    </div>
                    <br />
                    <div className = "textMain">
                        Новая модель организационной деятельности говорит о возможностях системы обучения кадров, соответствующей насущным потребностям. Предприниматели в сети интернет, вне зависимости от их уровня, должны быть объективно рассмотрены соответствующими инстанциями. Таким образом, повышение уровня гражданского сознания требует анализа модели развития.
                    </div>
                </div>
            </div>
          </div>
        </div>
      );
    }
  } 
  
  export default SecondBlock;