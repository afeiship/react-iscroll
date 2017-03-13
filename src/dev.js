import React, {Component, PropTypes} from 'react';
import iScroll from 'iscroll/build/iscroll-probe';
import ReactIScroll from '../src/main';
import './dev.scss';

class Simple extends Component {

  constructor(props) {
    super(props);

    this.simpleList = [{
      id: 1,
      name: '苹果'
    }, {
      id: 2,
      name: '苹果'
    }, {
      id: 3,
      name: '苹果'
    }, {
      id: 4,
      name: '苹果'
    }, {
      id: 5,
      name: '苹果'
    },{
      id: 8,
      name: '苹果'
    },  {
      id: 4,
      name: '苹果'
    }, {
      id: 5,
      name: '苹果'
    }, {
      id: 6,
      name: '苹果'
    }, {
      id: 7,
      name: '苹果'
    }, {
      id: 8,
      name: '苹果'
    }, {
      id: 9,
      name: '苹果'
    }, {
      id: 10,
      name: '苹果'
    }, {
      id: 11,
      name: '苹果'
    }, {
      id: 12,
      name: '苹果'
    }, {
      id: 13,
      name: '苹果'
    }, {
      id: 14,
      name: '苹果'
    }];
  }

  render() {

    return (
      <div>
        <ReactIScroll iScroll={iScroll} className="example">
          <input type="datetime-local" id=""/>
          <textarea className="cls1" cols="30" rows="10" value={
            `有全国政协委员不解：当红年轻演员的收入，居然超过了一个几百人的中型企业。在全国政协文艺界别，不少委员也针对一些年轻演员收入虚高，艺德差的现象进行了讨论。有政协委员表示，为了票房和宣传，不得不加入这些年轻偶像，而扭转这一现象，还是要靠市场和舆论引导。
委员批部分偶像缺艺德
针对目前电视节目中真人秀泛滥，一位不愿具名的全国政协委员表达不满：一帮演员在节目中打打闹闹，挣的钱却超过他的一个几百人的中型企业。这位委员还认为，一些真人秀节目男女演员打打闹闹，有宣扬性暗示、性骚扰的嫌疑。
而在日前的全国政协文艺界别分组讨论时，全国政协委员宋丹丹、朱军也指出，当下部分年轻演员浮躁虚荣、相互攀比、缺乏艺德的问题，并对很多年轻人都想当网红的现象，表达了深度忧虑。`
          } />
          <ul>
            {this.simpleList.map((item,index) =>
              <li onClick={()=>{
                alert(1234);
                }} key={index}>{item.name}</li>
            )}
          </ul>
        </ReactIScroll>
      </div>
    );
  }
}


ReactDOM.render(
  <Simple />,
  document.getElementById('app')
);


