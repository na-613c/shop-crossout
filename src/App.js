import React, { useEffect, useState } from 'react'
import './App.css';
import { query } from './api'
import Element from './Element'
import TweenOne from 'rc-tween-one';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';
import { Row, Col } from 'antd';

TweenOne.plugins.push(Children);

function App() {
  const [items, setItems] = useState([]);

  let sum_min = items.reduce((acc, cur) => +cur.min * cur.count + acc, 0.00)
  let sum_max = items.reduce((acc, cur) => +cur.sell * cur.count + acc, 0.00)

  useEffect(() => {
    Promise.all([query(372), query(1123), query(1124), query(47), query(33), query(560), query(1315), query(1058)])
      .then(res => setItems(res.map(i => ({ ...i, count: 0 }))))
      .then(_ => sum_min = items.reduce((acc, cur) => +cur.min * cur.count + acc, 0.00))
      .then(_ => sum_max = items.reduce((acc, cur) => +cur.sell * cur.count + acc, 0.00))

    //372 gorbun
    //1123 soratnik
    //1124 nova
    //47 mamont
    //33 zhnets
    //560 zagrad
    //1315 pobornik
    //1058 bigrams
  }, [])

  const add = (_name) => {
    setItems((items => items.map((i) => {
      return _name === i.name ? { ...i, count: i.count + 1 } : i
    })))
  }

  const remove = (_name) => {
    setItems((items => items.map((i) => {
      return _name === i.name ? { ...i, count: i.count > 0 ? i.count - 1 : 0 } : i
    })))
  }

  const animation = (sum) => {
    return {
      Children: {
        value: sum,
        floatLength: 2,
        formatMoney: true,
      },
      duration: 1000,
    }
  }


  return (
    <div className="App">
      <Row justify="space-around" align="top">
        <Col span={8}>
          <span style={{ fontSize: 56 }}>Цена покупки</span>
          <TweenOne
            animation={animation(sum_max)}
            style={{ fontSize: 56, marginBottom: 12 }}
          >
            0
          </TweenOne>
        </Col>

        <Col span={8}>
          <span style={{ fontSize: 56 }}>Мин цена</span>
          <TweenOne
            animation={animation(sum_min)}
            style={{ fontSize: 56, marginBottom: 12 }}
          >
            0
          </TweenOne>
        </Col>
      </Row>

      <Element items={[...items]} add={add} remove={remove} />
    </div>
  );
}

export default App;
